---
title: Overview
toc: true
---

::: component-summary

The radio button is a form element comprising a series of items that make a list of options that allow the user to select options that are mutually exclusive of each other. Users may only select a single radio button within a series of items that make a list.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use radio buttons when you want users to see all available multual exclusive options and the list of options is small.

:::

<doc-pinbox-vs>
  <div>unused div that is never rendered but gets passed an error</div>
  <template #left>
    <cds-radio>
        <label>Radio label</label>
        <input type="radio" checked />
    </cds-radio>

Use radio buttons for six or fewer options.

  </template>
  <template #right>
    <cds-select control-width="shrink">
        <label>Select</label>
        <select>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
        </select>
    </cds-select>

Use a <a href="../select">select box</a> for more than six options, or a <a href="../datalist">datalist</a> for more than 13 options. Both prompt users to disclose the options.

  </template>
</doc-pinbox-vs>

::: component-section-level-one-title

## States

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/radio/enabled.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/radio/disabled.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/radio/error.html)!!!
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
!!!include(.vuepress/code/core-usage-demos/radio/success.html)!!!
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

Radio buttons are available in vertical, horizontal, and compact layout. See more layout guidelines on the [form page](/core-components/form/).

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/radio/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical Inline

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/radio/vertical-inline.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/radio/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal Inline

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/radio/horizontal-inline.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/radio/compact.html)!!!
</div>

:::

</div>
