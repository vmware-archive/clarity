---
title: Overview
toc: true
---

<DocPreviewWarning/>

::: component-summary

The circular progress bar is a compact indicator for providing feedback about an ongoing, user-initiated process.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

The circular progress bar is a compact indicator for providing feedback about an ongoing, user-initiated process.

:::

::: component-section-level-two-title

### Marking Progress

:::

:::component-section-level-two

Progress circles are compact and can indicate progress in areas that cannot accomodate a progress bar.

:::

<DocIndent>
<div cds-layout="gap:md horizontal">
    <cds-progress-circle size="xl" value="23"></cds-progress-circle>
    <cds-progress-circle size="xl" value="48"></cds-progress-circle>
    <cds-progress-circle size="xl" value="82"></cds-progress-circle>
    <cds-progress-circle size="xl" value="100"></cds-progress-circle>
</div>
</DocIndent>

::: component-section-level-one-title

## Spinners

:::

:::component-section-level-one

In its **indeterminate** state, the progress circle functions as a "spinner" which indicates an ongoing process of unknown duration.

:::

<DocIndent>
<div cds-layout="gap:md horizontal">
    <cds-progress-circle size="xl"></cds-progress-circle>
</div>
</DocIndent>

::: component-section-level-one-title

## Accessibility

:::

:::component-section-level-one

To make the progress circle accessible, the progress of the circle will need to be announced using an `aria-live` region.

:::
