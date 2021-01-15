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

Checkboxes act independently of each other. This way, selecting any given checkbox does not affect other checkboxes and their status. Use a checkbox:

- For binary choices
- For providing multiple selectable choices

We recommend using seven or fewer checkboxes. Keep the label of a checkbox to a single line.

:::

<doc-pinbox-vs>
  <div>unused div that is never rendered but gets passed an error</div>
  <template #left>
  !!!include(.vuepress/code/core-usage-demos/checkbox/basic.html)!!!

  Use a checkbox for:

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

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/enabled.html)!!!
</div>

:::

::: component-section-level-two

### Enabled

Use when interactive. The checkboxes can be selected by the user or system.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/disabled.html)!!!
</div>

:::

::: component-section-level-two

### Disabled

Use when not interactive. For example, when a user does not have permission to change specific settings.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/indeterminate.html)!!!
</div>

:::

::: component-section-level-two

### Indeterminate

Use in tree selection as a parent node with a mix of selected and unselected children.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/error.html)!!!
</div>

:::

::: component-section-level-two

### Error

Use to communicate a user or system error. This validation can happen when the user moves away from the checkbox or after attempting to submit the form. For example, remind the users of unconsented terms of use after clicking on the submit button.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/success.html)!!!
</div>

:::

::: component-section-level-two

### Success

Use to communicate a user or system error. This validation can happen when the user moves away from the checkbox or after attempting to submit the form. For example, remind the users of unconsented terms of use after clicking on the submit button.

:::

</div>

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Checkboxes are available in vertical, vertical inline, horizontal, horizontal inline, and compact layout. See more layout guidelines on the [form page](/core-components/form/).

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
