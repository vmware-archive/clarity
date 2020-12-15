---
title: Overview
toc: true
---

Textareas are a popular form control for long form text input, and Clarity supports both a CSS only and Angular component. You may wish to review the general forms documentation about form controls.

## Usage

Use a text field when the expected user input may be more than a single line.

## Code Examples

If you are using Angular, the recommended approach is to always use the `ClrTextarea` directive on your textareas to help manage the form control. By using `ClrTextarea`, you'll automatically be able to leverage built in validation, helper text, and layout features in forms.

### Basic textarea

This is the most basic way to create a textarea inside of a form. This is only if you don't have a need for a label or validation. You need to add `clrTextarea` to your textarea to wire up the directive. Notice, it is not necessary to add `type="text"` as it is handled automatically. It will only work if you have the control wired up with either a template driven form or reactive form.

<doc-demo>
!!!include(.vuepress/code/demos/textarea/basic-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/textarea/basic-ng.html
</doc-code>

### Labels

For anything beyond a standalone textarea field, you'll need to wrap it with the `ClrTextareaContainer` component. This is required to contain all of the logic and validation details for the individual textarea control.

Then you can add a `label` element and it will automatically get laid out correctly in the form.

<doc-demo>
!!!include(.vuepress/code/demos/textarea/label-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/textarea/label-ng.html
</doc-code>

### Helper and error messages

The textarea form control wires up with the validations placed on it, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation only displays an error after the user has left focus on a control. This is for better UX where the user doesn't see an error while they are still typing.

<doc-demo>
!!!include(.vuepress/code/demos/textarea/helper-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/textarea/helper-ng.html
</doc-code>

## Accessibility

For applications that use the `ClrTextarea` directive and the associated `ClrTextarea` component there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1. Programmatically associating the correct label `for` attribute with the `id` of the input
2. Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3. An `aria-live` region that can notify screen readers about changes in the control error state
4. Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
