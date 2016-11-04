---
title: Badges
permalink: /documentation/badges
layout: documentation
---

{: .component-summary }
#### A badge overlays a count of items on another component, such as a menu or label.

###### 1. Badges (Color Options)

<clr-badge-colors-demo></clr-badge-colors-demo>

###### 2. Status Badges

<clr-badge-statuses-demo></clr-badge-statuses-demo>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Usage

Use a badge to show a tally or other quantity. For example, you might overlay a badge on a [label]({{ site.baseurl }}/documentation/labels) or menu item to show a count of that item.

### Placement

{: .list}
- Place the badge to the right of the object that it qualifies.
- To avoid ambiguity, use only one badge per object.

### Numbering

{: .list}
- Use integers only.
- If the count exceeds 99, use "99+."

### Color

{: .list}
- For most badges, use the color palette specific to badges and labels.
- For badges that indicate success, warning, or error, use Stoplight colors.
