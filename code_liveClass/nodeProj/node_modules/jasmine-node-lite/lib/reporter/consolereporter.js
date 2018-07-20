/**
 *  This file is subject to the terms and conditions defined in the file
 *  'LICENCE.md', which is part of this source code package.
 *  @author Ralf Mueller
 */

'use strict';

// Requires
var util = require('util');
var _ = require('lodash');

var out = {
    print: function(str) {
        util.print(str);
    },
    println: function(str) {
        util.print(str + '\n');
    }
};

function OutputFormat(colorCode, text) {
    if (!(this instanceof OutputFormat)) {
        return new OutputFormat(colorCode, text);
    }
    if (text === undefined) {
        this.text = '';
    } else {
        this.text = text;
    }

    this.colorCode = colorCode;
}

// Implementation
var CONSOLEREPORTEROPTIONS = {
    out: out,
    color: true,
    colorDefinition: {
        ok: new OutputFormat('\u001b[32m'), // green
        error: new OutputFormat('\u001b[31m', '[failure] '), // red
        warning: new OutputFormat('\u001b[33m', '[warning] '), // yellow
        info: new OutputFormat('\u001b[34m'), //blue
        none: new OutputFormat('\u001b[0m') // none
    },
    onComplete: function() {},
    stackTrace: true,
    verbose: true
};

var INDENT = '    ';

function getIndent(index) {
    var indent = '';
    for (var i = 0; i < index; i++) {
        indent += INDENT;
    }
    return indent;
}

function repeat(thing, times) {
    var arr = [];
    for (var i = 0; i < times; i++) {
        arr.push(thing);
    }
    return arr;
}

function stackIndent(str, spaces) {
    var lines = (str || '').split('\n');
    var newArr = [];
    for (var i = 0; i < lines.length; i++) {
        newArr.push(repeat(' ', spaces).join('') + lines[i]);
    }
    return newArr.join('\n');
}

function registerEvent(self, reportDispatcher, event, listener) {
    var eventDescriptor = {
        event: event,
        listener: listener
    };

    self.registeredEvents.push(eventDescriptor);

    reportDispatcher.on(event, listener);
}

function configureEvents(self, reportDispatcher) {
    function colored(displayType, indent, str) {

        return self.showColors ? (getIndent(indent) + displayType.colorCode + str + self.colorDefinition.none.colorCode) : (getIndent(indent) + displayType.text + str);
    }

    function onJasmineStarted() {
        self.startTime = self.now();
        self.specCount = 0;
        self.failureCount = 0;
        self.pendingCount = 0;
        self.failedSpecs = [];
        self.pendingSpecs = [];
        self.indent = 0;
    }


    function reportFailures() {
        if (self.failureCount > 0) {
            self.println('');
            self.println('Failures:');
        }
        for (var i = 0; i < self.failedSpecs.length; i++) {
            var failedSpec = self.failedSpecs[i];
            self.println('  ' + (i + 1) + ') ' + failedSpec.fullName);
            for (var j = 0; j < failedSpec.failedExpectations.length; j++) {
                var failedExpectation = failedSpec.failedExpectations[j];
                self.println('   Message:');
                self.println(colored(self.colorDefinition.error, 1, failedExpectation.message));
                if (self.stackTrace) {
                    self.println('   Stacktrace:');
                    self.print(stackIndent(failedExpectation.stack), 4);
                }
                self.println('');
                self.println('');
            }
        }
    }

    function reportPending() {
        if (self.pendingCount > 0) {
            self.println('');
            self.println('Pending:');
        }

        for (var i = 0; i < self.pendingSpecs.length; i++) {
            var pendingSpec = self.pendingSpecs[i];
            self.println('  ' + (i + 1) + ') ' + pendingSpec.fullName);
        }
    }

    function onJasmineDone() {
        reportPending();
        reportFailures();

        var result = {
            specCount: self.specCount,
            failureCount: self.failureCount,
            elapsedTime: self.now() - self.startTime,
            pendingCount: self.pendingCount
        };

        var message = '\n' + self.specCount + ' spec' + (self.specCount === 1 ? '' : 's') +
            ', ' + self.failureCount + ' failure' + ((self.failureCount === 1) ? '' : 's') +
            ', ' + self.pendingCount + ' pending\n' + 'Finished in ' + result.elapsedTime / 1000 + ' seconds\n';
        self.println(colored(self.failureCount === 0 ? self.colorDefinition.ok : self.colorDefinition.error, 0 /*indent*/ , message));

        self.onComplete(result);
    }

    function onSuiteStarted(result) {
        if (self.verbose) {
            self.println(colored(self.colorDefinition.info, self.indent, result.description));
        }
        self.indent++;
    }

    function onSuiteDone( /*result*/ ) {
        self.indent--;
    }

    function onSpecStarted( /*result*/ ) {
        self.indent++;
    }

    function onSpecDone(result) {
        self.specCount++;
        self.indent--;
        if (result.status === 'pending') {
            self.pendingCount++;
            self.pendingSpecs.push(result);
            if (self.verbose) {
                self.println(colored(self.colorDefinition.warning, self.indent, result.description));
            } else {
                self.print('*');
            }
        }

        if (result.status === 'passed') {
            if (self.verbose) {
                self.println(colored(self.colorDefinition.ok, self.indent, result.description));
            } else {
                self.print('.');
            }
        }

        if (result.status === 'failed') {
            self.failureCount++;
            self.failedSpecs.push(result);
            if (self.verbose) {
                self.println(colored(self.colorDefinition.error, self.indent, result.description));
            } else {
                self.print('F');
            }
        }

    }


    registerEvent(self, reportDispatcher, 'jasmineStarted', onJasmineStarted);
    registerEvent(self, reportDispatcher, 'jasmineDone', onJasmineDone);
    registerEvent(self, reportDispatcher, 'suiteStarted', onSuiteStarted);
    registerEvent(self, reportDispatcher, 'suiteDone', onSuiteDone);
    registerEvent(self, reportDispatcher, 'specStarted', onSpecStarted);
    registerEvent(self, reportDispatcher, 'specDone', onSpecDone);
}

function ConsoleReporter(options) {
    if (!(this instanceof ConsoleReporter)) {
        return new ConsoleReporter(options);
    }

    function now() {
        return new Date().getTime();
    }
    if (options === undefined) {
        options = {};
    }
    _.defaults(options, CONSOLEREPORTEROPTIONS);

    this.print = options.out.print;
    this.println = options.out.println;
    this.showColors = options.color;
    this.onComplete = options.onComplete;
    this.verbose = options.verbose;
    this.colorDefinition = options.colorDefinition;
    this.now = now;
    this.startTime = 0;
    this.specCount = 0;
    this.failureCount = 0;
    this.pendingCount = 0;
    this.failedSpecs = [];
    this.registeredEvents = [];
    this.pendingSpecs = [];
    this.indent = 0;
    this.stackTrace = options.stackTrace;
}

ConsoleReporter.prototype.OnRegister = function(reportDispatcher) {
    configureEvents(this, reportDispatcher);
};

ConsoleReporter.prototype.OnUnregister = function(reportDispatcher) {
    function unregister(eventDescriptor) {
        reportDispatcher.off(eventDescriptor.event, eventDescriptor.listener);
    }

    _(this.registeredEvents).each(unregister);
};
// Module exports

module.exports.ConsoleReporter = ConsoleReporter;
module.exports.OutputFormat = OutputFormat;