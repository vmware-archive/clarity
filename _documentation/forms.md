---
title: Forms
permalink: /documentation/forms
layout: documentation
---

{: .component-summary }
##### A form is a structured layout of related input components.

A container, often a <code class="clr-code">div</code> with a <code class="clr-code">.form-group</code> classname on it, wraps one or more <code class="clr-code">label</code> and <code class="clr-code">input</code> pairs.

###### .form-block

{: .squish}
This is an optional wrapper around one or more .form-group elements (see below). The .form-block element can hold a label element that serves as a title or header for the form-groups within it.

###### .form-group

{: .squish}
This is a wrapper intended to contain a label and one or more input, .select, .checkbox, .radio, or other form fields.

###### .select

{: .squish}
This is a required wrapper intended to contain a select element and its options. The wrapper is necessary to apply the custom Clarity styles for select boxes.

###### .radio, .checkbox

{: .squish}
This is a required wrapper intended to contain a radio button or a checkbox input followed by a label element. The wrapper is necessary to handle the alignment and spacing of the elements within it.

### Wrapper Elements

<code class="clr-code">.form-block</code>, <code class="clr-code">.form-group</code>, <code class="clr-code">.select</code>, <code class="clr-code">.radio</code>, and <code class="clr-code">.checkbox</code> wrappers can be placed on any block HTML element. The recommendation is for <code class="clr-code">.form-block</code> classnames to be placed on <code class="clr-code">section</code> or <code class="clr-code">fieldset</code> elements and for <code class="clr-code">.form-group</code> classnames to be placed on <code class="clr-code">div</code> elements.

<clr-forms-demo-fields></clr-forms-demo-fields>

### Compact Forms

For forms inside of smaller containers like modals or wizards, the whitespace around form groups and form blocks can be minimized by using the <code>.compact</code> classname.

<clr-forms-compact-demo></clr-forms-compact-demo>

### Forms in Grid

Forms can be used in a grid. Extend the <code class="clr-code">.row</code> class on a <code class="clr-code">.form-group</code>
and place the form fields in the grid column classes. To occupy 100% of the column width, extend the <code class="clr-code">.form-control</code> class on the form field. Resize your browser to see how forms in grids work.

<clr-forms-demo-grid></clr-forms-demo-grid>

## Forms Using Angular 2

Following are examples of using Clarity forms with the
Template-Driven and Model-Driven/Reactive approaches in Angular 2.

**Note:** For more information see the Angular 2 documentation on
[Template-Driven Forms](https://angular.io/docs/ts/latest/guide/forms.html)
and [Model-Driven/Reactive Forms](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html).

#### Example 1. Template-Driven Forms
<clr-template-driven-forms-demo></clr-template-driven-forms-demo>

#### Example 2. Model-Driven/Reactive Forms
<clr-reactive-forms-demo></clr-reactive-forms-demo>

{: #guidelines}
### Usage

Forms guide users through input in a structured, specific order.  Forms are comprised of [text]({{ site.baseurl }}/documentation/typography) and input components such as [checkboxes]({{ site.baseurl }}/documentation/checkboxes), [dropdowns]({{ site.baseurl }}/documentation/dropdowns), [input fields]({{ site.baseurl }}/documentation/input-fields), [radio buttons]({{ site.baseurl }}/documentation/radios), and [toggle switches]({{ site.baseurl }}/documentation/toggle-switches).

#### Minimize Scrolling

For a form that scrolls several pages, consider organizing the content by:

{: .list}
- Grouping related fields in a form block with a descriptive label.
- Progressively revealing more complex or less frequently used data.
- Dividing content into separate pages in a [wizard]({{ site.baseurl }}/documentation/wizards).

#### Labels

Labels appear to the left of a component, moving above the component when the user resizes the window to smaller dimensions.

Labels use sentence caps, with no ending punctuation.

#### Placeholder Text

Located inside a field, placeholder text can help clarify expected input.  Placeholder text disappears when the user types in the field.

Tip: Use the label to show what information goes in the field and placeholder text as a hint, description, or example format:

Label: Airport
<br>
Placeholder text:  SFO, SJO

Placeholder text can replace labels only in simple forms with a few easily-understood fields, see the [login page]({{ site.baseurl }}/documentation/login).

#### Disabled Fields

Show a disabled field only if the user can take a reasonable action to enable the component.  When disabling a component, also disable all associated elements, such as the component label and explanatory text.

#### Button Placement

Button placement depends on form type and where it appears in the UI.  See [buttons]({{ site.baseurl }}/documentation/buttons) for guidelines.

#### Validation

For information on validation, see [input fields]({{ site.baseurl }}/documentation/input-fields).

#### Focus and Navigation

Provide auto focus in the first field by default.  Users can then navigate through the form in a logical sequence.
