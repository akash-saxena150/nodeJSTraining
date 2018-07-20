/*
 * grunt-jasmine-node-lite
 * https://github.com/magicmoose/grunt-jasmine-node-lite
 *
 * Copyright (c) 2013 Ralf Mueller
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks
    var CONSOLEREPORTEROPTIONS = {
        enabled: false,
        stackTrace: false,
        verbose: false
    };

    var JASMINEOPTIONS = {
        enabled: false,
        savePath: './reports',
        specs: []
    };

    grunt.registerMultiTask('jasmine_node_lite', 'runs jasmine-node-lite', function() {
        // Merge task-specific and/or target-specific options with these defaults.

        var options = this.options({
            consoleReporter: CONSOLEREPORTEROPTIONS,
            jasmine: JASMINEOPTIONS
        });
        var specFiles = [];
        var reporters = [];
        //resolve specs glob 
        specFiles = grunt.file.expand(options.jasmine.specs);
        options.jasmine.specs = specFiles;

        // Tell grunt this task is asynchronous.
        var done = this.async();

        // call jasmine-node-lite
        var jasmineNodeLite = require('jasmine-node-lite');

        var numberOfReportersToWaitFor = 0;

        function unregisterReporters() {
            for (var i = 0; i < reporters.length; i++) {
                jasmineNodeLite.unregisterReporter(reporters[i]);
            }
        }

        function onReporterDone(result) {
            numberOfReportersToWaitFor = numberOfReportersToWaitFor - 1;
            if (numberOfReportersToWaitFor === 0) {
                unregisterReporters();
                done(result.failureCount === 0);
            }
        }

        function registerReporter(reporter) {
            numberOfReportersToWaitFor = numberOfReportersToWaitFor + 1;
            jasmineNodeLite.registerReporter(reporter);
            reporters.push(reporter);
        }

        if (options.consoleReporter.enabled === true) {
            options.consoleReporter.onComplete = onReporterDone;
            var consoleReporter = new jasmineNodeLite.ConsoleReporter(options.consoleReporter);
            registerReporter(consoleReporter);
        }

        if (options.junitReporter.enabled === true) {
            options.junitReporter.onComplete = onReporterDone;
            var junitReporter = new jasmineNodeLite.JUnitReporter(options.junitReporter);
            registerReporter(junitReporter);
        }

        jasmineNodeLite.executeSpecs(options.jasmine);
    });

};