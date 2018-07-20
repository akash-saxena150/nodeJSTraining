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
