---
title: API
---

## Angular Navigation Components and Directives

### ClrHeader, ClrMainContainer & ClrNavLevel

#### Selector & Basic Usage

To create responsive application navigationThese three entities need to be composed together. There is only one @Input (clr-nav-level).
When the app is in responsive mode, level one appears on the left side and level two appears on the right side.
_Note:_ there are multiple possibilities for designating primary and secondary navigation elements. The example below is for illustrating two places that primary navigation might live and one place for secondary navigation.

```html
<clr-main-container>
  <clr-header>
    <!-- designate primary navigation from the header-nav container -->
    <div class="header-nav" [clr-nav-level]="1">
      <a class="nav-link"><span class="nav-text">Home</span></a>
      <a class="nav-link"><span class="nav-text">About</span></a>
    </div>
  </clr-header>
  <nav class="subnav" [clr-nav-level]="1">
    <!-- designate primary navigation from the subnav container -->
    <a class="nav-link"><span class="nav-text">Home</span></a>
    <a class="nav-link"><span class="nav-text">About</span></a>
  </nav>
  <div class="content-container">
    <main class="content-area">
      <!-- app / page content -->
    </main>
    <!-- designate secondary navigation -->
    <nav class="sidenav" [clr-nav-level]="2">
      <a class="nav-link"><span class="nav-text">Account</span></a>
      <a class="nav-link"><span class="nav-text">Help</span></a>
    </nav>
  </div>
</clr-main-container>
```

## CSS

Navigation classes apply to container elements that can be composed together to offer a standard Clarity layout.

### Classes

<DocComponentApi component="ClrNavigation" item="css" />
