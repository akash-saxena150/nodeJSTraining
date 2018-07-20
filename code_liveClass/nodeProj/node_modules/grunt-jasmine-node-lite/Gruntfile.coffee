#
# grunt-jasmine-node-lite
# https://github.com/magicmoose/grunt-jasmine-node-lite
#
# Copyright (c) 2013 Ralf Mueller
# Licensed under the MIT license.
#

module.exports = (grunt) ->

    # Package
    # =======

    pkg = require './package.json'

    # Configuration
    # =============
    grunt.initConfig

        # Package
        # -------
        pkg: pkg

        jshint:     
          lib: ['tasks/**/*.js']
          options: 
            jshintrc: '.jshintrc'

        jasmine_node_lite:
          options:
              consoleReporter: 
                enabled: true, 
                stackTrace: false,
                verbose: true
              junitReporter:
                enabled: true
                savePath: './reports'
              jasmine:
                specs: ['spec/**/*.js']
          ci:
            options:
              consoleReporter: 
                enabled: true,
                color: false, 
                stackTrace: true,
                verbose: true
                
          dev:
            options:
              consoleReporter: 
                enabled: true, 
                stackTrace: false,
                verbose: false
              junitReporter:
                enabled: false

      

    # Modules
    grunt.loadNpmTasks('grunt-contrib-jshint');

    #Actually load this plugin's task(s).
    grunt.loadTasks('tasks');
    
    #Tasks
    grunt.registerTask('default', ['jshint', 'test']);
    grunt.registerTask('test', ['jasmine_node_lite:dev']);
    grunt.registerTask('ci', ['jshint', 'jasmine_node_lite:ci']);
