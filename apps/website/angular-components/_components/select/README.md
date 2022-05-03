---
title: Overview
toc: true
---

With a select box, users can select one item from a list of values. The selected item is visible when the select box is closed.

## Usage

Use a select box for a list of items that a user does not need to see all the time.

A common strategy is to combine an input field with a select box so that a user can enter a value and qualify it with a menu item. For example, the user might enter a number in an input field and select the units from the select box.

Don’t confuse a select box with a dropdown menu. Select boxes are for setting options and work best in forms. Dropdowns are for presenting actions and most appropriate in a header.

### Number of List Items

Typically, a select box contains between 3 and 12 items. For fewer than 3 items or to present choices that are always visible, consider a radio button.

## Content

Use sentence-style capitalization for both the label and the menu items.

## Code & Examples

If you are using Angular, the recommended approach is to always use the `ClrSelect` directive on your selects to help manage the form control. By using `ClrSelect`, you'll automatically be able to leverage built in validation, helper text, and layout features in forms.

### Basic select

This is the standard way to define a select box inside of a form, without the use of a label or validation. You need to add `clrSelect` to your select to wire up the directive.

<doc-demo>
!!!include(.vuepress/code/demos/select/basic-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/select/basic-ng.html
</doc-code>

### Labels

For anything beyond a standalone select control, you'll need to wrap your select with the `ClrSelectContainer` component. This is required to contain all of the logic and validation details for the individual select control.

Then you can add a `label` element and it will automatically get laid out correctly in the form.

<doc-demo>
!!!include(.vuepress/code/demos/select/label-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/select/label-ng.html
</doc-code>

### Helper and error messages

The select form control wires up with the validations placed on an select, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation in this example only displays an error after you focus and leave focus without selecting a value. The easiest way to do this is to highlight the text in this paragraph, and hit tab a few times to change the focus.

<doc-demo>
!!!include(.vuepress/code/demos/select/helper-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/select/helper-ng.html
</doc-code>

## Accessibility

For applications that use the `ClrSelect` directive and the associated `ClrSelectContainer` component there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1. Programmatically associating the correct label `for` attribute with the `id` of the input
2. Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3. An `aria-live` region that can notify screen readers about changes in the control error state
4. Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
