---
title: Vertical
toc: true
---

::: component-summary

The vertical layout strategy produces columns of items that wrap automatically. Use vertical layouts when the items need to flow from top to bottom inside a container. A common example is to organize a list of items into a stack. Examples for this layout strategy include cards of information, content and other block level items on a page.

There are various tokens that can be nested and combined with other strategies to produce almost any layout that can be thought of. Below find examples demonstrating different ways to implement gaps, centering, aligmnent and sizing for the items in a layout.

:::

::: component-section-level-one-title

## Basic Example

:::

:::component-section-level-one

<doc-demo>
<section class="cds-demo" layout>
  <div cds-layout="vertical gap:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code cds-layout="m-b:lg">

```html
<div cds-layout="vertical gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
```

</doc-code>

:::

::: component-section-level-one-title

## Gaps: basic and responsive

:::

:::component-section-level-one

Vertical gaps can be applied to the items in a layout. Gap sizes are the t-shirt size [xxs, xs, sm, md, lg, xl, xxl] that align with the [Layout Spacing Tokens](/foundation/design-tokens/spacing/#application-spacing) and can be made responsive as shown in the example below.

<doc-demo>
<section class="cds-demo" layout wide>
<div cds-layout="horizontal gap:md">
  <div cds-layout="horizontal gap:md">
    <div cds-layout="vertical gap:xxxs">
      <cds-placeholder>xxxs</cds-placeholder>
      <cds-placeholder>xxxs</cds-placeholder>
      <cds-placeholder>xxxs</cds-placeholder>
    </div>
    <div cds-layout="vertical gap:xxs">
      <cds-placeholder>xxs</cds-placeholder>
      <cds-placeholder>xxs</cds-placeholder>
      <cds-placeholder>xxs</cds-placeholder>
    </div>
    <div cds-layout="vertical gap:xs">
      <cds-placeholder>xs</cds-placeholder>
      <cds-placeholder>xs</cds-placeholder>
      <cds-placeholder>xs</cds-placeholder>
    </div>
    <div cds-layout="vertical gap:sm">
      <cds-placeholder>sm</cds-placeholder>
      <cds-placeholder>sm</cds-placeholder>
      <cds-placeholder>sm</cds-placeholder>
    </div>
    <div cds-layout="vertical gap:md">
      <cds-placeholder>md</cds-placeholder>
      <cds-placeholder>md</cds-placeholder>
      <cds-placeholder>md</cds-placeholder>
    </div>
    <div cds-layout="vertical gap:lg">
      <cds-placeholder>lg</cds-placeholder>
      <cds-placeholder>lg</cds-placeholder>
      <cds-placeholder>lg</cds-placeholder>
    </div>
    <div cds-layout="vertical gap:xl">
      <cds-placeholder>xl</cds-placeholder>
      <cds-placeholder>xl</cds-placeholder>
      <cds-placeholder>xl</cds-placeholder>
    </div>
    <div cds-layout="vertical gap:xxl">
      <cds-placeholder>xxl</cds-placeholder>
      <cds-placeholder>xxl</cds-placeholder>
      <cds-placeholder>xxl</cds-placeholder>
    </div>
  </div>
  <div cds-layout="vertical gap@sm:lg align:stretch">
    <cds-placeholder>responsive</cds-placeholder>
    <cds-placeholder>responsive</cds-placeholder>
    <cds-placeholder>responsive</cds-placeholder>
  </div>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="horizontal gap:md">
  <div cds-layout="vertical gap:xxxs">
    <cds-placeholder>xxxs</cds-placeholder>
    <cds-placeholder>xxxs</cds-placeholder>
    <cds-placeholder>xxxs</cds-placeholder>
  </div>
  <div cds-layout="vertical gap:xxs">
    <cds-placeholder>xxs</cds-placeholder>
    <cds-placeholder>xxs</cds-placeholder>
    <cds-placeholder>xxs</cds-placeholder>
  </div>
  <div cds-layout="vertical gap:xs">
    <cds-placeholder>xs</cds-placeholder>
    <cds-placeholder>xs</cds-placeholder>
    <cds-placeholder>xs</cds-placeholder>
  </div>
  <div cds-layout="vertical gap:sm">
    <cds-placeholder>sm</cds-placeholder>
    <cds-placeholder>sm</cds-placeholder>
    <cds-placeholder>sm</cds-placeholder>
  </div>
  <div cds-layout="vertical gap:md">
    <cds-placeholder>md</cds-placeholder>
    <cds-placeholder>md</cds-placeholder>
    <cds-placeholder>md</cds-placeholder>
  </div>
  <div cds-layout="vertical gap:lg">
    <cds-placeholder>lg</cds-placeholder>
    <cds-placeholder>lg</cds-placeholder>
    <cds-placeholder>lg</cds-placeholder>
  </div>
  <div cds-layout="vertical gap:xl">
    <cds-placeholder>xl</cds-placeholder>
    <cds-placeholder>xl</cds-placeholder>
    <cds-placeholder>xl</cds-placeholder>
  </div>
  <div cds-layout="vertical gap:xxl">
    <cds-placeholder>xxl</cds-placeholder>
    <cds-placeholder>xxl</cds-placeholder>
    <cds-placeholder>xxl</cds-placeholder>
  </div>
</div>
<div cds-layout="vertical gap@sm:lg align:stretch">
  <cds-placeholder>responsive</cds-placeholder>
  <cds-placeholder>responsive</cds-placeholder>
  <cds-placeholder>responsive</cds-placeholder>
</div>
```

</doc-code>

:::

::: component-section-level-one-title

## Centering

:::

:::component-section-level-one

One common use case for layouts is to center one or more items. The tokens provided make it simple to center items in several different ways for vertical layouts.

:::

:::component-section-level-two-title

### Center

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout tall wide>
  <div cds-layout="vertical gap:md align:center">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Vertical Center

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout tall>
  <div cds-layout="vertical gap:md align:vertical-center">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:vertical-center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Horizontal Center

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide>
  <div cds-layout="vertical gap:md align:horizontal-center">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:horizontal-center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Item Center

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout tall wide>
  <div cds-layout="vertical">
    <cds-placeholder cds-layout="align:top">1</cds-placeholder>
    <cds-placeholder cds-layout="align:center">2</cds-placeholder>
    <cds-placeholder cds-layout="align:bottom">3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical">
  <cds-placeholder cds-layout="align:top">1</cds-placeholder>
  <cds-placeholder cds-layout="align:vertical-center">2</cds-placeholder>
  <cds-placeholder cds-layout="align:bottom">3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Item Vertical Center

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout tall>
<div cds-layout="vertical">
  <cds-placeholder cds-layout="align:top">1</cds-placeholder>
  <cds-placeholder cds-layout="align:vertical-center">2</cds-placeholder>
  <cds-placeholder cds-layout="align:bottom">3</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical">
  <cds-placeholder cds-layout="align:top">1</cds-placeholder>
  <cds-placeholder cds-layout="align:vertical-center">2</cds-placeholder>
  <cds-placeholder cds-layout="align:bottom">3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Item Horizontal Center

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide>
  <div cds-layout="vertical gap:md align:horizontal-center">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:horizontal-center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
```

</doc-code>

:::

::: component-section-level-one-title

## Alignment

:::

:::component-section-level-one

Alignment tokens can be applied to position one, several or all items in different directions. All alignemnts are relative to the size of the `cds-layout` container.

:::

:::component-section-level-two-title

### Top

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout tall>
  <div cds-layout="vertical gap:md align:top">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:top">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Bottom

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout tall>
  <div cds-layout="vertical gap:md align:bottom">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:bottom">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
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
  <div cds-layout="vertical gap:md align:left">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:left">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
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
  <div cds-layout="vertical gap:md align:right">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:right">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Item left and Right

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout wide tall>
  <div cds-layout="vertical gap:md">
    <cds-placeholder cds-layout="align:left">1</cds-placeholder>
    <cds-placeholder cds-layout="align:right">2</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md">
  <cds-placeholder cds-layout="align:left">1</cds-placeholder>
  <cds-placeholder cds-layout="align:right">2</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Item Top and Bottom

:::

:::component-section-level-two

<doc-demo>
<section class="cds-demo" layout tall>
  <div cds-layout="vertical gap:md">
    <cds-placeholder cds-layout="align:top">1</cds-placeholder>
    <cds-placeholder cds-layout="align:bottom">2</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md">
  <cds-placeholder cds-layout="align:left">1</cds-placeholder>
  <cds-placeholder cds-layout="align:right">2</cds-placeholder>
</div>
```

</doc-code>

:::

::: component-section-level-one-title

## Sizing

:::

:::component-section-level-one

Items can fill, stretch and shrink to capture space inside the layout countainer. The following examples demonstrate the tokens used to enable these behaviors.

:::

:::component-section-level-two-title

### Fill

:::

:::component-section-level-two

The fill alignements will stretch the layout items regardless of their initial width. This will stretch the items evenly accross the layout and not wrap items.

<doc-demo>
<section class="cds-demo" layout tall wide>
  <div cds-layout="vertical gap:md align:fill">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder style="height: 150px">3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:fill">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Horizontal Stretch

:::

:::component-section-level-two

The stretch alignment will set the layout items to fill available space **taking into account the initial size of the element**.

<doc-demo>
<section class="cds-demo" layout wide>
  <div cds-layout="vertical gap:md align:horizontal-stretch">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:horizontal-stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Vertical Stretch

:::

:::component-section-level-two

The vertical stretch alignment will set the layout items to fill available vertical space.

<doc-demo>
<section class="cds-demo" layout tall>
  <div cds-layout="vertical gap:md align:vertical-stretch">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder style="height: 150px">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:vertical-stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder style="height: 150px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Stretch

:::

:::component-section-level-two

The stretch alignment will set the layout items to fill all available space.

<doc-demo>
<section class="cds-demo" layout tall wide>
  <div cds-layout="vertical gap:md align:stretch">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:vertical-stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Item Stretch

:::

:::component-section-level-two

The item stretch alignment will force a specific items to fill all available space.

<doc-demo>
<section class="cds-demo" layout tall>
<div cds-layout="vertical gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder cds-layout="align:stretch">2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder cds-layout="align:stretch">2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Item Shrink

:::

:::component-section-level-two

The item stretch alignment will force an item to contract to the smallest space it can.

<doc-demo>
<section class="cds-demo" layout tall>
<div cds-layout="vertical gap:md align:vertical-stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder cds-layout="align:shrink">2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align:vertical-stretch">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder cds-layout="align:shrink">2</cds-placeholder>
  <cds-placeholder>3</cds-placeholder>
</div>
```

</doc-code>

:::

::: component-section-level-one-title

## Responsive

:::

:::component-section-level-one

Responsive tokens can be used to adapt different alignments for different screen sizes.

:::

:::component-section-level-two-title

### Responsive Alignment

:::

:::component-section-level-two

All items can respond to different screen sizes.

<doc-demo>
<section class="cds-demo" layout tall>
<div cds-layout="vertical gap:md align@md:bottom align@lg:center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md align@md:bottom align@lg:center">
  <cds-placeholder>1</cds-placeholder>
  <cds-placeholder>2</cds-placeholder>
</div>
```

</doc-code>

:::

:::component-section-level-two-title

### Responsive Item Alignment

:::

:::component-section-level-two

Specific items can respond to different screen sizes.

<doc-demo>
<section class="cds-demo" layout tall>
<div cds-layout="vertical gap:md">
  <cds-placeholder cds-layout="align@md:bottom align@lg:center">1</cds-placeholder>
</div>
</section>
</doc-demo>

<doc-code>

```html
<div cds-layout="vertical gap:md">
  <cds-placeholder cds-layout="align@md:bottom align@lg:center">1</cds-placeholder>
</div>
```

</doc-code>

:::
