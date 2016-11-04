---
title: Cards
permalink: /documentation/cards
layout: documentation
---

{: .component-summary }
#### A card presents high-level information and can guide the user toward related actions and details.

<clr-card-demo></clr-card-demo>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Usage

Cards are a popular design element, often used to present information in the main content area. Example use cases include:

{: .list}
- Presenting objects, services, or content summaries while  providing entry points to more detailed information
- Representing applications and initiating actions, such as download
- Displaying metrics


### Content -- keep it simple

Cards can contain text, images, data visualizations, or multimedia.  Ensure that the content serves your use case. Keep it simple and legible.  Avoid using too much content, overloading the card with too many actions, and placing links within the content.

{% comment %}
A common strategy is to present key points, and on card click, navigate to more details.  

Another strategy is to divide card content into horizontal blocks. For example, you might place the name, title, and status of an object in one group, and details such as health metrics in another group.  Divide content in a way that makes sense to users and maintains a logical flow.
{% endcomment %}

### Calls to action

{% comment %}
Users read the content starting at the top, upper left corner, then scan mainly the left sides of the screen.
{% endcomment %}

Place the primary action, and up to two additional actions, in the card footer, left-aligned.  This placement supports the F-pattern layout.

For more than three actions, replace the right-most action with a menu.  Do not place more than eight items in the menu.


<div class="row buttons-modal-gfx">
    <div class="col-xs">
    <span>
        <img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/buttons/buttons_in_cards_2.png?{{ site.time | date: '%s%N' }}" alt="Buttons align left in cards">
        <p><b><font color="#318700">Do.</font> </b>This card correctly aligns actions on the left.</p>
    </span>
    </div>
    <div class="col-xs">
    <span>
        <img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/buttons/buttons_in_cards_1.png?{{ site.time | date: '%s%N' }}" alt="Buttons do not align right in cards">
        <p><b><font color="#E62700">Don't.</font> </b> Users might not scan to the bottom right of wide cards.</p>
        </span>
    </div>
    </div>

### Clickable cards -- be predictable

When the entire card is clickable, the resulting action must:

<ul class="list">
          <li>Not be the primary action.  The primary action is  left-most in the footer.   If clicking elsewhere on the card also initiates the primary action, it might confuse users.</li>
          <li>
            Result in an expected outcome.  Not every card need be clickable.
<!-- A common action is to navigate to more details. -->
          </li>
      </ul>

### Progress bars -- be consistent

<div class="row buttons-modal-gfx">
    <div class="col-xs">
    <span>
        Progress bars belong at the card top or above the footer,   closest to the triggering action.  Be consistent with progress bar placement within a card group.
    </span>
    </div>
    <div class="col-xs">
    <span>
         <img src="{{ site.baseurl }}{{ site.data.global.images_path }}documentation/cards/card_progress.png?{{ site.time | date: '%s%N' }}">
    </span>
    </div>
</div>


### Group cards by theme or element

<!-- When grouping cards, consider the mental model you want to convey: -->

{: .list}
- Homogeneous content facilitates scanning -- users  quickly find and compare information of interest.  <!--Objects, applications, and services are typically collected in individual, homogeneous groups.-->
- Content of varying type often shows "the bigger picture."<!-- --such a collection might show the number of users logged in, recent tasks, alerts, and infrastructure to build.  Cards in heterogeneous groups often don't have associated actions. -->

### Use a grid for card layout

A grid places cards in fixed rows and columns:  more content in less vertical space means less scrolling. It's easy for users to scan content in this layout. If in doubt, use the grid.

### Switching views: cards and datagrids

In homogeneous card groups, consider enabling users to switch between card view and datagrid view. While cards show richer content than a datagrid, a datagrid lists more items at once. 

Toggles for switching between views go in the upper right of the card group. The card group should be the default view.
