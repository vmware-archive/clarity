---
title: Tooltips
permalink: /documentation/tooltips
layout: documentation
---

{: .component-summary }
##### A tooltip provides a short description of a UI element.

###### .tooltip
This class wraps an actionable icon followed by the <code class="clr-code">.tooltip-content</code> to be
shown on the icon. The content appears when the user hovers over the icon.

###### .tooltip-content
This class contains the text that will be shown when the tooltip is visible.

### Sizes

Tooltips support four sizes, defined by using one of the following classes with the
<code class="clr-code">.tooltip</code> class:

{: .list}
- .tooltip-xs
- .tooltip-sm
- .tooltip-md
- .tooltip-lg

<clr-tooltips-sizes-demo></clr-tooltips-sizes-demo>

### Directions

Tooltips support six directions, defined by using one of the following classes with the
<code class="clr-code">.tooltip</code> class:

{: .list}
- .tooltip-top-right
- .tooltip-top-left
- .tooltip-bottom-right
- .tooltip-top-left
- .tooltip-right
- .tooltip-left

<clr-tooltips-directions-demo></clr-tooltips-directions-demo>

{: #guidelines}
### Usage

Use tooltips for actionable icons that do not have text labels, such as the icons in a toolbar.  A tooltip is visible on hover.

Don't use a tooltip on:

{: .list}
- **Components.**  Provide a descriptive label and use inline or signpost help for more information.
- **Static images.**  Use the HTML alt tag to provide information about the image.
- **Textual links.**  Ensure that the link describes its destination and is not truncated.

Don't rely on tooltips to meet accessibility requirements.  Rather, ensure that your underlying content is well-structured for accessibility, for example, by using ARIA roles.

#### Placement

Choose a tooltip position that ensures the entire tooltip is visible on the screen and that the tooltip does not cover an important UI element.  By default, the positioning for tooltips is to the top-right of the icon, pointing to its center.  

Other positions are:

{: .list}
- Top left
- Bottom right
- Bottom left
- Side left
- Side right

#### Size

Set a width that accommodates the text string.  The default is 240 px.  Other choices are 72 px, 120 px, and 360 px.

#### Text

{: .list}
- Use a verb phrase to describe the action on the icon, for example, "Edit settings."
- Use only plain text and be concise.  Tooltips can be a sentence fragment.
- If more detailed information is required, use another form of help.
- Use sentence-style caps and no ending punctuation.
