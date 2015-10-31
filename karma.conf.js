// Karma configuration
// Generated on Wed Sep 30 2015 15:39:05 GMT-0700 (MST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'build/sandbox',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      //'src/contrib/**.js',
      'src/contrib/angular.js',
      'src/contrib/angular-mocks.js',
      'src/contrib/angular-route.js',
      'src/contrib/angular-sanitize.js',
      'src/contrib/angular-touch.js',
      'src/contrib/jquery.js',
      'src/contrib/truncate.js',
      'src/contrib/underscore.js',

      'src/libs/app.module.js',
      'src/libs/core/core.module.js',
      'src/libs/media/media.module.js',
      'src/libs/player/player.module.js',
      'src/libs/ui/ui.module.js',
      'src/libs/utility/utility.module.js',
      'src/libs/vendors/vendors.module.js',
      //'src/libs/**/*.module.js',
      'src/libs/**/*.js',
      'src/libs/**/*.html',
        'index.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      //'app/src/**/*.html': ['ng-html2js'],
      'src/**/!(*.mock|*.spec).js': ['coverage']
    },

    //ngHtml2JsPreprocessor: {
    //  // strip this from the file path
    //  stripPrefix: 'app/src/',
    //  // create a single module that contains templates from all the files
    //  moduleName: 'templates'
    //},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type : 'html',
      // output coverage reports
      dir : 'coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
