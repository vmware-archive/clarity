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

<DocPinbox>
<div cds-layout="p-y:lg">
!!!include(.vuepress/code/core-usage-demos/datalist/basic.html)!!!

Use a datalist:

- When the user needs to choose from a long list of items to be filtered before selection
- When there are pre-defined options but the user needs the ability to input a custom calue
- With more than 13 options

</div>

<div class="versus"><div class="versus-bubble">vs</div></div>
<div style="align-self: flex-start;" cds-layout="p-y:lg">
!!!include(.vuepress/code/core-usage-demos/select/basic.html)!!!

Use a select:

- When a custom input value is not allowed
- With 3-13 options

</div>
</DocPinbox>

::: component-section-level-two

:::

::: component-section-level-one-title

## States

:::

::: component-section-level-one

<DocIndent>
!!!include(.vuepress/code/core-usage-demos/datalist/states.html)!!!
</DocIndent>

:::

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Inputs are available in vertical, horizontal, compact, and controlled-width layout. Controlled-width layout is an additional option for setting the width in cases where the control may be unattractive or less usable if the underline is allowed to fill the full width of its container. Example: The text the user will input is of a known character count or within a small range. See more layout guidelines on the [form page](/web-components/form/).

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
