---
toc: true
---

# Support Policies

Clarity has outlined some of its important support policies, so that consumers of Clarity can know what to expect and how to best align.

## Version Support

Clarity has a release cycle where all breaking changes are batched into major releases. We follow the pattern known as [Semantic Versioning](https://semver.org), which is a description of how we change the version number for each release of Clarity based on what types of changes it has. This helps provide consumers of Clarity a guarantee about what to expect when upgrading Clarity. The version number of Clarity has three numbers separated by dots, which are referred to as MAJOR.MINOR.PATCH. For version 3.1.2, the 3 is the MAJOR value, 1 is the MINOR value, and 2 is the PATCH value.

- A **MAJOR** release may contain breaking changes, new features, and bugfixes. v**3**.1.2
- A **MINOR** release may contain a new feature, as well as bugfixes. v3.**1**.2
- A **PATCH** release contains only bugfixes. v3.1.**2**

By knowing the version of Clarity that you are using, you can figure out what features are available to use. You also can see what features have been added that you are not able to use unless you update, which may provide incentive to update.

## Support Policy

Our support policy for Clarity releases is to actively support a major release for 6 months after a new major release is available. For example, v4 will be supported for 6 months after its predecessor v5 is released. In cases of severe issues[^issues], releases may be made for out of support releases.

| Version | Status             | Released     | Support Ends                   |
| ------- | ------------------ | ------------ | ------------------------------ |
| v13     | Actively Supported | Jan 24, 2022 | 6 months after v14 is released |
| v12     | Actively Supported | Jul 22, 2021 | Sep 1, 2022                    |
| v5      | Out of support     | Jan 21, 2021 | Feb 1, 2022                    |
| v4      | Out of support     | Aug 19, 2020 | Aug 1, 2021                    |
| v3      | Out of support     | Feb 27, 2020 | Apr 1, 2021                    |
| v2      | Out of support     | July 6, 2019 | Jan, 2021[^olderversion]       |
| v1      | Out of support     | Nov 29, 2018 | Aug, 2020[^olderversion]       |

{ .table }

## Clarity Angular and Angular Compatibility

Our Clarity Angular package is designed to explicitly support specific versions of Angular, since there are often changes in Angular or TypeScript that make it difficult to supporting more than one version.

| Clarity Angular Version | Angular | Status             |
| ----------------------- | ------- | ------------------ |
| v13                     | v13     | Actively Supported |
| v12                     | v12     | LTS                |
| v5                      | v11     | LTS                |
| v4                      | v10     | Out of support     |
| v3                      | v9      | Out of support     |
| v2                      | v8      | Out of support     |
| v1                      | v7      | Out of support     |

{ .table }

## Device and Browser Support

We actively support the following browsers on desktop and mobile devices. For each, we support the current and previous major releases only.

<ClrImage src="/images/get-started/device-support.svg" width="100%" aria-label="Image showing supported browser list that contains icons for: Edge, Chrome, Safari and Firefox."/>

- Chrome
- Safari
- Firefox
- Edge (Chromium based)[^edge]

## Accessibility Support

Clarity is tested across several sets of screen reader and browser combinations against the WCAG 2.1 spec. The testing has identified the two combinations that enable us to provide support when fixing issues related to the various assistive technologies available to users. The following are the primary combinations that we focus on when addressing issues on the Windows and macOS platforms. We only test and certify against the latest versions of these browser and screen reader combinations.

- NVDA + Google Chrome (Windows)
- VoiceOver + Safari (Apple)

We have an accessibility team that reviews any accessibility issues and verifies resolutions, to hold Clarity to a high standard for accessibility.

Footnotes:

[^issues]: A severe issue is defined as a security issue or a regression.
[^olderversion]: Previous versions of Clarity had different support policy that has lapsed.
[^edge]: The Chromium version of Edge was released January 2020, and we do not support the legacy version of Edge.
