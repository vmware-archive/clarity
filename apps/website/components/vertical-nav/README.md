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

<div class="clr-row">

![Jigglypuff is active nav](/images/components/vertical-nav/jigglypuff.png)

</div>

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Use vertical navigation with a header" src="/images/components/vertical-nav/do-header.png" align="center" />
Use vertical navigation with a header.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Don't use vertical navigation with a header and subnav" src="/images/components/vertical-nav/dont-subnav.png" align="center" />
Don't use vertical navigation with a header and subnav. Having too many places for navigation is confusing for users.
</div>

</div>

## Anatomy

Vertical navigation has a few layout options including dividers and section headers. Active links are displayed with a white background. Touch targets are larger for easier interaction and span the entire width of the navigation, similar to the space of the active link indicator.

### Layout

<div class="clr-row">

<div class="clr-col-12 clr-col-md-4">

::: inset Basic
![Basic Vertical Navigation](/images/components/vertical-nav/basic.png)
:::
**Basic**

</div>
<div class="clr-col-12 clr-col-md-4">

::: inset Dividers
![Dividers](/images/components/vertical-nav/divider.png)
:::
**Dividers**

</div>
<div class="clr-col-12 clr-col-md-4">

::: inset Dividers & Headers
![Headers](/images/components/vertical-nav/header.png)
:::
**Dividers & Headers**

</div>
</div>

### Icons

Icons should be placed to the left of the link label. Active links will display a blue icon. Make sure your icons are distinctive and easily recognizable. Touch targets include the entire width of the navigation including the icon.
Use icons across all links if you choose to use them. Add icons to some links and not to other links. This becomes difficult to scan and read.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="Use icons on all nav links" src="/images/components/vertical-nav/icons-do.png" align="center" />
Use icons on all nav links
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Use icons on some nav links and not other nav links" src="/images/components/vertical-nav/icons-dont.png" align="center" />
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
![Basic Hierarchy](/images/components/vertical-nav/basic-hierarchy.png)
:::
**Basic**

Top level hierarchy items are semibold font weight and have a caret to the right. Child links are normal font weight.

</div>
<div class="clr-col-12 clr-col-md-4">

::: inset Hierarchy with icons
![Hierarchy with icons](/images/components/vertical-nav/icons-hierarchy.png)
:::
**Icons**

Icons are only applied to the top level navigation items. They are not applied to child links.

</div>
<div class="clr-col-12 clr-col-md-4">

::: inset Mixed Hierarchy
![Mixed Hierarchy](/images/components/vertical-nav/mixed-hierarchy.png)
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
![Basic Vertical Navigation](/images/components/vertical-nav/basic-expanded.png)
:::
**Basic Expanded**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Dividers
![Dividers](/images/components/vertical-nav/basic-collapsed.png)
:::
**Basic Collapsed**

When no icons are present, collapsing the navigation will show a basic bar. The entire bar is a click target that can expand the navigation.

</div>
</div>

#### Basic Icons

<div class="clr-row">

<div class="clr-col-12 clr-col-md-6">

::: inset Basic
![Basic Vertical Navigation](/images/components/vertical-nav/icons-expanded.png)
:::
**Icons Expanded**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Dividers
![Dividers](/images/components/vertical-nav/icons-collapsed.png)
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
![Hierarchy No Icons Expanded](/images/components/vertical-nav/hierarchy-no-icons-expanded.png)
:::
**No icons expanded**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - no icons collapsed
![Hierarchy No Icons Collapsed](/images/components/vertical-nav/hierarchy-no-icons-collapsed.png)
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
![Hierarchy Icons Expanded](/images/components/vertical-nav/hierarchy-icons-expanded.png)
:::
**No icons expanded**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - no icons collapsed
![Hierarchy Icons Collapsed](/images/components/vertical-nav/hierarchy-icons-collapsed.png)
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
![Hierarchy Mixed Expanded](/images/components/vertical-nav/hierarchy-mixed-expanded.png)
:::
**Mixed and expanded**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - mixed
![Hierarchy Mixed Collapsed](/images/components/vertical-nav/hierarchy-mixed-collapsed.png)
:::
**Mixed and collapsed**

When collapsed, text will disappear and only icons will show. Clicking on an icon will navigate the user. An active link will also show as an active icon when collapsed.

</div>
</div>

### Smaller Screens - Responsive

When screens drop below 768px wide, the navigation will hide completely and can be shown by clicking on one of the header icons. All normal vertical navigation designs and behaviors are the same in the responsive state. Read about [Responsive Navigation](/foundation/navigation/#responsive-navigation) and the [directives](/foundation/navigation/api.html#clrheader-clrmaincontainer-clrnavlevel) to use for implementation.

<div class="clr-row">

<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - Responsive Level 1
![Level 1 Responsive](/images/components/vertical-nav/responsive-level-1.png)
:::
**Level 1 Responsive**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset Hierarchy - Responsive Level 2
![Level 2 Responsive](/images/components/vertical-nav/responsive-level-2.png)
:::
**Level 2 Responsive**

</div>
</div>

## Content

When labels get too long they will be trimmed and followed by an ellipsis (…). We recommend that navigation labels remain short and concise to prevent an ellipsis from showing.

<div class="clr-row">

<div class="clr-col-12 clr-col-md-4">

::: inset Basic Long Labels
![Basic Long Labels](/images/components/vertical-nav/basic-long-labels.png)
:::
**Basic**

</div>
<div class="clr-col-12 clr-col-md-4">

::: inset Hierarchy with icons
![Icon Long Labels](/images/components/vertical-nav/icon-long-labels.png)
:::
**Icons**

</div>

<div class="clr-col-12 clr-col-md-4">

::: inset Mixed with icons
![Mixed Long Labels](/images/components/vertical-nav/mixed-long-labels.png)
:::
**Mixed**

</div>

</div>
