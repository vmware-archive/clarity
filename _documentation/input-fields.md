---
title: Input Fields
permalink: /documentation/input-fields
layout: documentation
---

{: .component-summary }
#### Users enter text in input fields.  Clarity has a single-line input field and a multiline text area.

Input fields are composed of a label followed by an <code class="clr-code">input</code> or <code class="clr-code">textarea</code> wrapped in a block element with the <code class="clr-code">.form-group</code> classname applied to it.

<clr-input-fields-demo></clr-input-fields-demo>

#### Form Validation

You can use validation styling for input fields by wrapping the input tag in a
container with the <code class="clr-code">.tooltip</code> class along with the <code class="clr-code">.tooltip-validation</code> class.
Use the <code class="clr-code">.invalid</code> class on the <code class="clr-code">.tooltip-validation</code> container to toggle
the validation styling. Place the <code class="clr-code">.tooltip-content</code> <b>after</b>
the <code class="clr-code">input</code> tag.

You can set the direction of the tooltip using these classes:

- .top-right (default)
- .top-left
- .bottom-right
- .bottom-left

You can set the size of the tooltips using these classes:

- .tooltip-xs
- .tooltip-sm
- .tooltip-md
- .tooltip-lg

#### Example

<clr-forms-demo-validation></clr-forms-demo-validation>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Labels

Input fields require a brief label to inform the user about what information belongs in the field.  The label appears to the left of the input field and moves above it when the app is resized smaller.

{: .list}
- Ensure that the label text is clear.
- Keep the text to a single line.
- Use sentence caps without final punctuation.

### Placeholder Text

Text placed inside the field can offer a hint, description, or example format.  Such placeholder text is removed when the user enters text in the field.

You can use placeholder text as a replacement for a label, but only if the field's purpose is clear and easily understood.  For example, the login page uses only placeholder text for the user name and password fields.

Placeholder text is not required for every input field.

### Size

For the best user experience, set the width of the text field to a size that covers most use cases.  Also consider localization.  Word length varies between languages.

### Multiple Input Fields

A complex form might have multiple input fields, stacked vertically.  Space the input fields evenly, clearly associating labels with the corresponding input fields.

### Validation

 Avoid overlaying the validation tooltip over the data that is being validated. By default, the position of the tooltip is to the top-right of the error icon, pointing to its center. Other positions to consider are:

{: .list}
- Top left
- Bottom right
- Bottom left
- Side left
- Side right

Base the width of the tooltip on the message text.  Choices are 72 px, 120 px, 240 px, and 360 px.  The default is 240 px.

Keep the message text short, but informative.  For example, "The username already exists.  Enter a new name."  Try to keep the text to one line.

### Multiline Text Area

Use a multiline text area when a user must enter a long string.  Content wraps when the cursor reaches the right edge and scrolls when it reaches the lower edge.
