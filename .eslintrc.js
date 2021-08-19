module.exports = {
  plugins: ['prettier'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      { singleQuote: true, jsxSingleQuote: true, semi: false, parser: 'flow' },
    ],
  },
}
