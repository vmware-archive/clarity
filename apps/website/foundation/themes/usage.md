---
title: Usage
toc: true
---

::: component-section-level-one-title

## Usage

:::

::: component-section-level-one

There are two themes that ship with Clarity and four ways to use theming in an application.

1. Use the default light theme as it is.
2. Use the dark theme as it is.
3. Customize either the light or the dark theme to suit design spec or branding needs.
4. Create a dynamic theme that responds to user preferences.

Below we look at how to use the default themes as well as make them custom and dynamic.

:::

:::component-section-level-two-title

### Light Theme

:::

:::component-section-level-two

The light theme is a fully accessible theme with a light palette of colors. It is the default theme enabled when an application integrated `@cds/core`. There are two ways to integrate core styles into an application.

```scss
// import it into application scss or css
@import '~@cds/core/global.min';

// link / import it in html
<link href="/node_modules/@cds/core/global.min.css" rel="stylesheet" />
```

:::

:::component-section-level-two-title

### Dark Theme

:::

:::component-section-level-two

The dark theme is a fully accessible theme with a dark palette of colors. It is available when an application integrates the dark theme stylesheet.

```scss

// import into sass or css
@import '~@cds/core/styles/theme.dark.min.css';

// or import in html
<link href="/node_modules/@cds/core/styles/theme.dark.min.css" rel="stylesheet">
```

#### cds-theme

In addition to importing the theme styles, an application also must add the `cds-theme` attribute to the body element.

```html
<body cds-theme="dark">
  ...
</body>
```

:::

:::component-section-level-two-title

### Custom Theme

:::

:::component-section-level-two

Some applications will need to create a theme because of specific branding, design specifications or color palette requirements. Clarity allows for this through the use of custom properties in our stylesheets. The dark theme is a good example for how to accomplish this. Over-ride the properties below with specific values and create a custom theme.

<doc-code>

<<< .vuepress/code/core-usage-demos/theme/custom.scss

</doc-code>

:::

:::component-section-level-two-title

### Dynamic Themes

:::

:::component-section-level-two

A Dynamic theming give the user (or their operating system) the ability to set and control one or more aspects of the look-n-feel of an application. There are some common use cases listed below but the concepts could be adapted for many different applications at both the global and the component level.

:::

:::component-section-level-three-title

#### Automatically switch to dark theme based on the host OS with [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

:::

:::component-section-level-three

```typescript
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.setAttribute('cds-theme', 'dark');
}
```

:::

:::component-section-level-three-title

#### Automatically set high contrast styles based on OS (Edge/Firefox only) with [prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast)

:::

:::component-section-level-three

```typescript
if (window.matchMedia('(-ms-high-contrast: active)')).matches || window.matchMedia('(prefers-contrast: high)')).matches) {
  document.body.style.setProperty('--cds-global-color-blue-600', value);
}
```

:::

:::component-section-level-three-title

#### Automatically set inverted colors based on browser preferences with [inverted-colors](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors)

:::

:::component-section-level-three

```typescript
if (window.matchMedia('(inverted-colors: inverted)')).matches) {
  // invert css colors
}
```

:::

:::component-section-level-three-title

#### Automatically disable CSS animations based on browser preferences with [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

:::

:::component-section-level-three

```typescript
if (window.matchMedia('(prefers-reduced-motion: reduce)')).matches) {
  // disabled css timing properties
}
```

:::

:::component-section-level-three-title

#### Automatically adjust spacing based on the type of pointer input with [any-pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer)

:::

:::component-section-level-three

```typescript
if (window.matchMedia('(any-pointer: coarse)')).matches) {
  document.body.style.setProperty('--cds-global-space-1', 'calc(var(--cds-global-space-1) * 1.1');
}
```

:::
