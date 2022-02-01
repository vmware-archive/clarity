# Contributing to Clarity Documentation

The Clarity documentation is located at [angular.clarity.design](https://angular.clarity.design).
The documentation site documents all aspects of Clarity Angular which includes the following:

- Design Guidelines
- Accessibility Guidelines
- Angular Component Usage

To add new documentation or fix existing documentation you will need to run
our development environment on your computer. You will need to have
[NodeJS](https://nodejs.org) preinstalled as well as [Git Source Control](https://git-scm.com/).

1.  [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
    the [Clarity Repository](https://github.com/vmware/clarity) using you Github
    account.

2.  Clone the Clarity Repository

    ```bash
    ## Clone your forked repository
    git clone git@github.com:<github username>/clarity.git

    ## Navigate to the directory
    cd clarity

    ## Set name and e-mail configuration
    git config user.name "John Doe"
    git config user.email johndoe@example.com

    ## Setup the upstream remote
    git remote add upstream https://github.com/vmware/clarity.git

    ## Check out the upstream a topic branch for your changes
    git fetch
    git checkout -b topic/feature-name upstream/topic/feature-name
    ```

3.  Install Clarity Dependencies

    ```bash
    npm install
    ```

4.  Start the Demo Website

    ```bash
    npm run start
    ```

5.  See changes in your browser at `localhost:8080`

Once you have made the changes and are happy with the results you can submit and
open a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
by following our [Development Contribution Guidelines](/docs/CONTRIBUTING_DEVELOPMENT.md).
