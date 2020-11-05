---
title: Overview
toc: true
---

::: component-summary

Badges are status modifiers to other elements which display the numerical value within an element either next to it or inside the element itself.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Badges have a colorful, bold, and filled style that makes them stand out when appearing within or next to another component.

:::

<DocPinbox>
<div>Use a badge to <b>highlight the count</b>.</div>
<div class="versus"><div class="versus-bubble">vs</div></div>
<div>Use a <a href="/web-components/tag">tag</a> to <b>show metadata</b>. It is usually text content. A <a href="/web-components/tag">tag</a> can contain a badge.</div>
</DocPinbox>

::: component-section-level-one-title

## Anatomy

:::

::: component-section-level-three-title

### Container

:::

:::component-section-level-three

Badges have a more rounded border radius, similar to [tags](/web-components/tag), to distinguish them from primary buttons.

:::

::: component-section-level-three-title

### Content

:::

:::component-section-level-three

Use integers within badges.

:::

::: component-section-level-one-title

## Recommendations

:::

::: component-section-level-three-title

### Over 99

:::

:::component-section-level-three

When a badge needs to display a number above 99, use “99+” instead of the number. Only show a number over 99 if it is essential to the user’s objectives and you are certain there is room in the design to accommodate it.

:::

<DocIndent>
<div cds-layout="horizontal gap:xs">
    <cds-tag readonly status="info">Info <cds-badge status="info">99+<span cds-layout="display:screen-reader-only">item.</span></cds-badge></cds-tag>
    <cds-tag readonly status="warning">Warning <cds-badge status="warning">99+<span cds-layout="display:screen-reader-only">items.</span></cds-badge></cds-tag>
</div>
</DocIndent>

::: component-section-level-three-title

### Color

:::

:::component-section-level-three

Badges can contain a variety of colors. Use traffic-light colors to display a sense of urgency or indicate state.

:::

<DocIndent>
<div cds-layout="horizontal gap:xs">
    <cds-badge color="gray">1<span cds-layout="display:screen-reader-only">item.</span></cds-badge>
    <cds-badge color="purple">1<span cds-layout="display:screen-reader-only">item.</span></cds-badge>
    <cds-badge color="blue">15<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge color="orange">2<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge color="light-blue">3<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge status="info"><span cds-layout="display:screen-reader-only">Info</span>2<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge status="success"><span cds-layout="display:screen-reader-only">Success</span>3<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge status="warning"><span cds-layout="display:screen-reader-only">Warning</span>12<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
    <cds-badge status="danger"><span cds-layout="display:screen-reader-only">Danger</span>15<span cds-layout="display:screen-reader-only">items.</span></cds-badge>
</div>
</DocIndent>
