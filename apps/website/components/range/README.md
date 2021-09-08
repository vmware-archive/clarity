---
title: Overview
toc: true
---

::: component-summary

The range input component consists of a slider enabling a choice between a minimum and a maximum value. It allows the user to select a value when the precise value chosen is not considered necessary.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

This is an imprecise input control that should only be used when the exact value is not important for the user to know. Range controls work well when the users is more concerned with percent distance between the min and the max.

:::

<div>
    <cds-range layout="horizontal">
    <label>Label</label>
    <input type="range" />
    </cds-range>
</div>

::: component-section-level-one-title

## States

:::

<div class="component-section-horizontal">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/range/enabled.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/range/disabled.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/range/error.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/range/success.html)!!!
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

Range inputs are available in vertical, horizontal, and compact layout. See more layout guidelines on the [form page](/components/form/).

:::

<div class="component-section-horizontal">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/range/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/range/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/range/compact.html)!!!
</div>

:::

</div>
