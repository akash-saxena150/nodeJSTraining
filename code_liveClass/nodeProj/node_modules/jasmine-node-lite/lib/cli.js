'use strict';


var options = require('commander');
var _ = require('lodash');
var glob = require('glob');
var pjson = require('../package');

var DEFAULTS = {
};

var jasmineNodeLite = require('../lib/index');

function files(val) {
    return val.split(',');
}

options.version(pjson.version)
    .option('-stack, --includeStackTrace', 'Enables stack traces on failed tests', false)
    .option('-u, --jUnitReporter', 'Loads the JUnitReporter')
    .option('-c, --consoleReporter', 'Loads the ConsoleReporter')
    .option('-f, --files [items]', 'Specify files defaulting to ["./lib/**/test/unit/*.spec.litcoffee","./lib/**/test/unit/*.spec.js"]', files, ['./lib/**/test/unit/*.spec.litcoffee','./lib/**/test/unit/*.spec.js']);

function run() {
    var numberOfReportersToWaitFor = 0;

    function onReporterDone(result) {
        numberOfReportersToWaitFor = numberOfReportersToWaitFor - 1;

        if (numberOfReportersToWaitFor === 0) {
            if (result.failureCount === 0) {
                process.exit(0);
            } else {
                process.exit(1);
            }
        }
    }

    function registerReporter(reporter) {
        jasmineNodeLite.registerReporter(reporter);
        numberOfReportersToWaitFor = numberOfReportersToWaitFor + 1;
    }

    var jasmineOptions = {
        consoleReporterOptions: {
            stackTrace: false,
            onComplete: onReporterDone
        },
        jUnitReporterOptions: {
            onComplete: onReporterDone,
            savePath: './reports/'
        },
        jasmineNodeLiteOptions: {
            specs: options.files
        }
    };

    if (options.jUnitReporter === true) {
        var junitReporter = new jasmineNodeLite.JUnitReporter();
        registerReporter(junitReporter);
    }

    if (options.consoleReporter === true) {
        var reporter = new jasmineNodeLite.ConsoleReporter(jasmineOptions.consoleReporterOptions);
        registerReporter(reporter);
    }
    jasmineNodeLite.executeSpecs(jasmineOptions.jasmineNodeLiteOptions);
}

function interpret(args) {
    options.parse(args);

    _.defaults(options, DEFAULTS);
    var resolvedFiles = [];

    function globPattern(pattern) {
        glob(pattern, {
            mark: true,
            sync: true
        }, function result(er, matches) {
            resolvedFiles = _.union(resolvedFiles, matches);
        });
    }
    _.each(options.files, globPattern);
    // sort

    function comperator(a, b) {
        return a.localeCompare(b);
    }
    resolvedFiles.sort(comperator);
    options.files = resolvedFiles;
    console.log(options.files);
    run();
}
module.exports.interpret = interpret;
module.exports.run = run;