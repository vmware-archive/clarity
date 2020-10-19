---
title: Overview
toc: true
---

::: component-summary

The Control component provides a way to leverage the same Clarity Form layout(s) and behaviors and integrate a custom or third party input control.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Third party library's and custom form control components are often created to fulfill application specific requirements. It should be used when mixing Clarity and non-Clarity form controls.

:::

::: component-section-level-one-title

## Anatomy

:::

::: component-section-level-one

Clarity form controls have the same basic anatomy independent of the type of input that is used.

:::

::: component-section-level-two-title

### Label

:::

::: component-section-level-two

Use the label to benefit screen readers which will read the label aloud when a user focuses on the label element. Use of a label also increases the clickable area when it is a clickable input such as a [radio](/web-components/radio/), [checkbox](/web-components/checkbox/) or [toggle](/web-components/toggle/) input.

:::

::: component-section-level-two-title

### Input

:::

::: component-section-level-two

The input is the element a user will interact with.

:::

::: component-section-level-two-title

### Helper message

:::

::: component-section-level-two

A Helper message is optional text that will inform the user when they interact with the input.

:::

::: component-section-level-two-title

### Error message

:::

::: component-section-level-two

An error message is optional text that will inform the user when there is a problem with the input.

:::

::: component-section-level-two-title

### Success message

:::

::: component-section-level-two

A success message is optional text that will infrom the user when all is well with the input.

:::

::: component-section-level-one-title

## States

:::

::: component-section-level-one

There are multiple states a form control can be in. All form controls have at least one of these four states. Some controls have additional states

:::

::: component-section-level-two-title

### Default

:::

::: component-section-level-two

The default state exists before a user interacts with the control.

:::

::: component-section-level-two-title

### Disabled

:::

::: component-section-level-two

The disabled state exists when the user must be prevented from interacting with the control.

:::

::: component-section-level-two-title

### Error

:::

::: component-section-level-two

The error state exists after a user interacts with the control. It could occur after the user input is checked by an external service and found invalid.

:::

::: component-section-level-two-title

### Success

:::

::: component-section-level-two

The success state exists after a user interacts with the control. It could occur after the user input is checked by an external service and found to be valid.

:::

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Form controls can have three layouts. Horizontal, vertical and Compact. Horizontal is also the default if nothing is specified.

:::

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

In a horizontal layout, the lable and input are on the same line and any supplementary text (info, error or success) are below the input. Use a horizontal layout when there is ample horizontal space for the form control(s).

:::

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

In a vertical layout the label is above the input and the supplemntary text (info, error or success) is below the input. Use a vertical layout when the form width is narrow.

:::

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

A compact layout the label, input and supplemntarty text (info, error or success) are all on one line.

:::
