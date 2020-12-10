---
title: Overview
toc: true
---

::: component-summary

Toggle switches are the digital equivalent of a physical on/off switch. They ask the user to choose between two and mutually exclusive options while always having a default value.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a toggle switch when you need the sole options of “on” and “off.”

Toggle switches take up less space than an “on/off” radio button group and communicate their intended purpose better than a checkbox that toggles functionality.

:::

<DocPinbox>
<div>
    <cds-toggle>
        <label>Airplane mode</label>
        <input type="checkbox" checked />
    </cds-toggle>
    Use a toggle for On or Off choices.
</div>
<div class="versus"><div class="versus-bubble">vs</div></div>
<div>
    <cds-checkbox>
    <label>Remember me</label>
    <input type="checkbox" checked />
    </cds-checkbox>
    Use a <a href="/web-components/checkbox">checkbox</a> for Yes or No choices.
</div>
</DocPinbox>

::: component-section-level-one-title

## States

:::

<DocIndent>
<div cds-layout="vertical gap:lg">
    <cds-toggle>
        <label>Enabled, unselected</label>
        <input type="checkbox" />
        <cds-control-message>Helper message</cds-control-message>
    </cds-toggle>
    <cds-toggle>
        <label>Enabled, selected</label>
        <input type="checkbox" checked />
        <cds-control-message>Helper message</cds-control-message>
    </cds-toggle>
    <cds-toggle>
        <label>Disabled, unselected</label>
        <input type="checkbox" disabled />
        <cds-control-message>Disabled message</cds-control-message>
    </cds-toggle>
          <cds-toggle>
        <label>Disabled, selected</label>
        <input type="checkbox" disabled checked />
        <cds-control-message>Disabled message</cds-control-message>
    </cds-toggle>
    <cds-toggle status="error">
        <label>error</label>
        <input type="checkbox" />
        <cds-control-message status="error">Error message</cds-control-message>
    </cds-toggle>
    <cds-toggle status="success">
        <label>success</label>
        <input type="checkbox" />
        <cds-control-message status="success">Success message</cds-control-message>
    </cds-toggle>
</div>
</DocIndent>
