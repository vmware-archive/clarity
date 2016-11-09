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

### Usage

#### Labels

Input fields require a brief label to indicate what information belongs in the field.  The label appears to the left of the input field and moves above it when the app is resized smaller.

{: .list}
- Ensure that the label wording is clear.
- Keep the text to a single line.
- Use sentence caps without final punctuation.

#### Placeholder Text

Located inside a field, placeholder text can help clarify expected input.  Placeholder text disappears when the user types in the field.

Tip: Use the label to show what information goes in the field and placeholder text as a hint, description, or example format:

Label: Airport
<br>
Placeholder text:  SFO, SJO

Placeholder text can replace labels only in simple forms with a few easily-understood fields, see the [login page]({{ site.baseurl }}/documentation/login).


Placeholder text is not required for every input field.

#### Size

For the best user experience, consider localization and keep in mind that word length varies among languages.

#### Multiple Input Fields

A complex form might have multiple input fields, stacked vertically.  Space the input fields evenly, clearly associating labels with the corresponding input fields.

#### Validation

 Avoid overlaying the validation tooltip on the data is being validated. By default, the position of the tooltip is to the top-right of the error icon, pointing to its center. Other positions to consider are:

{: .list}
- Top left
- Bottom right
- Bottom left
- Side left
- Side right

Base the width of the tooltip on the message text.  Choices are 72 px, 120 px, 240 px, and 360 px.  The default is 240 px.

Make the message text short, but informative.  For example, "The username already exists.  Enter a new name."  Try to limit the text to one line.

#### Multiline Text Area

Use a multiline text area when a user must enter a long string.  Content wraps when the cursor reaches the right edge and scrolls when it reaches the lower edge.
