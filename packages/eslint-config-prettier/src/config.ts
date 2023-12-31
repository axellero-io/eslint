import { eslintEnvEditorconfig } from '@axellero/eslint-env';
import type { Linter } from 'eslint';

export const eslintConfigPrettier: Linter.BaseConfig = {
  extends: [
    require.resolve('@axellero/eslint-config-env'),
    require.resolve('eslint-config-prettier'),
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        quoteProps: 'consistent',
        endOfLine: eslintEnvEditorconfig.end_of_line,
        tabWidth: eslintEnvEditorconfig.indent_size,
        printWidth: eslintEnvEditorconfig.max_line_length,
      },
    ],
  },
};
