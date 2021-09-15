# Clarity Design Addon Kit

This project is a small starter kit to provide a way to build lightweight Web Components using the [Clarity Design System](https://clarity.design). This starter is boot-strapped with [open-wc](https://open-wc.org/) using `npm init @open-wc`, RollupJS and pre-installed with Clarity Core.

## Getting Started

To run the project, first install the dependencies by running `npm install`.
Once installed, start the local project by running `npm run start`. The `start`
command will place the build in watch mode as well as run storybook for demos.
If you would like a dev env outside of Storybook you can also run `sandbox`, which
provides an isolated basic web server to develop with.

## Commands

- `start`: runs local dev build and storybook in watch mode.
- `sandbox`: runs a simple isolated dev env
- `build`: builds library into dist directory for publication.
- `test`: runs unit tests and performance bundle test
- `test:watch`: runs unit tests in a watch mode
- `lint`: runs code linting
- `format`: runs code formatting (prettier)
- `storybook`: runs the storybook dev server, `start` must also run in parallel

## Configuration

- `rollup.config.js` defines all components and modules to be compiled as part of the library.
- `web-dev-server.config.mjs` defines the import map for Storybook and Sandbox to load your library and dependencies.
- `bundlesize.config.json` defines the maximum size for library output when bundled in an application.

## Publishing

When ready to publish a new version of your library, follow these steps:

1.  Update the version in the `./src/npm.json` file.
2.  Run the command `npm run build`.
3.  Publish the output contents of `./dist/lib` to your package registry of choice.

- The `npm.json` is the package file published, while the root `package.json` is for local dev build tools and dependencies.

## Additional Resources

- [Intro to Web Components](https://coryrylan.com/blog/state-of-web-components-in-2020)

- [Get started with LitElement](https://lit-element.polymer-project.org/)

- [Web Component Authoring best practices](https://open-wc.org/)

- [Web Component Performance best practices](https://medium.com/claritydesignsystem/design-system-performance-with-clarity-core-web-components-fbab56516f30).

- [Clarity Core Internal Library Architecture](https://clarity.design/storybook/core/?path=/story/internal-documentation-getting-started--page)
