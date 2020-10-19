---
title: Overview
toc: true
---

Headers provide branding, navigation, search, and access to global application actions such as settings and notifications.

## Usage

The header is consistent across all pages of an application. This offers a recognizable unifying element to the application.

## Anatomy

### Branding

Include both your application’s name and logo if available. Clicking on the app’s name or logo should take you to the homepage of the application.

<div class="clr-row">
<div class="clr-col">
<div class="doc-wrapper">
<header class="header-6" style="min-width: 96%; flex: none">
  <div class="branding">
      <a class="logo-and-title">
          <clr-icon shape="file"></clr-icon>
          <span class="title">Note App</span>
      </a>
  </div>
</header>
</div>
</div>
</div>

### Top Level Navigation

Include top level navigation items. These items should be persistent throughout your experience.

Have a maximum of four items in top-level navigation. For more info, take a look at [Navigation](/foundation/navigation).

If you’re using icons on their own in the header, using tooltips will help users understand what an icon means. Use clear language for top level navigation items. Do not combine icons and text. Only use a combination of text and icons when the provided text gives additional context specific to the user, for example, the user's username.

<div class="clr-row">

<div class="clr-col-sm-12 doc-do">
<div class="doc-example">

<header class="header-6" style="min-width: 96%; flex: none">
  <div class="branding">
      <a class="logo-and-title">
          <clr-icon shape="file"></clr-icon>
          <span class="title">Note App</span>
      </a>
  </div>
  <div class="header-nav">
      <a href="javascript://" class="nav-link">
          <span class="nav-text">Notes</span>
      </a>
      <a href="javascript://" class="active nav-link">
          <span class="nav-text">Shared Notes</span>
      </a>
  </div>
</header>

</div>

Use Text for navigational items.

</div>

<div class="clr-col-sm-12 doc-dont" cds-layout="m-t:xl">
<div class="doc-example">

<header class="header-6" style="min-width: 96%; flex: none">
  <div class="branding">
      <a class="logo-and-title">
          <clr-icon shape="file"></clr-icon>
          <span class="title">Note App</span>
      </a>
  </div>
  <div class="header-nav">
    <a href="javascript://" class="nav-link">
      <clr-icon shape="pencil" style="position: static; transform: translate3d(0, 0, 0);"></clr-icon> Composer
    </a>
    <a href="javascript://" class="active nav-link">
      <clr-icon shape="folder"></clr-icon>
    </a>
  </div>
</header>

</div>

Don't use icons alone or mix icons and text for top level navigation items.

</div>

</div>

### Right Side Action Area

The area to the right of the header serves as a location for global actions and top-level navigational items that are important yet visited less frequently. For example, this action area on the right side of the header could include application settings, user settings, help, about, and other similar items.

<!-- [//]: ## Types -->

## Behavior

### Responsive Navigation

Clarity includes functionality for displaying the navigation on smaller devices like tablets and phones with the responsive navigation component in clarity-angular. Details on how to use Clarity's responsive header can be found in our documentation on app navigation.

### Search

There are many different ways to include search in the header. Which way you choose depends on search's prominence and its utility within the application.

::: inset

<header class="header-6" style="min-width: 100%; flex: none">
  <div class="branding">
    <a class="logo-and-title">
      <clr-icon shape="file"></clr-icon>
      <span class="title">Note App</span>
    </a>
  </div>
  <form class="search">
    <label for="search_input">
      <input id="search_input-a" type="text" placeholder="Search all notes...">
    </label>
  </form>
  <div class="header-actions">
    <div class="dropdown">
      <button class="nav-icon dropdown-toggle" aria-label="toggle settings menu">
        <clr-icon shape="cog"></clr-icon>
        <clr-icon shape="caret" direction="down"></clr-icon>
      </button>
      <div class="dropdown-menu">
        <a href="javascript://">About</a>
        <a href="javascript://">Preferences</a>
        <a href="javascript://">Log out</a>
      </div>
    </div>
  </div>
</header>
:::

Use search as a prominent navigation item in the header if you are building a search-based user experience.

::: inset

<header class="header-6" style="min-width: 100%; flex: none">
  <div class="branding">
    <a class="logo-and-title">
      <clr-icon shape="file"></clr-icon>
      <span class="title">Note App</span>
    </a>
  </div>
  <div class="header-nav">
    <a href="javascript://" class="nav-link">
      <span class="nav-text">Notes</span>
    </a>
    <a href="javascript://" class="active nav-link">
      <span class="nav-text">Shared Notes</span>
    </a>
  </div>
  <form class="search">
    <label for="search_input">
      <input id="search_input" type="text" placeholder="Search all notes...">
    </label>
  </form>
  <div class="header-actions">
    <div class="dropdown">
      <button class="nav-icon dropdown-toggle" aria-label="toggle settings menu">
        <clr-icon shape="cog"></clr-icon>
        <clr-icon shape="caret" direction="down"></clr-icon>
      </button>
      <div class="dropdown-menu">
        <a href="javascript://">About</a>
        <a href="javascript://">Preferences</a>
        <a href="javascript://">Log out</a>
      </div>
    </div>
  </div>
</header>
:::

Use search as a secondary item to the right of the header if search is not core to your navigation experience or if you need to emphasize 3 or more top level navigation items.

::: inset

<header class="header-6" style="min-width: 100%; flex: none">
  <div class="branding">
    <a class="logo-and-title">
      <clr-icon shape="file"></clr-icon>
      <span class="title">Note App</span>
    </a>
  </div>
  <div class="header-nav">
    <a href="javascript://" class="nav-link">
      <span class="nav-text">Notes</span>
    </a>
    <a href="javascript://" class="active nav-link">
      <span class="nav-text">Shared Notes</span>
    </a>
  </div>
  <div class="header-actions">
    <a href="javascript:void(0)" class="nav-icon nav-icon-text">
      <clr-icon shape="search" style="position: relative; top: 0.8rem; left: auto; transform: none; margin-left: 1rem"></clr-icon>
    </a>
    <div class="dropdown">
      <button class="nav-icon dropdown-toggle" aria-label="toggle settings menu">
        <clr-icon shape="cog"></clr-icon>
        <clr-icon shape="caret" direction="down"></clr-icon>
      </button>
      <div class="dropdown-menu">
        <a href="javascript://">About</a>
        <a href="javascript://">Preferences</a>
        <a href="javascript://">Log out</a>
      </div>
    </div>
  </div>
</header>
:::

You can read more in about search in the design spec. The search component itself is a work in progress.

<!-- [//]: ## Placement -->

<!-- [//]: ## Content -->

## Code & Examples

The header and subnav support app-level information and navigation links.

### Basics

#### .header

`.header` is a wrapper around the following four sections:

- Branding
- Navigation
- Search
- Settings

#### .branding

`.branding` contains the product logo and the product title. The logo extends the `.clr-icon` class and the title extends the `.title` class.

#### .header-nav

`.header-nav` contains the navigation links. Each navigation link extends the `.nav-link` class along with the `.nav-text` class for text links and the `.nav-icon` class icon links.

<doc-demo>
!!!include(.vuepress/public/demos/header/basic.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/header/basic.html
</doc-code>

#### .search

`.search` is a form containing the search icon and the search input field.

#### .header-actions

`.header-actions` is a wrapper that contains secondary navigation links. Each navigation link extends the `.nav-link` class. Navigation links can be text or icons.

Info

<!-- For information about headers with responsive navigation, see [Responsive Navigation](/foundation/navigation#responsive_navigation). -->

### Types

<doc-demo id="header-types">
!!!include(.vuepress/public/demos/header/types.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/header/types.html
</doc-code>

### Color Options

<doc-demo id="color-types">
!!!include(.vuepress/public/demos/header/colors.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/header/colors.html
</doc-code>

### Subnav

`.subnav` immediately follows the `.header`. It wraps a [tab](/angular-components/tab) and an `aside` section.

<doc-demo id="subnav-types">
!!!include(.vuepress/public/demos/header/subnav.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/header/subnav.html
</doc-code>
