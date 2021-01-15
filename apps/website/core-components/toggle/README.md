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
<doc-pinbox-vs>

  <div>unused div that is never rendered but gets passed an error</div>
  <template #left>
  <cds-toggle>
      <label>Airplane mode</label>
      <input type="checkbox" checked />
  </cds-toggle>

Use a toggle for On or Off choices.

  </template>
  <template #right>
    <cds-checkbox>
    <label>Remember me</label>
    <input type="checkbox" checked />
    </cds-checkbox>

Use a <a href="../checkbox">checkbox</a> for Yes or No choices.

  </template>
</doc-pinbox-vs>

::: component-section-level-one-title

## States

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/enabled.html)!!!
</div>

:::

::: component-section-level-two

### Enabled

Use when interactive and ready for input.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/disabled.html)!!!
</div>

:::

::: component-section-level-two

### Disabled

Use when not interactive. For example, when a user does not have permissions to edit the input.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/error.html)!!!
</div>

:::

::: component-section-level-two

### Error

Use to communicate a user or system error. This validation can happen when the user moves away from the input or after attempting to submit a form. For example, invalid input or username already taken.

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/success.html)!!!
</div>

:::

::: component-section-level-two

### Success

Use to provide real-time feedback immediately after a user’s input. For example, username available.

:::

</div>

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

Toggle is available in vertical, vertical inline, horizontal, horizontal inline, and compact layout. The align options for Toggle are useful for creating continuity with other UI elements that are related to the toggle selection. See more layout guidelines on the form page. [form page](/core-components/form/).

:::

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/vertical.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Vertical Inline

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/vertical-inline.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/horizontal.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Horizontal Inline

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/horizontal-inline.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Compact

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/compact.html)!!!
</div>

:::

</div>

<div class="component-section-horizontal" cds-layout="m-t:md">

::: component-section-level-two-title

### Alignment

:::

::: component-section-level-two

<div>
!!!include(.vuepress/code/core-usage-demos/toggle/alignment.html)!!!
</div>

:::

</div>
