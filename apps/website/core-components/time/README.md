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

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Time picker is available in vertical, horizontal, and compact layout. See more layout guidelines on the [form page](/web-components/form/).

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/time/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/time/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/time/compact.html)!!!
</div>

:::

</div>
