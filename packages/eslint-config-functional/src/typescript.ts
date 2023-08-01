import type { Linter } from 'eslint';

export const eslintConfigFunctionalTypescript: Linter.BaseConfig = {
  rules: {
    // Disallow mutating objects and arrays.
    'functional/immutable-data': 'off',
    // Require function parameters to be typed as certain immutability.
    'functional/prefer-immutable-types': 'off',
    // Enforce the immutability of types based on patterns.
    'functional/type-declaration-immutability': 'off',
    // Require consistently using either readonly keywords or Readonly<T>.
    'functional/readonly-type': ['error', 'keyword'],
  },
};
