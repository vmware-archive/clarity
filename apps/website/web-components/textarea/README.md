---
title: Overview
toc: true
---

::: component-summary

The textareas provide a form control for long form text input. When anticipating user inputs of a sentence or less, use an input. Multiple usages of an input strung together may constitute a form. See forms for more details.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a text field when the expected user input may be more than a single line.

:::

<DocIndent>
<div>
    <cds-textarea control-width="shrink">
        <label>Label</label>
        <textarea></textarea>
    </cds-textarea>
</div>
</DocIndent>

::: component-section-level-one-title

## States

:::

<DocIndent>
<div>
    <cds-form-group layout="horizontal">
      <cds-textarea layout="horizontal">
        <label>Default</label>
        <textarea></textarea>
        <cds-control-message>Helper message</cds-control-message>
      </cds-textarea>
      <cds-textarea layout="horizontal">
        <label>Disabled</label>
        <textarea disabled></textarea>
        <cds-control-message>Disabled message</cds-control-message>
      </cds-textarea>
      <cds-textarea layout="horizontal" status="error">
        <label>Error</label>
        <textarea></textarea>
        <cds-control-message status="error">Error message</cds-control-message>
      </cds-textarea>
      <cds-textarea layout="horizontal" status="success">
        <label>Success</label>
        <textarea></textarea>
        <cds-control-message status="success">Success message</cds-control-message>
      </cds-textarea>
    </cds-form-group>
</div>
</DocIndent>
