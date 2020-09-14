# Clarity Core Rollup JS Starter

This demo shows how to use Core with RollupJS and optimize for maximum performance.
To learn more check out our [blog post (coming soon!)]().

Note to see the final performance characteristics the app must be deployed to a
production env with proper text compression. [See running example](https://clarity-core-performance.web.app).

### Optimizations include:

- Treeshaking JavaScript
- Treeshaking CSS
- Minify HTML templates
- [Optimize lit-element](https://lit-element.polymer-project.org/guide/build)

## To run project:

1. At root of repo run `yarn`
2. In this directory run `yarn run start`

## To build in production mode:

1. `yarn run build`
2. `yarn run serve`

## Bundle output

Inspect the final JavaScript bundle output by running `yarn run bundle-check`.
