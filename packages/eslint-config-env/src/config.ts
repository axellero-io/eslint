import type { Linter } from 'eslint';

export const eslintConfigEnv: Linter.BaseConfig = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  env: {
    es2024: true,
    browser: true,
    node: true,
  },
  overrides: [
    // Enable jsx for all jsx file extensions.
    {
      files: ['**/**.[jt]sx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    // Set `env.jest` to `true` for possible test files.
    {
      /**
       * Taken straight from the jest configuration doc:
       * @see https://jestjs.io/docs/en/configuration#testmatch-arraystring
       */
      files: ['**/__tests__/**/**.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
