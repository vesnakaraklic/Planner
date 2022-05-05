module.exports = {
  root: true,
  env: {
    jest: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: ['standard', 'react-app', 'prettier'],
  plugins: ['babel', 'prettier'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'react-hooks/rules-of-hooks': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'no-var': 2,
    'jsx-a11y/alt-text': [2, {
      'elements': ['img', 'object', 'area', "input[type=\"image\"]"],
      'img': ['Image'],
      'object': ['Object'],
      'area': ['Area'],
      "input[type=\"image\"]": ['InputImage']
    }],
    'array-callback-return': ['off', { checkForEach: true }],
    'eqeqeq': ['error', 'always']
  }
}