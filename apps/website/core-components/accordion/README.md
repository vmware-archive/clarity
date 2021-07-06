---
title: Overview
toc: true
beta: true
---

<DocPreviewWarning/>

::: component-summary

An accordion is a collection of vertically stacked sections with multiple content areas which may be expanded or minimized by the user to reveal their content.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

An accordion delivers large amounts of content in a small space through progressive disclosure. The header title give the user a high level overview of the content allowing the user to decide which sections to read. This is useful when the set of information is large or you want to enable users to reveal more complex or less frequently used data as necessary.

Accordions can make information processing and discovering more effective. However, it does hide content from users and it’s important to account for a user not noticing or reading all of the included content. If a user is likely to read all of the content then don’t use an accordion as it adds the burden of an extra click; instead use a full scrolling page with normal headers.

:::

<div cds-layout="vertical gap:sm align:horizontal-stretch m-y:md">
<cds-accordion>
  <cds-accordion-panel class="demo-accordion" expanded>
    <cds-accordion-header>Header for panel #1</cds-accordion-header>
    <cds-accordion-content>
        <p cds-text="body" cds-layout="m-y:lg">This is the content for accordion panel #1</p>
    </cds-accordion-content>
  </cds-accordion-panel>
  <cds-accordion-panel class="demo-accordion">
    <cds-accordion-header>Header for panel #2</cds-accordion-header>
    <cds-accordion-content>
        <p cds-text="body" cds-layout="m-y:lg">This is the content for accordion panel #2</p>
    </cds-accordion-content>
  </cds-accordion-panel>
  <cds-accordion-panel class="demo-accordion">
    <cds-accordion-header>Header for panel #3</cds-accordion-header>
    <cds-accordion-content>
        <p cds-text="body" cds-layout="m-y:lg">This is the content for accordion panel #3</p>
    </cds-accordion-content>
  </cds-accordion-panel>
</cds-accordion>
</div>
<script type="text/javascript">
    document.querySelectorAll('.demo-accordion').forEach((a) => {
        a.addEventListener('expandedChange', (e) => {
            togglePanel(e.target);
        });
    });
    function togglePanel(panel) {
        panel.expanded = !panel.expanded;
    }
</script>

::: component-section-level-two-title

### Content

:::

:::component-section-level-two

Keep text as brief as possible especially in header sections which should convey the nature of the content without overflow

:::

::: component-section-level-one-title

## Behavior

:::

:::component-section-level-one

Accordions expand and collapse showing / hiding the data in a section when the user clicks on the panel header. Accordions by default only allow one panel to be open at a time. Multiple open panels are an available implementation option.Accordions expand and collapse showing / hiding the data in a section when the user clicks on the panel header. Accordions by default only allow one panel to be open at a time. Multiple open panels are an available implementation option.

:::

::: component-section-level-two-title

### Accordion States

:::

:::component-section-level-two

Accordion panels can be **expanded**, **disabled**, and **collapsed**.

<div cds-layout="vertical gap:sm align:horizontal-stretch">
<cds-accordion>
  <cds-accordion-panel expanded>
    <cds-accordion-header>Expanded panel header</cds-accordion-header>
    <cds-accordion-content>
        <p cds-text="body" cds-layout="m-y:lg">This is the content for an expanded accordion panel</p>
    </cds-accordion-content>
  </cds-accordion-panel>
  <cds-accordion-panel disabled>
    <cds-accordion-header>Disabled panel header</cds-accordion-header>
    <cds-accordion-content>
        <p cds-text="body" cds-layout="m-y:lg">This is the content for a disabled accordion panel</p>
    </cds-accordion-content>
  </cds-accordion-panel>
  <cds-accordion-panel>
    <cds-accordion-header>Collapsed panel header</cds-accordion-header>
    <cds-accordion-content>
        <p cds-text="body" cds-layout="m-y:lg">This is the content for a collapsed accordion panel</p>
    </cds-accordion-content>
  </cds-accordion-panel>
</cds-accordion>
</div>

:::
