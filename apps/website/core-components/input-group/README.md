---
title: Overview
toc: true
---

::: component-summary

An input-group combines closely related input controls into a single visual control.control.

:::

::: component-section-level-one-title

## Usage

:::

::: component-section-level-one

Use an input group when the user needs to submit complex information comprised of separate components such as a location consisting of a prefix such as: ftp / http / https, a domain, and a suffix. An input group provides a way for the user to supply these connceted pieces of information while treating them as one.

Input groups may use any textual input controls including input, select, datalist, and date picker.

:::

::: component-section-level-one-title

## Behavior

:::

::: component-section-level-one

An input group can behave in all the ways a standard single input will. It may be configured to validate its contents while the use if supplying the input, on blur or eneter, or it may be used a part of a form and included in the forms validation and submission process.

:::

</div>

::: component-section-level-one-title

## States

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/input-group/enabled.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/input-group/active.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two

### Active

Use when selected by a user with an input method, such as mouse or keyboard.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/input-group/disabled.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two

### Disabled

Use when not interactive. For example, when a user does not have permissions to edit the input.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/input-group/error.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/input-group/success.html)!!!
</div>

:::

::: component-section-level-two

### Success

Use to provide real-time feedback immediately after a user’s input. For example, username available.

:::

</div>

::: component-section-level-one-title

## Layout

:::

::: component-section-level-one

Input groups only provide a horizontal layout because their content has linear continuity. See more layout guidelines on the [form page](/core-components/form/).

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/input-group/horizontal.html)!!!
</div>

:::

</div>
