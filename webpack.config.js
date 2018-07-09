const { realpathSync } = require('fs');
const { resolve } = require('path');
const { react } = require('webpack-features');

const rootPath = realpathSync(process.cwd());

const production = process.env.NODE_ENV === 'production';

module.exports = react(
  {
    production,
    babelrc: false,
    babelPolyfill: 'usage',
    types: 'typescript',
    hot: !production,

    entry: './src/index.tsx',
    indexHtml: production ? '../index.html' : 'index.html',
  },
  {
    javascript: {
      eslint: false,
      tsOptions: {
        configFile: resolve(rootPath, './tsconfig.json'),
      },
    },
    entry: {
      hotMiddleware: !production,
    },
  }
);
