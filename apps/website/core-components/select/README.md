---
title: Overview
toc: true
---

::: component-summary

A select box is a form element that surfaces a drop down list with a set of choices and displays the users selection when complete.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a select box for a list of items that a user does not need to see all the time.

A common strategy is to combine an input field with a select box so that a user can enter a value and qualify it with a menu item. For example, the user might enter a number in an input field and select the units from the select box.

:::

<doc-pinbox-vs>
  <div>unused div that is never rendered but gets passed an error</div>
  <template #left>
  Select presents a list of options that the user can choose from and apply to an input field.

  </template>
  <template #right>
  Dropdown presents a list of options that take an immediate action or navigate the user outside of the current context.

  </template>
</doc-pinbox-vs>

::: component-section-level-one-title

## States

:::

<DocIndent>
<div>
    <cds-form-group layout="horizontal">
      <cds-select layout="horizontal">
        <label>label</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>message text</cds-control-message>
      </cds-select>
      <cds-select layout="horizontal">
        <label>disabled</label>
        <select disabled>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message>disabled message</cds-control-message>
      </cds-select>
      <cds-select layout="horizontal" status="error">
        <label>error</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-select>
      <cds-select layout="horizontal" status="success">
        <label>success</label>
        <select>
          <option>option one</option>
          <option>option two</option>
          <option>option three</option>
        </select>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-select>
    </cds-form-group>
    </div>
</DocIndent>

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Select elements are available in vertical, horizontal, compact, and multiple layout. Select elements with the multiple attribute enables the user to select and view several items at once. See more layout guidelines on the [form page](/web-components/form/).

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/select/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/select/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/select/compact.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Multiple

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/select/multiple.html)!!!
</div>

:::

</div>
