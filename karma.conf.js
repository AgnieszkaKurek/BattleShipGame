module.exports = function (config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        { pattern: 'tests/**/*Spec.js', watched: true }
      ],
      preprocessors: {
        'tests/**/*Spec.js': []
      },
      client: {
        clearContext: false
      },
      exclude: [],
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity,
    })
  }