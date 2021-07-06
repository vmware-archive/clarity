---
title: Overview
toc: true
beta: true
---

::: component-summary

The time input uses the native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time" target="_blank">HTML Time Input</a>.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a time input when user is expected to enter a time (hours and minutes, and optionally seconds).

:::

::: component-section-level-one-title

## States

:::

<div class="component-section-horizontal">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/time/enabled.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/time/active.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/time/disabled.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/time/error.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/time/success.html)!!!
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

Time picker is available in vertical, horizontal, and compact layout. See more layout guidelines on the [form page](/core-components/form/).

:::

<div class="component-section-horizontal">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/time/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/time/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/time/compact.html)!!!
</div>

:::

</div>
