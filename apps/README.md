# Clarity Demo Apps

The demo apps in this folder show Clarity's minimal default setup across several
different frameworks and libraries. To run an example, complete the following steps:

1. Run `yarn` at the root of the repository.
2. Run `yarn run core:build` at the root of the repository.

These steps will install all the dependencies for the repository then build the
Clarity packages. Once completed all demo apps will have a copy of the latest
build in their `node_modules`.

Once completed, run the `yarn start` command in the desired demo. You can run
`yarn run build` in the `/apps` directory to build all the demo apps.

To update the local version of Core a demo app uses run `yarn run core:build`.
This will rebuild and copy the latest into each demo app.
