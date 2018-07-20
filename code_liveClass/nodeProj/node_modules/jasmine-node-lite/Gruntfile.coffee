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
            lib: ['lib/**/*.js']
            options: 
                jshintrc: '.jshintrc'

        concat:
            options: 
                stripBanners: true
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> */'
            readme:
                src: ['doc/readmeheader.md','doc/example1.litCoffee',
                'doc/testsheader.md','lib/**/test/unit/*','doc/readmefooter.md'],
                dest: 'README.md'

    # Modules
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat')

    #Tasks
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('makerelease',['concat', 'jshint'])

