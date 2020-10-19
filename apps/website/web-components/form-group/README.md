---
title: Overview
toc: true
---

::: component-summary

Form groups provides a way to organize forms and make them more understandable for users. Users can focus on smaller groups instead of the whole form all at once.

:::

::: component-section-level-one-title

# Usage

:::

::: component-section-level-one

Use a form group when there are multiple, related controls to help users focus on smaller sections of a form, one at a time. Form groups are comonly applied when multiple form controls relate to one section of the form. E.g often there are multiple checkboxes and radio controls needed to coolect to correct input from a user.

<DocInset>
<div>
!!!include(.vuepress/public/core-usage-demos/form-group/basic.html)!!!
</div>
</DocInset>

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
!!!include(.vuepress/public/core-usage-demos/checkbox/horizontal.html)!!!
</div>

:::

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

A vertical form group group places the group label above the list of control elements. The supplemental text is below the control elements.

<div>
!!!include(.vuepress/public/core-usage-demos/checkbox/vertical.html)!!!
</div>

:::

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

A compact form group places all control elements on a single line and the supplemental text after the last control element.

<div>
!!!include(.vuepress/public/core-usage-demos/checkbox/compact.html)!!!
</div>

:::
