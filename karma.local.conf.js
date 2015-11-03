module.exports = function(config) {
  config.set({
    //logLevel: 'LOG_DEBUG',

    reporters: ['spec', 'coverage'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun : false,

    autoWatch : true,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    port: 9876,

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
      'fixture'
    ],

    files: [{
        pattern:  './test/**/*.fixture.html'
      },
      'node_modules/materialize-css/font/*',
      './node_modules/materialize-css/bin/materialize.css',
      './styles/**/*.css',
      './node_modules/expect.js/index.js',
      './node_modules/three.js/build/three.js',
      'js/app.js',
      'test/app.spec.js',
      'test/cube/cube.spec.js'
    ],

    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    },

    // list of files to exclude
    exclude: [],

    preprocessors: {
      'js/**/*.js': ['coverage'],
      'test/**/*.fixture.html': ['html2js']
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html'},
        //{ type: 'text'},
        { type: 'lcov', subdir: 'lcov/'}
      ],
      instrumenterOptions: {
        istanbul: {
          noCompact: true
        }
      },
      instrumenter: {
        'test/**/*.js': 'istanbul'
      },
      includeAllSources: true
    },

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS2'//, 'Firefox'
    ]

  });
};
