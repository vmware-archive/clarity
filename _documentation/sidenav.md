---
title: Sidenav
permalink: /documentation/sidenav
layout: documentation
---

{: .component-summary }
#### The sidenav is a left-aligned navigational component.

Clarity's sidenav is placed inside the <code class="clr-code">.main-container</code> class and appears after the <code class="clr-code">.content-area</code>.


**.sidenav-content**
<div>
    This is a wrapper intended to contain one or more <code class="clr-code">.nav-group</code> groups.
</div>

**.nav-group**
<div>
    A <code class="clr-code">.nav-group</code> consists of a checkbox and label followed by a <code class="clr-code">.nav-list</code>. The order of the markup is important to achieve the collpasible effect on the nav-groups.
</div>

**.collapsible**
<div>
    A <code class="clr-code">.nav-group</code> inside a sidenav becomes collapsible by adding a <code class="clr-code">.collapsible</code> class.
</div>

**.nav-list**
<div>
    A <code class="clr-code">.nav-list</code> is a list of navigation links. Each navigation link extends the <code class="clr-code">.nav-link</code> class. An active <code class="clr-code">.nav-link</code> is assigned the <code class="clr-code">.active</code> class.
</div>


<clr-nav-demo-sidenav></clr-nav-demo-sidenav>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Usage
The sidenav is a familiar navigation pattern for users.  The sidenav can fit as many navigation links as needed, scrolling when the content exceeds the viewport.  Use the sidenav:

<ul class="list">
<li>For links secondary to the links in the header or subnav</li>
<li>For a navigation schema with a deep hierarchy</li>
<li>When the header and subnav cannot accommodate the required links</li>
</ul>

The sidenav works best in desktop applications.  

#### Grouping Links
If you group link names under a heading, don't make the heading a link.

#### Using Icons
Include icons when you want to provide a more appealing visual look than just text.
