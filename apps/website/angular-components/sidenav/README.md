---
title: Overview
toc: true
---

<div cds-layout="pl@md:sm" class="alert alert-warning">
    <div class="alert-items">
        <div class="alert-item static" role="alert">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <span class="alert-text">
                Sidenav has been deprecated but does not have a targeted version for removal. The recommendation for this pattern is to use the <a href="/angular-components/vertical-nav/">vertical nav</a> component.
            </span>
        </div>
    </div>
</div>

The sidenav is a left-aligned navigational component.

## Usage

When there are many navigation links a side navigation provides overflow and scrolling to the list of links. Users are informed when a navigation item is active.

Use the sidenav:

- For links secondary to the links in the header or subnav
- For a navigation schema with a deep hierarchy
- When the header and subnav cannot accommodate the required links

The sidenav works best in desktop applications. Scroll when the content exceeds the viewport.

## Code & Examples

### Structure

Clarity [application layout](/foundation/app-layout/) depends on a specific DOM structure for layout to work properly. SIde nav fits into this and has a specific place in the DOM hierarchy. A Sidenav container is a sibling element of the content area.

<doc-demo>
!!!include(.vuepress/public/demos/sidenav/structure-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/sidenav/structure-ng.html
</doc-code>

### Navigation Groups

Navigation groups provide a way to group similar or related links together. When grouping links, do not make the heading a link.

<doc-demo>
!!!include(.vuepress/public/demos/sidenav/nav-groups-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/sidenav/nav-groups-ng.html
</doc-code>

### Icons

Using Icons
Include icons when you want to provide a more appealing visual look than just text.

<doc-demo>
!!!include(.vuepress/public/demos/sidenav/icons-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/sidenav/icons-ng.html
</doc-code>
