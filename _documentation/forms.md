---
title: Forms
permalink: /documentation/forms
layout: documentation
---

{: .component-summary }
#### A form is a structured layout of related input components.

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

For forms inside of smaller containers like modals or wizards, the whitespace around form groups and form blocks can be minimized by using the `.compact` classname.

<clr-forms-compact-demo></clr-forms-compact-demo>

### Forms in Grid

Forms can be used in a grid. Extend the <code class="clr-code">.row</code> class on a <code class="clr-code">.form-group</code>
and place the form fields in the grid column classes. To occupy 100% of the column width, extend the <code class="clr-code">.form-control</code> class on the form field. Resize your browser to see how forms in grids work.

<clr-forms-demo-grid></clr-forms-demo-grid>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Usage

A form works best for guiding the user through input in a specific order.  Forms are comprised of other components, such as [input fields]({{ site.baseurl }}/documentation/input-fields), [dropdowns]({{ site.baseurl }}/documentation/dropdowns), [checkboxes]({{ site.baseurl }}/documentation/checkboxes), [radio buttons]({{ site.baseurl }}/documentation/radios), [toggle switches]({{ site.baseurl }}/documentation/toggle-switches), and text.

### Minimize Scrolling

For a form that scrolls several pages, consider these techniques for organizing the content:

{: .list}
- Group related fields in a form block with a descriptive label.
- Progressively reveal more complex or less frequently used data.
- Divide the content into separate pages in a wizard.

### Labels

Labels appear on the left of a component and move above the component when the app is resized to a tall, narrow layout. Labels use sentence caps and no ending punctuation.

### Placeholder Text

Placeholder text can help clarify an input field.  Located inside the field, this text disappears when the user types in the field.

A best practice is to use the label to indicate what information goes in the field and placeholder text as an additional hint, description, or example format:

Label: Airport
<br>
Placeholder text:  SFO, SJO

Only use placeholder text as a replacement for labels in forms with a small number of easily-understood fields.  The login page does this for the user name and password fields.

### Disabled Fields

Show a disabled field only if the user can take a reasonable action to enable the component.  When disabling a component, also disable all associated elements, for example, the component label and explanatory text.

### Button Placement

The placement of the button depends on where the form appears in the UI.  See [buttons]({{ site.baseurl }}/documentation/buttons) for guidelines.

### Validation

For information on validation, see [input fields]({{ site.baseurl }}/documentation/input-fields).

### Focus and Navigation

Provide auto focus in the first field by default.  Users can then navigate through elements in the form in a logical sequence.
