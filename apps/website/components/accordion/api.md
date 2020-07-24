---
title: API
toc: true
---

An accordion allows generic content to be collapsed and allows users to expand to show more detail.

## Angular Components

{.section-header}

### ClrAccordion

#### Selector & Basic Usage

```html
<clr-accordion></clr-accordion>
```

#### Properties

<DocComponentApi component="ClrAccordion" item="bindings" />

### ClrAccordionContent

ClrAccordionContent is a child of [ClrAccordionPanel](./api.md#clraccordionpanel)

#### Selector & Basic Usage

```html
<clr-accordion>
  <clr-accordion-panel>
    <clr-accordion-content *clrIfExpanded>Content 1</clr-accordion-content>
  </clr-accordion-panel>
</clr-accordion>
```

### ClrAccordionDescription

ClrAccordionDescription is a child of [ClrAccordionPanel](./api.md#clraccordionpanel)

#### Selector & Basic Usage

```html
<clr-accordion>
  <clr-accordion-panel [(clrAccordionPanelOpen)]="stepOpen">
    <clr-accordion-description
      >The full license information can be found in LICENSE in the root directory.</clr-accordion-description
    >
  </clr-accordion-panel>
</clr-accordion>
```

### ClrAccordionPanel

Use content projection and give the panel a title and content that can be hidden or shown.
ClrAccordionPanel is a child of [ClrAccordion](./api.md#clraccordion)

#### Selector & Basic Usage

```html
<clr-accordion>
  <clr-accordion-panel></clr-accordion-panel>
</clr-accordion>
```

#### Bindings

<DocComponentApi component="ClrAccordionPanel" item="bindings" />

#### Methods

<DocComponentApi component="ClrAccordionPanel" item="methods" />

### ClrAccordionTitle

#### Selector & Basic Usage

```html
<clr-accordion-title>Panel Title</clr-accordion-title>
```

## Angular Directives

{.section-header}

### \*clrIfExpanded

A structural directive that optimizes the accordion by only creating the panel content node when its in the open
state. The panel content node is removed from the DOM when closed. The default is false.

#### Selector & Basic Usage

```html
<clr-accordion-content *clrIfExpanded>Panel content</clr-accordion-content>
<clr-accordion-content [(clrIfExpanded)]="panelExpandedProperty">Panel content</clr-accordion-content>
```
