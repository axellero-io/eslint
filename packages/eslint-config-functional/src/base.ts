import type { Linter } from 'eslint';

export const eslintConfigFunctionalBase: Linter.BaseConfig = {
  rules: {
    // Disallow classes.
    'functional/no-classes': 'off',
    // Restrict types so that only members of the same kind of are allowed in them.
    'functional/no-mixed-types': 'off',
    // Disallow this access.
    'functional/no-this-expressions': 'off',
    // Disallow conditional statements.
    'functional/no-conditional-statements': 'off',
    // Using expressions to cause side-effects not allowed.
    'functional/no-expression-statements': 'off',
    // Disallow Returning Nothing.
    'functional/no-return-void': 'off',
    // Disallow Rejecting Promises.
    'functional/no-promise-reject': 'off',
    // Disallow throwing exceptions.
    'functional/no-throw-statements': 'off',
    // Disallow try-catch[-finally] and try-finally patterns.
    'functional/no-try-statements': 'off',
    // Enforce Functional Parameters.
    'functional/functional-parameters': 'off',
    // Enforces using functions directly if they can be without wrapping them.
    'functional/prefer-tacit': 'off',
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
    // Disallow mutable variables.
    'functional/no-let': 'error',
    // Disallow imperative loops.
    'functional/no-loop-statements': 'error',
    // Prefer property signatures with readonly modifiers over method signatures.
    'functional/prefer-property-signatures': 'error',
  },
};
