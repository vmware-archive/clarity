---
title: Buttons
permalink: /documentation/buttons
layout: documentation
---


{: .component-summary }
#### Use Clarity's buttons to submit forms or initiate actions in modals, wizards, or other interactive blocks of content.

### Styles

Clarity defines three button styles:

{: .list}
- **Solid.** A solid background with light text. These buttons are prominent on the page.
- **Outline.** A transparent background with colored border and text. On hover, the button fills with color.
- **Flat.** Text in Action Blue that fills with a button shape on hover.  

<clr-buttons-demo-real-button></clr-buttons-demo-real-button>

### Types

<clr-buttons-demo-primary-button></clr-buttons-demo-primary-button>

{: .indent}

<clr-buttons-demo-secondary-button></clr-buttons-demo-secondary-button>

{: .indent}

<clr-buttons-demo-tertiary-button></clr-buttons-demo-tertiary-button>

### States

<clr-buttons-demo-button-states></clr-buttons-demo-button-states>

### Sizes

<clr-buttons-demo-button-sizes></clr-buttons-demo-button-sizes>

### Inverse

<clr-buttons-demo-inverse-button></clr-buttons-demo-inverse-button>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Styles

<div class="row buttons-modal-gfx">
    <div class="col-xs-12 col-sm-2">
        <button type="submit" class="btn btn-primary">Solid</button></p>
    </div>
    <div class="col-xs-12 col-sm-10">
        For the preferred or default action. One solid button per component.
    </div>
</div>
<div class="row buttons-modal-gfx">
    <div class="col-xs-12 col-sm-2">
        <button type="submit" class="btn btn-outline">Outline</button></p>
    </div>
    <div class="col-xs-12 col-sm-10">
        For a neutral or negative action, next to a solid button, or when actions are equivalent.
    </div>
</div>
<div class="row buttons-modal-gfx">
    <div class="col-xs-12 col-sm-2">
        <button type="submit" class="btn btn-link">Flat</button>
    </div>
    <div class="col-xs-12 col-sm-10">
        For lower priority actions (More Information or Don't Remind Me Again).  
        Also when actions are equivalent and space is limited (toolbars and cards).
    </div>
</div>


### Order and Alignment

In general, the order and alignment of the buttons depends on the container.  Spatial relationships with other elements in the component or space also determine button placement.

{: .list}
- [Modals]({{ site.baseurl }}/documentation/modals), right-aligned
- [Wizards]({{ site.baseurl }}/documentation/wizards), right-aligned
- [Cards]({{ site.baseurl }}/documentation/cards), left-aligned
- [Content area]({{ site.baseurl }}/documentation/app-layout), left-aligned

### Info, Success, and Danger Buttons

Use info, success, and danger buttons to denote the severity of an action.

<div class="row buttons-modal-gfx">
    <div class="col-xs-12 col-sm-2">
        <button type="submit" class="btn btn-outline">Info</button>
    </div>
    <div class="col-xs-12 col-sm-10">
        For displaying more detailed information. Typically an outline button.
    </div>
</div>
<div class="row buttons-modal-gfx">
    <div class="col-xs-12 col-sm-2">
        <button type="submit" class="btn btn-success">Success</button>
    </div>
    <div class="col-xs-12 col-sm-10">
        For the last step (and preferred action) in a multi-step workflow.
    </div>
</div>
<div class="row buttons-modal-gfx">
    <div class="col-xs-12 col-sm-2">
        <button type="submit" class="btn btn-danger">Danger</button>
    </div>
    <div class="col-xs-12 col-sm-10">
        For a destructive action, such as Delete.  Clarity also uses red for warning buttons.  Although warning messages are often in yellow, this color does not work well for buttons because the light-colored text is not accessible against a yellow background.
    </div>
</div>

### Sizes

Base the height of the button on its location in the UI.

<div class="row buttons-modal-gfx">
    <div class="col-xs-12 col-sm-2">
        <button type="submit" class="btn btn-primary">
            Default
        </button>
    </div>
    <div class="col-xs-12 col-sm-10">
        The default button height is 36 pixels. Use this size in modals, wizards, and in the content area.
    </div>
</div>
<div class="row buttons-modal-gfx">
    <div class="col-xs-12 col-sm-2">
        <button type="submit" class="btn btn-sm">Compact</button>
    </div>
    <div class="col-xs-12 col-sm-10">
        Use the compact button, 24 pixels in height, in datagrids, tables, cards, inline, and other areas not large enough to accommodate the default size.
    </div>
</div>

### Block Button

A block button takes up the full width of its container.  A common use of this button is in the Login screen.


<div class="row buttons-modal-gfx">
 <div class="col-xs">
                    <span>
        <p align="center"><button type="submit" class="btn btn-primary btn-block">Block</button></p>
        </span>

    </div>
    </div>

### Inverse Button

Use inverse styling for a secondary button on a dark background. For information about when to use inverse styling, see the [Color]({{ site.baseurl }}/documentation/color) documentation.

### Labels

Write clear and concise button labels:

{: .list}
- Use a verb or verb phrase that describes the button's action.
- Limit labels to three words and avoid long words.

Buttons labels use uppercase text.  Buttons can be quite small in an enterprise application, and research shows that uppercase letters are easier to read at smaller font sizes.

{: .list}
- Normal-sized buttons have labels with font sizes ranging from 10 to 12 points.  
- Smaller buttons, such as those in datagrids, headers, and navigation components, might use a font size as small as 8 points.

For further reading, see [Letter Case and Text Legibility in Normal and Low Vision](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2016788/).
