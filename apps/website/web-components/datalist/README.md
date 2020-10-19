---
title: Overview
toc: true
---

::: component-summary

Datalist is a type of list that becomes contextualized through the selection of extensive pre-defined options. Datalists can contain a custom input value.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a datalist when the user needs to choose from a list of items that is long enough for it to be filtered it before selection. Or, there are pre-defined options but the user needs the ability to input a custom value for their use case.

Use a datalist of you want to provide a standard set of options but also allow the user to enter a custom value that may not be pre-defined.

Do not confuse a datalist element with the select input. Datalist elements usually have more than 13 options that the user will need to filter or narrow down before making a choice. If there are 3-13 options, consider using the [select](//web-components/select/) input.

:::

<DocPinbox>
<div cds-layout="p-y:lg">
!!!include(.vuepress/public/core-usage-demos/datalist/basic.html)!!!

Use a datalist:

- When the user needs to choose from a long list of items to be filtered before selection
- When there are pre-defined options but the user needs the ability to input a custom calue
- With more than 13 options

</div>

<div class="versus"><div class="versus-bubble">vs</div></div>
<div style="align-self: flex-start;" cds-layout="p-y:lg">
!!!include(.vuepress/public/core-usage-demos/select/basic.html)!!!

Use a select:

- When a custom input value is not allowed
- With 3-13 options

</div>
</DocPinbox>

::: component-section-level-two

:::

::: component-section-level-one-title

## Anatomy

:::

::: component-section-level-one

<DocInset>
<div>
!!!include(.vuepress/public/core-usage-demos/datalist/basic.html)!!!
</div>
</DocInset>

1. Datalist label - describes the category of options for user choice
2. Input value - describes the chosen option (or displays placeholder text if no choice is selected)
3. Input line - outlines the bottom of the input and can use color to show focus, success, error and disabled states
4. Dropdopwn caret - A browser dependent button that user clicks on to activate the options menu
5. Focus - the focus event enables several behaviors:
   - The input line changes color to indicate focus on the input
   - Keyboard input activates the native filtering behavior of the datalist element
   - Keyboard navigation is enabled and up/down arrow keys open the Dropdown menu
6. Dropdown menu - the list of options that can be filtered and selected

:::

::: component-section-level-one-title

## States

:::

::: component-section-level-one

<DocIndent>
!!!include(.vuepress/public/core-usage-demos/datalist/states.html)!!!
</DocIndent>

test

:::

::: component-section-level-one-title

## Layouts

:::

::: component-section-level-one

<DocIndent>
!!!include(.vuepress/public/core-usage-demos/datalist/layouts.html)!!!
</DocIndent>

:::

::: component-section-level-one-title

## Behavior

:::

::: component-section-level-one

Datalist support the use of autocomplete.

:::

::: component-section-level-two-title

### Auto-complete

:::

::: component-section-level-two

Datalist natively supports autocomplete behavior. Users can search and filter while using the datalist component.

:::
