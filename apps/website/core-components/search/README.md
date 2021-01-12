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
