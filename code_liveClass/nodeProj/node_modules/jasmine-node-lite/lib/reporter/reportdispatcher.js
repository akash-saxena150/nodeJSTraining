/**
 *  This file is subject to the terms and conditions defined in the file
 *  'LICENCE.md', which is part of this source code package.
 *  @author Ralf Mueller
 */

'use strict';

// Requires
var eventemitter2 = require('eventemitter2').EventEmitter2;
var _ = require('lodash');
var util = require('util');

var REPORTERDEFAULTOPTIONS = {
    delimiter: ':',
    maxListeners: 10,
    wildcard: true
};

// Implementation
function ReportDispatcher(options) {
    if (!(this instanceof ReportDispatcher)) {
        return new ReportDispatcher(options);
    }

    if(options === undefined){
        options = {};
    }
    _.defaults(options, REPORTERDEFAULTOPTIONS);

    eventemitter2.call(this, {
        delimiter: options.delimiter,
        wildcard: options.wildcard,
        maxListeners: options.maxListeners
    });
}

util.inherits(ReportDispatcher, eventemitter2);

ReportDispatcher.prototype.jasmineStarted = function() {
    //console.log('ReportDispatcher on started\n');
    this.emit('jasmineStarted');
};

ReportDispatcher.prototype.jasmineDone = function() {
    //console.log('ReportDispatcher on started\n');
    this.emit('jasmineDone');
};

ReportDispatcher.prototype.suiteStarted = function(result) {
    //console.log('ReportDispatcher on suiteStarted' + JSON.stringify(result)+'\n');
    this.emit('suiteStarted',result);
};

ReportDispatcher.prototype.suiteDone = function(result) {
    //console.log('ReportDispatcher on suiteDone' + JSON.stringify(result)+'\n');
    this.emit('suiteDone',result);
};

ReportDispatcher.prototype.specStarted = function(result) {
    //console.log('ReportDispatcher on specStarted' + JSON.stringify(result)+'\n');
    this.emit('specStarted',result);
};

ReportDispatcher.prototype.specDone = function(result) {
 //   console.log('ReportDispatcher on specDone' + JSON.stringify(result)+'\n');
    this.emit('specDone',result);
};

// Module exports

module.exports.ReportDispatcher = ReportDispatcher;