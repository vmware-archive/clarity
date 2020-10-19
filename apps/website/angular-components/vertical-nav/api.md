---
title: API
toc: true
---

## Angular Components

{.section-header}

### ClrCVerticalNav

#### Selector & Basic Usage

<doc-code>

```html
<clr-vertical-nav>
  <!-- clrVerticalNavLink elements as needed-->
  <!-- clr-nav-group components as needed -->
</clr-vertical-nav>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrVerticalNav" item="bindings" />

### ClrVerticalNavGroup

#### Selector & Basic Usage

<doc-code>

```html
<clr-vertical-nav>
  <clr-vertical-nav-group>
    <!-- clrVerticalNavLink elements as needed -->
  </clr-vertical-nav-group>
  <!-- additional clr-nav-group components as needed -->
  <!-- additional clrVerticalNavLink elements as needed-->
</clr-vertical-nav>
```

</doc-code>

### ClrNavGroupChildren

#### Selector & Basic Usage

<doc-code>

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

</doc-code>

## Angular Directives

### ClrVerticalNavLink

#### Selector & Basic Usage

<doc-code>

```html
<clr-vertical-nav>
  <a clrVerticalNavLink routerLink="./users" routerLinkActive="active">Users</a>
  <div class="nav-divider"></div>
  <a clrVerticalNavLink routerLink="./config" routerLinkActive="active">Configuration</a>
  <a clrVerticalNavLink routerLink="./reports" routerLinkActive="active">Reports</a>
</clr-vertical-nav>
```

</doc-code>

### ClrVerticalNavIcon

#### Selector & Basic Usage

<doc-code>

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

</doc-code>
