module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  // rules: {
  //   'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  // }
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'radix': ['error', 'as-needed'],
    'no-var': 'error',
    'no-unused-vars': 'warn',
    'prefer-promise-reject-errors': 'off',
    'line-comment-position': [
      'error', {
        'position': 'above',
      },
    ],
  },
}
