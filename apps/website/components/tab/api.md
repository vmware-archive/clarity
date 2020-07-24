---
title: API
toc: true
---

## Angular Components

{.section-header}

### ClrTabs

Tabs structure content into separate views and allow navigation between.

#### Selector & Basic Usage

```html
<clr-tabs>
  <!-- one or more clr-tab components -->
</clr-tabs>
```

#### Bindings

<DocComponentApi component="ClrTabs" item="bindings" />

### ClrTab

ClrTab associates the [ClrTabContent](./api.md#clrtabcontent) component with the [ClrTabLink](./api.md#clrtablink) directive.

#### Selector & Basic Usage

```html
<clr-tabs>
  <clr-tab>
    <!-- tab link button -->
    <!-- tab content component -->
  </clr-tab>
  <clr-tab>
    <!-- tab link button -->
    <!-- tab content component -->
  </clr-tab>
</clr-tabs>
```

### ClrTabContent

#### Selector & Basic Usage

```html
<clr-tabs>
  <clr-tab>
    <!-- tab link button -->
    <clr-tab-content>Tab content</clr-tab-content>
  </clr-tab>
  <!-- more sibling clr-tab components -->
</clr-tabs>
```

#### Bindings

<DocComponentApi component="ClrTabContent" item="bindings" />

# Angular Directives

{.section-header}

### ClrTabLink

#### Selector & Basic Usage

```html
<clr-tabs>
  <clr-tab>
    <button clrTabLink>Tab 1</button>
    <!--clr-tab-content -->
  </clr-tab>
  <!-- more sibling clr-tab components -->
</clr-tabs>
```

#### Bindings

<DocComponentApi component="ClrTabLink" item="bindings" />

### ClrIfActive

A structural directive that enables lazy-loading the content for an active tab.

#### Selector & Basic Usage

```html
<clr-tabs>
  <clr-tab>
    <!-- tab link button -->
    <clr-tab-content *clrIfActive>Tab content</clr-tab-content>
  </clr-tab>
  <!-- more sibling clr-tab components -->
</clr-tabs>
```

#### Bindings

<DocComponentApi component="ClrIfActive" item="bindings" />

#### Methods

<DocComponentApi component="ClrIfActive" item="methods" />
