---
title: Overview
toc: true
---

::: component-summary

Forms are input controls and groups of input controls manage the collection and submission of data from your user to the application.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Forms are comprised of control components such as checkboxes, dropdowns, input fields, radio buttons, toggle switches and more. Forms that are easy to complete increase the quality of the response from the user. Clear and simple forms help prevent mis-understanding and incorrect data submission by the user.

:::

:::component-section-level-two-title

### Form Length

:::

:::component-section-level-two

Forms should only be as long as necessary. Reviewing each form input and eliminate unnecessary controls by asking whether you could obtain the information in another way, or at a later, more convenient time. Only include controls that are required. This will free the user from needing to decide which controls need their attention. If a control is optional find a more natural place and time to collect that information and keep it seperate from the required data.

:::

::: component-section-level-one-title

## Layouts

:::

:::component-section-level-one

Clarity offers three types of forms: horizontal (our recommended default), vertical and compact. Use these three layouts to adapt the form to a variety of conditions that can affect the users submission experience. Some conditions to consider when chosing a form alyout are:

1. Narrow or mobile screens
2. Very wide screens
3. Embedded forms into one section of a page layout

:::

:::component-section-level-two-title

### Horizontal

:::

:::component-section-level-two
TODO turn this into a core form.
Default Horizontal formats are good for the quick scanning of labels, and can be used in cases of limited vertical space. The space between label and input however can slow users down.

<DocIndent>
<doc-demo>
!!!include(.vuepress/code/core-usage-demos/form/horizontal.html)!!!
</doc-demo>
</DocIndent>

:::

:::component-section-level-two-title

### Vertical & Vertical Inline

:::

:::component-section-level-two

This option is better for scanning, mobile experiences, accessibility, and localization. While it offers better completion rates, it is less ideal for longer forms.

<DocIndent>
<doc-demo>
!!!include(.vuepress/code/core-usage-demos/form/vertical.html)!!!
</doc-demo>
</DocIndent>

:::

:::component-section-level-two-title

### Compact

:::

:::component-section-level-two

For cases with highly limited space, we provide a compact form layout.

<DocIndent>
<doc-demo>
!!!include(.vuepress/code/core-usage-demos/form/compact.html)!!!
</doc-demo>
</DocIndent>

:::

::: component-section-level-one-title

## Form Controls

:::

:::component-section-level-two-title

### Input Grouping

:::

:::component-section-level-two

Grouping will make scanning easier. A form with more than 6 inputs will likely have inputs that can be grouped together, like “address”: street, city, zip, county, country, etc.

For the grouping of labels and their input fields, we recommend grouping labels closely with their respective input fields.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Put labels in close proximity to their input controls" src="/images/angular-components/form/input-grouping-do.svg" align="center" />
Put labels in close proximity to their input controls.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Space labels out far from their input controls" src="/images/angular-components/form/input-grouping-dont.svg" align="center" />
Space labels out far from their input controls.
</div>

</div>

:::

:::component-section-level-two-title

### Form Elements

:::

:::component-section-level-two

**Radios, Checkboxes, and Select Box**
For inputs with 3 or more options, you may use radios, checkboxes or select boxes. We recommend placing your options vertically in one column to make it easier to scan.

Radios and checkboxes are used when it is helpful to compare options within the context of the form, as all selections will be visible at all times. Select boxes typically have more than 7 options that do not need to be compared with each other.

**Error Message Styling**
When showing error inputs, highlight the input field with red in some way, but also pair the red with another visual indicator, like an icon. This will help with accessibility.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Place icons outside the input field" src="/images/angular-components/form/error-do.svg" align="center" />
Place icons outside the input field. This will also help avoid browser and third-party app collision conflicts.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Don't Put icons inside the input field" src="/images/angular-components/form/error-dont.svg" align="center" />
Don't put icons inside the input field. If inside, account for changing form value space (increase characters).
</div>

</div>

:::

::: component-section-level-one-title

## Behavior

:::

:::component-section-level-two-title

### Validation and Error Messaging

:::

:::component-section-level-two

You also want to let users know when something is wrong with the information provided.

:::

:::component-section-level-two-title

### Error Message Behavior

:::

:::component-section-level-two

For most cases, validate when the user leaves the field (onblur). Invalidating fields while users are still typing can be frustrating.

There are some cases where real-time validation can be helpful, such as inputs with sensitive field value lengths (like tweets), or when users return to an error field and successfully edit the error field, or for password fields with visible password strength criteria.

:::

::: component-section-level-one-title

## Placement

:::

:::component-section-level-two-title

### Error Message Location

:::

:::component-section-level-two

We recommend displaying error messages within the same area where the error occurs.

:::

:::component-section-level-one

## Content

:::

:::component-section-level-two-title

### Error Message Content

:::

:::component-section-level-two

Humanize the error messaging as much as possible. The content should provide clear guidance on how to fix the error. Avoid unrecognizable system error messages like "code 500 error". You may also consider using more than one error message when helpful. For example, if an email address input field has an error, consider either showing “please enter an email address” for a blank field, or “email address needs an ’@’ symbol followed by a domain” for an invalid symbol.

:::

::: component-section-level-one-title

## Forms Accessibility

:::

:::component-section-level-one

For screen reader accessibility, forms with validation messages should provide a descriptive message on how validation messages will be triggered. The `.cds-sr-only` class will hide content and only make it visible for screen readers.

Clarity form controls are built with `cds-CONTROLNAME-group` elements. These elements are used to build in the accessibility needed to make Clarity forms accessible. While it is control dependent, the containers enable screen readers to be aware of errors both on the control itself and in the form as a whole. They enable the behaviors that describe controls with their respective labels that in an accessible way.

Without the `cds-CONTROL-group` parent the forms and form controls are not accessible.

:::

::: component-section-level-one-title

## Helper and validation messages

:::

:::component-section-level-one

All fields should be assumed to be required. Clarity does not support a required input treatment for labels (which often comes in the form of an \* by the label). The recommendation is to focus your forms to include only required fields, and if a field is optional then you can describe it as such in the label like (Optional).

:::

:::component-section-level-two-title

### Helper

:::

:::component-section-level-two

<DocIndent>
<doc-demo>
!!!include(.vuepress/code/core-usage-demos/form/helper.html)!!!
</doc-demo>
</DocIndent>

:::

:::component-section-level-two-title

### Error

:::

:::component-section-level-two

<DocIndent>
<doc-demo>
!!!include(.vuepress/code/core-usage-demos/form/error.html)!!!
</doc-demo>
</DocIndent>

:::

:::component-section-level-two-title

### Success

:::

:::component-section-level-two

<DocIndent>
<doc-demo>
!!!include(.vuepress/code/core-usage-demos/form/success.html)!!!
</doc-demo>
</DocIndent>

:::

::: component-section-level-one-title

## Custom and non-Clarity Controls

:::

:::component-section-level-one

Applications often have form controls that are not supported by Clarity directly. To make these controls work nicely with Clarity, you can wrap them in a [generic control](/web-component/control/) container. Regardless if you make your own form controls or import a third party control, the generic container should help make your controls more consistent.

:::
