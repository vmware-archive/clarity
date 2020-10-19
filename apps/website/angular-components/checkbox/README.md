---
title: Overview
toc: true
---

With checkboxes, users can select one or more options from a list of options.

## Usage

Use a checkbox for yes or no choices, for example "Remember me" on the [login page](/angular-components/login).

- Checkboxes are best for seven or fewer options
- For readability, keep the checkbox label to a single line

For on and off options, use a [toggle switch](/angular-components/toggle).

## Code & Examples

### Basic checkbox button

It is possible to create a checkbox button without a label. However the checkbox will not take advantage of the accessibility built into Clarity Forms. An example of the basic checkbox adds `clrCheckbox` to an input with the `type="checkbox"`. This will wire up the checkbox directive for use with the form.

**Labels are required to make Clarity form controls accessible.**

To enable the accessibility behaviors, you'll need to wrap your checkboxes with the `ClrCheckboxWrapper` component when you include a label. This manages the label and display of the checkbox button for you.

Checkboxes without a label will not be accessible. So, while it it is possible to create a checkbox by just adding `clrCheckbox` it is not recommended. Notice, it is necessary to add `type="checkbox"`. The basic checkbox control needs to be nested inside both the `clr-checkbox-container` and the `clr-checkbox-wrapper` to enable all of the styles and accessibility behaviors.

<doc-demo>
!!!include(.vuepress/public/demos/checkbox/basic-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/checkbox/basic-ng.html
</doc-code>

### Helper and error messages

To leverage helper and validation messages, you'll need to wrap all of the checkboxes inside of a `ClrCheckboxContainer` component. The checkbox button container tracks the the validations placed on a checkbox button, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation in this example only displays an error after you focus and leave focus without selecting a value. The easiest way to do this is to highlight the text in this paragraph, and hit tab a few times to change the focus.

<doc-demo>
!!!include(.vuepress/public/demos/checkbox/helper-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/checkbox/helper-ng.html
</doc-code>

### Inline checkboxes

Checkbox buttons can be placed inline by default by adding the `clrInline` directive to your checkbox container elements. The checkbox buttons will wrap if there is not enough space.

<doc-demo>
!!!include(.vuepress/public/demos/checkbox/inline-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/checkbox/inline-ng.html
</doc-code>

#### Disabled checkboxes

A checkbox can be disabled by simply putting the `disabled` attribute on the checkbox input. This does require the checkbox to be inside of a checkbox container. Also, for groups of checkboxes you have to put the disabled attribute on the last checkbox and cannot disable individual ones, as Angular doesn't have support to disable individual checkboxes in a group.

<doc-demo>
!!!include(.vuepress/public/demos/checkbox/disabled-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/checkbox/disabled-ng.html
</doc-code>

#### Indeterminate checkboxes

In cases where you want to display a checkbox as indeterminate, meaning it is neither selected or unselected. This can happen in cases where your checkboxes have a hierarchy (such as we have in our Tree View), and a child is selected but not the parent. You can control the indeterminate state by binding a boolean value like `[indeterminate]="true"`.

<doc-demo>
!!!include(.vuepress/public/demos/checkbox/indeterminate-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/checkbox/indeterminate-ng.html
</doc-code>

## Accessibility

For applications that use the `ClrCheckbox` directive and the associated `ClrCheckboxContainer` and `ClrCheckboxWrapper` components there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1. Programmatically associating the correct label `for` attribute with the `id` of the input
2. Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3. An `aria-live` region that can notify screen readers about changes in the control error state
4. Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
