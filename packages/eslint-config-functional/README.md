<h1 align="center">
  <a target="_blank" href="https://axellero.io">
    <img
      height="64"
      src="https://raw.githubusercontent.com/axellero-io/eslint/main/.github/assets/logo.png"
      alt="axellero logo"
    />
    <br/>
    @axellero/eslint-config-functional
  </a>
</h1>

<p align="center">ESLint configuration for Functional Programming</p>

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
   <a href="https://www.npmjs.com/package/@axellero/eslint-config-functional">
     <img
       src="https://img.shields.io/npm/v/@axellero/eslint-config-functional?color=blue&logo=npm&label="
       alt="@axellero/eslint-config-functional"
     />
   </a>
</p>

## Installation
Add peer dependencies:
```shell
$ yarn add -D eslint eslint-plugin-functional
```
...then install config packages:
```shell
$ yarn add -D @axellero/eslint-config-functional
```

## Usage
```json5
{
  // package.json
  "eslintConfig": {
    "extends": [
      "@axellero/eslint-config-functional",
      // Read more about strict config below...
      "@axellero/eslint-config-functional/strict"
    ]
  }
}
```

## Strict Config
By default, javascript doesn't provide enough utilities to fully support functional programming code.
Because of that by default we will deliver general good practice rules.
But if you're using fp libraries (like [fp-ts](https://github.com/gcanti/fp-ts)
or [purify](https://github.com/gigobyte/purify)) we recommend adding the Strict Config.

## Contributing
Any PR is welcomed by our **@js-opensource** team.
Check out our [contributing](../../CONTRIBUTING.md) guidelines for more info.

## License
[![axellero eslint config license](https://img.shields.io/github/license/axellero-io/eslint?label=as%20always&color=informational)](../../LICENSE)
