---
title: Overview
toc: true

ice_to_hot_colors:
  - --cds-global-color-ice-700
  - --cds-global-color-ice-600
  - --cds-global-color-ice-500
  - --cds-global-color-ice-400
  - --cds-global-color-ice-300
  - --cds-global-color-ice-200
  - --cds-global-color-ice-100
  - --cds-global-color-red-50
  - --cds-global-color-red-100
  - --cds-global-color-red-200
  - --cds-global-color-red-300
  - --cds-global-color-red-400
  - --cds-global-color-red-500
  - --cds-global-color-red-600
  - --cds-global-color-red-700

ice_to_hot_values:
  - -70
  - -60
  - -50
  - -40
  - -30
  - -20
  - -10
  - 0
  - 10
  - 20
  - 30
  - 40
  - 50
  - 60
  - 70

color_palette_1_values:
  - Dogs
  - Cats
  - Fish
  - Snakes
  - Birds

color_palette_1_colors:
  - --cds-charts-3-color-800
  - --cds-charts-3-color-700
  - --cds-charts-3-color-600
  - --cds-charts-3-color-500
  - --cds-charts-3-color-400
---

::: component-summary

Data visualization is the presentation of data in a pictorial or graphic format.
Data visualizations often referred to as charts, enable user to view data, visualizing complex data,
giving them a way to see and understand trends, outliers, and patterns.
Interactive visualizations use technology to provide access to greater detail,
interactively changing what data the user sees and how it's processed.
With all data visualizations even the most simple types, accessibility is non-trivial and
requires careful attention.

:::

::: component-section-level-one-title

## Usage

:::

::: component-section-level-two-title

### Categorical

:::

::: component-section-level-two

Categorical colors are not ordered. Use these for categorical scales.
Do not use these for ordinal, interval, or ratio scales.

_For categorical scales use the Clarity charts sets available here._

<div cds-layout="fill m-y:md">
    <doc-charts-ColorPalette
      :values="$frontmatter.color_palette_1_values"
      :colors="$frontmatter.color_palette_1_colors"
      tileWidth="--cds-global-layout-space-xxl"
      :tileSizeRatio="2"
    />
</div>

:::

::: component-section-level-two-title

### Sequential

:::

::: component-section-level-two

Sequential colors are ordered. Use these for ordinal and interval scales.
It's also acceptable to use these for ratio scales. Do not use these for categorical scales.

<div cds-layout="fill m-y:md">
    <doc-charts-ColorPalette
      :values="$frontmatter.ice_to_hot_values.slice(7)"
      :colors="$frontmatter.ice_to_hot_colors.slice(7)"
      :withBorder="true"
    />
</div>

:::

::: component-section-level-two-title

### Diverging

:::

::: component-section-level-two

Diverging colors are ordered. Use these for ordinal and ratio scales, especially when there
is a meaningful middle value. These may also be used for interval scales. Do not use these
for categorical scales.

_For sequential and diverging scales use 1 or 2 scales from the Clarity colors palettes available here._

(example using Clarity Red and Ice to create diverging scale - note use of borders to achieve
sufficient contrast between cells.

<div cds-layout="fill m-y:md">
    <doc-charts-ColorPalette
      :values="$frontmatter.ice_to_hot_values"
      :colors="$frontmatter.ice_to_hot_colors"
      :withBorder="true"
    />
</div>

:::

::: component-section-level-two-title

## Process

:::

::: component-section-level-two-title

### Selecting Colors

:::

::: component-section-level-two

Examine your data - are the relationships between data points clarified by one of the
definitions above? (Categorical, sequential, diverging)? Selecting colors that reveal the
attributes which differentiate between data points is essential - rhi is not art, choosing
pleasing colors is desirable but must be done in the context of the relationships otherwise
you risk creating an ambiguous or miselading chart.

We recommend using one of the sets provided.

:::

::: component-section-level-two-title

### Differentiate between Samples

:::

::: component-section-level-two

Not all users can identify the differences between samples that may be apparent to you.
A11y compliance requires a contrast ratio of 3:1 between adjacent colors - consider using
a white or black border between adjacent colors to meet this requirement.

:::

::: component-section-level-two-title

### Use Texture

:::

::: component-section-level-two

Some users will not be able to differentiate between different colors in situations where an obvious
border doesn't exist for instance a line chart. Adding textures to the visualizations can make
the different trend lines clearly distinct from one another.

:::

::: component-section-level-two-title

### Legends vs Labels

:::

::: component-section-level-two

Whenever possible label data directly - legends are not useful to all users and violate the
preference for proximity in UX.

:::

::: component-section-level-one-title

## A11Y

:::

::: component-section-level-one

Accessibility is a very important and challenging aspect of data visualization work.
There are several techniques one may employ to improve the accessibility of charts
but ultimately the challenge is so formidable that offering an alternate view such as a table,
is often necessary. Assuming you are dedicated to making your charts as accessible as possible,
here are few helpful tips:

<br/>

1. Color accessibility derives from adjacent contrast. Two colors may have sufficient contrast (3.1:1) when
   measured against the background, but they may also be below the threshold relative to one another.
   Using high contrast separations between adjacent colors (such as black or white borders) will often solve this.
2. Textures provide a method of differentiating one area from the next which is not dependent on color.
   Consider if using texture for your charts is appropriate. Clarity provides the following textures - remember that
   the texture itself must be of sufficient contrast (3.1:1) against its background in order to be accessible.
3. Direct labeling. Accessibility is improved by maintaining close proximity between labels and the item they refer to.
   Legends can be less useful particularly in magnification use. In the example below the correspondence between blue in
   the legend and the blue trend line is an a11y error since the correspondence is indicated by color alone.
   Remember the basic UX guidance: recognition is better tha recall.
   The chart on the right is accessible though direct labeling is preferred to a legend.

:::

::: component-section-level-two-title

## Additional Resources

:::

::: component-section-level-two

- https://www.w3.org/TR/WCAG21/#sensory-characteristics
- http://www.storytellingwithdata.com/blog/2018/6/26/accessible-data-viz-is-better-data-viz
- https://uxdesign.cc/making-data-visualization-accessible-a-case-study-e5fb41ac62ad
- https://uxdesign.cc/data-visualization-for-color-accessibility-8a30ce25d90b
- https://cfpb.github.io/design-system/guidelines/data-visualization-guidelines

:::
