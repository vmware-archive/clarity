---
title: Overview
toc: true
---

::: component-summary

The password field is a specialized input field with the ability to toggle between the masked field or to view the password in plain text.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a password field when the user needs to set or input the password.

When setting a password, display the password requirement in the helper text to guide the user. Don’t hide it a in signpost, or reveal it only after the user fails the first attempt.

:::

::: component-section-level-one-title

## States

:::

<DocIndent>
<div>
    <cds-form-group layout="horizontal">
    <cds-password layout="horizontal">
        <label>Default</label>
        <input type="password" value="123456" />
        <cds-control-message>Helper message</cds-control-message>
    </cds-password>
    <cds-password layout="horizontal">
        <label>Disabled</label>
        <input type="password" value="123456" disabled />
        <cds-control-message>Disabled message</cds-control-message>
    </cds-password>
    <cds-password layout="horizontal" status="error">
        <label>Error</label>
        <input type="password" value="123456" />
        <cds-control-message status="error">Error message</cds-control-message>
    </cds-password>
    <cds-password layout="horizontal" status="success">
        <label>Success</label>
        <input type="password" value="123456" />
        <cds-control-message status="success">Success message</cds-control-message>
    </cds-password>
    </cds-form-group>
</div>
</DocIndent>
