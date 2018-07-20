/*! jasmine-node-lite - v0.0.5 */
# jasmine-node-lite [![Build Status](https://secure.travis-ci.org/magicmoose/jasmine-node-lite.png?branch=master)](http://travis-ci.org/magicmoose/jasmine-node-lite)
===================

A litewight jasmine node runner.
This is a slim adapter to run Jasmine with node. 

It uses Jasmine2


## Getting Started
Install the module with: `npm install jasmine-node-lite`



Example1
=========

Runs 2 Specs out of the tests of this project.
Run it with

```javascript
coffee doc/example1.litcoffee 
```

We can define the jasmine version to use but this is totally optional. 
If we want to we have to initialize the jasmineoptions module like this:

    jasmineOpt = {
        jasminePath: '../vendor/jasmine/jasmine-2.0.0-alpha'
    }
    require('../lib/jasmineoptions')(jasmineOpt);

Real Projects would require('jasmine-node-lite')

    jasmineNodeLite = require('../lib/index');

This funtion is called after the reporter finished 

    onConsoleReporterDone = () ->
        console.log('ConsoleReporter done!')


Define the options for the Console reporter and jasmine-node-lite

    options = {
        consoleReporterOptions: {
            stackTrace: false,
            onComplete: onConsoleReporterDone
        },
        jasmineNodeLiteOptions:{
            specs: ['./spec/sample.spec.js','./spec/literatecoffee.spec.litcoffee']
        }
    }

Create a Console reporter with the options

    reporter = new jasmineNodeLite.ConsoleReporter(options.consoleReporterOptions)

Register the reporter with jasmineNodeLite

    jasmineNodeLite.registerReporter(reporter);

Execute an array of spec files

    jasmineNodeLite.executeSpecs(options.jasmineNodeLiteOptions)
# Unittests


# Console Reporter
------------------    


Console Reporters are registered with a report Dispatcher which is the component
which interacts with jasmine

    describe 'ConsoleReporter', ->

Tests for the uncolored version

        describe 'Uncolored', ->

            reportDispatcher = new require('../../reportdispatcher').ReportDispatcher()

            consoleReporter = {}
            out = {}
            output = []

            beforeEach () ->
                output = []
                out =
                    println: (str) ->
                        output.push(str)
                        return
                    print: (str) ->
                        #should not be called by reporter
                        return

                consoleReporterOptions =
                    out: out,
                    color: false,
                    onDone: ()->,
                    stackTrace: true

                consoleReporter = new require('../../consolereporter').ConsoleReporter(consoleReporterOptions)
                consoleReporter.OnRegister(reportDispatcher)
                return

            afterEach () ->
                consoleReporter.OnUnregister(reportDispatcher)
                return
                
            
            it 'suite started prints the suite description', ->
                reportDispatcher.suiteStarted({description:'suiteDescription'})
                expect(output).toEqual(['suiteDescription'])

            it 'spec finished prints the spec description', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'passed'})
                expect(output).toEqual(['specDescription'])

            it 'spec finished prints failure andspec description on failed spec', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'failed'})
                expect(output).toEqual(['[failure] specDescription'])

            it 'spec finished prints warning and spec description on pending spec', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'pending'})
                expect(output).toEqual(['[warning] specDescription'])

            it 'suite start increases the indent by 1 level', ->
                reportDispatcher.suiteStarted({description:'suiteDescription'})
                reportDispatcher.suiteStarted({description:'suiteDescription2'})
                expect(output).toEqual(['suiteDescription','    suiteDescription2'])
                
            it 'suite done decreases the indent by 1 level', ->
                reportDispatcher.suiteStarted({description:'suiteDescription'})
                reportDispatcher.suiteDone()
                reportDispatcher.suiteStarted({description:'suiteDescription2'})
                expect(output).toEqual(['suiteDescription','suiteDescription2'])

            it 'suite done decreases the indent by 1 level', ->
                reportDispatcher.suiteStarted({description:'suiteDescription'})
                reportDispatcher.suiteDone()
                reportDispatcher.suiteStarted({description:'suiteDescription2'})
                expect(output).toEqual(['suiteDescription','suiteDescription2'])

            it 'spec started/done also increases and decreases the indent', ->
                reportDispatcher.suiteStarted({description:'suiteDescription'})
                reportDispatcher.specStarted()
                reportDispatcher.specDone({description:'specDescription'
                    , status:'passed'})
                reportDispatcher.suiteDone()
                reportDispatcher.suiteStarted({description:'suiteDescription2'})
                expect(output).toEqual(['suiteDescription','    specDescription'
                    ,'suiteDescription2'])

Tests for the uncolored non verbose version

        describe 'Uncolored nonverbose', ->

            reportDispatcher = new require('../../reportdispatcher').ReportDispatcher()

            consoleReporter = {}
            out = {}
            output = []

NonVerbose uses print instread of println for its output

            beforeEach () ->
                output = []
                out =
                    println: (str) ->
                        #should not be called by reporter
                        return
                    print: (str) ->
                        output.push(str)
                        return

                consoleReporterOptions =
                    out: out,
                    color: false,
                    verbose: false,
                    onDone: ()->,
                    stackTrace: true

                consoleReporter = new require('../../consolereporter').ConsoleReporter(consoleReporterOptions)
                consoleReporter.OnRegister(reportDispatcher)
                return

            afterEach () ->
                consoleReporter.OnUnregister(reportDispatcher)
                return
                
            
            it 'spec finished prints . for success', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'passed'})
                expect(output).toEqual(['.'])

            it 'spec finished prints f for failure', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'failed'})
                expect(output).toEqual(['F'])

            it 'spec finished prints * for pending', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'pending'})
                expect(output).toEqual(['*'])

Tests for the colored version

        describe 'Colored', ->

            reportDispatcher = new require('../../reportdispatcher').ReportDispatcher()

            consoleReporter = {}
            out = {}
            output = []


            beforeEach () ->
                output = []
                out =
                    println: (str) ->
                        output.push(str);
                        return
                    print: (str) ->
                         #should not be called by reporter
                        return

                consoleReporterOptions =
                    out: out,
                    color: true,
                    verbose: true,
                    onDone: ()->,
                    stackTrace: true

                consoleReporter = new require('../../consolereporter').ConsoleReporter(consoleReporterOptions)
                consoleReporter.OnRegister(reportDispatcher)
                return

            afterEach () ->
                consoleReporter.OnUnregister(reportDispatcher)
                return

            it 'suite started prints suite description in color', ->
                reportDispatcher.suiteStarted({description:'suiteDescription'})
                expect(output).toEqual(['\u001b[34msuiteDescription\u001b[0m'])

            it 'spec finished prints spec description in color', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'passed'})
                expect(output).toEqual(['\u001b[32mspecDescription\u001b[0m'])

            it 'spec finished prints spec description on failed spec in color', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'failed'})
                expect(output).toEqual(['\u001b[31mspecDescription\u001b[0m'])

            it 'spec finished prints spec description on pending spec in color', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'pending'})
                expect(output).toEqual(['\u001b[33mspecDescription\u001b[0m'])

And being able to recolor the output

        describe 'Colored redefined', ->

            reportDispatcher = new require('../../reportdispatcher').ReportDispatcher()

            consoleReporter = {}
            out = {}
            output = []


            beforeEach () ->
                output = []
                out =
                    println: (str) ->
                        output.push(str);
                        return
                    print: (str) ->
                         #should not be called by reporter
                        return
                reporter = require('../../consolereporter');
                consoleReporterOptions =
                    out: out,
                    color: true,
                    colorDefinition: {
                        ok: new reporter.OutputFormat('[green]'), 
                        error: new reporter.OutputFormat('[red]', '[failure] '), 
                        warning: new reporter.OutputFormat('[yellow]', '[warning] '), 
                        info: new reporter.OutputFormat('[blue]'), 
                        none: new reporter.OutputFormat('[none]') 
                    },
                    verbose: true,
                    onDone: ()->,
                    stackTrace: true

                consoleReporter = new reporter.ConsoleReporter(consoleReporterOptions)
                consoleReporter.OnRegister(reportDispatcher)
                return

            afterEach () ->
                consoleReporter.OnUnregister(reportDispatcher)
                return

            it 'suite started prints suite description in custom color', ->
                reportDispatcher.suiteStarted({description:'suiteDescription'})
                expect(output).toEqual(['[blue]suiteDescription[none]'])

            it 'spec finished prints spec description in custom color', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'passed'})
                expect(output).toEqual(['[green]specDescription[none]'])

            it 'spec finished prints spec description on failed spec in custom color', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'failed'})
                expect(output).toEqual(['[red]specDescription[none]'])

            it 'spec finished prints spec description on pending spec in custom color', ->
                reportDispatcher.specDone({description:'specDescription'
                    , status:'pending'})
                expect(output).toEqual(['[yellow]specDescription[none]'])
                
            


# Junit Reporter
------------------    


JUnit Reporters are registered with a report Dispatcher which is the component
which interacts with jasmine

    describe 'JunitReporter', ->
        reportDispatcher = new require('../../reportdispatcher').ReportDispatcher()
        sinon = require('sinon')
        timehelpers = require('../../timehelpers')
        proxyquire = require('proxyquire')
        fs = require('fs')
        _ = require('lodash')

        junitReporter = {}
        proxiedReporterModule = {}
        fsStub = {}
        timeHelpersStub = {}
        
        generatedXMl = []

        TESTSUITEDESCRIPTOR = 
            id: 1,
            status: '',
            description: 'SuiteDescription text',
            fullName: 'Suite full name'

        TESTCASEDESCRIPTOR = 
            id: 1,
            status: 'passed',
            description: 'Testcase description text',
            fullName: 'Testcase full name',
            failedExpectations: []


        beforeEach () ->
            generatedXMl = [];
            fsStub = {}
            timeHelpersStub = {}
            proxyStubDefinition = 
                'fs':fsStub,
                'timehelpers':timeHelpersStub
            
            proxiedReporterModule = proxyquire('../../junitreporter', proxyStubDefinition)
            junitReporterOptions =
                onDone: ()->

            junitReporter = new proxiedReporterModule.JUnitReporter(junitReporterOptions)
            junitReporter.OnRegister(reportDispatcher)

            writeFileSyncProxy = (filename, xml) ->
                generatedXMl.push (xml.replace(/\s+/g,' '))

Stubbing out fs and time functions 

            fsStub.writeFileSync = sinon.stub(fs,'writeFileSync',writeFileSyncProxy);
            nowStub = sinon.stub(timehelpers, 'now')
            timeHelpersStub.now = nowStub;
            timeHelpersStub.now.returns(0)
            return

        afterEach () ->
            junitReporter.OnUnregister(reportDispatcher)

And restoring them so that the real test system can still use time and fs

            timehelpers.now.restore()
            fs.writeFileSync.restore()
            return

        it 'should have the correct filename', ->
            _filename = ''
            writeFileSyncProxy = (filename, xml) ->
                _filename = filename

            fsStub.writeFileSync = writeFileSyncProxy
            reportDispatcher.jasmineStarted()
            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR)
            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)
            reportDispatcher.jasmineDone()
            path = require('path')
            #filename build from spec full name with spaces replaced by underscore
            expectedPath = path.resolve(path.join('./reports',
                'TEST-' + TESTSUITEDESCRIPTOR.fullName.replace(/\s+/g, '_') + '.xml'))
            expect(_filename).toEqual(expectedPath)

        it 'prints a simple not nested suite', ->
            reportDispatcher.jasmineStarted()
            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR)
            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)
            reportDispatcher.jasmineDone()
            expectedXml = ['<testsuites> <testsuite name="Suite.full.name" disabled="0" failures="0" id="1" skipped="0" tests="0" time="0" timestamp="1970-01-01T00:00:00.000Z"> </testsuite> </testsuites>']
            expect(generatedXMl).toEqual(expectedXml)      

        it 'prints a nested suite', ->
            suiteDescriptorNested = 
                id: 2,
                status: '',
                description: 'SuiteDescription nested text',
                fullName: 'Nested Suite full name'
            reportDispatcher.jasmineStarted()
            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR)

            reportDispatcher.suiteStarted(suiteDescriptorNested)
            reportDispatcher.suiteDone(suiteDescriptorNested)

            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)
            reportDispatcher.jasmineDone()

            expectedXml = ['<testsuites> <testsuite name="Suite.full.name" disabled="0" failures="0" id="1" skipped="0" tests="0" time="0" timestamp="1970-01-01T00:00:00.000Z"> <testsuite name="Nested.Suite.full.name" disabled="0" failures="0" id="2" skipped="0" tests="0" time="0" timestamp="1970-01-01T00:00:00.000Z"> </testsuite> </testsuite> </testsuites>']
            expect(generatedXMl).toEqual(expectedXml)

        it 'writes top level suites into seperate files', ->
            suiteDescriptorNested = 
                id: 2,
                status: '',
                description: 'SuiteDescription nested text',
                fullName: 'Nested Suite full name'

            reportDispatcher.jasmineStarted()

            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR);
            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)

            reportDispatcher.suiteStarted(suiteDescriptorNested);
            reportDispatcher.suiteDone(suiteDescriptorNested)
            
            reportDispatcher.jasmineDone()

            expect(fsStub.writeFileSync.callCount).toEqual(2)
       	    expectedXml = ['<testsuites> <testsuite name="Suite.full.name" disabled="0" failures="0" id="1" skipped="0" tests="0" time="0" timestamp="1970-01-01T00:00:00.000Z"> </testsuite> </testsuites>', '<testsuites> <testsuite name="Nested.Suite.full.name" disabled="0" failures="0" id="2" skipped="0" tests="0" time="0" timestamp="1970-01-01T00:00:00.000Z"> </testsuite> </testsuites>']
            expect(generatedXMl).toEqual(expectedXml)

        it 'writes correct time stamps and delta times', ->
            suiteDescriptorNested = 
                id: 2,
                status: '',
                description: 'SuiteDescription nested text',
                fullName: 'Nested Suite full name'

            reportDispatcher.jasmineStarted()

            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR)
            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)

Increase the reported time returned by now will show up in timestamp

            timeHelpersStub.now.returns(10000)

            reportDispatcher.suiteStarted(suiteDescriptorNested)

Increase the reported time returned by now will show up in suite deltatime

            timeHelpersStub.now.returns(20000)
            reportDispatcher.suiteDone(suiteDescriptorNested)
            
            reportDispatcher.jasmineDone()

            expect(fsStub.writeFileSync.callCount).toEqual(2)
            expectedXml = ['<testsuites> <testsuite name="Suite.full.name" disabled="0" failures="0" id="1" skipped="0" tests="0" time="0" timestamp="1970-01-01T00:00:00.000Z"> </testsuite> </testsuites>', '<testsuites> <testsuite name="Nested.Suite.full.name" disabled="0" failures="0" id="2" skipped="0" tests="0" time="10" timestamp="1970-01-01T00:00:10.000Z"> </testsuite> </testsuites>']
            expect(generatedXMl).toEqual(expectedXml)

        it 'prints a test case', ->
            reportDispatcher.jasmineStarted()
            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR)
            reportDispatcher.specStarted(TESTCASEDESCRIPTOR)
            reportDispatcher.specDone(TESTCASEDESCRIPTOR)
            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)
            reportDispatcher.jasmineDone()
            expectedXml = ['<testsuites> <testsuite name="Suite.full.name" disabled="0" failures="0" id="1" skipped="0" tests="1" time="0" timestamp="1970-01-01T00:00:00.000Z"> <testcase classname="Suite.full.name" name="Testcase description text" time="0"> </testcase> </testsuite> </testsuites>']
            expect(generatedXMl).toEqual(expectedXml)

        it 'prints the description of a failure', ->
            testCase2 = 
                id: 1,
                status: 'failed',
                description: 'Testcase2 description text',
                fullName: 'Testcase2 full name',
                failedExpectations: []
            failedExpectation = {}
            failedExpectation.stack = 'stacktrace'
            failedExpectation.message = 'message'
            testCase2.failedExpectations.push(failedExpectation)
            reportDispatcher.jasmineStarted()
            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR)
            reportDispatcher.specStarted(testCase2)
            reportDispatcher.specDone(testCase2)
            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)
            reportDispatcher.jasmineDone()
            expectedXml = ['<testsuites> <testsuite name="Suite.full.name" disabled="0" failures="1" id="1" skipped="0" tests="1" time="0" timestamp="1970-01-01T00:00:00.000Z"> <testcase classname="Suite.full.name" name="Testcase2 description text" time="0"> <failure message="message"><![CDATA[stacktrace]]></failure> </testcase> </testsuite> </testsuites>']
            expect(generatedXMl).toEqual(expectedXml)

        it 'counts test cases', ->
            testCase2 = 
            id: 2,
            status: 'passed',
            description: 'Testcase2 description text',
            fullName: 'Testcase2 full name',
            failedExpectations: []

            reportDispatcher.jasmineStarted()
            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR)
            reportDispatcher.specStarted(TESTCASEDESCRIPTOR)
            reportDispatcher.specDone(TESTCASEDESCRIPTOR)
            reportDispatcher.specStarted(testCase2)
            reportDispatcher.specDone(testCase2)
            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)
            reportDispatcher.jasmineDone()
            expectedXml = ['<testsuites> <testsuite name="Suite.full.name" disabled="0" failures="0" id="1" skipped="0" tests="2" time="0" timestamp="1970-01-01T00:00:00.000Z"> <testcase classname="Suite.full.name" name="Testcase description text" time="0"> </testcase> <testcase classname="Suite.full.name" name="Testcase2 description text" time="0"> </testcase> </testsuite> </testsuites>']
            expect(generatedXMl).toEqual(expectedXml)

        it 'reports test case time', ->
            reportDispatcher.jasmineStarted()
            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR)
            reportDispatcher.specStarted(TESTCASEDESCRIPTOR)
            timeHelpersStub.now.returns(20000)
            reportDispatcher.specDone(TESTCASEDESCRIPTOR)
            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)
            reportDispatcher.jasmineDone()
            expectedXml = ['<testsuites> <testsuite name="Suite.full.name" disabled="0" failures="0" id="1" skipped="0" tests="1" time="20" timestamp="1970-01-01T00:00:00.000Z"> <testcase classname="Suite.full.name" name="Testcase description text" time="20"> </testcase> </testsuite> </testsuites>']
            expect(generatedXMl).toEqual(expectedXml)

        it 'counts skipped tests', ->
            testCase2 = 
            id: 2,
            status: 'pending',
            description: 'Testcase2 description text',
            fullName: 'Testcase2 full name',
            failedExpectations: []

            reportDispatcher.jasmineStarted()
            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR)
            reportDispatcher.specStarted(TESTCASEDESCRIPTOR)
            reportDispatcher.specDone(TESTCASEDESCRIPTOR)
            reportDispatcher.specStarted(testCase2)
            reportDispatcher.specDone(testCase2)
            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)
            reportDispatcher.jasmineDone()
            expectedXml = ['<testsuites> <testsuite name="Suite.full.name" disabled="0" failures="0" id="1" skipped="1" tests="1" time="0" timestamp="1970-01-01T00:00:00.000Z"> <testcase classname="Suite.full.name" name="Testcase description text" time="0"> </testcase> <testcase classname="Suite.full.name" name="Testcase2 description text" time="0"> </testcase> </testsuite> </testsuites>']
            expect(generatedXMl).toEqual(expectedXml)

Jasmine does not send a spec started for skipped test, but does send a spec done

        it 'counts skipped tests (jasmine limitations)', ->
            testCase2 = 
            id: 2,
            status: 'pending',
            description: 'Testcase2 description text',
            fullName: 'Testcase2 full name',
            failedExpectations: []

            reportDispatcher.jasmineStarted()
            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR)
            reportDispatcher.specStarted(TESTCASEDESCRIPTOR)
            reportDispatcher.specDone(TESTCASEDESCRIPTOR)

            reportDispatcher.specDone(testCase2)
            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)
            reportDispatcher.jasmineDone()
            expectedXml = ['<testsuites> <testsuite name="Suite.full.name" disabled="0" failures="0" id="1" skipped="1" tests="1" time="0" timestamp="1970-01-01T00:00:00.000Z"> <testcase classname="Suite.full.name" name="Testcase description text" time="0"> </testcase> <testcase classname="Suite.full.name" name="Testcase2 description text" time="0"> </testcase> </testsuite> </testsuites>']
            expect(generatedXMl).toEqual(expectedXml)

        it 'prints a nested pending suite', ->
            suiteDescriptorNested = 
                id: 2,
                status: 'pending',
                description: 'SuiteDescription nested text',
                fullName: 'Nested Suite full name'
            reportDispatcher.jasmineStarted()
            reportDispatcher.suiteStarted(TESTSUITEDESCRIPTOR)

            reportDispatcher.suiteDone(suiteDescriptorNested)

            reportDispatcher.suiteDone(TESTSUITEDESCRIPTOR)
            reportDispatcher.jasmineDone()

            expectedXml = ['<testsuites> <testsuite name="Suite.full.name" disabled="0" failures="0" id="1" skipped="0" tests="0" time="0" timestamp="1970-01-01T00:00:00.000Z"> <testsuite name="Nested.Suite.full.name" disabled="0" failures="0" id="2" skipped="0" tests="0" time="0" timestamp="1970-01-01T00:00:00.000Z"> </testsuite> </testsuite> </testsuites>']
            expect(generatedXMl).toEqual(expectedXml)


## License
Copyright (c) 2013 Ralf Mueller
Licensed under the MIT license.