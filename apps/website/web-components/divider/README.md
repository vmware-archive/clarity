---
title: Overview
toc: true
---

::: component-summary

Dividers are lines or "rules" that break up blocks of content.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Place dividers between sections of content to visual signify a change of topic, focus, or expected interaction.

Clarity recommends using dividers inside of containers with a `cds-layout` attribute. This allows dividers to span the full dimensions of the container as expected.

:::

<DocInset cds-layout="m-b:xl">
<div class="card-like" cds-layout="vertical gap:lg p:lg align:stretch">
    <p cds-text="body">This is a paragraph with a divider below it.</p>
    <cds-divider></cds-divider>
    <p cds-text="body">This is a paragraph with a divider above it.</p>
</div>
</DocInset>

::: component-section-level-two-title

### Vertical vs. Horizontal

:::

:::component-section-level-two

Horizontal dividers are most commonly used but dividers can also change orientation to be vertical. Vertical dividers are often used inside of headers.

Clarity recommends using vertical dividers inside a horizontal `cds-layout`.

:::

<DocInset cds-layout="m-b:xl">
<div class="card-like" cds-layout="horizontal gap:xs">
    <div cds-layout="align:right p:lg p-r:sm">
    <p cds-text="body">This is a paragraph next to a divider.</p>
    </div>
    <cds-divider orientation="vertical"></cds-divider>
    <div cds-layout="align:left p:lg p-l:sm">
    <p cds-text="body">This is a paragraph next to a divider.</p>
    </div>
</div>
</DocInset>
