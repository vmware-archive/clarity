# Clarity Migration ESLint Plugin

# Testing the plugin in a local project

1. Install the dependencies, run the watch script to build the package and watch for changes:

```bash
yarn
yarn run watch
```

2. Open another terminal window/tab and execute `yarn link`:

```
yarn link
```

3. Create a demo project, navigate to it and link the ESLint plugin:

```bash
ng new linter-test-project
cd linter-test-project
yarn link @clr/eslint-plugin-clarity-migration
```

4. Install the other linter dependencies

```bash
yarn add -D @typescript-eslint/parser eslint-html-parser eslint
```

5. Add ESLint configuration for TypeScript and HTML.

**.eslintrc.json**

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": ["@clr/clarity-migration"],
  "rules": {
    "@clr/clarity-migration/no-clr-button": "warn"
  },
  "overrides": [
    {
      "files": ["*.html"],
      "parser": "eslint-html-parser"
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

# Demo app

- Angular application - https://github.com/sis0k0/clarity-linter-demo

# How it works

Currently, the plugin contains a single rule - `no-clr-button`. This rule reports the usage of `<button class="btn btn-primary"></button>` inside HTML files or inside inlined Angular components templates (TS files).

For parsing the TS files in the project, the plugin uses [`@typescript-eslint/plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin). Then, it parses the HTML within the component template with [`node-html-parser`](https://www.npmjs.com/package/node-html-parser). Using the AST tree provided from node-html-parser it detects the usage of `<button class="btn btn-primary">`.

For parsing the HTML files, the plugin uses [eslint-html-parser](https://www.npmjs.com/package/eslint-html-parser).

# Known issues

The HTML parser that we use - [eslint-html-parser](https://www.npmjs.com/package/eslint-html-parser), cannot handle more than one root element in the HTML file. It doesn't report the rest of the tree. In the example below, only the `div` element will be traversed.

```html
<div>First</div>
<button class="btn btn-primary">Second</button>
```
