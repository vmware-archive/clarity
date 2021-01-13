---
title: Overview
toc: true
---

::: component-summary

The search input is a text input with a provided default search icon. The search input also uses type="search" to improve user experience on specific devices and improve accessibility.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a search input when user is expected to perform a search.

:::

::: component-section-level-one-title

## States

:::

<DocIndent>
<div>
    <cds-form-group layout="horizontal">
      <cds-search layout="horizontal">
        <label>Default</label>
        <input type="search" />
        <cds-control-message>Helper message</cds-control-message>
      </cds-search>
      <cds-search layout="horizontal">
        <label>Disabled</label>
        <input type="search" disabled />
        <cds-control-message>Disabled message</cds-control-message>
      </cds-search>
      <cds-search layout="horizontal" status="error">
        <label>Error</label>
        <input type="search" />
        <cds-control-message status="error">Error message</cds-control-message>
      </cds-search>
      <cds-search layout="horizontal" status="success">
        <label>Success</label>
        <input type="search" />
        <cds-control-message status="success">Success message</cds-control-message>
      </cds-search>
    </cds-form-group>
</div>
</DocIndent>

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Search inputs are available in vertical, horizontal, and compact layout. Horizontal layouts are preferred when it is often used on its own in a horizontal container such as an application header. See more layout guidelines on the [form page](/web-components/form/).

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/search/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/search/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/search/compact.html)!!!
</div>

:::

</div>
