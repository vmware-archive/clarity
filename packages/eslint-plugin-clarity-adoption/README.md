# Clarity Adoption ESLint Plugin

## Installation

```sh
npm install --save-dev @clr/eslint-plugin-clarity-adoption @typescript-eslint/parser eslint
```

## Usage

Configure in your ESLint config file like you see below. The overrides section is important to enable it to parse HTML files as well.

**.eslintrc.json**

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2015
  },
  "plugins": ["@clr/clarity-adoption"],
  "rules": {
    "@clr/clarity-adoption/no-clr-button": "warn",
    "@clr/clarity-adoption/no-clr-alert": "warn",
    "@clr/clarity-adoption/no-clr-icon": "warn"
  },
  "overrides": [
    {
      "files": ["*.html"],
      "parser": "@clr/eslint-plugin-clarity-adoption/html-parser"
    }
  ]
}
```

**Note:** If you don't have ESLint config file, create a new file named **.eslintrc.json** in the root of your project and copy the content above.

Finally, you'll need to run eslint with the `--ext` flag to enable HTML scanning like `npx eslint --ext=ts,html src/`.

## Testing the plugin in a local project

1. Install the dependencies, run the watch script to build the package and watch for changes:

```bash
yarn
yarn run watch
```

2. Open another terminal window/tab, navigate to the `dist` directory and execute `yarn link`:

```
cd ../../dist/eslint-plugin-clarity-adoption
yarn link
```

3. Create a demo project, navigate to it and link the ESLint plugin:

```bash
ng new linter-test-project
cd linter-test-project
yarn link @clr/eslint-plugin-clarity-adoption
```

4. Install the other linter dependencies

```bash
yarn add -D @typescript-eslint/parser eslint
```

5. Add ESLint configuration for TypeScript and HTML.

**.eslintrc.json**

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2015
  },
  "plugins": ["@clr/clarity-adoption"],
  "rules": {
    "@clr/clarity-adoption/no-clr-button": "warn",
    "@clr/clarity-adoption/no-clr-alert": "warn",
    "@clr/clarity-adoption/no-clr-icon": "warn"
  },
  "overrides": [
    {
      "files": ["*.html"],
      "parser": "@clr/eslint-plugin-clarity-adoption/html-parser"
    }
  ]
}
```

6. Lint the project

```bash
# Lint both the TypeScript and HTML files
npx eslint --ext=ts,html src/
```

7. You can make changes to the plugin and then test them in the demo project without any additional steps!

## Demo app

- Angular application - https://github.com/sis0k0/clarity-linter-demo

## How it works

Currently, the plugin contains a single rule - `no-clr-button`. This rule reports the usage of `<button class="btn btn-primary"></button>` inside HTML files or inside inlined Angular components templates (TS files).

For parsing the TS files in the project, the plugin uses [`@typescript-eslint/plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin). Then, it parses the HTML within the component template with [`node-html-parser`](https://www.npmjs.com/package/node-html-parser). Using the AST tree provided from node-html-parser it detects the usage of `<button class="btn btn-primary">`.

For parsing the HTML files, the plugin uses an internalized version of [eslint-html-parser](https://www.npmjs.com/package/eslint-html-parser). The original package is patched to work with HTML files containing more than one root element, such as:

```html
<div>
  ...
</div>
<div>
  ...
</div>
```
