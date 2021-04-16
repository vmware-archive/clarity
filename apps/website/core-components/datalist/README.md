---
title: Overview
toc: true
---

::: component-summary

Datalist is a type of list that becomes contextualized through the selection of extensive pre-defined options. Datalists can contain a custom input value.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a datalist when the user needs to choose from a list of items that are long enough for it to be filtered before selection. Or, there are pre-defined options but the user needs the ability to input a custom value for their use case.

Use a datalist to provide a standard set of options but also allow the user to enter a custom value that may not be pre-defined.

Do not confuse a datalist element with the select input. Datalist elements usually have more than 13 options that the user will need to filter or narrow down before making a choice. If there are 3-13 options, consider using the [select](../select/) input.

:::

<doc-pinbox-vs>
  <div>unused div that is never rendered but gets passed an error</div>
  <template #left>
  !!!include(.vuepress/code/core-usage-demos/datalist/basic.html)!!!

  Use a datalist:

  - When the user needs to choose from a long list of items to be filtered before selection
  - When there are pre-defined options but the user needs the ability to input a custom value
  - With more than 13 options

  </template>
  <template #right>
  !!!include(.vuepress/code/core-usage-demos/select/basic.html)!!!

  Use a select:

  - When a custom input value is not allowed
  - With 3-13 options

  </template>
</doc-pinbox-vs>

::: component-section-level-two

:::

::: component-section-level-one-title

## States

:::

<div class="component-section-horizontal">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/datalist/enabled.html)!!!
</div>

:::

::: component-section-level-two

### Enabled

Use when interactive.

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/datalist/active.html)!!!
</div>

:::

::: component-section-level-two

### Active

Use when selected by a user with an input method, such as mouse or keyboard.

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/datalist/disabled.html)!!!
</div>

:::

::: component-section-level-two

### Disabled

Use when not interactive. For example, when a user does not have permission to change specific settings.

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/datalist/error.html)!!!
</div>

:::

::: component-section-level-two

### Error

Use to communicate a user or system error. This validation can happen when the user moves away from the datalist or after attempting to submit a form. For example, to remind the user of a missing selection.

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/datalist/success.html)!!!
</div>

:::

::: component-section-level-two

### Success

Use to provide real-time feedback immediately after a user’s input.

:::

</div>



::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Datalists are available in vertical, horizontal, and compact layout. See more layout guidelines on the [form page](/core-components/form/).

:::

<div class="component-section-horizontal">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/datalist/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/datalist/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/datalist/compact.html)!!!
</div>

:::

</div>

::: component-section-level-one-title

## Behavior

:::

::: component-section-level-one

Datalist support the use of autocomplete.

:::

::: component-section-level-two-title

### Auto-complete

:::

::: component-section-level-two

Datalist natively supports autocomplete behavior. Users can search and filter while using the datalist component.

:::
