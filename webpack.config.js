const { realpathSync } = require('fs');
const { resolve } = require('path');
const { react } = require('webpack-features');

const rootPath = realpathSync(process.cwd());

module.exports = react(
  {
    browser: true,
    babelrc: false,
    babelPolyfill: 'usage',
    types: 'typescript',
    entry: './src/index.tsx',
  },
  {
    javascript: {
      eslint: false,
      tsOptions: {
        configFile: resolve(rootPath, './tsconfig.json'),
      },
    },
  }
);
