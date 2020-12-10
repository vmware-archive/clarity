---
title: API
toc: true
---

## Angular Components

### ClrTabs

Tabs structure content into separate views and allow navigation between.

#### Selector & Basic Usage

<doc-code>

```html
<clr-tabs>
  <!-- one or more clr-tab components -->
</clr-tabs>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrTabs" item="bindings" />

### ClrTab

ClrTab associates the [ClrTabContent](./api/#clrtabcontent) component with the [ClrTabLink](./api/#clrtablink) directive.

#### Selector & Basic Usage

<doc-code>

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

</doc-code>

### ClrTabContent

#### Selector & Basic Usage

<doc-code>

```html
<clr-tabs>
  <clr-tab>
    <!-- tab link button -->
    <clr-tab-content>Tab content</clr-tab-content>
  </clr-tab>
  <!-- more sibling clr-tab components -->
</clr-tabs>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrTabContent" item="bindings" />

## Angular Directives

### ClrTabLink

#### Selector & Basic Usage

<doc-code>

```html
<clr-tabs>
  <clr-tab>
    <button clrTabLink>Tab 1</button>
    <!--clr-tab-content -->
  </clr-tab>
  <!-- more sibling clr-tab components -->
</clr-tabs>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrTabLink" item="bindings" />

### ClrIfActive

A structural directive that enables lazy-loading the content for an active tab.

#### Selector & Basic Usage

<doc-code>

```html
<clr-tabs>
  <clr-tab>
    <!-- tab link button -->
    <clr-tab-content *clrIfActive>Tab content</clr-tab-content>
  </clr-tab>
  <!-- more sibling clr-tab components -->
</clr-tabs>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrIfActive" item="bindings" />
