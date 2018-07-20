/**
 *  This file is subject to the terms and conditions defined in the file
 *  'LICENCE.md', which is part of this source code package.
 *  @author Ralf Mueller
 */

'use strict';

module.exports = require('./jasminerunner');
module.exports.ConsoleReporter = require('./reporter/consolereporter').ConsoleReporter;
module.exports.JUnitReporter = require('./reporter/junitreporter').JUnitReporter;

