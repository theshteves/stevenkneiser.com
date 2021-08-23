module.exports = {
  plugins: ['prettier', 'only-warn'],
  extends: ['airbnb', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        semi: false,
        bracketSpacing: true,
        parser: 'flow'
      },
    ],
  },
}
