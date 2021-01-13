---
title: Overview
toc: true
---

::: component-summary

A checkbox is a form element comprising a series of items that make a list of options that allow the user to select any number of choices. Those choices can range from zero, one or several. The selections are not mutually exclusive.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Checkboxes act independently of each other. This way, selecting any given checkbox does not affect other checkboxes and their status. Use a checkbox
•

- For binary choices
- For providing multiple selectable choices

We recommend using seven or fewer checkboxes. Keep the label of a checkbox to a single line.

:::

<doc-pinbox-vs>
  <div>unused div that is never rendered but gets passed an error</div>
  <template #left>
  !!!include(.vuepress/code/core-usage-demos/checkbox/basic.html)!!!

Use a checkbox for:

- binary choices
- For binary choices
- For selecting multiple choices

  </template>
  <template #right>
  !!!include(.vuepress/code/core-usage-demos/toggle/basic.html)!!!

Use a toggle for On / Off choices but not for multiple choices

  </template>
</doc-pinbox-vs>

::: component-section-level-one-title

## States

:::

::: component-section-level-one

Checkboxes can have a several of states. These stated give the user additional information oe prevent user interaction. The indeterminate state is programmatically set by the application for specific conditions.

:::

::: component-section-level-two-title

### Default

:::

::: component-section-level-two

The default state is before a user has interacted with the form and when the checkbox is not (pre) checked by the application.

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/default.html)!!!
</div>

:::

::: component-section-level-two-title

### Checked

:::

::: component-section-level-two

The selected state occurs when a user interacts with a checkbox and selects it or, when the application selects the option based on specific conditions.

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/checked.html)!!!
</div>

:::

::: component-section-level-two-title

### Disabled, unselected

:::

::: component-section-level-two

The disabled, unselected state occurs when the application disables an un-selected checkbox based on specific conditions.

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/disabled-unselected.html)!!!
</div>

:::

::: component-section-level-two-title

### Disabled, selected

:::

::: component-section-level-two

The disabled, selected state occurs when the application disables the selected checkbox based on specific conditions.

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/disabled-selected.html)!!!
</div>

:::

::: component-section-level-two-title

### Indeterminate

:::

::: component-section-level-two

The indeterminate state can only be set by an specific conditions by the application. **Note**: an indeterminate checkbox is a browser specific visual treatment only.

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/indeterminate.html)!!!
</div>

:::

::: component-section-level-two-title

### Error

:::

::: component-section-level-two

The error state indicates an issue with the checkbox. It could be a requirement of the form before submission or there might be a minimum number of options that must be selected by the user. The error state is indicated visually a red exclamation-circle icon and an error message with as supplemental text.

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/error.html)!!!
</div>

:::

::: component-section-level-two-title

### Success

:::

::: component-section-level-two

The success state indicates the=at the checkbox is ok for its selected/unselected or indeterminate state. The success state is indicated visually with green supplemental text and a check in circle icon.

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/success.html)!!!
</div>

:::

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Checkboxes are available in vertical, vertical inline, horizontal, horizontal inline, and compact layout. See more layout guidelines on the [form page](/web-components/form/).

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical Inline

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/vertical-inline.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal Inline

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/horizontal-inline.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal full-wrap" cds-layout="m-t:md">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/compact.html)!!!
</div>

:::

</div>
