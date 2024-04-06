module.exports = {
  extends: ['airbnb-typescript-prettier'],
  rules: {
    'import/no-unresolved': 'error',
    'no-console': 'off',
    'class-methods-use-this': 'error',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: true,
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: '',
    project: ['./tsconfig.eslint.json'],
  },
};
