import type { Linter } from 'eslint';

export const eslintConfigFunctionalWithTypeCheck: Linter.BaseConfig = {
  parserOptions: {
    project: ['**/tsconfig.json', '**/tsconfig.*.json'],
  },
  rules: {
    // Disallow mutating objects and arrays.
    'functional/immutable-data': [
      'error',
      {
        ignoreClasses: 'fieldsOnly',
        ignoreImmediateMutation: true,
        ignoreNonConstDeclarations: true,
        ignoreAccessorPattern: [
          // Next.js page properties.
          '*.getInitialProps',
          // React component properties.
          '*.defaultProps',
          '*.propTypes',
          '*.displayName',
          // Node.js module resolution.
          'module.exports',
          'exports',
        ],
      },
    ],
    // Require function parameters to be typed as certain immutability.
    'functional/prefer-immutable-types': [
      'error',
      {
        enforcement: 'ReadonlyShallow',
        ignoreInferredTypes: true,
        ignoreClasses: true,
        parameters: {
          enforcement: 'None',
        },
        returnTypes: {
          enforcement: 'None',
        },
        variables: {
          enforcement: 'ReadonlyShallow',
        },
        fixer: {
          ReadonlyShallow: [
            {
              pattern: '^([_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*\\[\\])$',
              replace: 'readonly $1',
            },
            {
              pattern: '^(Array|Map|Set)<(.+)>$',
              replace: 'Readonly$1<$2>',
            },
            {
              pattern: '^(.+)$',
              replace: 'Readonly<$1>',
            },
          ],
        },
        suggestions: {
          ReadonlyShallow: [
            [
              {
                pattern: '^([_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*\\[\\])$',
                replace: 'readonly $1',
              },
              {
                pattern: '^(Array|Map|Set)<(.+)>$',
                replace: 'Readonly$1<$2>',
              },
              {
                pattern: '^(.+)$',
                replace: 'Readonly<$1>',
              },
            ],
          ],
        },
      },
    ],
  },
};
