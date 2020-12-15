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

Form groups can have one of three layouts. Vertical, horizontal or compact. This layout will apply to all control inputs in the group.

:::

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

Horizontal is the default if no layout is specified. It displays the Group label to the left of a vertical list of control inputs. The supplemnental text is below the control elements.

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/horizontal.html)!!!
</div>

:::

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

A vertical form group group places the group label above the list of control elements. The supplemental text is below the control elements.

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/vertical.html)!!!
</div>

:::

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

A compact form group places all control elements on a single line and the supplemental text after the last control element.

<div>
!!!include(.vuepress/code/core-usage-demos/checkbox/compact.html)!!!
</div>

:::
