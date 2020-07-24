---
title: Overview
toc: true
---

A sound navigation layout offers a high degree of discoverability and feedback, letting users know where they are at all times and ensuring they can easily get to where they want to go.

## Usage

Clarity Navigation depends on a specific DOM structure. Consult an appropriate demo to see the code and structure needed for the styles and layout to work. Clarity provides three levels of navigation represented by the following classnames.

- `.header-nav` in the application header.
- `.subnav` immediately below the header.
- `.sidenav` inside the content container. See sidenav.

### Designing Navigation Patterns

When establishing your navigation model, consider:

- The key use cases of your app
- The proper hierarchy and what belongs in the primary navigation versus what goes in the secondary or lower levels of navigation
- Whether to orient the navigation horizontally, vertically, or both
- Whether responsiveness needs to be part of your platform strategy

### Using Navigation Components

<div class="clr-row">
<div class="clr-col">

#### Header

<ClrImage cds-layout="m-t:md" title="Header navigation pattern" src="/images/foundation/navigation/header.png" />
</div>
<div class="clr-col" cds-layout="m-t:xl">

{.custom-container}

The <a href="/components/header">header</a> is for primary navigation. Benefits of this navigation pattern are:

- Users often look for navigation in the header.
- Top-level navigation is kept simple–the recommended number of links is 2 to 4.
- Navigation does not take real estate away from the content area.

Conversely, the header supports other items (search and setting) and the navigation links might become crowded.

</div>
</div>

<div class="clr-row">
<div class="clr-col">

#### Subnav

<ClrImage cds-layout="m-t:md" title="Subnav navigation pattern" src="/images/foundation/navigation/subnav.png" />
</div>
<div class="clr-col" cds-layout="m-t:xl">

{.custom-container}

Use the <a href="/components/header/#subnav">subnav</a> for primary navigation when you need the sidebar for secondary navigation and any of the following apply:

- You have more links than can fit in the header.
- The text of your links is too long for the header.
- You want to limit the header to search and settings.

</div>
</div>

<div class="clr-row">
<div class="clr-col">

#### Sidenav

<ClrImage cds-layout="m-t:md" title="Sidenav navigation pattern" src="/images/foundation/navigation/sidenav.png" />
</div>
<div class="clr-col" cds-layout="m-t:xl">

{.custom-container}

Benefits of the <a href="/components/header/#sidenav">sidenav</a> are that it:

- Is a familiar navigation pattern for users.
- Accommodates a large number of links, becoming vertically scrollable when content exceeds the view port.
- Supports progressive disclosure of a hierarchy.
- Supports categorization of links.

Conversely, the sidenav takes real estate away from the content area. Also, on mobile, the hierarchy within the sidenav should be kept to a minimum.

</div>
</div>

### Combining Navigation Types

<div class="clr-row">
<div class="clr-col">

#### Header + Sidenav

<ClrImage cds-layout="m-t:md" title="Header + Sidenav navigation pattern" src="/images/foundation/navigation/header_sidenav.png" />
</div>
<div class="clr-col" cds-layout="m-t:xl">

{.custom-container}

A common pattern for two levels of navigation. The primary navigation is in the header, secondary in the sidenav.

</div>
</div>

<div class="clr-row">
<div class="clr-col">

#### Header + Subnav

<ClrImage cds-layout="m-t:md" title="Header + Subnav navigation pattern" src="/images/foundation/navigation/header_subnav.png" />
</div>
<div class="clr-col" cds-layout="m-t:xl">

{.custom-container}

Because both patterns are horizontal, use this combination only when the secondary navigation does not warrant the space taken up by the sidenav.

</div>
</div>

<div class="clr-row">
<div class="clr-col">

#### Subnav + Sidenav

<ClrImage cds-layout="m-t:md" title="Subnav + Sidenav navigation pattern" src="/images/foundation/navigation/subnav_sidenav.png" />
</div>
<div class="clr-col" cds-layout="m-t:xl">

{.custom-container}

Use the subnav for primary navigation when the links do not fit in the header.

</div>
</div>

<div class="clr-row">
<div class="clr-col">

#### Header, subnav and sidenav

<ClrImage cds-layout="m-t:md" title="Header, subnav and sidenav navigation pattern" src="/images/foundation/navigation/header_subnav_sidenav.png" />
</div>
<div class="clr-col" cds-layout="m-t:xl">

{.custom-container}

This schema will not result in a clear visual hierarchy because of the adjacent horizontal patterns. An alternative is to use the header and sidenav and then provide further navigation in the content area by using tabs.

</div>
</div>

## Types

Clarity has three navigation components: header, subnav, and sidenav. Following are the possible combinations of navigation.

### Header + Subnav

When Header is the primary navigation and subnav is the secondary navigation combine the [Header](/component/header) component with the [subnav](/components/header/#subnav) component using the DOM structure shown in code examples.
// Need code+demo here w/ subnav
<doc-demo src="/demos/navigation/header-subnav-ng.html" demo="/demos/navigation/header-subnav-css.html" />

### Header + Sidenav

When header is the primary navigation and sidnav is the secondary navigation combine the [Header](/component/header) component with the [disenav](/components/header/#sidenav) component using the DOM structure shown in code examples.
<doc-demo src="/demos/navigation/header-sidenav-ng.html" demo="/demos/navigation/header-sidenav-css.html" />

### Header

When there are only a few locations for users to navigate to use a header as the sole navigation element between pages.
<doc-demo src="/demos/navigation/header-ng.html" demo="/demos/navigation/header-css.html" />

### Sidnav

When there are more links that can fit into the header or a subnav consider using the sidnav only and combining the navigation into organized groups of locations.

<doc-demo src="/demos/navigation/sidenav-ng.html" demo="/demos/navigation/sidenav-css.html" />

### Subnav + Sidnav

When top level locations have child navigation locations combine subnav with side nav elements specific to each top level location.
<doc-demo src="/demos/navigation/subnav-sidenav-ng.html" demo="/demos/navigation/subnav-sidenav-css.html" />

## Behavior

### Responsive

**Note**: Responsive navigation requires you to use the following Angular components to build the layout of your application:

- clr-main-container
- clr-header

Clarity supports responsive navigation as follows:

- Up to two levels of navigation can be made responsive.
- Responsiveness is triggered below the 768px breakpoint by adding the clr-nav-level input to the navigation level.
- A clr-nav-level value of 1 is for primary navigation and 2 is for secondary navigation.
- On small screens:
  - The hamburger icon appears on the left of the header and triggers the primary navigation
  - The overflow icon appears on the right and triggers the secondary navigation

<cds-alert-group status="warning" type="default">
<cds-alert>Although three levels of navigation make sense on large screens, this number of levels becomes hard to navigate on smaller screens. Clarity recommends that applications for tablets and phones are not exact replicas of the desktop versions, but rather a different, simplified experience.</cds-alert>
</cds-alert-group>

#### Screen Size

##### Large Screens

<ClrImage cds-layout="m-t:md" title="Large Screen Navigation" src="/images/foundation/navigation/header_sidenav_large.png" />

##### Small Screens

<div class="clr-row">
<div class="clr-col">

<DocVideo src="/images/foundation/navigation/navLevel1.mp4" :width="468" :autoplay="true"></DocVideo>

<doc-demo src="/demos/navigation/nav-1-css.html" />
</div>
<div class="clr-col">

<DocVideo src="/images/foundation/navigation/navLevel2.mp4" :width="468" :autoplay="true"></DocVideo>
<doc-demo src="/demos/navigation/nav-2-css.html" />

</div>
</div>
