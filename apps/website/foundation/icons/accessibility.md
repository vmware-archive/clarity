---
title: Accessibility
toc: true
---

::: component-summary

Icons have different accessibility requirements depending on the context they are being used in. There are three main use cases for icons and how they should be implemented in an accessible way.

- Inert
- Interactive
- Status/Indicator

:::

::: component-section-level-one-title

## Neutral

:::

:::component-section-level-one

Icons by default are inert only meaning they do not provide any context to screen readers nor are interactive. The icon is purely cosmetic without additional markup.

<doc-code>

```html
<cds-icon shape="bars"></cds-icon>
```

</doc-code>

:::

::: component-section-level-one-title

## Interactive

:::

:::component-section-level-one

When icons are used in buttons or links they should be used in conjunction with descriptive text.

<doc-code>

```html
<cds-button> <cds-icon shape="bars"></cds-icon> menu </cds-button>
```

</doc-code>

If the icon in an interactive item does not have text then the parent interactive item (typically a button or link) should have an appropriate aria-label describing the interaction.

<doc-code>

```html
<cds-icon-button aria-label="toggle menu">
  <cds-icon shape="bars"></cds-icon>
</cds-icon-button>
```

</doc-code>

:::

::: component-section-level-one-title

## Status/Indicator

:::

:::component-section-level-one

If an icon is used to show a status/indicator or part of a larger body of text content then the icon should have an aria-label and role="img" attribute.

<doc-code>

```html
<p>
  <cds-icon shape="exclamation-triangle" role="img" aria-label="Usage Warning"></cds-icon>
  CPU usage is at 99% use.
</p>
```

</doc-code>

:::
