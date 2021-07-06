---
title: Overview
toc: true
beta: true
---

::: component-summary

Use cards to apply a container around a related grouping of information.

:::

::: component-section-level-one-title

## Usage

:::

Use a card to present high-level information and guide the user toward related actions and details. Clarity offers clickable cards in the event you want to use a card to initiate an action.

What users commonly use cards with:

- Images
- Dropdowns
- Media blocks
- Lists and List groups

::: component-section-level-one-title

## Anatomy

:::

- Cards may have dividers.
- Flat buttons should be used on cards to keep their prominence in harmony with the other information.
- Place the primary action and a single additional action, if required, in the card footer, left-aligned. This placement supports the F-pattern layout. For more than two actions, use a dropdown. Do not place more than eight items in the dropdown menu.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Do align card actions to the left" src="/images/angular-components/card/buttons_in_cards_2.png" align="center" />
This card correctly aligns actions to the left.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Don't align buttons to right" src="/images/angular-components/card/buttons_in_cards_1.png" align="center" />
Users might not scan to the bottom right of wide cards.
</div>

<div class="clr-col-sm-12 clr-col-lg-6">

</div>
</div>

::: component-section-level-one-title

## Behavior

:::

In similar card groups, consider enabling users to switch between card view and datagrid view. While cards show richer content than a datagrid, a datagrid lists more items at once.

Toggles for switching between views go in the upper right of the card group. The card group should be the default view.

::: component-section-level-one-title

## Placement

:::

Group cards by theme or element.
Similar content helps scanning – users can quickly find and compare information of interest. Content of varying types often shows “the bigger picture.” A grid places cards in fixed rows and columns: more content in less vertical space means less scrolling. It’s easy for users to scan content in this layout. If in doubt, use the grid.

<br/>

<div cds-layout="grid cols@md:4 cols@lg:3 gap:md">
<cds-card aria-labelledby="containerOfCards1">
<div cds-layout="vertical gap:md">
<h2 id="containerOfCards1" cds-text="section" cds-layout="horizontal align:vertical-center">
  Card Title
</h2>
<div cds-text="body light" cds-layout="p-y:lg">
  Message: Can you imagine what we will be downloading in another twenty years? Who would have ever thought that
  you could record sound with digital quality fifty years ago? Now we routinely download whole albums worth of
  music in a couple of minutes.
</div>
<cds-divider cds-card-remove-margin></cds-divider>
<div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
  <cds-button action="flat-inline">Action</cds-button>
</div>
</div>
</cds-card>
<cds-card aria-labelledby="containerOfCards2">
<div cds-layout="vertical gap:md">
<h2 id="containerOfCards2" cds-text="section" cds-layout="horizontal align:vertical-center">
  Card Title
</h2>
<div cds-text="body light" cds-layout="p-y:lg">
  Message: Can you imagine what we will be downloading in another twenty years? Who would have ever thought that
  you could record sound with digital quality fifty years ago? Now we routinely download whole albums worth of
  music in a couple of minutes.
</div>
<cds-divider cds-card-remove-margin></cds-divider>
<div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
  <cds-button action="flat-inline">Action</cds-button>
</div>
</div>
</cds-card>
<cds-card aria-labelledby="containerOfCards3">
<div cds-layout="vertical gap:md">
<h2 id="containerOfCards3" cds-text="section" cds-layout="horizontal align:vertical-center">
  Card Title
</h2>
<div cds-text="body light" cds-layout="p-y:lg">
  Message: Can you imagine what we will be downloading in another twenty years? Who would have ever thought that
  you could record sound with digital quality fifty years ago? Now we routinely download whole albums worth of
  music in a couple of minutes.
</div>
<cds-divider cds-card-remove-margin></cds-divider>
<div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
  <cds-button action="flat-inline">Action</cds-button>
</div>
</div>
</cds-card>
</div>

::: component-section-level-one-title

## Content

:::

Cards can contain text, images, data visualizations, or multimedia. Ensure that the content serves your use case. Keep it simple and legible. Avoid using too much content, overloading the card with too many actions, and placing links within the content.

A card consists of a title 18 px Clarity City Light - content is Clarity City Regular 14px.
