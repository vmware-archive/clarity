---
title: Overview
toc: true
---

::: component-summary

The radio button is a form element comprising a series of items that make a list of options that allow the user to select options that are mutually exclusive of each other. Users may only select a single radio button within a series of items that make a list.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use radio buttons when you want users to see all available multual exclusive options and the list of options is small.

:::

<DocPinbox>
<div style="align-self: flex-start;ga && gs ">
    <cds-radio>
        <label>Radio label</label>
        <input type="radio" checked />
    </cds-radio>
    Use radio buttons for six or fewer options.
</div>
<div class="versus"><div class="versus-bubble">vs</div></div>
<div style="align-self: flex-start;ga && gs ">
    <cds-select control-width="shrink">
        <label>Select</label>
        <select>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
        </select>
    </cds-select>
    Use a <a href="../select">select box</a> for more than six options, or a <a href="../datalist">datalist</a> for more than 13 options. Both prompt users to disclose the options.
</div>
</DocPinbox>

::: component-section-level-one-title

## States

:::

<DocIndent>
<div>
<cds-form-group layout="horizontal">
      <cds-radio-group layout="horizontal">
        <label>Default</label>
        <cds-radio>
          <label>Radio label</label>
          <input type="radio" />
        </cds-radio>
      </cds-radio-group>
      <cds-radio-group layout="horizontal">
        <label>Selected</label>
        <cds-radio>
          <label>Radio label</label>
          <input type="radio" checked />
        </cds-radio>
      </cds-radio-group>
      <cds-radio-group layout="horizontal" disabled>
        <label>Disabled</label>
        <cds-radio>
          <label>Radio label</label>
          <input type="radio" />
        </cds-radio>
      </cds-radio-group>
      <cds-radio-group layout="horizontal" status="error">
        <label>Error</label>
        <cds-radio>
          <label>Radio label</label>
          <input type="radio" />
        </cds-radio>
        <cds-control-message status="error">Error message</cds-control-message>
      </cds-radio-group>
      <cds-radio-group layout="horizontal" status="success">
        <label>Success</label>
        <cds-radio>
          <label>Radio label</label>
          <input type="radio" />
        </cds-radio>
        <cds-control-message status="success">Success message</cds-control-message>
      </cds-radio-group>
    </cds-form-group>
</div>
</DocIndent>
