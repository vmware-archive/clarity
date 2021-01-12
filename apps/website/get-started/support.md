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

| Version | Status             | Released     | Support Ends                  |
| ------- | ------------------ | ------------ | ----------------------------- |
| v5      | Prerelease         | TBD          | 6 months after v6 is released |
| v4      | Actively Supported | Aug 19, 2020 | 6 months after v5 is released |
| v3      | Actively Supported | Feb 27, 2020 | Mar 1, 2021                   |
| v2      | Out of support     | July 6, 2019 | Jan, 2021[^olderversion]      |
| v1      | Out of support     | Nov 29, 2018 | Aug, 2020[^olderversion]      |

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

[^issues]: A severe issue is defined as a security issue or a regression.
[^olderversion]: Previous versions of Clarity had different support policy that has lapsed.
[^edge]: The Chromium version of Edge was released January 2020, and we do not support the legacy version of Edge.
