<h1 align="center">
  <a target="_blank" href="https://axellero.io">
    <img
      height="64"
      src="https://raw.githubusercontent.com/axellero-io/eslint/main/.github/assets/logo.png"
      alt="axellero logo"
    />
    <br/>
    @axellero/eslint-config-import
  </a>
</h1>

<p align="center">ESLint configuration for ES6 Imports and Exports</p>

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
   <a href="https://www.npmjs.com/package/@axellero/eslint-config-import">
     <img
       src="https://img.shields.io/npm/v/@axellero/eslint-config-import?color=blue&logo=npm&label="
       alt="@axellero/eslint-config-import"
     />
   </a>
</p>

## Installation
Add peer dependencies:
```shell
$ yarn add -D eslint eslint-plugin-import eslint-plugin-simple-import-sort
```
...then install config packages:
```shell
$ yarn add -D @axellero/eslint-config-import
```

## Usage
```json5
{
  // package.json
  "eslintConfig": {
    "extends": [
      "@axellero/eslint-config-import"
    ]
  }
}
```

## Contributing
Any PR is welcomed by our **@js-opensource** team.
Check out our [contributing](../../CONTRIBUTING.md) guidelines for more info.

## License
[![axellero eslint config license](https://img.shields.io/github/license/axellero-io/eslint?label=as%20always&color=informational)](../../LICENSE)
