---
title: Overview
toc: true
---

::: component-summary

The file input uses the native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file" target="_blank">HTML File Input</a>.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a file input field when the user needs to choose one or more files from their device storage.

:::

::: component-section-level-one-title

## States

:::

<DocIndent>
<div>
    <cds-form-group layout="horizontal">
        <cds-file layout="horizontal">
            <label>Default</label>
            <input type="file" multiple />
            <cds-control-message>Helper message</cds-control-message>
        </cds-file>
        <cds-file layout="horizontal">
            <label>Disabled</label>
            <input type="file" disabled />
            <cds-control-message>Disabled message</cds-control-message>
        </cds-file>
        <cds-file layout="horizontal" status="success">
            <label>success</label>
            <input type="file" multiple />
            <cds-control-message status="success">Success message</cds-control-message>
        </cds-file>
        <cds-file layout="horizontal" status="error">
            <label>Error</label>
            <input type="file" multiple />
            <cds-control-message status="error">Error message</cds-control-message>
        </cds-file>
    </cds-form-group>
</div>
</DocIndent>
