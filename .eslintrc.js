module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
	'@typescript-eslint/no-unused-vars': 'error',
	'max-lines': 2,
	'max-lines-per-function': 2,
	'indent': ['error', 'tab'],
	'linebreak-style': ['error', 'unix'],
	'quotes': ['error', 'single'],
	'semi': ['error', 'always'],
	'comma-dangle': ['error', {'arrays': 'never', 'objects': 'never'}],
	'eqeqeq': ['error', 'always' ],
	'consistent-return': 'error',
	'no-undef-init': 'error',
	'no-undefined': 'error',
	'no-void': 'error',
	'no-var': 'error',
	'object-shorthand': 'error',
	'prefer-const': 'error',
	'prefer-destructuring': ['error', {'array': true, 'object': true}],
	'no-duplicate-imports': 'error',
	'no-unused-private-class-members': 'error'
  },
};
