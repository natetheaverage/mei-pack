// Karma configuration
// Generated on Sat Apr 09 2016 20:40:53 GMT-0600 (MDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    browsers: ['Chrome'],//Chrome PhantomJS

    plugins: [
      "karma-spec-reporter", 
      "karma-speckle-reporter", 
      "karma-phantomjs-launcher",
      "karma-chrome-launcher",
      "karma-jasmine", 
      "karma-browserify"
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', "browserify", ],

      

    // list of files / patterns to load in the browser
    files: [
      './tests/spec/header_parts/*.js',
      './resources/assets/js/mei-app.js',
      //'./resources/assets/js/*.js',
      //'./resources/assets/js/*.js',
      //'./resources/assets/js/**/*.js',
      //'./resources/assets/js/**/*.vue',
      //'./resources/assets/js/**/**/*.vue',
      //'./resources/assets/js/**/**/*.js',
      //'./resources/assets/js/**/**/**/*.js',
      //'./resources/assets/js/**/**/**/*.vue'
    ],

    exclude:[
      './resources/assets/js/mei-core.js',
      './resources/assets/js/truth/truth.js',
    ],

  preprocessors: {
    './tests/spec/header_parts/*.js': ['browserify'],
    './resources/assets/js/mei-app.js': ['browserify'],
    // './resources/assets/js/**/*.vue': ['browserify'],
    // './resources/assets/js/**/**/*.vue': ['browserify'],
    // './resources/assets/js/**/**/*.js': ['browserify'],
    // './resources/assets/js/**/**/**/*.js': ['browserify'],
    // './resources/assets/js/**/**/**/*.vue': ['browserify']
  },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'progress'],
    specReporter: {

      // When test(s) fail - report it at the end of all tests  
      lateReport:      true,

      // Max error log lines to display 
      maxLogLines:     5,

      // Don't show failed tests 
      suppressFaild:   false,

      // Don't show successful tests 
      suppressSuccess: false,

      // Don't show skipped tests 
      suppressSkipped: false,

      // Determine which tests will be shown as slow 
      slowTestTime: 40,
      fastTestTime: 20

    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    

    browserify: {
      debug: true,
      // needed to enable mocks
      transform: ['es6ify' , 'vueify'],
      plugin: [require('proxyquireify').plugin]
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
