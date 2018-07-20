/**
 *  This file is subject to the terms and conditions defined in the file
 *  'LICENCE.md', which is part of this source code package.
 *  @author Ralf Mueller
 */

'use strict';

// Requires
var _ = require('lodash');
var xml = require('xml');
var path = require('path');
var fs = require('fs');
var timehelpers = require('./timehelpers');
var mkdirp = require('mkdirp');
// Implementation
var JUNITREPORTEROPTIOPTIONS = {
    onComplete: function() {},
    savePath: './reports/'
};
var TESTSUITEDESCRIPTOR = {
    id: undefined,
    status: '',
    description: 'Unknown',
    fullName: 'Unknown'
};

var TESTCASEDESCRIPTOR = {
    id: undefined,
    status: '',
    description: 'Unknown',
    fullName: 'Unknown',
    failedExpectations: []
};



function escapeInvalidXmlCharsAndTrim(str) {
    return str.replace(/\&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/\>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&apos;')
        .replace(/^\s+/, '')
        .replace(/\s+$/, '');
}

function Failure(message, stacktrace) {
    this.message = message;
    this.stacktrace = stacktrace;
}

Failure.prototype.GetReport = function() {
    var attrib = {
        message: escapeInvalidXmlCharsAndTrim(this.message)
    };

    var report = {
        _attr: attrib,
        _cdata: this.stacktrace
    };

    return report;
};

function TestCase(descriptor, suiteFullName) {
    if (!(this instanceof TestCase)) {
        return new TestCase(descriptor);
    }

    if (descriptor === undefined) {
        descriptor = {};
    }
    _.defaults(descriptor, TESTCASEDESCRIPTOR);

    this.descriptor = descriptor;
    this.failures = [];
    this.startTime = timehelpers.now();
    this.finishTime = this.startTime;
    this.suiteFullName = suiteFullName;
}

TestCase.prototype.GetId = function() {
    return this.descriptor.id;
};

TestCase.prototype.OnFinished = function(descriptor) {
    var self = this;
    this.descriptor.failedExpectations = descriptor.failedExpectations;
    this.descriptor.status = descriptor.status;
    this.finishTime = timehelpers.now();
    _.forEach(descriptor.failedExpectations, function(expectation) {
        var failure = new Failure(expectation.message, expectation.stack);
        self.failures.push(failure);
    });
};

TestCase.prototype.DidFail = function() {
    return this.failures.length === 0 ? false : true;
};

TestCase.prototype.WasSkipped = function() {
    return this.descriptor.status === 'pending' ? true : false;
};

TestCase.prototype.GetReport = function() {
    var attrib = {
        classname: escapeInvalidXmlCharsAndTrim(this.suiteFullName.replace(/\s+/g, '.')),
        name: this.descriptor.description,
        time: timehelpers.timeDeltaInSek(this.finishTime, this.startTime)
    };

    var report = [];
    report.push({
        _attr: attrib
    });

    function aggregateFailedExpectations(expectation) {
        report.push({
            failure: expectation.GetReport()
        });
    }
    _.forEach(this.failures, aggregateFailedExpectations);
    return report;
};

function TestSuite(descriptor, parentSuite) {
    if (!(this instanceof TestSuite)) {
        return new TestSuite(descriptor);
    }
    if (parentSuite === undefined) {
        parentSuite = null;
    }
    if (descriptor === undefined) {
        descriptor = {};
    }
    _.defaults(descriptor, TESTSUITEDESCRIPTOR);

    this.descriptor = descriptor;
    this.parentSuite = parentSuite;
    this.testSuites = [];
    this.startTime = timehelpers.now();
    this.finishTime = this.startTime;
    this.testCases = [];
    this.numberOfFailures = 0;
    this.numberOfSkipped = 0;
}

TestSuite.prototype.GetId = function() {
    return this.descriptor.id;
};

TestSuite.prototype.GetParent = function() {
    return this.parentSuite;
};

TestSuite.prototype.AddTestSuite = function(testsuite) {
    this.testSuites.push(testsuite);
};

TestSuite.prototype.AddTestCase = function(testCase) {
    this.testCases.push(testCase);
};

TestSuite.prototype.IncreaseFailureCounter = function() {
    this.numberOfFailures = this.numberOfFailures + 1;
};

TestSuite.prototype.IncreaseSkippedCounter = function() {
    this.numberOfSkipped = this.numberOfSkipped + 1;
};

TestSuite.prototype.GetFullName = function() {
    return this.descriptor.fullName;
};

TestSuite.prototype.GetReport = function() {
    var attrib = {
        name: escapeInvalidXmlCharsAndTrim(this.descriptor.fullName.replace(/\s+/g, '.')),
        disabled: 0,
        failures: this.numberOfFailures,
        id: this.descriptor.id,
        skipped: this.numberOfSkipped,
        tests: this.testCases.length - this.numberOfSkipped,
        time: timehelpers.timeDeltaInSek(this.finishTime, this.startTime),
        timestamp: new Date(this.startTime).toISOString()
    };

    var report = [];
    report.push({
        _attr: attrib
    });

    function reportTestcase(testCase) {
        report.push({
            testcase: testCase.GetReport()
        });
    }
    _.forEach(this.testCases, reportTestcase);

    function aggregate(suite) {
        report.push({
            testsuite: suite.GetReport()
        });
    }
    _.forEach(this.testSuites, aggregate);
    return report;
};

TestSuite.prototype.SetFinishTime = function(time) {
    this.finishTime = time;
};


function registerEvent(self, reportDispatcher, event, listener) {
    var eventDescriptor = {
        event: event,
        listener: listener
    };

    self.registeredEvents.push(eventDescriptor);

    reportDispatcher.on(event, listener);
}

function configureEvents(self, reportDispatcher) {
    function onJasmineStarted() {
        self.rootSuite = new TestSuite({}, self.currentSuite);
        self.currentSuite = self.rootSuite;
        //console.log('Junit Started');
    }

    function onJasmineDone() {
        var result = {
            specCount: self.specCount,
            failureCount: self.failureCount,
            elapsedTime: timehelpers.timeDeltaInSek(self.now(), self.startTime),
            pendingCount: self.pendingCount
        };


        function writeSuite(suite) {
            var testSuites = [];
            testSuites.push({
                testsuite: suite.GetReport()
            });
            var fileName = path.join(self.savePath, 'TEST-' + suite.descriptor.fullName.replace(/\s+/g, '_') + '.xml');
            fs.writeFileSync(fileName, xml({
                testsuites: testSuites
            }, true));
        }
        if (!fs.existsSync(self.savePath)) {
            mkdirp.sync(self.savePath, '0755');
        }
        _.forEach(self.rootSuite.testSuites, writeSuite);
        //console.log('Junit Stopped');
        self.onComplete(result);
    }

    function onSuiteStarted(result) {
        var suite = new TestSuite(result, self.currentSuite);
        self.currentSuite.AddTestSuite(suite);
        self.currentSuite = suite;
    }

    function onSuiteDone( result ) {
        //deal with missing onSpecStarted for pending specs
        if (null === self.currentSuite || result.id !== self.currentSuite.GetId()) {
            onSuiteStarted(result);
        }
        self.currentSuite.SetFinishTime(timehelpers.now());
        self.currentSuite = self.currentSuite.GetParent();
    }

    function onSpecStarted(result) {
        var testCase = new TestCase(result, self.currentSuite.GetFullName());
        self.currentSuite.AddTestCase(testCase);
        self.currentTestCase = testCase;
    }

    function onSpecDone(result) {
        //deal with missing onSpecStarted for pending specs
        if (null === self.currentTestCase || result.id !== self.currentTestCase.GetId()) {
            onSpecStarted(result);
        }
        self.currentTestCase.OnFinished(result);
        if (true === self.currentTestCase.DidFail()) {
            self.currentSuite.IncreaseFailureCounter();
        } else if (true === self.currentTestCase.WasSkipped()) {
            self.currentSuite.IncreaseSkippedCounter();
        }
        self.currentTestCase = null;
    }


    registerEvent(self, reportDispatcher, 'jasmineStarted', onJasmineStarted);
    registerEvent(self, reportDispatcher, 'jasmineDone', onJasmineDone);
    registerEvent(self, reportDispatcher, 'suiteStarted', onSuiteStarted);
    registerEvent(self, reportDispatcher, 'suiteDone', onSuiteDone);
    registerEvent(self, reportDispatcher, 'specStarted', onSpecStarted);
    registerEvent(self, reportDispatcher, 'specDone', onSpecDone);
}

function JUnitReporter(options) {
    if (!(this instanceof JUnitReporter)) {
        return new JUnitReporter(options);
    }

    if (options === undefined) {
        options = {};
    }
    _.defaults(options, JUNITREPORTEROPTIOPTIONS);

    this.onComplete = options.onComplete;
    this.savePath = path.resolve(options.savePath);
    this.now = timehelpers.now;
    this.startTime = 0;
    this.specCount = 0;
    this.failureCount = 0;
    this.pendingCount = 0;
    this.failedSpecs = [];
    this.registeredEvents = [];
    this.pendingSpecs = [];


    this.currentSuite = null;
    this.currentTestCase = null;
    this.rootSuite = null;
}

JUnitReporter.prototype.OnRegister = function(reportDispatcher) {
    configureEvents(this, reportDispatcher);
};

JUnitReporter.prototype.OnUnregister = function(reportDispatcher) {
    function unregister(eventDescriptor) {
        reportDispatcher.off(eventDescriptor.event, eventDescriptor.listener);
    }

    _(this.registeredEvents).each(unregister);
};
// Module exports
module.exports.JUnitReporter = JUnitReporter;