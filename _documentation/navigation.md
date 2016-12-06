---
title: Navigation
permalink: /documentation/navigation
layout: documentation
---

{: .component-summary }
##### A sound navigation layout offers a high degree of discoverability and feedback, letting users know where they are at all times and ensuring they can easily get to where they want to go.

Clarity has three navigation components: header, subnav, and sidenav.  Following are the possible
combinations of navigation.

###### 1. Header as primary navigation and subnav as secondary navigation
<clr-layout-no-sidenav-demo></clr-layout-no-sidenav-demo>

###### 2. Header as primary navigation and sidenav as secondary navigation
<clr-layout-no-subnav-demo></clr-layout-no-subnav-demo>

###### 3. Header as primary navigation
<clr-layout-only-header-demo></clr-layout-only-header-demo>

###### 4. Sidenav as primary navigation
<clr-layout-only-sidenav-primary></clr-layout-only-sidenav-primary>

###### 5. Subnav as primary navigation and sidenav as secondary navigation
<clr-layout-only-subnav-primary></clr-layout-only-subnav-primary>

<a id="responsive_navigation"></a>

### Responsive Navigation

Clarity provides three levels of navigation represented by the following classnames:

{: .list .cozy-sm}
- <code class="clr-code">.header-nav</code> in the application <a href="{{ site.baseurl }}/documentation/header">header</a>.
- <code class="clr-code">.subnav</code> immediately below the header.
- <code class="clr-code">.sidenav</code> inside the content container. See <a href="{{ site.baseurl }}/documentation/sidenav">sidenav</a>.

<p>
    Clarity supports responsive navigation as follows:
</p>
<ul class="list cozy-sm">
    <li>
        Up to two levels of navigation can be made responsive.
    </li>
    <li>
        Responsiveness is triggered below the <code class="clr-code">768px</code> breakpoint by adding the <code class="clr-code">clr-nav-level</code> input to the navigation level.
    </li>
    <li>
        A <code class="clr-code">clr-nav-level</code> value of <code class="clr-code">1</code> is for primary navigation and <code class="clr-code">2</code> is for secondary navigation.
    </li>
    <li>
        On small screens:
        <ul class="list cozy-sm">
            <li>
                The hamburger icon appears on the left of the header and triggers the primary navigation
            </li>
            <li>
                The overflow icon appears on the right and triggers the secondary navigation
            </li>
        </ul>
    </li>
</ul>

<div class="alert alert-info cozy">
    <div class="alert-item">
        <span class="alert-text">
            Although three levels of navigation make sense on large screens, this number of levels becomes hard to navigate on smaller screens. Clarity recommends that applications for tablets and phones are not exact replicas of the desktop versions, but rather a different, simplified experience.
        </span>
    </div>
</div>

**Note:** Responsive navigation requires you to use the following Angular components
to build the layout of your application:

{: .list}
- <code class="clr-code">clr-main-container</code>
- <code class="clr-code">clr-header</code>

#### Examples

<h6>1. Header navigation as primary and sidenav as secondary</h6>
<div class="row">
    <div class="col-xs-12">
        <h6>Large screens</h6>
        <img class="img-fluid cozy-sm" src="{{ site.baseurl }}/images/documentation/navigation/header_sidenav_large.png?{{ site.time | date: '%s%N' }}"/>
    </div>
    <div class="col-xs-12 col-sm-8 col-md-6">
        <h6>Header navigation on small screens</h6>
        <img class="img-fluid cozy-sm" src="{{ site.baseurl }}/images/documentation/navigation/navLevel1.gif?{{ site.time | date: '%s%N' }}"/>
    </div>
    <div class="col-xs-12 col-sm-8 col-md-6">
        <h6>Sidenav on small screens</h6>
        <img class="img-fluid cozy-sm" src="{{ site.baseurl }}/images/documentation/navigation/navLevel2.gif?{{ site.time | date: '%s%N' }}"/>
    </div>
</div>

<clr-responsive-nav-header-sidenav-demo></clr-responsive-nav-header-sidenav-demo>

<h6>2. Subnav as primary and sidenav as secondary</h6>

<clr-responsive-nav-subnav-sidenav-demo></clr-responsive-nav-subnav-sidenav-demo>

{: #guidelines}
### Designing Navigation

When establishing your navigation model, consider:

{: .list}
- The key use cases of your app
- The proper hierarchy and what belongs in the primary navigation versus what goes in the secondary or lower levels of navigation
- Whether to orient the navigation horizontally, vertically, or both
- Whether responsiveness needs to be part of your platform strategy

<!-- ### Navigation Components

Clarity has three navigation components: header, subnav, and sidenav.  These components:

{: .list}
- Are independent of one another and can be used alone or in combination. This gives you flexibility in designing your navigation schema.
- Support a consistent visual hierarchy between levels of navigation.
- Adapt to changes in screen size according to predefined breakpoints and grid alignment. This responsiveness helps your app scale from small to large screens.
-->

### Using the Navigation Patterns

#### Header

<div class="row">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/Header.png?{{ site.time | date: '%s%N' }}" alt="Header"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>The <a href="{{ site.baseurl }}/documentation/header">header</a> is for primary navigation. Benefits of this navigation pattern are:</div>
        <ul class="list">
            <li>Users often look for navigation in the header.</li>
            <li>Top-level navigation is kept simple–the recommended number of links is 2 to 4.</li>
            <li>Navigation does not take real estate away from the content area.</li>
        </ul>
        <p>
            Conversely, the header supports other items (search and setting) and the navigation links might become crowded.
        </p>
    </div>
</div>

#### Subnav

<div class="row">
    <div class="col-xs-12 col-md-5">
    <img src="{{ site.baseurl }}/images/documentation/app-layout/subnav.png?{{ site.time | date: '%s%N' }}" alt="Subnav"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
            Use the <a href="{{ site.baseurl }}/documentation/header">subnav</a> for primary navigation when you need the sidebar for secondary navigation and any of the following apply:
        </div>
        <ul class="list">
            <li>You have more links than can fit in the header.</li>
            <li>The text of your links is too long for the header.</li>
            <li>You want to limit the header to search and settings.</li>
        </ul>
        </div>
</div>

#### Sidenav

<div class="row">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/sidenav.png?{{ site.time | date: '%s%N' }}" alt="Sidenav"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
            Benefits of the <a href="{{ site.baseurl }}/documentation/sidenav">sidenav</a> are that it:
        </div>
        <ul class="list">
            <li>Is a familiar navigation pattern for users.</li>
            <li>Accommodates a large number of links, becoming vertically scrollable when content exceeds the view port.</li>
            <li>Supports progressive disclosure of a hierarchy.</li>
            <li>Supports categorization of links.</li>
        </ul>
        <p>
            Conversely, the sidenav takes real estate away from the content area.  Also, on mobile, the hierarchy within the sidenav should be kept to a minimum.
        </p>
    </div>
</div>

### Combining Navigation Patterns

<h4>Header and sidenav</h4>
<div class="row cozy-sm">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/header_sidenav.png?{{ site.time | date: '%s%N' }}" alt="Header & Sidenav"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
            A common pattern for two levels of navigation.  
            The primary navigation is in the header, secondary in the sidenav.
        </div>
    </div>
</div>

<h4>Header and subnav</h4>
<div class="row cozy-sm">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/header_subnav.png?{{ site.time | date: '%s%N' }}" alt="Header & Subnav"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
            Because both patterns are horizontal, use this combination only when the secondary navigation does not warrant the space taken up by the sidenav.
        </div>
    </div>
</div>

<h4>Subnav and sidenav</h4>
<div class="row cozy-sm">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/subnav_sidenav.png?{{ site.time | date: '%s%N' }}" alt="Subnav & Sidenav"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
            Use the subnav for primary navigation when the links do not fit in the header.
        </div>
    </div>
</div>


<h4>Header, subnav and sidenav</h4>
<div class="row cozy-sm">
    <div class="col-xs-12 col-md-5">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/header_subnav_sidenav.png?{{ site.time | date: '%s%N' }}" alt="Header, Subnav & Sidenav"/>
    </div>
    <div class="col-xs-12 col-md-7">
        <div>
            This schema will not result in a clear visual hierarchy because of the adjacent horizontal patterns. An alternative is to use the header and sidenav and then provide further navigation in the content area by using tabs.
        </div>
    </div>
</div>

<h3 class="cozy">Responsive Navigation Layouts</h3>

Responsiveness is supported for the primary and secondary levels of navigation.  If your app has more than two levels of navigation, you'll need to build a custom solution.  At three levels, the navigation becomes increasingly nested and too complex for Clarity to provide a single responsive solution.

For layouts 768px or under:

{: .list}
- Primary navigation targets move to a hamburger menu on the left.
- Secondary navigation targets move to an overflow menu on the right.

<div class="row cozy-sm">
    <div class="col-xs-12">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/header_small.png?{{ site.time | date: '%s%N' }}" class="img-fluid" alt="Header on Small Screens"/>
    </div>
</div>

When the user clicks the menu icon, a temporary side panel opens with the navigation targets. Content is not accessible while the panel is open.

<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-6 cozy-sm">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/header_nav_level_2.png?{{ site.time | date: '%s%N' }}" class="img-fluid" alt="Header Triggers Pressed"/>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 cozy-sm">
        <img src="{{ site.baseurl }}/images/documentation/app-layout/header_nav_level_1.png?{{ site.time | date: '%s%N' }}" class="img-fluid" alt="Header Triggers Pressed"/>
    </div>
</div>
