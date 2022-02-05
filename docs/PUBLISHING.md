# Publishing Clarity

Public releases are automatically handled through the following two GitHub workflows:

- `build`: Will automatically run a full build whenever a pull request is opened

- `release`: Will automatically create a GitHub release and publish both packages to npm when code is pushed to a release or maintenence branch. This is also triggered nightly at 8am UTC to publish a nightly release if there are any significant changes.
