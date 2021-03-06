module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
    'no-console': 1,
  },
  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],
}
