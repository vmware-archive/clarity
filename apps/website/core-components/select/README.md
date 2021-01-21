---
title: Overview
toc: true
---

::: component-summary

A select box is a form element that surfaces a drop down list with a set of choices and displays the users selection when complete.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a select box for a list of items that a user does not need to see all the time.

A common strategy is to combine an input field with a select box so that a user can enter a value and qualify it with a menu item. For example, the user might enter a number in an input field and select the units from the select box.

:::

<doc-pinbox-vs>
  <div>unused div that is never rendered but gets passed an error</div>
  <template #left>
  Select presents a list of options that the user can choose from and apply to an input field.

  </template>
  <template #right>
  Dropdown presents a list of options that take an immediate action or navigate the user outside of the current context.

  </template>
</doc-pinbox-vs>

::: component-section-level-one-title

## States

:::

<div class="component-section-horizontal">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/select/enabled.html)!!!
</div>

:::

::: component-section-level-two

### Enabled

Use when interactive and ready for input.

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/select/active.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/select/disabled.html)!!!
</div>

:::

::: component-section-level-two

### Disabled

Use when not interactive. For example, when a user does not have permissions to edit the input.

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/select/error.html)!!!
</div>

:::

::: component-section-level-two

### Error

Use to communicate a user or system error. This validation can happen when the user moves away from the input or after attempting to submit a form. For example, invalid input or username already taken.

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/select/success.html)!!!
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

Select elements are available in vertical, horizontal, compact, and multiple layout. Select elements with the multiple attribute enables the user to select and view several items at once. See more layout guidelines on the [form page](/core-components/form/).

:::

<div class="component-section-horizontal">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/select/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/select/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/select/compact.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

### Multiple

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/select/multiple.html)!!!
</div>

:::

</div>
