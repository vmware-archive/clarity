---
title: Overview
toc: true
---

Inputs enable the user to input text information.

## Usage

Use inputs in a form as a way to allow the user to enter a value associated with a key, such as entering their name in a field labeled **name**.

You may wish to review the general forms documentation about designing forms.

## Behavior

When the user focuses an input, the underline becomes thicker and colored to accentuate this state. When the user begins typing, the placeholder text is replaced with a blinking cursor indicating the input is ready to receive data. Clarity provides functions to validate the user input and return the corresponding state to your application.

<!-- [//] (GIF to be created - input interaction) -->

## States / Types

There are 2 layouts for inputs, vertical and horizontal as well as a compact size.

### Horizontal - Default

Horizontal formats are good for the quick scanning of labels, and can be used in cases of limited vertical space. The space between label and input however can slow users down.

::: inset left

<form class="clr-form clr-form-horizontal">
  <div class="clr-form-control">
    <label for="demo7" class="clr-control-label">Horizontal Layout</label>
    <div class="clr-control-container">
      <div class="clr-input-wrapper">
        <input type="text" id="demo7" placeholder="Enter value here" class="clr-input">
        <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      </div>
      <span class="clr-subtext">Helper Text</span>
    </div>
  </div>
</form>
:::

### Vertical

This option is better for scanning, mobile experiences, accessibility, and localization. While it offers better completion rates, it is less ideal for longer forms.

::: inset left

<form class="clr-form">
  <div class="clr-form-control">
    <label for="demo6" class="clr-control-label">Vertical Layout</label>
    <div class="clr-control-container">
      <div class="clr-input-wrapper">
        <input type="text" id="demo6" placeholder="Enter value here" class="clr-input">
        <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      </div>
      <span class="clr-subtext">Helper Text</span>
    </div>
  </div>
</form>
:::

### Compact

For cases with highly limited space, we provide a compact form layout.

::: inset

<form class="clr-form clr-form-compact">
  <div class="clr-form-control">
    <label for="demo5" class="clr-control-label">Compact Layout</label>
    <div class="clr-control-container">
      <div class="clr-input-wrapper">
        <input type="text" id="demo5" placeholder="Enter value here" class="clr-input">
        <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      </div>
      <span class="clr-subtext">Helper Text</span>
    </div>
  </div>
</form>
:::

<!-- [//]: # Anatomy - Inputs consist of the label text/input text, underlying line, helper message (optional), and an icon (optional).    -->

## Code Examples

If you are using Angular, the recommended approach is to always use the `ClrInput` directive on your inputs to help manage the form control. By using `ClrInput`, you'll automatically be able to leverage built in validation, helper text, and layout features in forms.

### Basic input

This is the most basic way to create an input inside of a form. This is only if you don't have a need for a label or validation. You need to add `clrInput` to your input to wire up the directive. Notice, it is not necessary to add `type="text"` as it is handled automatically. It will only work if you have the control wired up with either a template driven form or reactive form.

<doc-demo>
!!!include(.vuepress/public/demos/input/basic-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/input/basic-ng.html
</doc-code>

### Labels

For anything beyond a standalone input field, you'll need to wrap your input with the `ClrInputContainer` component. This is required to contain all of the logic and validation details for the individual input control.

Then you can add a `label` element and it will automatically get laid out correctly in the form.

<doc-demo>
!!!include(.vuepress/public/demos/input/label-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/input/label-ng.html
</doc-code>

### Helper and error messages

The input form control wires up with the validations placed on an input, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation only displays an error after the user has left focus on an input. This is for better UX where the user doesn't see an error while they are still typing.

<doc-demo>
!!!include(.vuepress/public/demos/input/helper-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/input/helper-ng.html
</doc-code>

## Accessibility

For applications that use the `ClrInput` directive and the associated `ClrInputContainer` component there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1. Programmatically associating the correct label `for` attribute with the `id` of the input
2. Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3. An `aria-live` region that can notify screen readers about changes in the control error state
4. Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
