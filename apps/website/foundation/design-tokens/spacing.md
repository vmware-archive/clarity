---
title: Spacing
toc: true
---

::: component-summary

Spacing in Clarity works at two orthogonal levels. At the application level, spacing is used to control the space between components/ At this level spacking tokens are primarily used to control the _density_ of information presented by an application. They help to establish the vertical rhythm for the display of components on any given page of an application.

At the component level, spacing tokens manage the space between the elements a component is built with. Density is still part of what a spacing token will control here but they should primarily be used to establish an informational hierarchy that surfaces the most relevent information to the user as quickly as possible.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Spacing tokens are delivered with the global CSS that is delivered with `@cds/core` and can be integrated included in an application in two ways.

<doc-code>

```scss
// import and integrate into standard build tooling
@import '~@cds/core/global.min';

// import and integrate into html
<link href="/node_modules/@cds/core/global.min.css" rel="stylesheet">
```

</doc-code>

:::

:::component-section-level-two-title

### Base Font Size

:::

:::component-section-level-two

</doc-code>

Clarity spacing tokens are set with `rem` values on the web platform. This is the scale value of the base font size. For Clarity, this is set to 20px. This means that `1rem = 20px` and can be adjusted back the browser default of `16px by setting the following token on an applications html element:

<doc-code>

```html
<html lang="en" cds-base-font="16"></html>
```

</doc-code>

:::

::: component-section-level-one-title

## Application Spacing

:::

:::component-section-level-one

When working with page or view level layouts, use application spacing tokens. These are global tokens used with the [layout system](/foundation/layouts/) to provide a set of page level layouts. Use these to control the density of content and components on application pages.

Example: when implementing a form, adjust the space between form sections and visually organize groups of form controls with the space around them.

:::

:::component-section-level-two-title

### Tokens

:::

:::component-section-level-two

<ClientOnly>
  <DocTokenTable tokenKey="globalLayoutSpace"/>
</ClientOnly>

:::

::: component-section-level-one-title

### Gaps

:::

:::component-section-level-one

Gaps are and example of a token that can add gutter like spaces between items on a layout. Gap sized are t-shirt sizes `(xxs, xs, sm, md, lg, xl, xxl)` and they align with the [layout space tokens](/foundation/design-tokens/#layout-space-tokens).

:::

:::component-section-level-one

To apply, them use this form when setting up a container element with one of the three layouts.

```html
<section cds-layout="horizontal gap:<SIZE>"></section>
```

<doc-demo>
<section class="cds-demo" layout wide cds-layout="vertical gap:md">
  <div cds-layout="horizontal gap:xxs m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:xs m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:sm m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:md m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:lg m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:xl m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:xxl m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
</section>
</doc-demo>

<doc-code>
```html
  <div cds-layout="horizontal gap:xxs m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:xs m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:sm m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:md m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:lg m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:xl m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
  <div cds-layout="horizontal gap:xxl m-b:md">
    <cds-placeholder>1</cds-placeholder>
    <cds-placeholder>2</cds-placeholder>
    <cds-placeholder>3</cds-placeholder>
  </div>
```
</doc-code>

:::

::: component-section-level-one-title

## Component Spacing

:::

:::component-section-level-one

Clarity provides a smaller set of values for adjusting space within a component. These values unlock fine grained control for detailed alignments within the compoennt. Clarity components make extensive use of these values. **Do not** use these calues when implementing the layout for a page or a view. An example of this is an application component that

The space tokens provide a set of smaller values used for adjusting space within a component. These values allow more control for detailed alignments within a component and are used within Clarity components. Do not use these values when designing the layout of an overal page or view.

Example: When encapsulating a form control and its label, adjust the space between them with these values.

<doc-code>

```scss
.my-element {
  label {
    padding-right: var(--cds-global-space-0);
  }

  input {
    padding-left: var(--cds-global-space-11);
  }
}
```

</doc-code>

:::

:::component-section-level-two-title

### Tokens

:::

:::component-section-level-two
<ClientOnly>
<DocTokenTable tokenKey="globalSpace"/>
</ClientOnly>

:::
