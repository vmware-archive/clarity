---
title: Overview
toc: true
---

Using radio buttons, users can select one option from a group of options.

## Usage

Use radio buttons when you want users to see all available options and the list of options is small. For mutually exclusive options, consider a [checkbox](/angular-components/checkbox) or [toggle switch](/angular-components/toggle).

- Radio buttons are best for six or fewer options.
- For more than six options, consider a [select box](/angular-components/select), which prompts users to disclose the options.

## Code & Examples

If you are using Angular, the recommended approach is to always use the `ClrRadio` directive on your radio buttons to help manage the form control. By using `ClrRadio`, you'll automatically be able to leverage built in validation, helper text, and layout features in forms.

### Basic radio button

While it is possible to create a radio button without a label, the cases are rare. However, it is possible by just adding `clrRadio` to your radio button to wire up the directive. Notice, it is necessary to add `type="radio"`.

For anything beyond a standalone radio button, you'll need to wrap your radios with the `ClrRadioWrapper` component when you include a label. This manages the label and display of the radio button for you.

<doc-demo>
!!!include(.vuepress/public/demos/radio/basic-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/radio/basic-ng.html
</doc-code>

### Helper and error messages

To leverage helper and validation messages, you'll need to wrap all of the radios inside of a `ClrRadioContainer` component. The radio button container tracks the the validations placed on a radio button, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation in this example only displays an error after you focus and leave focus without selecting a value. The easiest way to do this is to highlight the text in this paragraph, and hit tab a few times to change the focus.

<doc-demo>
!!!include(.vuepress/public/demos/radio/helper-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/radio/helper-ng.html
</doc-code>

### Inline radios

Radio buttons can be placed inline by default by adding the `clrInline` directive to your radio container elements. The radio buttons will wrap if there is not enough space.

<doc-demo>
!!!include(.vuepress/public/demos/radio/inline-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/radio/inline-ng.html
</doc-code>

### Disabled radio

A radio can be disabled by simply putting the `disabled` attribute on the radio input. This does require the radio to be inside of a radio container. Also, for groups of radios you have to put the disabled attribute on the last radio and cannot disable individual ones, as Angular doesn't have support to disable individual radios in a group.

<doc-demo>
!!!include(.vuepress/public/demos/radio/disabled-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/radio/disabled-ng.html
</doc-code>

## Accessibility

For applications that use the `ClrRadio` directive and the associated `ClrRadioContainer` and `ClrRadioWrapper` components there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1. Programmatically associating the correct label `for` attribute with the `id` of the input
2. Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3. An `aria-live` region that can notify screen readers about changes in the control error state
4. Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
