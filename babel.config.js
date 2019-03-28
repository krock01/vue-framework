module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    'dynamic-import-node', ['component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
};
