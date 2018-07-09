// cosmos.config.js
module.exports = {
  rootPath: './',

  // Additional entry points that should be present along with any component
  // Sad, but inevitable
  globalImports: ['./src/global.css'],

  // Customize pattern(s) for matching fixture files
  fileMatch: ['**/fixtures/**/*.ts'],

  // Fixtures will not be loaded in the playground if their names match these
  //exclude: [/not-a-fixture/, /its-complicated/, /its-not-me-its-you/],

  // File path to serve static files from. Like --content-base in webpack-dev-server
  //publicPath: 'src/public',

  // Set base URL for both webpack assets and static files from publicPath
  // Maps to webpack.output.publicPath
  // https://webpack.js.org/configuration/output/#output-publicpath
  //publicUrl: '/static/',

  // Customize proxies file path. Useful if Babel doesn't compile the root dir
  //proxiesPath: 'src/proxies.cosmos',

  // Render inside custom root element. Useful if that root element already
  // has styles attached, but bad for encapsulation
  //containerQuerySelector: '#app',

  // Disable hot module replacement
  hot: true,

  // HTTP proxy specific requests to a different target
  // httpProxy: {
  //   context: '/api',
  //   target: 'http://localhost:4000/api'
  // },

  // Reuse existing webpack config
  webpackConfigPath: './webpack.config.js',

  // Customize webpack config
  // webpack: (config, { env }) => {
  //   // Return customized config
  //   return config;
  // },

  // Specify where should webpack watch for fixture files (defaults to rootPath)
  // watchDirs: ['src/components'],

  // Customize dev server
  hostname: 'localhost',
  port: 8989
};
