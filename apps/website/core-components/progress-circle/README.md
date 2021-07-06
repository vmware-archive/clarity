---
title: Overview
toc: true
beta: true
---

<DocPreviewWarning/>

::: component-summary

A progress circle is an indicator for providing feedback about an ongoing, user-initiated process using a circular visual.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a progress circle to set an expectation of the loading time. Progress circles are compact and can indicate progress in areas that cannot accommodate a progress bar.

:::

::: component-section-level-one-title

## Anatomy

:::

<DocInset height="100" cds-layout="m-y:lg">
<div cds-layout="horizontal gap:sm align:center">
    <img alt="Image of circular progress with arrows pointing to the track and indicator of the component" height="64" src="/images/core-components/progress-circle/cds-progress-circle-anatomy.png" />
</div>
</DocInset>

::: component-section-level-three-title

#### 1. Track

:::

:::component-section-level-three

The track is a complete circle that contains the indicator.

:::

::: component-section-level-three-title

#### 2. Indicator

:::

:::component-section-level-three

The indicator travels along the track to show progress.

:::

::: component-section-level-two-title

## Sizes

:::

:::component-section-level-two

There are five sizes for progress circle.

:::

<div cds-layout="p-b:lg p-t:md horizontal gap:md">
    <div cds-layout="vertical gap:md">
        <div style="height: 3.2rem; width: 3.2rem" cds-layout="horizontal align:bottom align:horizontal-center">
            <cds-progress-circle size="sm" value="42"></cds-progress-circle>
        </div>
        <div cds-text="subsection center" style="width: 100%">S</div>
        <div cds-text="caption center" style="width: 100%">16 px</div>
    </div>
    <div cds-layout="vertical gap:md">
        <div style="height: 3.2rem; width: 3.2rem" cds-layout="horizontal align:bottom align:horizontal-center">
            <cds-progress-circle size="md" value="42"></cds-progress-circle>
        </div>
        <div cds-text="subsection center" style="width: 100%">M</div>
        <div cds-text="caption center" style="width: 100%">24 px</div>
    </div>
    <div cds-layout="vertical gap:md">
        <div style="height: 3.2rem; width: 3.2rem" cds-layout="horizontal align:bottom align:horizontal-center">
            <cds-progress-circle size="lg" value="42"></cds-progress-circle>
        </div>
        <div cds-text="subsection center" style="width: 100%">L</div>
        <div cds-text="caption center" style="width: 100%">36 px</div>
    </div>
    <div cds-layout="vertical gap:md">
        <div style="height: 3.2rem; width: 3.2rem" cds-layout="horizontal align:bottom align:horizontal-center">
            <cds-progress-circle size="xl" value="42"></cds-progress-circle>
        </div>
        <div cds-text="subsection center" style="width: 100%">XL</div>
        <div cds-text="caption center" style="width: 100%">48 px</div>
    </div>
    <div cds-layout="vertical gap:md">
        <div style="height: 3.2rem; width: 3.2rem" cds-layout="horizontal align:bottom align:horizontal-center">
            <cds-progress-circle size="xxl" value="42"></cds-progress-circle>
        </div>
        <div cds-text="subsection center" style="width: 100%">XXL</div>
        <div cds-text="caption center" style="width: 100%">64 px</div>
    </div>
</div>

::: component-section-level-two-title

## States

:::

<div cds-layout="p-b:xl p-t:md vertical gap:lg">
    <div cds-layout="horizontal gap:xl wrap:none">
        <div style="height: 3.2rem; width: 3.2rem">
            <cds-progress-circle size="xxl" value="42"></cds-progress-circle>
        </div>
        <div cds-layout="vertical gap:md">
            <p cds-text="section">Determinate</p>
            <p cds-text="body">Use when the process has a known duration. It shows process completion towards a specific maximum term.</p>
        </div>
    </div>
    <div cds-layout="horizontal gap:xl wrap:none">
        <div style="height: 3.2rem; width: 3.2rem">
            <cds-progress-circle size="xxl"></cds-progress-circle>
        </div>
        <div cds-layout="vertical gap:md">
            <p cds-text="section">Indeterminate</p>
            <p cds-text="body">Use when the process has no estimated end time. It indicates that work is occurring without indicating an estimated time until completion. It is also known as the spinner.</p>
        </div>
    </div>
</div>
