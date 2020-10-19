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

<DocPinbox>
<div>Select presents a list of options that the user can choose from and apply to an input field.</div>
<div class="versus"><div class="versus-bubble">vs</div></div>
<div>Dropdown presents a list of options that take an immediate action or navigate the user outside of the current context.</div>
</DocPinbox>

::: component-section-level-one-title

## Anatomy

:::

::: component-section-level-two-title

### Label

:::

:::component-section-level-two

Lorem ipsum.

:::

::: component-section-level-two-title

### Select option

:::

:::component-section-level-two

Lorem ipsum.

:::

::: component-section-level-two-title

### Select caret

:::

:::component-section-level-two

Lorem ipsum.

:::

::: component-section-level-two-title

### Input line

:::

:::component-section-level-two

Lorem ipsum.

:::

::: component-section-level-two-title

### Helper Message (optional)

:::

:::component-section-level-two

Lorem ipsum.

:::

::: component-section-level-two-title

### Select menu

:::

:::component-section-level-two

Typically, a select box contains between 3 and 12 items. For fewer than 3 items or to present choices that are always visible, consider a radio button.

:::

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
