---
title: Grid
toc: true
---

::: component-summary

The grid layout strategy defines columns for the layout. This controls the spacing of items inside the container and enables responsive changes for different screen sizes. Spacing, alignment and the gap between items can all be configured with the [Layout Spacing Tokens](/foundation/design-tokens/spacing/#application-spacing).

Unless specified, the default grid is twelve columns.

:::

:::component-section-level-one-title

## Basic

:::

:::component-section-level-one

In the simplest form a grid and gap token is enough to define a twelve column grid. However, inside the grid tokens can be used on items to redefine the number of columns an item spans.

<doc-demo>
<section class="cds-demo" layout wide>
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
    <cds-placeholder cds-layout="col:2">2</cds-placeholder>
    <cds-placeholder cds-layout="col:2">2</cds-placeholder>
    <cds-placeholder cds-layout="col:2">2</cds-placeholder>
    <cds-placeholder cds-layout="col:2">2</cds-placeholder>
    <cds-placeholder cds-layout="col:2">2</cds-placeholder>
    <cds-placeholder cds-layout="col:2">2</cds-placeholder>
    <cds-placeholder cds-layout="col:3">3</cds-placeholder>
    <cds-placeholder cds-layout="col:3">3</cds-placeholder>
    <cds-placeholder cds-layout="col:3">3</cds-placeholder>
    <cds-placeholder cds-layout="col:3">3</cds-placeholder>
    <cds-placeholder cds-layout="col:4">4</cds-placeholder>
    <cds-placeholder cds-layout="col:4">4</cds-placeholder>
    <cds-placeholder cds-layout="col:4">4</cds-placeholder>
    <cds-placeholder cds-layout="col:6">6</cds-placeholder>
    <cds-placeholder cds-layout="col:6">6</cds-placeholder>
    <cds-placeholder cds-layout="col:12">12</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
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

  <cds-placeholder cds-layout="col:2">2</cds-placeholder>
  <cds-placeholder cds-layout="col:2">2</cds-placeholder>
  <cds-placeholder cds-layout="col:2">2</cds-placeholder>
  <cds-placeholder cds-layout="col:2">2</cds-placeholder>
  <cds-placeholder cds-layout="col:2">2</cds-placeholder>
  <cds-placeholder cds-layout="col:2">2</cds-placeholder>

  <cds-placeholder cds-layout="col:3">3</cds-placeholder>
  <cds-placeholder cds-layout="col:3">3</cds-placeholder>
  <cds-placeholder cds-layout="col:3">3</cds-placeholder>
  <cds-placeholder cds-layout="col:3">3</cds-placeholder>

  <cds-placeholder cds-layout="col:4">4</cds-placeholder>
  <cds-placeholder cds-layout="col:4">4</cds-placeholder>
  <cds-placeholder cds-layout="col:4">4</cds-placeholder>

  <cds-placeholder cds-layout="col:6">6</cds-placeholder>
  <cds-placeholder cds-layout="col:6">6</cds-placeholder>

  <cds-placeholder cds-layout="col:12">12</cds-placeholder>
</div>
```

</doc-code>

:::

::: component-section-level-one-title

## Columns

:::

:::component-section-level-one

As a general rule, applications have control of the number of columns in a grid. By default there are twelve columns but the number of columns can be explictely set based on application needs. However twelve columns is just the tip of the iceberg and grids can be adpated to a variety of layouts with several different methods for configuring the grid. Different methods can even be combined for more flexibility and adaptive responsiveness.

:::

:::component-section-level-two-title

### Spanning

:::

:::component-section-level-two

At some point, most grids needs to make one or more items (cells) in a grid span multiple columns. Use `cds-layout="col:#"` on any grid item to make it span multiple columns.

<doc-demo>
<section class="cds-demo" layout wide>
 <div cds-layout="grid cols:6 gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:6 gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Explicit Columns

:::

:::component-section-level-two

When the application needs to set different column widths a grid can explicitly define the column span with the `cds-col:##` value for the `cds-layout` attribute.

<doc-demo>
<section class="cds-demo" layout wide>
<div cds-layout="grid gap:md">
  <cds-placeholder cds-layout="col:4">1</cds-placeholder>
  <cds-placeholder cds-layout="col:8">2</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid gap:md">
  <cds-placeholder cds-layout="col:4">1</cds-placeholder>
  <cds-placeholder cds-layout="col:8">2</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Auto Columns

:::

:::component-section-level-two

Column items can automatically span to evenly fill the container width by setting `cds-layout="grid cols:auto"`.

<doc-demo>
<section class="cds-demo" layout wide>
<div cds-layout="grid cols:auto gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:auto gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Responsive Columns

:::

:::component-section-level-two

Grids can be made responsive by using the [responsive tokens](/foundation/layouts/#responsive/) to set breakpoints for the column span width the form `col@<BREAKPOINT>:<COLUMN_SPAN>`.

<doc-demo>
</doc-demo>
  <div cds-layout="grid cols@sm:6 cols@md:3 gap:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
    <cds-placeholder>4</cds-placeholder>
  </div>
<doc-code>

```html
<div cds-layout="grid cols@sm:6 cols@md:3 gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Explicit + Responsive

:::

:::component-section-level-two

Applications can combine the responsive tokens with an explicit span to enable a grid that adapts the span of columns to the viewport. In this example, for viewports above the `@sm` breakpoint, there are two columns in one row. He first item spans four columns and the second column spans eight. However, at screen sizes below `@sm` the grid is configured to take up twelve columns which means there will be two rows. Once row for each item.

This is a powerful technique that can be used to implement an infinate number of variations for grid layouts.

<doc-demo>
<section class="cds-demo" layout wide>
<div cds-layout="grid gap:md">
  <cds-placeholder cds-layout="col@sm:4">1</cds-placeholder>
  <cds-placeholder cds-layout="col@sm:8">2</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid gap:md">
  <cds-placeholder cds-layout="col@sm:4">1</cds-placeholder>
  <cds-placeholder cds-layout="col@sm:8">2</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Wrapping Columns

:::

:::component-section-level-two

Grid items will automatically wrap when their total number of defined columns is larger than twelve.

<doc-demo>
<section class="cds-demo" layout wide>
<div cds-layout="grid cols:6 gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:6 gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Start / End Columns

:::

:::component-section-level-two

There is a start/end API that enables applications to control when a column starts or ends. They are similar to Grid offsets in [Bootstrap](https://getbootstrap.com/docs/4.0/layout/grid/#offset-classes).

<doc-demo>
<section class="cds-demo" layout wide>
<div cds-layout="grid gap:md">
    <cds-placeholder cds-layout="col:start-3 col:8">1</cds-placeholder>
    <cds-placeholder cds-layout="col:start-1 col:end-5">2</cds-placeholder>
    <cds-placeholder cds-layout="col:4 col:end-13">3</cds-placeholder>
    <cds-placeholder cds-layout="col:start-1 col:end-13">4</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid gap:md">
  <cds-placeholder cds-layout="col:start-3 col:8">1</cds-placeholder>
  <cds-placeholder cds-layout="col:start-1 col:end-5">2</cds-placeholder>
  <cds-placeholder cds-layout="col:4 col:end-13">3</cds-placeholder>
  <cds-placeholder cds-layout="col:start-1 col:end-13">4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Start / End Responsive Columns

:::

:::component-section-level-two

Responsive layouts can use the breakpoint tokens on start/end values of columns to adjust the layout and optimize it for a specific screen size.

<doc-demo>
<section class="cds-demo" layout wide>
  <div cds-layout="grid cols@sm:6 cols@md:4 gap:md">
    <cds-placeholder cds-layout="col@md:start-2">1</cds-placeholder>
    <cds-placeholder cds-layout="col@md:end-12">2</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols@sm:6 cols@md:4 gap:md">
  <cds-placeholder cds-layout="col@md:start-2">1</cds-placeholder>
  <cds-placeholder cds-layout="col@md:end-12">2</cds-placeholder>
</div>
```

</doc-code>

:::

::: component-section-level-one-title

## Alignment

:::

:::component-section-level-two

Columns and items can be aligned in multiple directions with the alignment utilities.

:::

:::component-section-level-two-title

### Top (Default)

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide tall>
<div cds-layout="grid gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Bottom

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide tall>
<div cds-layout="grid gap:md align:bottom">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid gap:md align:bottom">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Left

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide>
<div cds-layout="grid cols:auto gap:md align:left">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:auto gap:md align:left">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Right

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide>
<div cds-layout="grid cols:auto gap:md align:right">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:auto gap:md align:right">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Vertical Center

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout tall wide>
<div cds-layout="grid gap:md align:vertical-center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid gap:md align:vertical-center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Horiizontal Center

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide>
<div cds-layout="grid cols:auto gap:md align:horizontal-center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:auto gap:md align:horizontal-center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Center

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout tall wide>
<div cds-layout="grid cols:auto gap:md align:center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:auto gap:md align:center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Vertical Stretch

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide tall>
<div cds-layout="grid gap:md align:vertical-stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid gap:md align:vertical-stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Horizontal Stretch

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide tall>
<div cds-layout="grid cols:3 gap:md align:horizontal-stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:3 gap:md align:horizontal-stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Stretch

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide tall>
<div cds-layout="grid cols:auto gap:md align:stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:auto gap:md align:stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
  <cds-placeholder>4</cds-placeholder>
</div>
```

</doc-code>

:::

::: component-section-level-one-title

## Rows

:::

:::component-section-level-one

Rows are an optional API that allows you to control of the height of a column relative to the parent height.

:::

:::component-section-level-two-title

### Explict Row Height

:::

:::component-section-level-two

In this example, we can define that all rows should be 8 rows high (8/12) except the last item which is 4 columns high (4/12).

<doc-demo>
<section class="cds-demo" layout wide tall>
<div cds-layout="grid cols:6 rows:8 gap:md align:stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder cds-layout="col:12 row:4">3</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:6 rows:8 gap:md align:stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder cds-layout="col:12 row:4">3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Responsive Row Height

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide tall>
<div cds-layout="grid cols:6 rows:4 rows@sm:8 gap:md align:stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder cds-layout="col:12 row:8 row@sm:4">3</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:6 rows:4 rows@sm:8 gap:md align:stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder cds-layout="col:12 row:8 row@sm:4">3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Start / End Rows

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide tall>
<div cds-layout="grid cols:4 gap:md align:stretch">
  <cds-placeholder cds-layout="row:4 row:start-6">1</cds-placeholder>
  <cds-placeholder cds-layout="row:3 row:start-4">2</cds-placeholder>
  <cds-placeholder cds-layout="row:12">3</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols:4 gap:md align:stretch">
  <cds-placeholder cds-layout="row:4 row:start-6">1</cds-placeholder>
  <cds-placeholder cds-layout="row:3 row:start-4">2</cds-placeholder>
  <cds-placeholder cds-layout="row:12">3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Responsive Start / End

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide tall>
<div cds-layout="grid cols@md:12 rows@sm:4 gap:md align:stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder cds-layout="row@sm:start-10">2</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="grid cols@md:12 rows@sm:4 gap:md align:stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder cds-layout="row@sm:start-10">2</cds-placeholder>
</div>
```

</doc-code>

:::
