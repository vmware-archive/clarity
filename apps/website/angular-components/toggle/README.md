---
title: Overview
toc: true
---

Toggle switches allow the selection of `on` or `off` state.

## Usage

Use a toggle switch when there is need to select a single options. E.g - `on` and `off`.
Toggle switches take up less space than an “on/off” radio button group and communicate their intended purpose better than a checkbox that toggles functionality.

## Anatomy

Toggle inputs should be composed with the necessary parts needed to communicate relevant information to users.

### Label

Use a label to clearly describe the setting. You will need to wrap your toggle switches with the [ClrToggleWrapper](/angular-components/toggle/api/#clrtogglewrapper) component when you include a label. This manages the label and display of the toggle switch for you.

Clarity supports a toggle switch without a label but beware, only use this approach if the purpose of the control clearly made elsewhere. For example, if there is a group label or section header that allows the user to infer the description of the option.

### Helper Message

To use helper messages, wrap all toggle switches inside of the [ClrToggleContainer](/angular-components/toggle/api/#clrtogglecontainer). Helper messages are always visible with one exception. The toggle switch container tracks any validations placed on the toggle switch(es) and will replace helper messages with an error message if there is one.

<doc-demo>
!!!include(.vuepress/public/demos/toggle/helper-demo-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/toggle/helper-demo-ng.html
</doc-code>

### Error Message

To use error messages, wrap all toggle switches inside of the [ClrToggleContainer](/angular-components/toggle/api/#clrtogglecontainer). The toggle switch container tracks any validations placed on the toggle switch(es) and will display the error message when appropriate.

<doc-demo>
!!!include(.vuepress/public/demos/toggle/error-demo-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/toggle/error-demo-ng.html
</doc-code>

## States

There are two states that can change the layout and look of a [ClrToggle](/angular-components/toggle/api/#clrtoggle) control.

### Inline

Toggle switches can be placed inline when the clrInline directive is added to the [ClrToggleContainer](/angular-components/toggle/api/#clrtogglecontainer). The toggle switches will wrap if there is not enough space.

<doc-demo>
!!!include(.vuepress/public/demos/toggle/inline-demo-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/toggle/inline-demo-ng.html
</doc-code>

### Disabled

A toggle switch can be disabled by putting the disabled attribute on the checkbox input. This requires that the toggle switch be inside of a [ClrToggleContainer](/angular-components/toggle/api/#clrtogglecontainer). When disabling groups of toggle switches, the last checkbox requires the disabled attribute. Angular doesn't support disabling individual checkboxes in a group.

<doc-demo>
!!!include(.vuepress/public/demos/toggle/disabled-demo-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/toggle/disabled-demo-ng.html
</doc-code>

## Accessibility

For applications using the ClrToggle directive and the associated ClrToggleContainer and ClrToggleWrapper components there is built in support adding accessible behavior to the control and its form.

### Included Behavior

1. Programmatically associating the correct label for attribute with the id of the input
1. Automatic wiring up of the aria-describedby behavior with associated clr-control-error elements
1. An aria-live region that can notify screen readers about changes in the control error state
1. Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
