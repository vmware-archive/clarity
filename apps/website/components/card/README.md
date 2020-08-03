---
title: Overview
toc: true
---

Cards are used to apply a container around a related grouping of information.

## Usage

Use a card to present high-level information and guide the user toward related actions and details. Clarity offers clickable cards in the event you want to use a card to initiate an action.

## Types

Example use cases for cards include:

- Images in cards
- Dropdowns
- Media blocks
- Lists and List groups
- Progress indicators

## Anatomy

Cards may use have dividers. Flat buttons should be used on cards to keep their prominence in harmony with the other information.

Place the primary action and a single additional action, if required, in the card footer, left-aligned. This placement supports the F-pattern layout. For more than two actions, use a dropdown. Do not place more than eight items in the dropdown menu.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Do align card actions to the left" src="/images/components/card/buttons_in_cards_2.png" align="center" />
This card correctly aligns actions to the left.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Don't align buttons to right" src="/images/components/card/buttons_in_cards_1.png" align="center" />
Users might not scan to the bottom right of wide cards.
</div>

</div>

Progress bars belong at the card top or above the footer, closest to the triggering action. Be consistent with progress bar placement within a card group.

<ClrImage title="Cards with Progress Bars" src="/images/components/card/card_progress.png" />

## Behavior

When the entire card is clickable, the resulting action must be an expected outcome. A common action is to navigate to more details. Not every card need be clickable.

In homogeneous card groups, consider enabling users to switch between card view and datagrid view. While cards show richer content than a datagrid, a datagrid lists more items at once.

Toggles for switching between views go in the upper right of the card group. The card group should be the default view.

## Placement

Group cards by theme or element
Homogeneous content facilitates scanning – users quickly find and compare information of interest. Content of varying type often shows “the bigger picture.” A grid places cards in fixed rows and columns: more content in less vertical space means less scrolling. It’s easy for users to scan content in this layout. If in doubt, use the grid.

<div class="clr-row">
  <div class="clr-col-lg-4 clr-col-12">
    <div class="card">
      <div class="card-block">
        <h3 class="card-title">Card 1</h3>
        <p class="card-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div class="card-footer">
        <a href="javascript://" class="btn btn-sm btn-link">Action 1</a>
      </div>
    </div>
  </div>
  <div class="clr-col-lg-4 clr-col-12">
    <div class="card">
      <div class="card-block">
        <h3 class="card-title">Card 2</h3>
        <p class="card-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div class="card-footer">
        <a href="javascript://" class="btn btn-sm btn-link">Action 2</a>
      </div>
    </div>
  </div>
  <div class="clr-col-lg-4 clr-col-12">
    <div class="card">
      <div class="card-block">
        <h3 class="card-title">Card 3</h3>
        <p class="card-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      </div>
      <div class="card-footer">
        <a href="javascript://" class="btn btn-sm btn-link">Action 3</a>
      </div>
    </div>
  </div>
</div>

## Content

Cards can contain text, images, data visualizations, or multimedia. Ensure that the content serves your use case. Keep it simple and legible. Avoid using too much content, overloading the card with too many actions, and placing links within the content.

A card consists of a title 18 px Clarity City Light - content is Clarity City Regular 14px.

## Code & Examples

### Basic card

<doc-demo src="/demos/card/basic-css.html" demo="/demos/card/basic-css.html"></doc-demo>

### Clickable cards

<doc-demo src="/demos/card/clickable-css.html" demo="/demos/card/clickable-css.html"></doc-demo>

### Image in cards

<doc-demo src="/demos/card/images-css.html" demo="/demos/card/images-css.html"></doc-demo>

### Dropdown in card

The footer can contain two actions. For more actions, use a [dropdown](/components/dropdown).

<doc-demo src="/demos/card/dropdown-css.html" demo="/demos/card/dropdown-css.html"></doc-demo>

### Card media block

<doc-demo src="/demos/card/media-block-css.html" demo="/demos/card/media-block-css.html"></doc-demo>

### Alert in card

Cards can contain [alerts](/components/alert).
<doc-demo src="/demos/card/alert-css.html" demo="/demos/card/alert-css.html"></doc-demo>

### Lists in cards

<doc-demo src="/demos/card/lists-css.html" demo="/demos/card/lists-css.html"></doc-demo>

### List group in cards

<doc-demo src="/demos/card/list-group-css.html" demo="/demos/card/list-group-css.html"></doc-demo>

### Progress bars in cards

<doc-demo src="/demos/card/progress-bars-css.html" demo="/demos/card/progress-bars-css.html"></doc-demo>

### Cards in a grid

<doc-demo src="/demos/card/grid-css.html" demo="/demos/card/grid-css.html"></doc-demo>

### Cards in css columns

<doc-demo src="/demos/card/columns-css.html" demo="/demos/card/columns-css.html"></doc-demo>
