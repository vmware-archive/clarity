<a name="2.1.1"></a>

## [2.1.1](https://github.com/vmware/clarity/compare/2.1.0...v2.1.1) (2019-08-08)

### Bug Fixes

* add aria-label for alert close button ([9e0c16e](https://github.com/vmware/clarity/commit/9e0c16e))
* Sorting issues at datagrid ([adebe5d](https://github.com/vmware/clarity/commit/adebe5d))
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
