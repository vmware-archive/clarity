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

<doc-pinbox-vs>
  <div>unused div that is never rendered but gets passed an error</div>
  <template #left>
    <cds-radio>
        <label>Radio label</label>
        <input type="radio" checked />
    </cds-radio>

Use radio buttons for six or fewer options.

  </template>
  <template #right>
    <cds-select control-width="shrink">
        <label>Select</label>
        <select>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
        </select>
    </cds-select>

Use a <a href="../select">select box</a> for more than six options, or a <a href="../datalist">datalist</a> for more than 13 options. Both prompt users to disclose the options.

  </template>
</doc-pinbox-vs>

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

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Radio buttons are available in vertical, horizontal, and compact layout. See more layout guidelines on the [form page](/web-components/form/).

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/radio/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical Inline

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/radio/vertical-inline.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/radio/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal Inline

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/radio/horizontal-inline.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/radio/compact.html)!!!
</div>

:::

</div>
