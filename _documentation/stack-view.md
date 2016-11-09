---
title: Stack View
permalink: /documentation/stack-view
layout: documentation
---

{: .component-summary }
#### A stack view displays key/value pairs, which users can expand to show more detail.

### HTML and Styles

{% raw %}
<div class="alert alert-warning">
    <div class="alert-item">
        <span class="alert-text">
            We do not recommend using Stack View as a static component since the DOM structure
            is architected to enable the Stack View's Javascript behavior and animation handling.
            If you cannot use the Angular component, these are the elements and
            classes you will need to use to benefit from Clarity's styles, without the animations.
        </span>
    </div>
</div>
{% endraw %}

<clr-stack-view-static-demo></clr-stack-view-static-demo>

### Basic Stack View Component

<clr-stack-view-angular-basic-demo></clr-stack-view-angular-basic-demo>

### Stack View With Editing in a Modal

<clr-stack-view-angular-modal-edit-demo></clr-stack-view-angular-modal-edit-demo>

### Lazy Loading of Children

This example shows how to leverage the various inputs and outputs provided by
<code class="clr-code">&lt;clr-stack-block&gt;</code> to make blocks expandable even though their children are loaded on demand
from the server.

<clr-stack-view-angular-lazyload-demo></clr-stack-view-angular-lazyload-demo>

###### Options for &lt;clr-stack-block&gt;

{% raw %}
<table class="table">
  <thead>
    <tr>
      <th class="left">Input/Output</th>
      <th>Values</th>
      <th class="left">Default</th>
      <th class="left">Effect</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left">[clrSbExpandable]</td>
      <td>true, false</td>
      <td class="left">true if and only if &lt;clr-stack-block&gt; children are detected</td>
      <td class="left">Makes the stack block expandable, even if it doesn’t contain any nested &lt;clr-stack-block&gt;</td>
    </tr>
    <tr>
      <td class="left">[clrSbExpanded]</td>
      <td>true, false</td>
      <td class="left">false</td>
      <td class="left">Two-way binding on the state of the block: expanded or collapsed. Has no effect if the block is not expandable.</td>
    </tr>
    <tr>
      <td class="left">[clrSbNotifyChange]</td>
      <td>true, false</td>
      <td class="left">false</td>
      <td class="left">Shows an updated indicator on the stack block, when set to true.</td>
    </tr>
  </tbody>
</table>
{% endraw %}

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Usage

Stack views are designed for use in the main content area and modals.  Use a stack view when you want to:

{: .list}
- Display related key/value pairs, for example, an object's settings.
- Progressively disclose data.  This is useful when the set of key/value pairs is large or you want to enable users to reveal more complex or less frequently used data as necessary.

#### Enabling Value Editing

In this pattern, the component includes an Edit button on the top right, which on click opens an editable stack view in a modal.  This design prevents users from accidentally altering a value in the main content area.  Common editing controls include input fields, select boxes, checkboxes, and radio buttons.

#### Labels

{: .list}
- Provide terse labels that let users know what is under the label.  Try to keep the label to one line.
- Use noun phrases, sentence-style capitalization, and no ending punctuation.
- Avoid using icons.

#### Highlights and Horizontal lines

The stack view highlight color (#DDDDDD) differs from the usual Clarity highlight color to make it more distinct.  Expanded sections have a lighter background color to make it easier to parse the hierarchy.

Horizontal lines in the stack editor are for readability--they help users quickly discern the relationship between columns.
