---
title: Overview
toc: true
---

An accordion is a collection of vertically stacked sections with multiple content areas which may be expanded or minimized by the user to reveal their content.

## Usage

An accordion delivers large amounts of content in a small space through progressive disclosure. The header title give the user a high level overview of the content allowing the user to decide which sections to read. This is useful when the set of information is large or you want to enable users to reveal more complex or less frequently used data as necessary.

Accordions can make information processing and discovering more effective. However, it does hide content from users and it’s important to account for a user not noticing or reading all of the included content. If a user is likely to read all of the content then don’t use an accordion as it adds the burden of an extra click; instead use a full scrolling page with normal headers.

## Anatomy

Accordions are a collection of panels that encapsulate a title and content. You can read more about [ClrAccordionTitle](/angular-components/accordion/api/#clraccordiontitle) and [ClrAccordionContent](/angular-components/accordion/api/#clraccordioncontent) in the API section.

Accordion titles use **13px Clarity City Medium** font. The default content font is **14px Clarity city Regular**.

When the selected panel is open the panel header has a highlight.

## Behavior

Accordions expand and collapse showing / hiding the data in a section when the user clicks on the panel header. Accordions by default only allow one panel to be open at a time. Multiple open panels are an available implementation option.

## Placement

Accordions are designed for use in the main content area.

## Content

Keep text as brief as possible especially in header sections which should convey the nature of the content without overflow

## Code & Examples

Accordions by default only allow one panel to be open at a time. To enable multiple panels set `clrAccordionMultiPanel="true"` on the `clr-accordion` component.

Leverage our optional `*clrIfExpanded` structural directive on the `clr-accordion-panel` to only instantiate children when they are displayed.

### Basic

A basic accordion is made up of a set of panels, each with a title and content.

<ClrImage src="/images/angular-components/accordion/accordion.png" />

<doc-code>
<<< .vuepress/code/demos/accordion/basic.html
</doc-code>

## Accessibility

All of the WCAG guidelines apply for the Accordion component. The Accordion component implements all of the necessary accessibility requirements internally for itself.

Applications are responsible for any content inside of the Accordion that may be subject to additional accessibility requirements.

### General guidelines

The following general guidelines apply to the design and development of the Accordion.

- Generic
- Content specific
- Form
- Interactive
- Container
