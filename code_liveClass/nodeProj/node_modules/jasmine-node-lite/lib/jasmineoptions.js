/**
 *  This file is subject to the terms and conditions defined in the file
 *  'LICENCE.md', which is part of this source code package.
 *  @author Ralf Mueller
 */

'use strict';

// Requires

// Implementation
var options = {};
// Module exports
module.exports = function(_options) {
    var _ = require('lodash');
    var DEFAULTOPTIONS = {
        jasminePath: '../vendor/jasmine/jasmine-2.0.0-alpha'
    };

    var module = {};
    _.defaults(options, _options, DEFAULTOPTIONS);

    module.getJasminePath = function getJasminePath() {
        return options.jasminePath;
    };

    return module;
};