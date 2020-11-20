---
title: Overview
toc: true
---

::: component-summary

The range input component consists of a slider enabling a choice between a minimum and a maximum value. It allows the user to select a value when the precise value chosen is not considered necessary.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

This is an imprecise input control that should only be used when the exact value is not important for the user to know. Range controls work well when the users is more concerned with percent distance between the min and the max.

:::

<DocIndent>
<div>
    <cds-range layout="horizontal">
    <label>Label</label>
    <input type="range" />
    </cds-range>
</div>
</DocIndent>

::: component-section-level-one-title

## Anatomy

:::

::: component-section-level-one

1. Label
2. Range slider
3. Range indicator
4. Helper message (optional)

:::

::: component-section-level-one-title

## States

:::

<DocIndent>
<div>
    <cds-form-group layout="horizontal">
      <cds-range layout="horizontal">
        <label>Enabled</label>
        <input type="range" />
        <cds-control-message>Helper message</cds-control-message>
      </cds-range>
      <cds-range layout="horizontal">
        <label>Disabled</label>
        <input type="range" disabled />
        <cds-control-message>Disabled message</cds-control-message>
      </cds-range>
      <cds-range layout="horizontal" status="error">
        <label>Error</label>
        <input type="range" />
        <cds-control-message status="error">Error message</cds-control-message>
      </cds-range>
      <cds-range layout="horizontal" status="success">
        <label>Success</label>
        <input type="range" />
        <cds-control-message status="success">Success message</cds-control-message>
      </cds-range>
    </cds-form-group>
</div>
</DocIndent>
