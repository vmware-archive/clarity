---
title: Utilities
toc: true
---

::: component-summary

There are common use cases where a layout or an item in a layout needs to do different things on different screen sizes. The system ships with three general utilities that can be applied to elements.
:::

::: component-section-level-one-title

## Display

:::

:::component-section-level-one

The display option allows us to change the visibility of an element based on the Clarity Design size breakpoint tokens.

<doc-demo>
<section class="cds-demo" layout wide>
  <div cds-layout="vertical gap:lg align:stretch" cds-text="body">
    <cds-placeholder cds-layout="display:none display@sm:flex">display:none display@sm:flex</cds-placeholder>
    <cds-placeholder>
      ...
      <span cds-layout="display:none display@md:inline">display:none display@md:inline</span>
      ...
    </cds-placeholder>
    <cds-placeholder cds-layout="display:none display@lg:block">display:none display@lg:block</cds-placeholder>
    <cds-placeholder cds-layout="display@lg:none">display@lg:none</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:lg align:stretch" cds-text="body">
  <cds-placeholder cds-layout="display:none display@sm:flex">display:none display@sm:flex</cds-placeholder>
  <cds-placeholder>
    ...
    <span cds-layout="display:none display@md:inline">display:none display@md:inline</span>
    ...
  </cds-placeholder>
  <cds-placeholder cds-layout="display:none display@lg:block">display:none display@lg:block</cds-placeholder>
  <cds-placeholder cds-layout="display@lg:none">display@lg:none</cds-placeholder>
</div>
```

</doc-code>

:::

::: component-section-level-one-title

Screen Reader Only

:::

:::component-section-level-one

One technique to render accessible applications is to hide some content and only make it discoverable for screen readers. Use the `display:screen-reader-only` utility in a `cds-layout` addribute to render it hidden and discoverable by screen readers.

<doc-demo>
<section class="cds-demo" layout wide>
    <p>
      There is text in this content that is only available via a screen reader.
      <span cds-layout="display:screen-reader-only">Hello there!</span>
    </p>
</section>
</doc-demo>

<doc-code>

```html
<p>
  There is text in this content that is only available via a screen reader.
  <span cds-layout="display:screen-reader-only">Hello there!</span>
</p>
```

</doc-code>

:::

::: component-section-level-one-title

## Containers

:::

:::component-section-level-one

The Container utility makes it easy to limit and center content within a layout. This is useful for linear content layouts.

<doc-demo>
  <section cds-layout="vertical gap:md">
    <div cds-layout="container:xs">container:xs (576px)</div>
    <div cds-layout="container:sm">container:sm (768px)</div>
    <div cds-layout="container:md">container:md (992px)</div>
    <div cds-layout="container:lg">container:lg (1200px)</div>
    <div cds-layout="container:xl">container:xl (1440px)</div>
    <div cds-layout="container:fill">'container:fill' or 'fill' (width 100%)</div>
    <div cds-layout="container:xs container:center">container:xs container:center</div>
  </section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:lg">
  <cds-demo layout cds-layout="container:xs">container:xs (576px)</cds-demo>
  <cds-demo layout cds-layout="container:sm">container:sm (768px)</cds-demo>
  <cds-demo layout cds-layout="container:md">container:md (992px)</cds-demo>
  <cds-demo layout cds-layout="container:lg">container:lg (1200px)</cds-demo>
  <cds-demo layout cds-layout="container:xl">container:xl (1440px)</cds-demo>
  <cds-demo layout cds-layout="container:fill">'container:fill' or 'fill' (width 100%)</cds-demo>
  <cds-demo layout cds-layout="container:xs container:center">container:xs container:center</cds-demo>
</div>
```

</doc-code>

:::

::: component-section-level-one-title

## Applying Responsive Utilities

:::

:::component-section-level-one

Each of the layout utilities (gap, alignment) can be made responsive with the following forms:

### Responsive Gap

```html
<section cds-layout="horizontal gap@<BREAKPOINT>:<SIZE>"></section>
```

### Responsive Alignment

```html
<section cds-layout="horizontal align@<BREAKPOINT>:<STRATEGY>"></section>
```

:::
