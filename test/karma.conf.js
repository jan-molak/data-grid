module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'src/vendor/angular-1.2.1.min.js',
            'test/vendor/angular-mocks-1.2.1.js',
            'src/scripts/**/*.js',
            'test/unit/**/*Spec.js'
        ],

        // list of files to exclude
        exclude: [

        ],

        preprocessors: {
            'src/scripts/**/*.js': 'coverage'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress', 'junit', 'coverage'],

        junitReporter: {
            outputFile: 'target/reports/test-results.xml'
        },

        coverageReporter: {
            type : 'html',
            dir : 'target/coverage'
        },

        // web server port
        port: 9876,

        // cli runner port
        runnerPort: 9100,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};