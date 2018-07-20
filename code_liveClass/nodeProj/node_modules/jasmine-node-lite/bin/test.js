/**
 *  This file is subject to the terms and conditions defined in the file
 *  'LICENCE.md', which is part of this source code package.
 *  @author Ralf Mueller
 */

'use strict';

var jasmineNodeLite = require('../lib/index');

function onConsoleReporterDone() {
    console.log('ConsoleReporter done!');
}

var options = {
    consoleReporterOptions: {
        stackTrace: false,
        onComplete: onConsoleReporterDone,
        verbose: true
    },
    jasmineNodeLiteOptions:{
        specs: ['/lib/**/test/unit/*.spec.*']
    }
};
console.log('Using Jasmine:' + jasmineNodeLite.jasmineVersion);
var reporter = new jasmineNodeLite.ConsoleReporter(options.consoleReporterOptions);
jasmineNodeLite.registerReporter(reporter);
jasmineNodeLite.executeSpecs(options.jasmineNodeLiteOptions);