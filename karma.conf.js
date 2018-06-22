module.exports = function(config) {
  config.set({
    files: [{ pattern: 'text/**/*.spec.js', watched: false }],
    frameworks: ['jasmine'],
    browsers: ['chrome'],
    preprocessors: {
      './test/**/*.js': ['rollup']
    },
    rollupPreprocessor: {
      plugins: [
        require('rollup-plugin-buble')(),
      ],
      output: {
        format: 'life',
        name: 'Vue',
        sourcemap: 'inline'
      }
    }
  })
}