# Clarity Demo Apps

The demo apps in this folder show Clarity's minimal default setup across several
different frameworks and libraries. To run an example, complete the following steps:

1. Run `yarn` at the root of the repository.
2. Run `yarn run core:build` at the root of the repository.
3. Run `yarn` again at the root.

These steps will install all the dependencies for the repository then build the
Clarity packages. Once completed, we run `yarn` again to install the local packages
to the demo apps instead of using the packages on NPM. This extra install links
the local package to the app allowing us to test local changes.

Once completed, run the `yarn start` command in the desired demo. You can run
`yarn run build` in the `/apps` directory to build all the demo apps.
