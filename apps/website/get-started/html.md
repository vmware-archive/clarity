# HTML/CSS Quickstart

Clarity provides its CSS as a standalone package for applications to use if they want to use Clarity without Angular. This is useful for some projects that want to look like Clarity but, for any number of reasons, may not want or be able to use Angular.

> It is important to note that many components are not functional without Angular, and applications will need to either avoid those components or implement the interaction on their own. For example, if you are using Vue.js, you can still get Clarity styling on your page but behaviors like Datagrid interactions will not work out of the box.

## Step 1: Install Dependencies

If you just want to use our HTML/CSS implementations, you need to get the latest code and then add the assets to your project. You can use `npm` or `yarn` to install the dependencies based on your preferred system.

<DocDemo toggle="false">

```bash
npm install @clr/ui @clr/icons @webcomponents/webcomponentsjs --save
```

</DocDemo>

<DocDemo toggle="false">

```bash
yarn add @clr/ui @clr/icons @webcomponents/webcomponentsjs
```

</DocDemo>

## Step 2: Include CSS and JavaScript

Depending on your framework and build tooling, this step may be done in many different ways. Essentially, you need to include several CSS and JavaScript files to your application. The files below are what you'll need to include.

- Clarity CSS: `node_modules/@clr/ui/clr-ui.min.css`{.clr-code} or `node_modules/@clr/ui/clr-ui-dark.min.css`{.clr-code}
- Clarity Icons CSS: `node_modules/@clr/icons/clr-icons.min.css`{.clr-code}
- Clarity Icons JS: `node_modules/@clr/icons/clr-icons.min.js`{.clr-code}
- Custom Elements Polyfill: `node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js`{.clr-code} and `node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js`{.clr-code}

You can also load this CSS file from a CDN like you see below. See [unpkg.com](https://unpkg.com/#/) for more details.

<DocDemo toggle="false">

```html
<!-- Load the latest version -->
<link rel="stylesheet" href="https://unpkg.com/@clr/ui/clr-ui.min.css" />
<link rel="stylesheet" href="https://unpkg.com/@clr/icons/clr-icons.min.css" />

<!-- Or load a specific version -->
<link rel="stylesheet" href="https://unpkg.com/@clr/ui@3.0.0/clr-ui.min.css" />
<link rel="stylesheet" href="https://unpkg.com/@clr/icons@3.0.0/clr-icons.min.css" />
```

</DocDemo>

## What's next?

1. Add Clarity components wherever they are needed in your application
1. Explore the component usage, demo and api sections to learn about specific coomponents
1. Get help by asking a question on [StackOverflow](https://stackoverflow.com/questions/tagged/vmware-clarity) and tagging it with `vmware-clarity`
1. Follow [Clarity on Twitter](https://twitter.com/vmwareclarity), stay up to date
