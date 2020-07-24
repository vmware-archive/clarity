---
title: API
toc: true
---

## Angular Components

{.section-header}

### ClrCVerticalNav

#### Selector & Basic Usage

```html
<clr-vertical-nav>
  <!-- clrVerticalNavLink elements as needed-->
  <!-- clr-nav-group components as needed -->
</clr-vertical-nav>
```

#### Bindings

<DocComponentApi component="ClrCVerticalNav" item="bindings" />

#### Methods

<DocComponentApi component="ClrCVerticalNav" item="methods" />

### ClrVerticalNavGroup

#### Selector & Basic Usage

```html
<clr-vertical-nav>
  <clr-vertical-nav-group>
    <!-- clrVerticalNavLink elements as needed -->
  </clr-vertical-nav-group>
  <!-- additional clr-nav-group components as needed -->
  <!-- additional clrVerticalNavLink elements as needed-->
</clr-vertical-nav>
```

#### Bindings

<DocComponentApi component="ClrVerticalNavGroup" item="bindings" />

### ClrNavGroupChildren

#### Selector & Basic Usage

```html
<clr-vertical-nav>
  <clr-vertical-nav-group>
    <clr-icon shape="user" clrVerticalNavIcon></clr-icon>
    Users
    <clr-vertical-nav-group-children>
      <!-- clrVerticalNavLink elements as needed -->
    </clr-vertical-nav-group-children>
  </clr-vertical-nav-group>
  <!-- additional clr-nav-group components as needed -->
  <!-- additional clrVerticalNavLink elements as needed-->
</clr-vertical-nav>
```

#### Bindings

<DocComponentApi component="ClrNavGroupChildren" item="bindings" />

#### Methods

<DocComponentApi component="ClrNavGroupChildren" item="methods" />

## Angular Directives

### ClrVerticalNavLink

#### Selector & Basic Usage

```html
<clr-vertical-nav>
  <a clrVerticalNavLink routerLink="./users" routerLinkActive="active">Users</a>
  <div class="nav-divider"></div>
  <a clrVerticalNavLink routerLink="./config" routerLinkActive="active">Configuration</a>
  <a clrVerticalNavLink routerLink="./reports" routerLinkActive="active">Reports</a>
</clr-vertical-nav>
```

### ClrVerticalNavIcon

#### Selector & Basic Usage

```html
<clr-vertical-nav>
  <a clrVerticalNavLink routerLink="./users/1">
    <clr-icon shape="user" clrVerticalNavIcon></clr-icon>
    User One
  </a>
  <a clrVerticalNavLink routerLink="./users/2">
    <clr-icon shape="user" clrVerticalNavIcon></clr-icon>
    User Two
  </a>
</clr-vertical-nav>
```
