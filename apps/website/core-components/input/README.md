---
title: Overview
toc: true
---

::: component-summary

Inputs enable the user to input text information.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use inputs in a form as a way to allow the user to enter a value associated with a key, such as entering their name in a field labeled name.

:::

<doc-pinbox-vs>
  <div>unused div that is never rendered but gets passed an error</div>
  <template #left>
    !!!include(.vuepress/code/core-usage-demos/datalist/basic.html)!!!

  Use a datalist:

  - When the user needs to choose from a long list of items to be filtered before selection
  - When there are pre-defined options but the user needs the ability to input a custom calue
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

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/input/enabled.html)!!!
</div>

:::

::: component-section-level-two

### Enabled

Use when interactive and ready for input.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/input/active.html)!!!
</div>

:::

::: component-section-level-two

### Active

Use when selected by a user with an input method, such as mouse or keyboard.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/input/disabled.html)!!!
</div>

:::

::: component-section-level-two

### Disabled

Use when not interactive. For example, when a user does not have permissions to edit the input.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/input/error.html)!!!
</div>

:::

::: component-section-level-two

### Error

Use to communicate a user or system error. This validation can happen when the user moves away from the input or after attempting to submit a form. For example, invalid input or username already taken.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/input/success.html)!!!
</div>

:::

::: component-section-level-two

### Success

Use to provide real-time feedback immediately after a user’s input. For example, username available.

:::

</div>

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Inputs are available in vertical, horizontal, compact, and controlled-width layout. Controlled-width layout is an additional option for setting the width in cases where the control may be unattractive or less usable if the underline is allowed to fill the full width of its container. Example: The text the user will input is of a known character count or within a small range. See more layout guidelines on the [form page](/core-components/form/).

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/input/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/input/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/input/compact.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Controlled width

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/input/controlled-width.html)!!!
</div>

:::

</div>
