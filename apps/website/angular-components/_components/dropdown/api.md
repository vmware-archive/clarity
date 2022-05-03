---
title: API
toc: true
---

## Angular Components

### ClrDropdown

ClrDropdown is the parent container for all child components and projected content. It allows users to choose an option or action from a contextual list. ClrDropdown can be nested inside of other ClrDropdown components.

#### Selector & Basic Usage

<doc-code>

```html
<clr-dropdown>
  <!-- trigger element -->
  <!-- menu component -->
</clr-dropdown>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDropdown" item="bindings" />

### ClrDropdownMenu

ClrDropdown Menu component holds the menu items and projects group and seperator elements.

#### Selector & Basic Usage

<doc-code>

```html
<clr-dropdown>
  <!-- trigger -->
  <clr-dropdown-menu clrPosition="top-left">
    <!-- items, headers and separators -->
  </clr-dropdown-menu>
</clr-dropdown>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDropdownMenu" item="bindings" />

#### CSS

ClrDropdownMenu can contain optional elements that visually add a header and separator element between menu items.
To use them, add an element with the appropriate class.

<DocComponentApi component="ClrDropdownMenu" item="css" />

## Angular Directives

### ClrDropdownTrigger

#### Selector & Basic Usage

<doc-code>

```html
<clr-dropdown>
  <button class="btn btn-primary" clrDropdownTrigger>
    Open Dropdown
  </button>
  <!-- clr-dropdown-menu element -->
</clr-dropdown>
```

</doc-code>

### ClrDropdownItem

#### Selector & Basic Usage

<doc-code>

```html
<clr-dropdown>
  <!-- trigger element -->
  <clr-dropdown-menu clrPosition="top-left">
    <div aria-label="Dropdown header Action 1" clrDropdownItem>Action 1</div>
    <div aria-label="Dropdown header Action 2" clrDropdownItem>Action 2</div>
  </clr-dropdown-menu>
</clr-dropdown>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrDropdownItem" item="bindings" />

### ClrIfOpen

ClrIfOpen is a structural directive applied to the ClrDropdownMenu element that manages the DOM creation and destruction for the menu elements.

#### Selector & Basic Usage

<doc-code>

```html
<clr-dropdown>
  <!-- trigger element -->
  <clr-dropdown-menu clrPosition="top-left" *clrIfOpen>
    <div aria-label="Dropdown header Action 1" clrDropdownItem>Action 1</div>
  </clr-dropdown-menu>
</clr-dropdown>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrIfOpen" item="bindings" />
