# Contributing to Clarity

The Clarity project team welcomes contributions from the community. Together, we can grow Clarity and make it a better framework.

Before you contribute in any way to Clarity, please make sure to read our [code of conduct](/CODE_OF_CONDUCT.md).

## Types of contribution

Because Clarity provides everything from the abstract patterns of a design system to the nitty-gritty implementation of
accessibility for Angular components, contributions to Clarity can take many forms, and each of them will correspond
to part of the full process. Generally speaking, contributions fit into one or more of these categories:

* New design or update to an existing one: general patterns, components, features, ... See
  [Contributing to Design](#contributing-to-design).
* Implementation of an existing design and bug fixes (which might involve a design). See
  [Contributing to Development](#contributing-to-development).
* Documentation. See [Contributing to Documentation](#contributing-to-documentation).

Many contributions can fall into more than one of these categories at once but it's important to split the contribution
along these steps, to make sure each of them is solid before moving on to the next.
For instance, if you want to contribute a brand new Angular component to Clarity you'll first need to go through a
design submission step, then you can move to the development contribution process once the design has been finalized,
and finally you can add the corresponding documentation to the website
(that step is strongly recommended but optional, we know how it is...).

## Contributing to Design

There are three parts to the design contribution process. When beginning the design of a new component, please follow the guidelines outlined in
[DESIGN_CONTRIBUTION.md](/DESIGN_CONTRIBUTION.md).

## Contributing to Development

Barring exceptionally small contributions like one-line bug fixes, please follow the process described in
[DEVELOPMENT_CONTRIBUTION.md](/DEVELOPMENT_CONTRIBUTION.md).

## Contributing to Documentation

The [Clarity documentation website](https://clarity.design) is in the folder `src/website`. You can contribute
to the documentation by submitting pull requests with changes that update the demos in that application. Details about
how to setup
and run the website locally can be found on the wiki at https://github.com/vmware/clarity/wiki/Building-the-Website.
Please note that for larger contributions to the website, you will need to follow the [development contribution
process](/DEVELOPMENT_CONTRIBUTION.md) too.

## Reporting Bugs and Creating Issues

You can submit an issue or a bug to our [GitHub repository](https://github.com/vmware/clarity/issues). You must provide:

* The link to the reproduction scenario you created using one of the
  [Clarity StackBlitz Templates](https://stackblitz.com/@clr-team)
* If possible please provide a minimal demo illustrating the issue by forking one of the
  [Clarity StackBlitz Templates](https://stackblitz.com/@clr-team)
* The version number of Angular
* The version number of Clarity
* The browser name and version number
* Screenshot is also a good way to show us what is the issue

When providing NPM package version. Make sure to check them from the `package-lock.json` file.
This is extremely important in the cases that NPM [versioning tags](https://devhints.io/semver) are applied.
