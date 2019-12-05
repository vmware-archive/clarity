<a name="3.0.0-next.4"></a>

# [3.0.0-next.4](https://github.com/vmware/clarity/compare/3.0.0-next.3...v3.0.0-next.4) (2019-12-05)

### Bug Fixes

* **build:** stop csso from restructuring our styles ([331a9f7](https://github.com/vmware/clarity/commit/331a9f7))
* add css prop docs ([27141df](https://github.com/vmware/clarity/commit/27141df))
* aria-live.service to handle SR for all browsers and OS ([08c00e8](https://github.com/vmware/clarity/commit/08c00e8))
* core add tag element types ([c4d5ecc](https://github.com/vmware/clarity/commit/c4d5ecc))
* core golden exports ([7b62ba1](https://github.com/vmware/clarity/commit/7b62ba1))
* datagrid animation performance issues ([41bd079](https://github.com/vmware/clarity/commit/41bd079)), closes [#3864](https://github.com/vmware/clarity/issues/3864)
* prfixup ([c9cdea2](https://github.com/vmware/clarity/commit/c9cdea2))
* update css vars ponyfill ([1a3240b](https://github.com/vmware/clarity/commit/1a3240b))
* **button:** core button a11y fixes ([3be4137](https://github.com/vmware/clarity/commit/3be4137))

### Features

* **badge:** core badge ([3c73911](https://github.com/vmware/clarity/commit/3c73911))
* **button:** improvements to base button ([d33dbad](https://github.com/vmware/clarity/commit/d33dbad))
* **date-picker:** adds min/max date boundries for datepicker ([0ed5869](https://github.com/vmware/clarity/commit/0ed5869)), closes [#1984](https://github.com/vmware/clarity/issues/1984)

<a name="3.0.0-next.3"></a>

# [3.0.0-next.3](https://github.com/vmware/clarity/compare/v3.0.0-next.2...3.0.0-next.3) (2019-11-19)

### Bug Fixes

* remove broke stylelint rule ([90b0ac6](https://github.com/vmware/clarity/commit/90b0ac6))
* **datagrid:** toggling sorting icon ([54c2c4c](https://github.com/vmware/clarity/commit/54c2c4c)), closes [#3823](https://github.com/vmware/clarity/issues/3823)
* **datepicker:** prevent date from being deleted when selected on mobile ([af9ff5b](https://github.com/vmware/clarity/commit/af9ff5b))
* **datepicker:** prevent date input from displaying -1 day for specific timezones on mobile devices ([a6c0968](https://github.com/vmware/clarity/commit/a6c0968))
* **select:** add select option font color ([a7a2bed](https://github.com/vmware/clarity/commit/a7a2bed))
* **vertical-nav:** add aria-expanded to vertical nav ([bd4e2d9](https://github.com/vmware/clarity/commit/bd4e2d9)), closes [#3575](https://github.com/vmware/clarity/issues/3575) [#3919](https://github.com/vmware/clarity/issues/3919) [#3919](https://github.com/vmware/clarity/issues/3919) [#3575](https://github.com/vmware/clarity/issues/3575)
* datagrid clrDgFilterOpenChange was not fired ([89e569f](https://github.com/vmware/clarity/commit/89e569f))
* missing dependency for tree-node ([043654e](https://github.com/vmware/clarity/commit/043654e))
* removes unnecessary text from the mobile header title ([6bbee94](https://github.com/vmware/clarity/commit/6bbee94)), closes [#3853](https://github.com/vmware/clarity/issues/3853)
* select-all checkmark position ([8a1ad96](https://github.com/vmware/clarity/commit/8a1ad96))
* templates for private/unused variables ([0f3332d](https://github.com/vmware/clarity/commit/0f3332d))
* website is missing code-highlight utils module for navigation page ([01854cb](https://github.com/vmware/clarity/commit/01854cb))

### Features

* adding equilateral sass mixins ([22b460c](https://github.com/vmware/clarity/commit/22b460c))
* **button:** core buttons ([84aab93](https://github.com/vmware/clarity/commit/84aab93))
* **form:** generic way to override column widths ([a0aeea9](https://github.com/vmware/clarity/commit/a0aeea9))
* **icons:** migrating clarity icons to core ([671062b](https://github.com/vmware/clarity/commit/671062b))
* **icons:** vol 16 icons ([d5c5ac6](https://github.com/vmware/clarity/commit/d5c5ac6))

<a name="3.0.0-next.2"></a>

# [3.0.0-next.2](https://github.com/vmware/clarity/compare/v2.2.0...v3.0.0-next.2) (2019-10-18)

### Bug Fixes

* **a11y:** changing color of yellow icons for a11y ([95a933e](https://github.com/vmware/clarity/commit/95a933e))
* **build:** remove google-chrome-stable from addon ([982cbae](https://github.com/vmware/clarity/commit/982cbae))
* **datagrid:** adding tests for clrDgColType ([b7a5c2e](https://github.com/vmware/clarity/commit/b7a5c2e))
* **datagrid:** align column header vertically ([f373ee1](https://github.com/vmware/clarity/commit/f373ee1))
* **datagrid:** change test describe block ([6b66ec1](https://github.com/vmware/clarity/commit/6b66ec1))
* **datagrid:** datagrid current page not rendered correctly in IE 11 ([0b902e4](https://github.com/vmware/clarity/commit/0b902e4)), closes [#3747](https://github.com/vmware/clarity/issues/3747)
* **datagrid:** don't emit page changes on destroy ([974ff9c](https://github.com/vmware/clarity/commit/974ff9c)), closes [#3815](https://github.com/vmware/clarity/issues/3815)
* **datagrid:** include missing tests for datagrid-numeric-filter ([c5c9842](https://github.com/vmware/clarity/commit/c5c9842))
* **datagrid:** not working numberic filters at the datagrid ([a39ce80](https://github.com/vmware/clarity/commit/a39ce80))
* **datagrid:** remove fdescribe ([c84939f](https://github.com/vmware/clarity/commit/c84939f))
* **header:** icons in header documentation ([b9c8bde](https://github.com/vmware/clarity/commit/b9c8bde)), closes [#3616](https://github.com/vmware/clarity/issues/3616)
* **icons:** 'ClarityIcons.add' must be case insensitive ([64c5685](https://github.com/vmware/clarity/commit/64c5685)), closes [#3800](https://github.com/vmware/clarity/issues/3800)
* **signpost:** fix signpost focus management ([26bacc4](https://github.com/vmware/clarity/commit/26bacc4))
* **signpost:** use default cursor in popover ([c102c4d](https://github.com/vmware/clarity/commit/c102c4d)), closes [#3803](https://github.com/vmware/clarity/issues/3803)
* **stack-view:** a11y add aria-controls to stack-view ([1b1f044](https://github.com/vmware/clarity/commit/1b1f044)), closes [#3567](https://github.com/vmware/clarity/issues/3567)
* **stack-view:** stack view async loading ([53527e1](https://github.com/vmware/clarity/commit/53527e1)), closes [#3565](https://github.com/vmware/clarity/issues/3565)
* **tabs:** extra spacing between tab and tab content in ie 11 ([c4e6979](https://github.com/vmware/clarity/commit/c4e6979)), closes [#3748](https://github.com/vmware/clarity/issues/3748)
* download links don't indicate their purpose ([6dac2e7](https://github.com/vmware/clarity/commit/6dac2e7)), closes [#3168](https://github.com/vmware/clarity/issues/3168)
* focus indicator for multi select ([b3eccaa](https://github.com/vmware/clarity/commit/b3eccaa))
* focus stealing in modal by using disable-able clrFocusOnViewInit ([b1baacb](https://github.com/vmware/clarity/commit/b1baacb))
* form a11y ([eba5d10](https://github.com/vmware/clarity/commit/eba5d10)), closes [#3556](https://github.com/vmware/clarity/issues/3556)
* icon colors do not match clr-ui dark mode colors (hsl) ([49546e8](https://github.com/vmware/clarity/commit/49546e8))
* keep consistent height if signpost in datagrid header ([f0a9293](https://github.com/vmware/clarity/commit/f0a9293)), closes [#1279](https://github.com/vmware/clarity/issues/1279)
* on website input grouping heading overlaps example ([4afa5d9](https://github.com/vmware/clarity/commit/4afa5d9)), closes [#3802](https://github.com/vmware/clarity/issues/3802)
* remove max-height from `pre` ([a177618](https://github.com/vmware/clarity/commit/a177618)), closes [#1138](https://github.com/vmware/clarity/issues/1138)
* selecting content in modal body ([8a25b58](https://github.com/vmware/clarity/commit/8a25b58))
* update clr-angular.d.ts ([c953600](https://github.com/vmware/clarity/commit/c953600))
* website regression ([da0158f](https://github.com/vmware/clarity/commit/da0158f))
* **website:** add padding-right to responsive footer ([4e166e6](https://github.com/vmware/clarity/commit/4e166e6))
* **wizard:** wizard title gets double focus attempts ([05265b6](https://github.com/vmware/clarity/commit/05265b6)), closes [#3792](https://github.com/vmware/clarity/issues/3792)

### Features

* **datagrid:** add detail pane ([ee0058b](https://github.com/vmware/clarity/commit/ee0058b)), closes [#2005](https://github.com/vmware/clarity/issues/2005)
* scss deprecations and base20 rem refactor ([e9d8046](https://github.com/vmware/clarity/commit/e9d8046))
* **datagrid:** disable single or multi rows from selection ([403daee](https://github.com/vmware/clarity/commit/403daee)), closes [#1018](https://github.com/vmware/clarity/issues/1018)
* **datagrid:** preserve selection while filtering ([8bdd294](https://github.com/vmware/clarity/commit/8bdd294))
* **tree-view:** a11y and focus management ([039c224](https://github.com/vmware/clarity/commit/039c224)), closes [#3569](https://github.com/vmware/clarity/issues/3569) [#3571](https://github.com/vmware/clarity/issues/3571) [#3573](https://github.com/vmware/clarity/issues/3573)
* **wizard:** wizard step error state ([49b453f](https://github.com/vmware/clarity/commit/49b453f)), closes [#2203](https://github.com/vmware/clarity/issues/2203)
* scss deprecations and css custom properties for 3.0 ([9862fe2](https://github.com/vmware/clarity/commit/9862fe2))

### BREAKING CHANGES

* this changes the default height for a `pre` element, but can be easily overriden on app level

<a name="2.2.0"></a>

# [2.2.0](https://github.com/vmware/clarity/compare/v2.1.2...v2.2.0) (2019-09-05)

### Bug Fixes

* ClrAccordionModule and ClrStepperModule added to default exports ([e0e2c56](https://github.com/vmware/clarity/commit/e0e2c56))
* **a11y:** add bumpers to the datepicker ([2840c0c](https://github.com/vmware/clarity/commit/2840c0c)), closes [#3466](https://github.com/vmware/clarity/issues/3466)
* **color:** visually hidden text is not hidden from screen readers ([f205365](https://github.com/vmware/clarity/commit/f205365)), closes [#3176](https://github.com/vmware/clarity/issues/3176)
* **datagrid:** fix hsl regression ([c2db3f6](https://github.com/vmware/clarity/commit/c2db3f6))
* **dropdown:** handle focus first item when there is non selectable item ([f483de1](https://github.com/vmware/clarity/commit/f483de1))
* **header:** clarity icons with text misaligned in ie11 ([ccbd1e1](https://github.com/vmware/clarity/commit/ccbd1e1)), closes [#3519](https://github.com/vmware/clarity/issues/3519)
* **sidenav:** sidenav in website documentation page doesn't collapse ([4ff84f2](https://github.com/vmware/clarity/commit/4ff84f2)), closes [#3704](https://github.com/vmware/clarity/issues/3704)
* **tooltip:** deprecation overwrote dark theme variable ([d46a9de](https://github.com/vmware/clarity/commit/d46a9de))
* website routing focus management ([146e150](https://github.com/vmware/clarity/commit/146e150))
* **wizard:** deprecate inline wizard ([6e959ed](https://github.com/vmware/clarity/commit/6e959ed)), closes [#3591](https://github.com/vmware/clarity/issues/3591)

### Features

* [UI] Implement timeline component ([cc5e7e5](https://github.com/vmware/clarity/commit/cc5e7e5)), closes [#3199](https://github.com/vmware/clarity/issues/3199)
* **datagrid:** update datagrid popovers with new utility ([2e195c9](https://github.com/vmware/clarity/commit/2e195c9)), closes [#3374](https://github.com/vmware/clarity/issues/3374) [#652](https://github.com/vmware/clarity/issues/652) [#3161](https://github.com/vmware/clarity/issues/3161) [#3244](https://github.com/vmware/clarity/issues/3244) [#2683](https://github.com/vmware/clarity/issues/2683) [#2186](https://github.com/vmware/clarity/issues/2186)
* add clrFocusOnViewInit ([3fef3ab](https://github.com/vmware/clarity/commit/3fef3ab))
* **datepicker:** support clrPosition ([b0e6910](https://github.com/vmware/clarity/commit/b0e6910)), closes [#2331](https://github.com/vmware/clarity/issues/2331)
* **timeline:** adding gemini tests for the timeline ([5bffb87](https://github.com/vmware/clarity/commit/5bffb87))
* **timeline:** updating the timeline component to new sizing ([49411fa](https://github.com/vmware/clarity/commit/49411fa))

<a name="2.1.2"></a>

## [2.1.2](https://github.com/vmware/clarity/compare/v2.1.1...v2.1.2) (2019-08-22)

### Bug Fixes

* **a11y:** only set default icon role if it has no role defined by user ([a2e92ae](https://github.com/vmware/clarity/commit/a2e92ae))
* **accordion:** remove rounded corners when last panel is open ([a9bd2ac](https://github.com/vmware/clarity/commit/a9bd2ac)), closes [#3685](https://github.com/vmware/clarity/issues/3685)
* **date-picker:** adds aria-labels for buttons ([bf8430a](https://github.com/vmware/clarity/commit/bf8430a)), closes [#3467](https://github.com/vmware/clarity/issues/3467)
* alerts in wizzard are read immediately when not urgent ([d241772](https://github.com/vmware/clarity/commit/d241772))
* feedback from Jeeyun ([3d4c183](https://github.com/vmware/clarity/commit/3d4c183))
* feedback(Shijir) ([2dd487c](https://github.com/vmware/clarity/commit/2dd487c))
* feedback(shijir) - remove tooltip id service ([ae50a82](https://github.com/vmware/clarity/commit/ae50a82))
* improve screen reader behaviors on stack-view and modal ([3f102e7](https://github.com/vmware/clarity/commit/3f102e7)), closes [#3566](https://github.com/vmware/clarity/issues/3566)
* pr change (jeeyun and shijir) ([b813391](https://github.com/vmware/clarity/commit/b813391))
* preventing duplicate style declarations in CSS ([5629635](https://github.com/vmware/clarity/commit/5629635)), closes [#3540](https://github.com/vmware/clarity/issues/3540)
* remove unused code ([b36b699](https://github.com/vmware/clarity/commit/b36b699))
* **table:** table font-size not overrideable ([b7bea0d](https://github.com/vmware/clarity/commit/b7bea0d)), closes [#3544](https://github.com/vmware/clarity/issues/3544)
* **tooltip:** adds a11y to tooltip ([530a2ed](https://github.com/vmware/clarity/commit/530a2ed))

### Features

* migrate color values from hex to hsl ([bc4b8bc](https://github.com/vmware/clarity/commit/bc4b8bc)), closes [#3286](https://github.com/vmware/clarity/issues/3286)
* **datagrid:** Expose current page for clrDgRefresh ([d2a3e4a](https://github.com/vmware/clarity/commit/d2a3e4a))
* **tabs:** key focus directive and tabs overflow focus management ([67a5512](https://github.com/vmware/clarity/commit/67a5512))

<a name="2.1.1"></a>

## [2.1.1](https://github.com/vmware/clarity/compare/2.1.0...v2.1.1) (2019-08-08)

### Bug Fixes

* add aria-label for alert close button ([9e0c16e](https://github.com/vmware/clarity/commit/9e0c16e))
* bug 3505 - Sorting issues at datagrid ([adebe5d](https://github.com/vmware/clarity/commit/adebe5d))
* clr-base imports and build ([4132a33](https://github.com/vmware/clarity/commit/4132a33))
* css vars pony fill needs to run on module init ([7506e65](https://github.com/vmware/clarity/commit/7506e65))
* enable side effect imports ([9f1b414](https://github.com/vmware/clarity/commit/9f1b414))
* **datepicker:** remove circular reference ([5c4e4de](https://github.com/vmware/clarity/commit/5c4e4de))
* update release note to remove reference to k8s ([9817718](https://github.com/vmware/clarity/commit/9817718))
* updates to clr/base to support ie11 ([6616946](https://github.com/vmware/clarity/commit/6616946))
* **a11y:** make disabled dropdown item focusable ([9a905f7](https://github.com/vmware/clarity/commit/9a905f7))
* **datagrid:** mixed expandable non expandable bug ([1a50a08](https://github.com/vmware/clarity/commit/1a50a08))
* **modal:** tab only focus style ([33684ef](https://github.com/vmware/clarity/commit/33684ef)), closes [#3642](https://github.com/vmware/clarity/issues/3642)
* **stack-view:** editable stack view form fields looked unstyled in dev app ([99571d5](https://github.com/vmware/clarity/commit/99571d5))
* **stepper:** aria-live message for only errors ([59f830a](https://github.com/vmware/clarity/commit/59f830a))
* **stepper:** focus management ([6d20b04](https://github.com/vmware/clarity/commit/6d20b04))
* **wizard:** prevent closing non closable wizards ([5a4167f](https://github.com/vmware/clarity/commit/5a4167f)), closes [#3499](https://github.com/vmware/clarity/issues/3499)

### Code Refactoring

* **i18n:** replace original provider with new implementation ([d293c8f](https://github.com/vmware/clarity/commit/d293c8f))

### Features

* added custom properties test page to dev app ([9c91182](https://github.com/vmware/clarity/commit/9c91182))
* clrProgressBar new component ([971bd1d](https://github.com/vmware/clarity/commit/971bd1d))

### BREAKING CHANGES

* **i18n:** The previous i18n service would get removed from a production build in Angular since it wasn't
  referenced. To address this, there is now a service that Clarity provides itself and you can pass a custom,
  new localized set of strings into the service instead of trying to use the provider tree in Angular.
  This will be helpful to future clr-base.

Signed-off-by: Jeremy Wilken <mailto:gnomation@gnomeontherun.com>

<a name="2.1.0"></a>

# [2.1.0](https://github.com/vmware/clarity/compare/v2.0.2...2.1.0) (2019-07-25)

### Bug Fixes

* **login:** add labels for screen readers to form login controls ([6604ba6](https://github.com/vmware/clarity/commit/6604ba6)), closes [#3522](https://github.com/vmware/clarity/issues/3522)
* adding labels to datagrid single & expandable column ([dc1dc2b](https://github.com/vmware/clarity/commit/dc1dc2b))
* **datagrid:** input on hideable column ([3b77397](https://github.com/vmware/clarity/commit/3b77397))
* **forms:** describe by for input validation errors ([730e080](https://github.com/vmware/clarity/commit/730e080)), closes [#3561](https://github.com/vmware/clarity/issues/3561)
* adding the text-edit set to the svg icon build script ([b7d0bef](https://github.com/vmware/clarity/commit/b7d0bef))
* attempt to fix github PR template ([6bd0fcb](https://github.com/vmware/clarity/commit/6bd0fcb))
* change clrSpinner API ([256df22](https://github.com/vmware/clarity/commit/256df22))
* dropdown item count by screen reader + docs update ([5fd4fd0](https://github.com/vmware/clarity/commit/5fd4fd0))
* reverting app-level orange alerts to intended color ([#3612](https://github.com/vmware/clarity/issues/3612)) ([a4b63da](https://github.com/vmware/clarity/commit/a4b63da)), closes [#3604](https://github.com/vmware/clarity/issues/3604)
* Update line-height for clr-control-label ([f8cf498](https://github.com/vmware/clarity/commit/f8cf498))
* **ng:** dropdown item should add disabled attribute if set by input ([bcd032c](https://github.com/vmware/clarity/commit/bcd032c)), closes [#3634](https://github.com/vmware/clarity/issues/3634)
* **stepper:** remove interstitial content ([c58007e](https://github.com/vmware/clarity/commit/c58007e)), closes [#3560](https://github.com/vmware/clarity/issues/3560)

### Features

* clrSpinner component ([1190d0b](https://github.com/vmware/clarity/commit/1190d0b))

<a name="2.0.2"></a>

## [2.0.2](https://github.com/vmware/clarity/compare/v2.0.1...v2.0.2) (2019-07-05)

<a name="2.0.1"></a>

## [2.0.1](https://github.com/vmware/clarity/compare/v2.0.0...v2.0.1) (2019-06-17)

### Bug Fixes

* **website:** Changes compdoc output to silent and adds nvmrc file to lock node to v12.3.1 ([a3d607e](https://github.com/vmware/clarity/commit/a3d607e))

<a name="2.0.0"></a>

# [2.0.0](https://github.com/vmware/clarity/compare/v2.0.0-rc.2...v2.0.0) (2019-06-06)

### Bug Fixes

* **forms:** remove deprecated from .clr-input elements. ([#3418](https://github.com/vmware/clarity/issues/3418)) ([27fa985](https://github.com/vmware/clarity/commit/27fa985))
* **icons+datagrid:** Move arrow icon to core set and fix default filt… ([#3377](https://github.com/vmware/clarity/issues/3377)) ([a3109ec](https://github.com/vmware/clarity/commit/a3109ec))

<a name="2.0.0-rc.2"></a>

# [2.0.0-rc.2](https://github.com/vmware/clarity/compare/v2.0.0-beta.2...v2.0.0-rc.2) (2019-05-14)

<a name="2.0.0-beta.2"></a>

# [2.0.0-beta.2](https://github.com/vmware/clarity/compare/v1.1.0...v2.0.0-beta.2) (2019-04-22)

<a name="1.1.0"></a>

# [1.1.0](https://github.com/vmware/clarity/compare/v1.0.5...v1.1.0) (2019-02-15)

<a name="1.0.5"></a>

## [1.0.5](https://github.com/vmware/clarity/compare/v1.0.4...v1.0.5) (2019-01-29)

<a name="1.0.4"></a>

## [1.0.4](https://github.com/vmware/clarity/compare/v1.0.3-patch...v1.0.4) (2019-01-10)

<a name="1.0.3-patch"></a>

## [1.0.3-patch](https://github.com/vmware/clarity/compare/v1.0.3...v1.0.3-patch) (2018-12-20)

<a name="1.0.3"></a>

## [1.0.3](https://github.com/vmware/clarity/compare/v1.0.2...v1.0.3) (2018-12-20)

<a name="1.0.2"></a>

## [1.0.2](https://github.com/vmware/clarity/compare/v1.0.1...v1.0.2) (2018-12-14)

<a name="1.0.1"></a>

## [1.0.1](https://github.com/vmware/clarity/compare/v1.0.0-beta.1...v1.0.1) (2018-12-13)

### Bug Fixes

* **dark-theme:** Selected datagrid row font color should be white. ([#2805](https://github.com/vmware/clarity/issues/2805)) ([77a329a](https://github.com/vmware/clarity/commit/77a329a))

<a name="1.0.0-beta.1"></a>

# [1.0.0-beta.1](https://github.com/vmware/clarity/compare/v0.13.3...v1.0.0-beta.1) (2018-10-26)

* [UI] Adds a backward compatibility solution for deprecated-grid (#2757) ([ea0b1e4](https://github.com/vmware/clarity/commit/ea0b1e4)), closes [#2757](https://github.com/vmware/clarity/issues/2757) [#2144](https://github.com/vmware/clarity/issues/2144)

### BREAKING CHANGES

* stylesheets for deprecated grid must now be included in the app

<a name="0.13.3"></a>

## [0.13.3](https://github.com/vmware/clarity/compare/v0.13.2...v0.13.3) (2018-09-27)

<a name="0.13.2"></a>

## [0.13.2](https://github.com/vmware/clarity/compare/v0.13.1-patch.1...v0.13.2) (2018-09-20)

<a name="0.13.1-patch.1"></a>

## [0.13.1-patch.1](https://github.com/vmware/clarity/compare/v0.13.1...v0.13.1-patch.1) (2018-09-13)

<a name="0.13.1"></a>

## [0.13.1](https://github.com/vmware/clarity/compare/v0.13.0...v0.13.1) (2018-09-13)

<a name="0.13.0"></a>

# [0.13.0](https://github.com/vmware/clarity/compare/v0.13.0-rc.1...v0.13.0) (2018-09-06)

<a name="0.13.0-rc.1"></a>

# [0.13.0-rc.1](https://github.com/vmware/clarity/compare/v0.13.0-beta.2...v0.13.0-rc.1) (2018-08-31)

<a name="0.13.0-beta.2"></a>

# [0.13.0-beta.2](https://github.com/vmware/clarity/compare/v0.13.0-beta.1...v0.13.0-beta.2) (2018-08-21)

### Bug Fixes

* **guidelines:** Update coding guidelines for sub-folders. ([#2555](https://github.com/vmware/clarity/issues/2555)) ([692dca7](https://github.com/vmware/clarity/commit/692dca7))

<a name="0.13.0-beta.1"></a>

# [0.13.0-beta.1](https://github.com/vmware/clarity/compare/v0.12.6...v0.13.0-beta.1) (2018-08-13)

<a name="0.12.6"></a>

## [0.12.6](https://github.com/vmware/clarity/compare/v0.12.5...v0.12.6) (2018-07-26)

### Bug Fixes

* **UI:** adjusts font size and line-height for required form inputs ([#2476](https://github.com/vmware/clarity/issues/2476)) ([c30fc03](https://github.com/vmware/clarity/commit/c30fc03)), closes [#2472](https://github.com/vmware/clarity/issues/2472)

<a name="0.12.5"></a>

## [0.12.5](https://github.com/vmware/clarity/compare/v0.12.4...v0.12.5) (2018-07-19)

### Bug Fixes

* **CORE:** Update travis secure token and fix slack integration. ([#2467](https://github.com/vmware/clarity/issues/2467)) ([86992a8](https://github.com/vmware/clarity/commit/86992a8))

<a name="0.12.4"></a>

## [0.12.4](https://github.com/vmware/clarity/compare/v0.12.3-patch.2...v0.12.4) (2018-07-12)

<a name="0.12.3-patch.2"></a>

## [0.12.3-patch.2](https://github.com/vmware/clarity/compare/v0.12.3-patch.1...v0.12.3-patch.2) (2018-07-06)

<a name="0.12.3-patch.1"></a>

## [0.12.3-patch.1](https://github.com/vmware/clarity/compare/v0.12.3...v0.12.3-patch.1) (2018-07-06)

<a name="0.12.3"></a>

## [0.12.3](https://github.com/vmware/clarity/compare/v0.12.2...v0.12.3) (2018-07-05)

<a name="0.12.2"></a>

## [0.12.2](https://github.com/vmware/clarity/compare/v0.12.1...v0.12.2) (2018-06-28)

<a name="0.12.1"></a>

## [0.12.1](https://github.com/vmware/clarity/compare/v0.12.0...v0.12.1) (2018-06-21)

<a name="0.12.0"></a>

# [0.12.0](https://github.com/vmware/clarity/compare/v0.12.0-rc.2...v0.12.0) (2018-06-14)

<a name="0.12.0-rc.2"></a>

# [0.12.0-rc.2](https://github.com/vmware/clarity/compare/v0.12.0-rc.1...v0.12.0-rc.2) (2018-06-07)

<a name="0.12.0-rc.1"></a>

# [0.12.0-rc.1](https://github.com/vmware/clarity/compare/v0.12.0-beta.4...v0.12.0-rc.1) (2018-05-31)

<a name="0.12.0-beta.4"></a>

# [0.12.0-beta.4](https://github.com/vmware/clarity/compare/v0.11.14...v0.12.0-beta.4) (2018-05-24)

### Bug Fixes

* [NG] Adds correct import for loading-button ([#2301](https://github.com/vmware/clarity/issues/2301)) ([2d2bb16](https://github.com/vmware/clarity/commit/2d2bb16)), closes [#2302](https://github.com/vmware/clarity/issues/2302)
* remove safari from sauce labs browsers ([#2208](https://github.com/vmware/clarity/issues/2208)) ([d4d2634](https://github.com/vmware/clarity/commit/d4d2634))

<a name="0.11.14"></a>

## [0.11.14](https://github.com/vmware/clarity/compare/v0.11.13...v0.11.14) (2018-04-19)

### Bug Fixes

* [UI] -breakpoints to be overwritable ([#2195](https://github.com/vmware/clarity/issues/2195)) ([10e5e09](https://github.com/vmware/clarity/commit/10e5e09)), closes [#2066](https://github.com/vmware/clarity/issues/2066)

<a name="0.11.13"></a>

## [0.11.13](https://github.com/vmware/clarity/compare/v0.11.12...v0.11.13) (2018-04-12)

<a name="0.11.12"></a>

## [0.11.12](https://github.com/vmware/clarity/compare/v0.11.11...v0.11.12) (2018-04-05)

### Bug Fixes

* Dark Theme - Adds variable for datagrid selected row color. ([#2134](https://github.com/vmware/clarity/issues/2134)) ([3d7f87a](https://github.com/vmware/clarity/commit/3d7f87a))

<a name="0.11.11"></a>

## [0.11.11](https://github.com/vmware/clarity/compare/v0.11.10...v0.11.11) (2018-03-29)

<a name="0.11.10"></a>

## [0.11.10](https://github.com/vmware/clarity/compare/v0.11.9...v0.11.10) (2018-03-22)

<a name="0.11.9"></a>

## [0.11.9](https://github.com/vmware/clarity/compare/v0.11.8...v0.11.9) (2018-03-15)

<a name="0.11.8"></a>

## [0.11.8](https://github.com/vmware/clarity/compare/v0.11.7-patch.1...v0.11.8) (2018-03-08)

### Bug Fixes

* [CORE] Adds a check for AOT compilation on Clarity artifacts ([#2041](https://github.com/vmware/clarity/issues/2041)) ([26f66bd](https://github.com/vmware/clarity/commit/26f66bd))
* [NG] Changes Id Generator to be aot compatible. ([#2040](https://github.com/vmware/clarity/issues/2040)) ([1b370d0](https://github.com/vmware/clarity/commit/1b370d0))

<a name="0.11.7-patch.1"></a>

## [0.11.7-patch.1](https://github.com/vmware/clarity/compare/v0.11.7...v0.11.7-patch.1) (2018-03-01)

<a name="0.11.7"></a>

## [0.11.7](https://github.com/vmware/clarity/compare/v0.11.6...v0.11.7) (2018-03-01)

<a name="0.11.6"></a>

## [0.11.6](https://github.com/vmware/clarity/compare/v0.11.5...v0.11.6) (2018-02-22)

<a name="0.11.5"></a>

## [0.11.5](https://github.com/vmware/clarity/compare/v0.11.4...v0.11.5) (2018-02-15)

### Bug Fixes

* [CORE] tslint config usage ([#1971](https://github.com/vmware/clarity/issues/1971)) ([9daf507](https://github.com/vmware/clarity/commit/9daf507))
* [UI] Dark theme .btn font color ([#1990](https://github.com/vmware/clarity/issues/1990)) ([e1bf0bd](https://github.com/vmware/clarity/commit/e1bf0bd)), closes [#1973](https://github.com/vmware/clarity/issues/1973)

<a name="0.11.4"></a>

## [0.11.4](https://github.com/vmware/clarity/compare/v0.11.3...v0.11.4) (2018-02-08)

<a name="0.11.3"></a>

## [0.11.3](https://github.com/vmware/clarity/compare/v0.11.2-patch...v0.11.3) (2018-02-01)

<a name="0.11.2-patch"></a>

## [0.11.2-patch](https://github.com/vmware/clarity/compare/v0.11.2...v0.11.2-patch) (2018-01-26)

<a name="0.11.2"></a>

## [0.11.2](https://github.com/vmware/clarity/compare/v0.11.1...v0.11.2) (2018-01-25)

<a name="0.11.1"></a>

## [0.11.1](https://github.com/vmware/clarity/compare/v0.11.0...v0.11.1) (2018-01-18)

<a name="0.11.0"></a>

# [0.11.0](https://github.com/vmware/clarity/compare/v0.11.0-rc.1...v0.11.0) (2018-01-11)

<a name="0.11.0-rc.1"></a>

# [0.11.0-rc.1](https://github.com/vmware/clarity/compare/v0.11.0-beta.1...v0.11.0-rc.1) (2018-01-05)

<a name="0.11.0-beta.1"></a>

# [0.11.0-beta.1](https://github.com/vmware/clarity/compare/v0.11.0-alpha.1...v0.11.0-beta.1) (2017-12-21)

<a name="0.11.0-alpha.1"></a>

# [0.11.0-alpha.1](https://github.com/vmware/clarity/compare/v0.10.13...v0.11.0-alpha.1) (2017-12-15)

<a name="0.10.13"></a>

## [0.10.13](https://github.com/vmware/clarity/compare/v0.10.12...v0.10.13) (2017-11-10)

<a name="0.10.12"></a>

## [0.10.12](https://github.com/vmware/clarity/compare/v0.10.11...v0.10.12) (2017-11-02)

<a name="0.10.11"></a>

## [0.10.11](https://github.com/vmware/clarity/compare/v0.10.10...v0.10.11) (2017-10-26)

<a name="0.10.10"></a>

## [0.10.10](https://github.com/vmware/clarity/compare/v0.10.9...v0.10.10) (2017-10-19)

<a name="0.10.9"></a>

## [0.10.9](https://github.com/vmware/clarity/compare/v0.10.8...v0.10.9) (2017-10-12)

<a name="0.10.8"></a>

## [0.10.8](https://github.com/vmware/clarity/compare/v0.10.8-alpha.2...v0.10.8) (2017-10-05)

<a name="0.10.8-alpha.2"></a>

## [0.10.8-alpha.2](https://github.com/vmware/clarity/compare/v0.10.8-alpha.1...v0.10.8-alpha.2) (2017-10-05)

<a name="0.10.8-alpha.1"></a>

## [0.10.8-alpha.1](https://github.com/vmware/clarity/compare/v0.10.7...v0.10.8-alpha.1) (2017-10-05)

<a name="0.10.7"></a>

## [0.10.7](https://github.com/vmware/clarity/compare/v0.10.6...v0.10.7) (2017-09-29)

<a name="0.10.6"></a>

## [0.10.6](https://github.com/vmware/clarity/compare/v0.10.5...v0.10.6) (2017-09-21)

<a name="0.10.5"></a>

## [0.10.5](https://github.com/vmware/clarity/compare/v0.10.4...v0.10.5) (2017-09-14)

<a name="0.10.4"></a>

## [0.10.4](https://github.com/vmware/clarity/compare/v0.10.3...v0.10.4) (2017-09-07)

<a name="0.10.3"></a>

## [0.10.3](https://github.com/vmware/clarity/compare/0.10.2...v0.10.3) (2017-08-31)

<a name="0.10.2"></a>

## [0.10.2](https://github.com/vmware/clarity/compare/v0.10.1...v0.10.2) (2017-08-24)

<a name="0.10.1"></a>

## [0.10.1](https://github.com/vmware/clarity/compare/v0.10.0...v0.10.1) (2017-08-17)

<a name="0.10.0"></a>

# [0.10.0](https://github.com/vmware/clarity/compare/v0.10.0-rc.1...v0.10.0) (2017-08-10)

<a name="0.10.0-rc.1"></a>

# [0.10.0-rc.1](https://github.com/vmware/clarity/compare/v0.10.0-alpha.6...v0.10.0-rc.1) (2017-08-04)

* [NG] Popovers refactor ([59bfac4](https://github.com/vmware/clarity/commit/59bfac4))

### BREAKING CHANGES

* In all 3 cases, the positioning and sizing inputs of the popover
  have been moved to the popover itself: dropdown-menu, tooltip-content
  and signpost-content.

Signed-off-by: Eudes Petonnet-Vincent <mailto:epetonnetvince@vmware.com>

<a name="0.10.0-alpha.6"></a>

# [0.10.0-alpha.6](https://github.com/vmware/clarity/compare/v0.10.0-alpha.5...v0.10.0-alpha.6) (2017-07-28)

<a name="0.10.0-alpha.5"></a>

# [0.10.0-alpha.5](https://github.com/vmware/clarity/compare/v0.10.0-alpha.4...v0.10.0-alpha.5) (2017-07-21)

<a name="0.10.0-alpha.4"></a>

# [0.10.0-alpha.4](https://github.com/vmware/clarity/compare/v0.10.0-alpha.3...v0.10.0-alpha.4) (2017-07-06)

<a name="0.10.0-alpha.3"></a>

# [0.10.0-alpha.3](https://github.com/vmware/clarity/compare/v0.10.0-alpha.2...v0.10.0-alpha.3) (2017-06-30)

<a name="0.10.0-alpha.2"></a>

# [0.10.0-alpha.2](https://github.com/vmware/clarity/compare/v0.10.0-alpha...v0.10.0-alpha.2) (2017-06-23)

<a name="0.10.0-alpha"></a>

# [0.10.0-alpha](https://github.com/vmware/clarity/compare/v0.9.9...v0.10.0-alpha) (2017-06-19)

<a name="0.9.9"></a>

## [0.9.9](https://github.com/vmware/clarity/compare/v0.9.8...v0.9.9) (2017-06-15)

<a name="0.9.8"></a>

## [0.9.8](https://github.com/vmware/clarity/compare/v0.9.7...v0.9.8) (2017-06-08)

<a name="0.9.7"></a>

## [0.9.7](https://github.com/vmware/clarity/compare/v0.9.5...v0.9.7) (2017-06-01)

<a name="0.9.5"></a>

## [0.9.5](https://github.com/vmware/clarity/compare/v0.9.4...v0.9.5) (2017-05-18)

<a name="0.9.4"></a>

## [0.9.4](https://github.com/vmware/clarity/compare/v0.9.3...v0.9.4) (2017-05-11)

<a name="0.9.3"></a>

## [0.9.3](https://github.com/vmware/clarity/compare/v0.9.2...v0.9.3) (2017-05-04)

<a name="0.9.2"></a>

## [0.9.2](https://github.com/vmware/clarity/compare/v0.9.1...v0.9.2) (2017-04-27)

<a name="0.9.1"></a>

## [0.9.1](https://github.com/vmware/clarity/compare/v0.9.0...v0.9.1) (2017-04-20)

<a name="0.9.0"></a>

# [0.9.0](https://github.com/vmware/clarity/compare/v0.8.14...v0.9.0) (2017-04-13)

<a name="0.8.14"></a>

## [0.8.14](https://github.com/vmware/clarity/compare/v0.8.13...v0.8.14) (2017-04-06)

<a name="0.8.13"></a>

## [0.8.13](https://github.com/vmware/clarity/compare/0.8.13...v0.8.13) (2017-03-30)

<a name="0.8.12"></a>

## [0.8.12](https://github.com/vmware/clarity/compare/v0.8.11...v0.8.12) (2017-03-23)

<a name="0.8.11"></a>

## [0.8.11](https://github.com/vmware/clarity/compare/v0.8.10...v0.8.11) (2017-03-16)

<a name="0.8.10"></a>

## [0.8.10](https://github.com/vmware/clarity/compare/v0.8.9...v0.8.10) (2017-03-09)

<a name="0.8.9"></a>

## [0.8.9](https://github.com/vmware/clarity/compare/v0.8.8...v0.8.9) (2017-03-02)

<a name="0.8.8"></a>

## [0.8.8](https://github.com/vmware/clarity/compare/v0.8.7...v0.8.8) (2017-02-23)

<a name="0.8.7"></a>

## [0.8.7](https://github.com/vmware/clarity/compare/v0.8.6...v0.8.7) (2017-02-16)

<a name="0.8.6"></a>

## [0.8.6](https://github.com/vmware/clarity/compare/v0.8.5...v0.8.6) (2017-02-09)

<a name="0.8.5"></a>

## [0.8.5](https://github.com/vmware/clarity/compare/v0.8.4...v0.8.5) (2017-02-02)

<a name="0.8.4"></a>

## [0.8.4](https://github.com/vmware/clarity/compare/v0.8.3...v0.8.4) (2017-01-26)

<a name="0.8.3"></a>

## [0.8.3](https://github.com/vmware/clarity/compare/v0.8.2...v0.8.3) (2017-01-19)

<a name="0.8.2"></a>

## [0.8.2](https://github.com/vmware/clarity/compare/v0.8.1...v0.8.2) (2017-01-12)

<a name="0.8.1"></a>

## [0.8.1](https://github.com/vmware/clarity/compare/v0.8.0...v0.8.1) (2017-01-05)

<a name="0.8.0"></a>

# [0.8.0](https://github.com/vmware/clarity/compare/v0.8.0-alpha2...v0.8.0) (2016-12-23)

<a name="0.8.0-alpha2"></a>

# [0.8.0-alpha2](https://github.com/vmware/clarity/compare/v0.8.0-alpha...v0.8.0-alpha2) (2016-12-22)

<a name="0.8.0-alpha"></a>

# [0.8.0-alpha](https://github.com/vmware/clarity/compare/v0.7.5-dev...v0.8.0-alpha) (2016-12-22)

<a name="0.7.5-dev"></a>

## [0.7.5-dev](https://github.com/vmware/clarity/compare/v0.7.4...v0.7.5-dev) (2016-12-16)

<a name="0.7.4"></a>

## [0.7.4](https://github.com/vmware/clarity/compare/v0.7.3...v0.7.4) (2016-12-08)

<a name="0.7.3"></a>

## [0.7.3](https://github.com/vmware/clarity/compare/v0.7.2...v0.7.3) (2016-12-01)

<a name="0.7.2"></a>

## [0.7.2](https://github.com/vmware/clarity/compare/v0.7.1...v0.7.2) (2016-11-23)

<a name="0.7.1"></a>

## [0.7.1](https://github.com/vmware/clarity/compare/v0.7.0...v0.7.1) (2016-11-18)

<a name="0.7.0"></a>

# [0.7.0](https://github.com/vmware/clarity/compare/v0.6.2...v0.7.0) (2016-11-11)

<a name="0.6.2"></a>

## [0.6.2](https://github.com/vmware/clarity/compare/v0.6.1...v0.6.2) (2016-11-11)

<a name="0.6.1"></a>

## [0.6.1](https://github.com/vmware/clarity/compare/v0.6.0...v0.6.1) (2016-11-04)

<a name="0.6.0"></a>

# 0.6.0 (2016-10-27)
