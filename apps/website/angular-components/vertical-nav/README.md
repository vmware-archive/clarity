---
title: Overview
toc: true
---

A vertically-aligned list of the destinations in an application.

## Usage

Vertical navigation is a familiar navigation pattern for users. It can fit as many navigation links as needed, scrolling when the content exceeds the viewport.

Use the vertical navigation:

- when there are too many top navigation items to fit in the header
- for hierarchical navigation or nested navigation. Up to two tiers of navigation is supported by vertical nav
- when the user need to collapse and expand the navigation to free up space for the content area

<ClrImage class="doc-example" title="Jigglypuff is active nav" src="/images/angular-components/vertical-nav/jigglypuff.png" align="center" />

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Use vertical navigation with a header" src="/images/angular-components/vertical-nav/do-header.png" align="center" />
Use vertical navigation with a header.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Don't use vertical navigation with a header and subnav" src="/images/angular-components/vertical-nav/dont-subnav.png" align="center" />
Don't use vertical navigation with a header and subnav. Having too many places for navigation is confusing for users.
</div>

</div>

## Anatomy

Vertical navigation has a few layout options including dividers and section headers. Active links are displayed with a white background. Touch targets are larger for easier interaction and span the entire width of the navigation, similar to the space of the active link indicator.

### Layout

<div class="clr-row">

<div class="clr-col-12 clr-col-md-4">

::: inset Basic
![Basic Vertical Navigation](/images/angular-components/vertical-nav/basic.png)
:::
**Basic**<br/>
No dividers or section headers.

</div>
<div class="clr-col-12 clr-col-md-4">

::: inset Dividers
![Dividers](/images/angular-components/vertical-nav/divider.png)
:::
**Dividers**<br/>
Used to separate logical clusters of navigation items. Best used when you have two or more links in a cluster.

</div>
<div class="clr-col-12 clr-col-md-4">

::: inset Dividers & Headers
![Headers](/images/angular-components/vertical-nav/header.png)
:::
**Dividers & Headers**<br/>
Used to separate logical clusters of navigation items. Best used when you have two or more links in a cluster.

</div>
</div>

### Icons

Icons should be placed to the left of the link label. Active links will display a blue icon. Make sure your icons are distinctive and easily recognizable. Touch targets include the entire width of the navigation including the icon.
Use icons across all links if you choose to use them. Add icons to some links and not to other links. This becomes difficult to scan and read.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Use icons on all nav links" src="/images/angular-components/vertical-nav/icons-do.png" align="center" />
Use icons on all nav links
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Use icons on some nav links and not other nav links" src="/images/angular-components/vertical-nav/icons-dont.png" align="center" />
Use icons on some nav links and not other nav links
</div>

</div>

### Hierarchy

Hierarchy is used to show parent-child relationship between links. If a child link is active and the parent item is collapsed, the parent will display as active. When expanded, the active indicator will display on the child link. Clicking on text, carets or icons will expand and collapse the parent item.

<div cds-layout="pl@md:sm" class="alert alert-warning">
    <div class="alert-items">
        <div class="alert-item static" role="alert">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <span class="alert-text">
                If you need a summary or overview-type landing page for a link group, we recommend you make it as your first child link.
            </span>
        </div>
    </div>
</div>

<div class="clr-row">

<div class="clr-col-12 clr-col-md-4">

::: inset Basic
![Basic Hierarchy](/images/angular-components/vertical-nav/basic-hierarchy.png)
:::
**Basic**

Top level hierarchy items are semibold font weight and have a caret to the right. Child links are normal font weight.

</div>
<div class="clr-col-12 clr-col-md-4">

::: inset Hierarchy with icons
![Hierarchy with icons](/images/angular-components/vertical-nav/icons-hierarchy.png)
:::
**Icons**

Icons are only applied to the top level navigation items. They are not applied to child links.

</div>
<div class="clr-col-12 clr-col-md-4">

::: inset Mixed Hierarchy
![Mixed Hierarchy](/images/angular-components/vertical-nav/mixed-hierarchy.png)
:::
**Mixed**

Navigation links can be mixed with hierarchy and non hierarchy links.

</div>
</div>

## Behavior

### Collapse & Expand Navigation

Collapsing and expanding navigation is used to create more space in content areas or to bring greater focus to content. The double caret in the upper right corner will collapse and expand the navigation.

#### Basic

<div class="clr-row">

<div class="clr-col-12 clr-col-md-6">

::: inset Basic
![Basic Vertical Navigation](/images/angular-components/vertical-nav/basic-expanded.png)
:::
**Basic Expanded**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Dividers
![Dividers](/images/angular-components/vertical-nav/basic-collapsed.png)
:::
**Basic Collapsed**

When no icons are present, collapsing the navigation will show a basic bar. The entire bar is a click target that can expand the navigation.

</div>
</div>

#### Basic Icons

<div class="clr-row">

<div class="clr-col-12 clr-col-md-6">

::: inset Basic
![Basic Vertical Navigation](/images/angular-components/vertical-nav/icons-expanded.png)
:::
**Icons Expanded**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Dividers
![Dividers](/images/angular-components/vertical-nav/icons-collapsed.png)
:::
**Icons Collapsed**

When collapsed, text will disappear and only icons will show. Clicking on an icon will navigate the user. An active link will also show as an active icon when collapsed.

</div>
</div>

### Hierarchy

#### Basic

<div class="clr-row">

<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - no icons expanded
![Hierarchy No Icons Expanded](/images/angular-components/vertical-nav/hierarchy-no-icons-expanded.png)
:::
**No icons expanded**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - no icons collapsed
![Hierarchy No Icons Collapsed](/images/angular-components/vertical-nav/hierarchy-no-icons-collapsed.png)
:::
**No icons collapsed**

When no icons are present, collapsing the navigation will show a basic bar. The entire bar is a click target that can expand the navigation.

</div>
</div>

#### Icons

Top level hierarchy items will show a caret next to its icon when the navigation is collapsed. Clicking one will expand the navigation its top level item.

<div class="clr-row">

<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - no icons expanded
![Hierarchy Icons Expanded](/images/angular-components/vertical-nav/hierarchy-icons-expanded.png)
:::
**No icons expanded**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - no icons collapsed
![Hierarchy Icons Collapsed](/images/angular-components/vertical-nav/hierarchy-icons-collapsed.png)
:::
**No icons collapsed**

When collapsed, text will disappear and only icons will show. Clicking on an icon will navigate the user. An active link will also show as an active icon when collapsed.

</div>
</div>

### Mixed

Top level items without children will show no caret next to the icon. Clicking on an icon with no caret will navigate the user to a page.

<div class="clr-row">

<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - Mixed
![Hierarchy Mixed Expanded](/images/angular-components/vertical-nav/hierarchy-mixed-expanded.png)
:::
**Mixed and expanded**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - mixed
![Hierarchy Mixed Collapsed](/images/angular-components/vertical-nav/hierarchy-mixed-collapsed.png)
:::
**Mixed and collapsed**

When collapsed, text will disappear and only icons will show. Clicking on an icon will navigate the user. An active link will also show as an active icon when collapsed.

</div>
</div>

### Smaller Screens - Responsive

When screens drop below 768px wide, the navigation will hide completely and can be shown by clicking on one of the header icons. All normal vertical navigation designs and behaviors are the same in the responsive state. Read about [Responsive Navigation](/foundation/navigation/#responsive-navigation) and the [directives](/foundation/navigation/api/#clrheader-clrmaincontainer-clrnavlevel) to use for implementation.

<div class="clr-row">

<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - Responsive Level 1
![Level 1 Responsive](/images/angular-components/vertical-nav/responsive-level-1.png)
:::
**Level 1 Responsive**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - Responsive Level 2
![Level 2 Responsive](/images/angular-components/vertical-nav/responsive-level-2.png)
:::
**Level 2 Responsive**

</div>
</div>

## Content

When labels get too long they will be trimmed and followed by an ellipsis (…). We recommend that navigation labels remain short and concise to prevent an ellipsis from showing.

<div class="clr-row">

<div class="clr-col-12 clr-col-md-4">

::: inset Basic Long Labels
![Basic Long Labels](/images/angular-components/vertical-nav/basic-long-labels.png)
:::
**Basic**

</div>
<div class="clr-col-12 clr-col-md-4">

::: inset Hierarchy with icons
![Icon Long Labels](/images/angular-components/vertical-nav/icon-long-labels.png)
:::
**Icons**

</div>

<div class="clr-col-12 clr-col-md-4">

::: inset Mixed with icons
![Mixed Long Labels](/images/angular-components/vertical-nav/mixed-long-labels.png)
:::
**Mixed**

</div>

</div>

## Code & Examples

### Basic structure

Use the `clr-vertical-nav` component to create the Vertical Nav. Add the `clrVerticalNavLink` directive on each Nav Link in the Vertical Nav. Use `<div class="nav-divider"></div>` to add a horizonal divider to separate logical groups.

<doc-code>
<<< .vuepress/code/demos/vertical-nav/basic-ng.html
</doc-code>

### Icon links

Use the `clrVerticalNavIcon` directive on the icon leading the text in a navigation link.

<doc-code>
<<< .vuepress/code/demos/vertical-nav/icon-links-ng.html
</doc-code>

### Collapsible navigation

`[clrVerticalNavCollapsible]` input can be used to toggle the collapsible behavior of the Vertical Nav. The state of the nav can be controlled by the `[(clrVerticalNavCollapsed)]` input.

<doc-code>
<<< .vuepress/code/demos/vertical-nav/collapsible-ng.html
</doc-code>

### VerticalNav groups

Navigation Links can also be added directly inside of the `clr-vertical-nav` without creating a `clr-vertical-nav-group` to create a mixed navigation.

<cds-alert-group status="warning" type="default">
<cds-alert>We recommend that the application <a href="https://angular.io/guide/router">routing</a> be hierarchical.</cds-alert>
</cds-alert-group>

<doc-code>
<<< .vuepress/code/demos/vertical-nav/vertical-ng.html
</doc-code>

### Lazy loading nav links

`clrIfExpanded` structural directive can be used along with `clr-vertical-nav-group-children` to lazily load links inside of a `clr-vertical-nav-group`.

<cds-alert-group status="warning" type="default">
<cds-alert>We recommend that the application <a href="https://angular.io/guide/router">routing</a> be hierarchical.</cds-alert>
<cds-alert>For the nav group highlighting to work with lazy loading, we need to add an empty hidden link with the routerLink pointing to a common URL prefix for the children links as shown below.</cds-alert>
<cds-alert>Please do not add the <code>clrVerticalNavLink</code> directive to the empty link.</cds-alert>
</cds-alert-group>

<doc-code>
<<< .vuepress/code/demos/vertical-nav/lazy-ng.html
</doc-code>
