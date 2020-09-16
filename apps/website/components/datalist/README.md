---
title: Overview
toc: true
---

The datalist element offers a flexible input when users need to filter and select from a large list of pre-defined options. Or, they need to input a custom value (not provided in the pre-defined list) for the input.

## Usage

Use a datalist when the user needs to choose from a list of items that is long enough for it to be filtered it before selection. Or, there are pre-defined options but the user needs the ability to input a custom value for their use case.

Use a datalist of you want to provide a standard set of options but also allow the user to enter a custom value that may not be pre-defined.

Do not confuse a datalist element with the select input. Datalist elements usually have more than 13 options that the user will need to filter or narrow down before making a choice. If there are 3-13 options, consider using the select input.

<!-- [//]: # Types -->

<!-- [//]: # Anatomy -->

## Behavior

Autocomplete is a familiar pattern for users of web technology. Searching, item suggestion and filtering are all common activities users encounter when interacting with web technology and content. The HTML5 element datalist natively supports autocomplete behavior on the web.

<!-- [//]: # Placement -->

<!-- [//]: # Content -->

## Code Examples

The HTML `datalist` element contains a list of pre-defined `option` elements that can be chosen for an input control value. Or, the user can type a different value into the input.

Natively, the `id` for a datailist provides the link to an input via the value given for the input's `list` attribute. Clarity handles this association by default; it generates and associates the datalist id with its corresponding input element via the `list` attribute on the input. The app marks the input for a datalist by using the `clrDatalistInput` directive on the input and default, unique values are generated for the component. If there is an application side need to declare s custom id for the datalist, this value will be used instead of the generated id.

### Basic Example

<doc-demo>
!!!include(.vuepress/public/demos/datalist/basic-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/datalist/basic-ng.html
</doc-code>

### Validation

Datalists in template driven forms implement the same validation attributes that is described by native HTML form validation. Datalists in reactive forms allow apps to utilize the built in Angular validators (e.g `required` or `minlength`) or, they can add custom validator functions directly to the form control model in the component class.

As with other Clarity form controls, the datalist and its associated input belong inside a container. In this case it is named `clr-datalist-container`. Besides the required input with the `clrDatalistInput` directive and the datalist element this container takes three other optional elements. An optional element, `clr-control-helper` and the `clr-control-error` elements if there is validation for it.

<doc-demo>
!!!include(.vuepress/public/demos/datalist/validation-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/datalist/validation-ng.html
</doc-code>
