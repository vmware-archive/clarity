---
title: Overview
toc: true
---

Labels show concise metadata in a compact format.

## Usage

Use a label to show the metadata when the space is limited or when you want to catch user’s attention. It is commonly used for tags, or fitter items.
The distinctive visual style of labels deliberately deviates from buttons. This prevents users from confusing labels with buttons and allows labels to co-exist with other components without competing for a user's attention with primary and secondary buttons on the screen.

<doc-demo>
!!!include(.vuepress/public/demos/label/food-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/label/food-ng.html
</doc-code>

## Anatomy

Labels are visually styled to differentiate them from buttons.

### Color

The Clarity color palette and the colors you are using throughout your application should guide which colors you choose for your labels. We recommend reserving stoplight colors (red, yellow, and green) to display state or status.

If the intent is to use colors as a way to have groups of labels be visually distinct from one another, keep in mind that there may be accessibility issues around using color as your sole differentiator.

Avoid using too many colors within the same context, displaying too many colors may distract the user from the core of your application and the information it presents.

<doc-demo>
!!!include(.vuepress/public/demos/label/color-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/label/color-ng.html
</doc-code>

### Labels and Badges

<div class="clr-row">
<div class="clr-col">
<div style="height: 100px">
<div>Labels and badges can be used together to show a count relating to the metadata displayed in the label.</div>
<div style="padding-top: 0.5rem">Documentation for Badges is available <a href="/angular-components/badge">here</a>.</div>
</div>
</div>
<div class="clr-col">
<DocInset height="100">
<div>
<span class="label label-light-blue">Production<span class="badge badge-light-blue">12</span></span>
<span class="label label-light-blue">Dev/Test<span class="badge badge-light-blue">99+</span></span>
</div>
</DocInset>
</div>
</div>

### Additional Metadata

Differentiate labels from buttons.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<div class="doc-example"><span class="label label-orange">London (Location)</span></div>
Describe additional information with parenthesis
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<div class="doc-example"><span class="label label-purple">LONDON (LOCATION)</span>
<span style="padding: 15px; text-align: center" class="label label-purple">LONDON <br/>(LOCATION)</span></div>
Use use all capitalization or multi-lines
</div>

</div>

## Behavior

### Clicking Labels

<div class="clr-row">
<div class="clr-col">

Labels may be clickable. In this case, clicking on a label should perform an action related to that label. Clicking on a location label used as a tag, for example, could serve to filter the results in a nearby list by that location. Clicking a label could also display more information about the metadata described by that label.

</div>
<div class="clr-col">

<div class="doc-wrapper" cds-layout="m-t:lg">
<a href="javascript://" class="label label-purple clickable">Chocolate</a>
<a href="javascript://" class="label label-purple clickable">Vanilla</a>
<a href="javascript://" class="label label-purple clickable">Mixed</a>
</div>

</div>
</div>

### Dismissing Labels

<div class="clr-row">
<div class="clr-col">

A label can be dismissed. Use a close icon at the right-most side of a label to dismiss it.

</div>
<div class="clr-col">
<div class="doc-wrapper" cds-layout="m-t:lg">
<a href="javascript://" class="label label-blue clickable">james@test.com <clr-icon shape="close"></clr-icon></a>
<a href="javascript://" class="label label-blue clickable">jimmy@test.com <clr-icon shape="close"></clr-icon></a>
</div>
</div>
</div>

## Content

### Status

<doc-demo>
!!!include(.vuepress/public/demos/label/status-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/label/status-ng.html
</doc-code>

### Labels with badges

<doc-demo>
!!!include(.vuepress/public/demos/label/badges-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/label/badges-ng.html
</doc-code>
