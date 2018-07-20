/**
 *  This file is subject to the terms and conditions defined in the file
 *  'LICENCE.md', which is part of this source code package.
 *  @author Ralf Mueller
 */

'use strict';

// Requires

require('coffee-script');
var jasmineoptions = require('./jasmineoptions')({});
var jasmineGlobals = require(jasmineoptions.getJasminePath());
var _ = require('lodash');
var path = require('path');
var reportDispatcher = require('./reporter/reportdispatcher');

var jasmine = jasmineGlobals.jasmine;

var jasmineEnv = {};

var _reportDispatcher = new reportDispatcher.ReportDispatcher({});

function registerJasmineInterface(env) {
    jasmineEnv = env;

    var jasmineInterface = {
        describe: function(description, specDefinitions) {
            return jasmineEnv.describe(description, specDefinitions);
        },

        xdescribe: function(description, specDefinitions) {
            return jasmineEnv.xdescribe(description, specDefinitions);
        },

        it: function(desc, func) {
            return jasmineEnv.it(desc, func);
        },

        xit: function(desc, func) {
            return jasmineEnv.xit(desc, func);
        },

        beforeEach: function(beforeEachFunction) {
            return jasmineEnv.beforeEach(beforeEachFunction);
        },

        afterEach: function(afterEachFunction) {
            return jasmineEnv.afterEach(afterEachFunction);
        },

        expect: function(actual) {
            return jasmineEnv.expect(actual);
        },

        addMatchers: function(matchers) {
            return jasmineEnv.addMatchers(matchers);
        },

        spyOn: function(obj, methodName) {
            return jasmineEnv.spyOn(obj, methodName);
        },

        clock: jasmineEnv.clock,
        setTimeout: jasmineEnv.clock.setTimeout,
        clearTimeout: jasmineEnv.clock.clearTimeout,
        setInterval: jasmineEnv.clock.setInterval,
        clearInterval: jasmineEnv.clock.clearInterval

    };

    for (var k in jasmineInterface) {
        global[k] = jasmineInterface[k];
    }
    // register the report dispatcher
    jasmineEnv.addReporter(_reportDispatcher);
}

// Bootstrap a Jasmine environment for the first run 
registerJasmineInterface(jasmine.getEnv());

var JASMINEOPTIONS = {
    specs: []
};

/**
 * Executes the Jasmine specs
 * @param  options
 */
jasmine.executeSpecs = function(options) {
    function addSpec(spec) {
        var specPath = path.resolve(spec);
        try {
            require(specPath);
            // delete from require cache so we can freshly require it again if we need
            delete require.cache[require.resolve(specPath)];
        } catch (error) {
            console.log('Not a valid file: ' + specPath);
        }
    }
    _.defaults(options, JASMINEOPTIONS);

    // sort to have deterministic spec order

    function comperator(a, b) {
        return a.localeCompare(b);
    }
    options.specs.sort(comperator);
    _.each(options.specs, addSpec);
    jasmineEnv.execute();
    // register a new environment for the next set of tests
    registerJasmineInterface(new jasmine.Env({}));
};

function registerReporter(reporter) {
    reporter.OnRegister(_reportDispatcher);
}

function unregisterReporter(reporter) {
    reporter.OnUnregister(_reportDispatcher);
}

// Module exports
module.exports.executeSpecs = jasmine.executeSpecs;
module.exports.registerReporter = registerReporter;
module.exports.unregisterReporter = unregisterReporter;
module.exports.jasmineVersion = jasmine.version;