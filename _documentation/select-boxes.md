---
title: Select Boxes
permalink: /documentation/select-boxes
layout: documentation
---

{: .component-summary }
##### With a select box, users can select one item from a list of values. The selected item is visible when the select box is closed.

Select boxes are a <code class="clr-code">select</code> element with its <code class="clr-code">option</code>s wrapped in a block element with the <code class="clr-code">.select</code> classname applied to it. To use a select box within a form, it can be wrapped in another block element with the <code class="clr-code">.form-group</code> classname.

<clr-selects-demo></clr-selects-demo>

{: #guidelines}
### Usage

Use a select box for a list of items that a user does not need to see all the time.

A common strategy is to combine an input field with a select box so that a user can enter a value and qualify it with a menu item.  For example, the user might enter a number in an input field and select the units from the select box.

Don't confuse a select box with a [dropdown menu]({{ site.baseurl }}/documentation/dropdowns).  Select boxes are for setting options and work best in forms.  Dropdowns are for presenting actions and most appropriate in a header.

#### Number of List Items

Typically, a select box contains between 3 and 12 items.  For fewer than 3 items or to present choices that are always visible, consider a [radio button]({{ site.baseurl }}/documentation/radios).

#### Label

A select box requires a brief introductory label that describes the items in the menu. Use sentence-style capitalization for both the label and the menu items.
