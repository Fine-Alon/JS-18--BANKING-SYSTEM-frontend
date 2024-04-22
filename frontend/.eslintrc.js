module.exports = {
  root: true,
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    'cypress',
  ],
  env: {
    browser: true,
    'cypress/globals': true,
  },
  rules: {
    'no-alert': 0,
    'no-param-reassign': [2, { props: false }],
    'no-plusplus': 0,
    'no-iterator': 0,
    'no-restricted-syntax': [2, 'WithStatement'],
    'func-style': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-useless-constructor': 0,
    'import/extensions': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'no-shadow': 0,
    'prefer-const': 0,
    // 'no-shadow': 0,
  },
  overrides: [
    {
      files: ['main.js'],
      rules: {
        'no-use-before-define': 0,
        'array-callback-return': 0,
      },
    },
  ],
};
