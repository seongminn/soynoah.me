module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.next/*'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'simple-import-sort', '@typescript-eslint', 'prettier', 'jsx-a11y'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',

    // react
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    // import
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          [`^node:`, `^(${require('module').builtinModules.join('|')})(/|$)`],
          ['^react', '^next', '^@?\\w'],
          ['^~/'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    // prettier
    'prettier/prettier': 'warn',
    // rules
    'no-console': [
      'error',
      {
        allow: ['error', 'warn'],
      },
    ],
  },
};
