<h1 align="center">
  <a target="_blank" href="https://axellero.io/en">
    ✨
    <img
      height="22.5"
      src="https://raw.githubusercontent.com/axellero/eslint/main/.github/assets/logo.png"
      alt="axellero logo"
    />
    /eslint-config-jsx-a11y
  </a>
</h1>

<p align="center">ESLint configuration for JSX Accessibility</p>

<p align="center">
  <a href="https://github.com/axellero-io/eslint/actions?query=workflow%3A%22Lint+and+Test%22">
    <img
      src="https://github.com/axellero-io/eslint/workflows/Lint%20and%20Test/badge.svg"
      alt="axellero/eslint repository github workflow status"
    />
  </a>
  <a href="https://github.com/axellero-io/eslint/blob/main/LICENSE">
    <img
      src="https://img.shields.io/github/license/axellero/eslint?label=License"
      alt="axellero/eslint repository license"
    />
  </a>
   <a href="https://www.npmjs.com/package/@axellero/eslint-config-jsx-a11y">
     <img
       src="https://img.shields.io/npm/v/@axellero/eslint-config-jsx-a11y?color=blue&logo=npm&label="
       alt="@axellero/eslint-config-jsx-a11y"
     />
   </a>
</p>

## Installation
Add peer dependencies:
```shell
$ yarn add -D eslint eslint-plugin-jsx-a11y
```
...then install config packages:
```shell
$ yarn add -D @axellero/eslint-config-jsx-a11y
```

## Usage
```json5
{
  // package.json
  "eslintConfig": {
    "extends": [
      "@axellero/eslint-config-jsx-a11y"
    ]
  }
}
```

## Contributing
Any PR is welcomed by our **@js-opensource** team.
Check out our [contributing](../../CONTRIBUTING.md) guidelines for more info.

## License
[![axellero eslint config license](https://img.shields.io/github/license/axellero/eslint?label=as%20always&color=informational)](../../LICENSE)
