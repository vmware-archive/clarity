---
title: Overview
toc: true
---

::: component-summary

The time input uses the native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time" target="_blank">HTML Time Input</a>.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a time input when user is expected to enter a time (hours and minutes, and optionally seconds).

:::

::: component-section-level-one-title

## Anatomy

:::

::: component-section-level-one

1. Label (optional)
2. Time input
3. Helper message (optional)

:::

::: component-section-level-one-title

## States

:::

<DocIndent>
<div>
    <cds-form-group layout="horizontal">
      <cds-time layout="horizontal">
        <label>Default</label>
        <input type="time" />
        <cds-control-message>Helper message</cds-control-message>
      </cds-time>
      <cds-time layout="horizontal">
        <label>Disabled</label>
        <input type="time" disabled />
        <cds-control-message>Disabled message</cds-control-message>
      </cds-time>
      <cds-time layout="horizontal" status="error">
        <label>Error</label>
        <input type="time" />
        <cds-control-message status="error">Error message</cds-control-message>
      </cds-time>
      <cds-time layout="horizontal" status="success">
        <label>Success</label>
        <input type="time" />
        <cds-control-message status="success">Success message</cds-control-message>
      </cds-time>
    </cds-form-group>
</div>
</DocIndent>
