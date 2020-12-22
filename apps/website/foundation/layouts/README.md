---
title: Overview
toc: true
---

::: component-summary

Layout strategies are used to organize and structure the visual representation of components on a page or elements that make up a component. Layout strategy and [spacing](/foundation/design-tokens/spacing/) is managed with the `cds-layout` attribute on a container element.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Layout tokens are delivered with the global CSS that is delivered with `@cds/core`. They can be integrated or included in an application in two ways.

<doc-code>

```scss
// import and integrate into standard build tooling
@import '~@cds/core/global.min';

// import and integrate into html
<link href="/node_modules/@cds/core/global.min.css" rel="stylesheet">
```

</doc-code>

:::

:::component-section-level-one-title

## Strategies

:::

:::component-section-level-one

<doc-demo>
<div cds-layout="grid cols@sm:4 gap:xl">
  <div cds-layout="vertical gap:lg align:horizontal-center">
    <h3 cds-text="section center">Horizontal (Inline)</h3>
    <section class="cds-demo" layout>
      <div cds-layout="horizontal gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </section>
  </div>

  <div cds-layout="vertical gap:lg align:horizontal-center">
    <h3 cds-text="section center">Vertical (Stack)</h3>
    <section class="cds-demo" layout>
      <div cds-layout="vertical gap:md">
        <cds-placeholder>1</cds-placeholder>
        <cds-placeholder>2</cds-placeholder>
        <cds-placeholder>3</cds-placeholder>
      </div>
    </section>
  </div>

  <div cds-layout="vertical gap:lg">
    <h3 cds-text="section center">Grid (Columns/Responsive)</h3>
      <section class="cds-demo" layout>
        <div cds-layout="grid cols@sm:6 gap:md">
          <cds-placeholder>1</cds-placeholder>
          <cds-placeholder>2</cds-placeholder>
          <cds-placeholder>3</cds-placeholder>
          <cds-placeholder>4</cds-placeholder>
        </div>
      </section>
  </div>
</div>
</doc-demo>

:::

:::component-section-level-two-title

### Horizontal

:::

:::component-section-level-two

The horizontal layout strategy produces rows of items that wrap automatically. Use the horizontal layouts when the items need to flow from left to right inside a container. A common example is to organize a list of components like buttons, tags or labels into a row that can be wrapped when space is limited.

This is a basic horizontal layout with a medium gap. Read more about horizontal layouts [here](/foundation/layouts/horizontal/).

<doc-demo>
<section class="cds-demo" layout>
  <div cds-layout="horizontal gap:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<section class="cds-demo" layout>
  <div cds-layout="horizontal gap:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
```

</doc-code>

:::

:::component-section-level-two-title

### Vertical

:::

:::component-section-level-two

The vertical layout strategy produces columns of items that wrap automatically. Use vertical layouts when the items need to flow from top to bottom inside a container. A common example is to organize a list of items into a stack. Examples for this layout strategy include cards of information, content and other block level items on a page.

This is a basic veritical layout with a medium gap. Read more about vertical layouts [here](/foundation/layouts/vertical/).

<doc-demo>

<section class="cds-demo" layout>
  <div cds-layout="vertical gap:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<section class="cds-demo" layout>
  <div cds-layout="vertical gap:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
```

</doc-code>

:::

:::component-section-level-two-title

### Grid

:::

:::component-section-level-two

The grid layout strategy facilitates columns and rows that can be defined for laying out items. Use this strategy when control of the space around items is not always uniform or items need to be positioned in asymetric forms. By default the Clarity grid layout strategy implements a twelve column grid.

These are variations of basic grids that implement different numbers of columns. Read more about gris layouts [here](/foundation/layouts/grid/).

<doc-demo>

<section class="cds-demo" layout>
  <div cds-layout="grid gap:md m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
    <cds-placeholder>4</cds-placeholder>
    <cds-placeholder>5</cds-placeholder>
    <cds-placeholder>6</cds-placeholder>
    <cds-placeholder>7</cds-placeholder>
    <cds-placeholder>8</cds-placeholder>
    <cds-placeholder>9</cds-placeholder>
    <cds-placeholder>10</cds-placeholder>
    <cds-placeholder>11</cds-placeholder>
    <cds-placeholder>12</cds-placeholder>
  </div>
  <div cds-layout="grid cols:2 gap:md m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
    <cds-placeholder>4</cds-placeholder>
    <cds-placeholder>5</cds-placeholder>
    <cds-placeholder>6</cds-placeholder>
  </div>
  <div cds-layout="grid cols:3 gap:md m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
    <cds-placeholder>4</cds-placeholder>
  </div>
  <div cds-layout="grid cols:4 gap:md m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="grid cols:6 gap:md m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
  </div>
  <div cds-layout="grid cols:12 gap:md">
    <cds-placeholder>1</cds-placeholder>
  </div>
</section>

</doc-demo>

<doc-code>

```html
<div cds-layout="grid gap:md">
  <div cds-layout="grid gap:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
    <cds-placeholder>4</cds-placeholder>
    <cds-placeholder>5</cds-placeholder>
    <cds-placeholder>6</cds-placeholder>
    <cds-placeholder>7</cds-placeholder>
    <cds-placeholder>8</cds-placeholder>
    <cds-placeholder>9</cds-placeholder>
    <cds-placeholder>10</cds-placeholder>
    <cds-placeholder>11</cds-placeholder>
    <cds-placeholder>12</cds-placeholder>
  </div>
  <div cds-layout="grid cols:2 gap:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
    <cds-placeholder>4</cds-placeholder>
    <cds-placeholder>5</cds-placeholder>
    <cds-placeholder>6</cds-placeholder>
  </div>
  <div cds-layout="grid cols:3 gap:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
    <cds-placeholder>4</cds-placeholder>
  </div>
  <div cds-layout="grid cols:4 gap:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="grid cols:6 gap:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
  </div>
  <div cds-layout="grid cols:12 gap:md">
    <cds-placeholder>1</cds-placeholder>
  </div>
</div>
```

</doc-code>

:::

:::component-section-level-one-title

## Responsive

:::

:::component-section-level-one

The layout system provides responsive utility tokens that can be combined with other tokens to implement responsive layouts that response to breakpoints. Clarity ships with five preset breakpoints. Below are the widths and the breakpoint token used to turn it on. These tokens work from bottom up. That means that the last applied break point size is applied even when the viewport width increases to the next level.

One way to think about using this is to worry about the extremes first. In this scenario `@xs` would be applied to the token in the form of and then the next break point up could be used to define the style that should be applied on all screen sizes larger than that.

See more examples of responsive layouts and read more deatils on the layout strategy pages for [horizontal](/foundation/layout/horizontal/), [vertical](/foundation/layout/vertical/) and [grid](/foundation/layout/grid/.

```html
<section cds-layout="<Token>@xs:<TokenValueOne> <Token>@sm:<TokenValueTwo>"></section>
```

```scss
@media (min-width: 576px) {
  // @xs
}

@media (min-width: 768px) {
  // @sm
}

@media (min-width: 992px) {
  // @md
}

@media (min-width: 1200px) {
  // @lg
}

@media (min-width: 1440px) {
  // @xl
}
```

:::

:::component-section-level-one-title

## Utilities

:::

:::component-section-level-one

The system ships with three general utilities that can be applied to elements.

<div cds-layout="m-b:sm"></div>
- Display - control the visibility of an element
- Screen Reader Only - hide content and make it accessible to screen reader applications
- Container - easily limit and center content inside a layout
<div cds-layout="m-b:sm"></div>

Coupled with the responsive tokens from above it provides flexibility when managing content for layouts that need to respond to different screen sizes. Read more about the display, screen reader only and container utilities [here](/foundation/layouts/utilities/).

:::
