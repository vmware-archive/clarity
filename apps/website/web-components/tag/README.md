---
title: Overview
toc: true
---

::: component-summary

Tags show concise metadata in a compact format.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a tag to show the metadata when the space is limited or when you want to catch user’s attention. It is commonly used for descriptive tags or filter items. The distinctive visual style of tags deliberately deviates from buttons. This prevents users from confusing tags with buttons and allows tags to co-exist with other components without competing for a user's attention with primary and secondary buttons on the screen.

:::

<DocIndent>
<div cds-layout="horizontal gap:xs">
    <cds-tag readonly color="purple">Fruit</cds-tag>
    <cds-tag readonly color="blue">Meat</cds-tag>
    <cds-tag readonly color="orange">Drink</cds-tag>
    <cds-tag readonly color="light-blue">Vegetable</cds-tag>
</div>
</DocIndent>

::: component-section-level-two-title

### Color

:::

:::component-section-level-two

The [Clarity color palette](/foundation/color) and the colors you are using throughout your application should guide which colors you choose for your tags. We recommend reserving traffic light colors (red, yellow, and green) to display state or status.

If the intent is to use colors to have groups of tags be visually distinct from one another, keep in mind that there may be accessibility issues around using color as your sole differentiator.

Avoid using too many colors within the same context, displaying too many colors may distract the user from the core of your application and the information it presents.

:::

<DocIndent>
<div cds-layout="horizontal gap:xs">
    <cds-tag readonly>Seattle</cds-tag>
    <cds-tag readonly color="purple">Austin</cds-tag>
    <cds-tag readonly color="blue">Los Angeles</cds-tag>
    <cds-tag readonly color="orange">Palo Alto</cds-tag>
    <cds-tag readonly color="light-blue">St. Louis</cds-tag>
</div>
</DocIndent>

::: component-section-level-two-title

### Tags and Badges

:::

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-4">
<div style="height: 100px">
<div>Tags and <a href="/web-components/badge">badges</a> can be used together to show a count relating to the metadata displayed in the tag.</div>
</div>
</div>
<div class="clr-col-sm-12 clr-col-lg-4">
<DocInset height="100">
<div cds-layout="horizontal gap:sm align:center">
    <cds-tag readonly color="blue">Production<cds-badge color="blue">12<span cds-layout="display:screen-reader-only">items.</span></cds-badge></cds-tag>
    <cds-tag readonly color="blue">Testing<cds-badge color="blue">99+<span cds-layout="display:screen-reader-only">items.</span></cds-badge></cds-tag>
</div>
</DocInset>
</div>
</div>

::: component-section-level-two-title

### Additional Metadata

:::

::: component-section-level-two

Differentiate tags from [buttons](web-components/button).

:::

<DocDoDont>
<DocDo summary="Describe additional information with parenthesis" demoHeight="120">
<div cds-layout="horizontal align:center"><cds-tag readonly color="orange">London (Location)</cds-tag></div>
</DocDo>
<DocDont slot="dont" summary="Use all capitalization or multi-lines" demoHeight="120">
<div cds-layout="horizontal gap:sm align:center">
<cds-tag readonly color="purple">LONDON (LOCATION)</cds-tag>
<cds-tag readonly color="purple">LONDON<br/>(LOCATION)</cds-tag>
</div>
</DocDont>
</DocDoDont>

::: component-section-level-one-title

## Behavior

:::

::: component-section-level-two-title

### Clicking Labels

:::

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-4" cds-layout="p-b@lg:none p-b:lg">
<div style="height: 100px">
<div><p cds-text="body">Tags may be clickable. In this case, clicking on a tag should perform an action related to that tag. Clicking on a location tag used as a tag, for example, could serve to filter the results in a nearby list by that location. Clicking a tag could also display more information about the metadata described by that tag.</p></div>
</div>
</div>
<div class="clr-col-sm-12 clr-col-lg-4">
<DocInset height="100">
<div cds-layout="horizontal gap:sm align:center">
    <cds-tag color="purple">Chocolate</cds-tag>
    <cds-tag color="purple">Vanilla</cds-tag>
    <cds-tag color="purple">Strawberry</cds-tag>
</div>
</DocInset>
</div>
</div>

::: component-section-level-two-title

### Dismissing Labels

:::

<div class="clr-row">
<div class="clr-col-sm-12 clr-col-lg-4">
<div style="height: 100px">
<div>
<p cds-text="body">A tag can be dismissed. "Closable" tags display a close icon at the right-most side of the tag. A tag <em>cannot be closable and clickable</em>. A tag can only be one or the other.</p>
</div>
</div>
</div>
<div class="clr-col-sm-12 clr-col-lg-4">
<DocInset height="100">
<div cds-layout="horizontal gap:sm align:center">
    <cds-tag color="blue" closable>Chocolate</cds-tag>
    <cds-tag color="blue" closable>Vanilla</cds-tag>
</div>
</DocInset>
</div>
</div>
