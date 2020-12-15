---
title: Overview
toc: true
---

::: component-summary

An input-group combines closely related input controls into a single visual control.control.

:::

::: component-section-level-one-title

## Usage

:::

::: component-section-level-one

Use an input group when there are multiple, related text inputs that a user needs to provide input into.

Common examples include:

- protocol + url
- currency + amount
- date + time

:::

::: component-section-level-one-title

## Layouts

:::

:::component-section-level-one

There three types of layouts: horizontal, vertical and compact. See the [layout section](/web-components/form/#layouts) in forms for more information.

:::

::: component-section-level-one-title

## Helper and validation messages

:::

::: component-section-level-one

There are three types of help and validation messages: info, error and success. See the [helper and validation](/web-components/form/#helper-and-validation-messages) section in forms for more information.

:::

::: component-section-level-one-title

## Examples

:::

::: component-section-level-two-title

### Complex Groups

:::

:::component-section-level-two

Complext groups often two or more inputs that need to be combined to look like a single unified field. Use them to group input control togehter in the same context for things like date and time or currency and value.

<DocIndent>
<doc-demo>
!!!include(.vuepress/code/core-usage-demos/input-group/complex.html)!!!
</doc-demo>
</DocIndent>

:::

:::component-section-level-two-title

### Status

:::

:::component-section-level-two

The input-group can show all of the status and helper text states for the controls inside.

<DocIndent>
<doc-demo>
!!!include(.vuepress/code/core-usage-demos/input-group/status.html)!!!
</doc-demo>
</DocIndent>

:::

:::component-section-level-two-title

### Control actions - buttons & icons

:::

:::component-section-level-two

Use `cds-control-action` to place a button that facilitates the user in completing the data input process. Common problems this solves for users is clearing an input or opening a dialog that will offer them a choice to populate the input control. Or, for password fields offering both a clear and a hide/show button helps the user complete the input accurately.

<DocIndent>
<doc-demo>
!!!include(.vuepress/code/core-usage-demos/input-group/control-actions.html)!!!
</doc-demo>
</DocIndent>

:::
