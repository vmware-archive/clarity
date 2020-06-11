# Publishing Clarity

The workflow for building and publishing Clarity is found below. This assumes you are working on the default branch of the repository for this version.

1. Run `yarn build` from the root. This will build and test everything just like a normal CI build.
2. Update the version found in the root `package.json` file to the new version, then run `yarn publish:version` to sync the version across the project.
3. Update the website release notes files as necessary to track changes and documentation.
4. Commit the changes with format like `chore: release v4.0.0`. Also tag it with a version tag like `v4.0.0`.
5. Run a publish script, depending on what type of release you are doing:

- `yarn publish:latest` this is a standard release for the latest version of Clarity.
- `yarn publish:next` this is a prerelease version for the next Clarity release.
- `yarn publish:rc` this is a release candidate version for the next Clarity release.
- `yarn publish:local` this is a test candidate for local development with verdaccio.

6. Push the changes to Clarity branch on GitHub.
