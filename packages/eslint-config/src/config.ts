import type { Linter } from 'eslint';

export const eslintConfig: Linter.Config = {
  root: true,
  extends: [
    require.resolve('@axellero/eslint-config-core'),
    require.resolve('@axellero/eslint-config-jsx-a11y'),
    require.resolve('@axellero/eslint-config-react'),
    require.resolve('@axellero/eslint-config-typescript'),
    require.resolve('@axellero/eslint-config-import'),
    require.resolve('@axellero/eslint-config-functional'),
    require.resolve('@axellero/eslint-config-jest'),
    // Prettier has a lot of code-style overrides, so it must be last to extend.
    require.resolve('@axellero/eslint-config-prettier'),
  ],
};
