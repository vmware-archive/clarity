---
title: Overview
toc: true
---

A stack view displays key/value pairs, which users can expand to show more detail.

<!-- ![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')![Angular](assets/images/bugs/badge_ng.svg 'Angular') -->

## Usage

Use a stack view when you want to:

- Display related key/value pairs, for example, an object’s settings.
- Progressively disclose data. This is useful when the set of key/value pairs is large or you want to enable users to reveal more complex or less frequently used data as necessary.

## Anatomy

### Labels

Consider following points for stack view labels:

- Provide terse labels that let users know what is under the label. Try to keep the label to one line.
- Use noun phrases, sentence-style capitalization, and no ending punctuation.
- Avoid using icons.

### Highlights and Horizontal lines

The stack view highlight color (`#DDDDDD`) differs from the usual Clarity highlight color to make it more distinct. Expanded sections have a lighter background color to make it easier to understand the hierarchy.

Horizontal lines in the stack editor are for readability–they help users quickly discern the relationship between columns.

## Behavior

### Enabling Value Editing

StackView has an Edit button on the top right, which on click opens an editable stack view in a modal. This design prevents users from accidentally altering a value in the main content area. Common editing controls include input fields, select boxes, checkboxes, and radio buttons.

### Placement

Stack views are designed for use in the main content area and modals.

## Code & Examples

### Basic Stack View

<DocVideo src="/images/angular-components/stack-view/stackview-basic.mp4" :width="874" :autoplay="true"></DocVideo>

<doc-code>
<<< .vuepress/code/demos/stack-view/stack-view.html
</doc-code>

### Stack View With Editing in a Modal

<DocVideo src="/images/angular-components/stack-view/stackview-editing.mp4" :width="884" :autoplay="true"></DocVideo>

<doc-code>
<<< .vuepress/code/demos/stack-view/stack-view-editing.html
</doc-code>

### Lazy Loading of Children

<DocVideo src="/images/angular-components/stack-view/stackview-lazy.mp4" :width="874" :autoplay="true"></DocVideo>

<doc-code>
<<< .vuepress/code/demos/stack-view/stack-view-lazy.html
</doc-code>
