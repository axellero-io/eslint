<h1 align="center">
  <a target="_blank" href="https://axellero.io">
    <img
      height="64"
      src="https://raw.githubusercontent.com/axellero-io/eslint/main/.github/assets/logo.png"
      alt="axellero logo"
    />
    <br/>
    @axellero/eslint-config-typescript
  </a>
</h1>

<p align="center">ESLint configuration for TypeScript</p>

<p align="center">
  <a href="https://github.com/axellero-io/eslint/actions?query=workflow%3A%22Lint+and+Test%22">
    <img
      src="https://github.com/axellero-io/eslint/workflows/Lint%20and%20Test/badge.svg"
      alt="axellero/eslint repository github workflow status"
    />
  </a>
  <a href="https://github.com/axellero-io/eslint/blob/main/LICENSE">
    <img
      src="https://img.shields.io/github/license/axellero-io/eslint?label=License"
      alt="axellero/eslint repository license"
    />
  </a>
   <a href="https://www.npmjs.com/package/@axellero/eslint-config-typescript">
     <img
       src="https://img.shields.io/npm/v/@axellero/eslint-config-typescript?color=blue&logo=npm&label="
       alt="@axellero/eslint-config-typescript"
     />
   </a>
</p>

## Installation
Add peer dependencies:
```shell
$ yarn add -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
...then install config packages:
```shell
$ yarn add -D @axellero/eslint-config-typescript
```

## Usage
```json5
{
  // package.json
  "eslintConfig": {
    "extends": [
      "@axellero/eslint-config-typescript",
      // WARNING.
      // Requires tsconfig to be presented in `parserOptions.project`.
      // May cause performance problems, so we don't recommend adding it right away.
      "@axellero/eslint-config-typescript/with-type-check"
    ]
  }
}
```

## Contributing
Any PR is welcomed by our **@js-opensource** team.
Check out our [contributing](../../CONTRIBUTING.md) guidelines for more info.

## License
[![axellero eslint config license](https://img.shields.io/github/license/axellero-io/eslint?label=as%20always&color=informational)](../../LICENSE)
