import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import external from 'rollup-plugin-auto-external';
import esbuild from 'rollup-plugin-esbuild';
import paths from 'rollup-plugin-includepaths';
import typescriptTransformPaths from 'typescript-transform-paths';
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * @param path {string}
 * @returns {import('rollup').RollupOptions}
 */
const createCommonJsConfig = (path) => {
  return ({
    input: resolve(path, './src/index.ts'),
    output: {
      dir: resolve(path, './lib'),
      entryFileNames: '[name].js',
      format: 'cjs',
      preserveModules: true,
    },
    plugins: [
      external({ packagePath: path }),
      paths({
        paths: [resolve(path, './src')],
        extensions: ['.ts'],
      }),
      esbuild({
        minify: true,
        target: 'es6',
        jsx: 'automatic',
        tsconfig: resolve(path, './tsconfig.json'),
      }),
    ],
  });
};

/**
 * @param path {string}
 * @returns {import('rollup').RollupOptions}
 */
const createTypescriptDeclarationConfig = (path) => ({
  input: resolve(path, './src/index.ts'),
  output: {
    dir: resolve(path, './lib'),
    format: 'esm',
  },
  plugins: [
    external({ packagePath: path }),
    paths({
      paths: [resolve(path, './src')],
      extensions: ['.ts'],
    }),
    typescript({
      tsconfig: resolve(path, './tsconfig.json'),
      // Only emit type declarations.
      noForceEmit: true,
      // Resolve absolute paths and replace them with relative ones.
      transformers: {
        afterDeclarations: [
          {
            type: 'program',
            factory: (program) =>
              typescriptTransformPaths.default(program, {
                afterDeclarations: true,
              }),
          },
        ],
      },
    }),
  ],
});

/**
 * @param path {string}
 * @returns {[import('rollup').RollupOptions, import('rollup').RollupOptions]}
 */
const createPackageConfig = (path) =>
  [createTypescriptDeclarationConfig(path), createCommonJsConfig(path)]

/**
 * @type {string[]}
 */
const packages = [
  'eslint-env',
  'eslint-config-env',
  'eslint-config-core',
  'eslint-config-import',
  'eslint-config-typescript',
  'eslint-config-functional',
  'eslint-config-jest',
  'eslint-config-jsx-a11y',
  'eslint-config-react',
  'eslint-config-prettier',
  'eslint-config',
]

/**
 * @type {import('rollup').RollupOptions}
 */
export default defineConfig(
  packages.flatMap((name) =>
    createPackageConfig(fileURLToPath(new URL(`./packages/${name}`, import.meta.url)))
  )
);
