---
title: Tooltips
permalink: /documentation/tooltips
layout: documentation
---

{: .component-summary }
#### A tooltip provides a short description of a UI element when the user hovers the pointer over it.

**.tooltip**
<div>
    This class wraps an actionable icon followed by the <code class="clr-code">.tooltip-content</code> to be
    shown on the icon. The content appears when the user hovers over the icon.
</div>

**.tooltip-content**
<div>
    This class contains the text that will be shown when the tooltip is visible.
</div>

### Sizes

Tooltips support four sizes, defined by using one of the following classes with the
<code class="clr-code">.tooltip</code> class:

- .tooltip-xs
- .tooltip-sm
- .tooltip-md
- .tooltip-lg

<clr-tooltips-sizes-demo></clr-tooltips-sizes-demo>

### Directions

Tooltips support six directions, defined by using one of the following classes with the
<code class="clr-code">.tooltip</code> class:

- .tooltip-top-right
- .tooltip-top-left
- .tooltip-bottom-right
- .tooltip-top-left
- .tooltip-right
- .tooltip-left

<clr-tooltips-directions-demo></clr-tooltips-directions-demo>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Usage

Use tooltips for actionable icons that do not have text labels, such as the icons in a toolbar.

Don't use a tooltip on:

<ul class="list">
<li>Components.  Provide a descriptive label and use inline or signpost help for more information.</li>
<li>Static images.  Use the HTML alt tag to provide information about the image.</li>
<li>Textual links.  Ensure that the link describes its destination and is not truncated.</li>
</ul>

Don't rely on tooltips to meet accessibility requirements.  Rather, ensure that your underlying content is well-structured for accessibility, for example, by using [ARIA roles](https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#accessiblewidget).

### Placement

Choose a tooltip position that ensures the entire toolitp is visible on the screen and that the tooltip does not cover an important UI element.  By default, the positioning for tooltips is to the top-right of the icon, pointing to its center.  

Other positions are:

<ul class="list">
<li>Top left</li>
<li>Bottom right</li>
<li>Bottom left</li>
<li>Side left</li>
<li>Side right</li>
</ul>

### Size

Set a width that accommodates the text string.  The default is 240 px.  Other choices are 72 px, 120 px, and 360 px.

### Text

<ul class="list">
<li>Use a verb phrase to describe the action on the icon, for example, "Edit Settings."</li>
<li>Use only plain text and be concise.  Tootlips can be a sentence fragment.</li>
<li>Do not  exceed one line of text. If more detailed information is required, use another form of help.</li>
<li>Use sentence-style caps and no ending punctuation.</li>
</ul>
