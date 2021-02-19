![Clarity](logo.png)

# Clarity Design System

![Build](https://github.com/vmware/clarity/workflows/Build/badge.svg)
![Website](https://github.com/vmware/clarity/workflows/Website/badge.svg)

Project Clarity is an open source design system that brings together UX
guidelines, an HTML/CSS framework, Angular components, and Web Components. This
repository includes everything you need to build, customize, test, and deploy
Clarity. For complete documentation, visit the [Clarity website](https://clarity.design).

## Getting Started

Clarity is published as five npm packages:

- [![npm version core](https://img.shields.io/npm/v/@cds/core/latest?label=%40cds%2Fcore&style=flat-square)](https://www.npmjs.com/package/@cds/core) Contains the Web
  Components that work in any JavaScript framework.
- [![npm version cds angular](https://img.shields.io/npm/v/@cds/angular/latest?label=%40cds%2Fangular&style=flat-square)](https://www.npmjs.com/package/@cds/angular) Contains shims for core usage in Angular environment
- [![npm version ui](https://img.shields.io/npm/v/@clr/ui/latest?label=%40clr%2Fui&style=flat-square)](https://www.npmjs.com/package/@clr/ui) Contains the static
  styles for building HTML components.
- [![npm version clr angular](https://img.shields.io/npm/v/@clr/angular/latest?label=%40clr%2Fangular&style=flat-square)](https://www.npmjs.com/package/@clr/angular) Contains the
  Angular components. This package depends on `@clr/ui` for styles.
- [![npm version clarity city](https://img.shields.io/npm/v/@cds/city/latest?label=%40cds%2Fcity&style=flat-square)](https://www.npmjs.com/package/@cds/city) Our open source sans-serif typeface.

## Installing Clarity

- **[Install CSS Only](/docs/INSTALLATION.md#installing-clarity-ui)**
- **[Install Angular Components](/docs/INSTALLATION.md#installing-clarity-angular)**
- **[Install Web Components](/docs/INSTALLATION.md#installing-clarity-web-components)**

## Documentation

For documentation on the Clarity Design System, including a list of components
and example usage, see [our website](https://clarity.design).

## Contributing

The Clarity project team welcomes contributions from the community. For more
detailed information, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Licenses

- The Clarity Design System is licensed under the MIT license.
- The font is licensed under the Open Font License (OFL).

## Feedback

If you find a bug or want to request a new feature, please open a [GitHub issue](https://github.com/vmware/clarity/issues).

Include a link to the reproduction scenario you created by forking one of the
Clarity Stackblitz Templates for the version you are using at
[Clarity StackBlitz templates](https://stackblitz.com/@clr-team/).

## Support

The team supports up to 2 versions behind the latest one.

For questions, ideas, or just reaching out to the team feel free to open a discussion in our [GitHub Disscussion section](https://github.com/vmware/clarity/discussions).
