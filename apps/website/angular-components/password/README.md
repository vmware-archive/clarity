---
title: Overview
toc: true
---

Password fields are a specialized input field with the ability to toggle between the masked field or to view the password in plain text.

## Usage

Use a password field when the user needs to set or input the password. When setting a password, display the password requirement in the helper text to guide the user. Don’t hide it a in signpost, or reveal it only after the user fails the first attempt.

<!-- [//]: # Types -->

<!-- [//]: # Anatomy -->

<!-- [//]: # Behavior -->

<!-- [//]: # Placement -->

<!-- [//]: # Content -->

## Code Examples

### Basic password

This is the default way to define a password field if you don't have a need for a label or validation. You need to add `clrPassword` to your input to wire up the directive. Notice, it is not necessary to add `type="password"` as it is handled automatically. It will only work if you have the control wired up with either a template driven form or reactive form. You must wrap the input inside the `ClrPasswordContainer` element.

<doc-demo>
!!!include(.vuepress/public/demos/password/basic-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/password/basic-ng.html
</doc-code>

### Helper and error messages

The password form control wires up with the validations placed on an password control, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation only displays an error after the user has left focus on an input. This is for better UX where the user doesn't see an error while they are still typing.

<doc-demo>
!!!include(.vuepress/public/demos/password/helper-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/password/helper-ng.html
</doc-code>

## Accessibility

For applications that use the `ClrPassword` directive and the associated `ClrPasswordContainer` component there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1. Programmatically associating the correct label `for` attribute with the `id` of the input
2. Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3. An `aria-live` region that can notify screen readers about changes in the control error state
4. Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
