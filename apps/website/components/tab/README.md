---
title: Overview
toc: true
---

Tabs divide content into separate views which users navigate between.

## Usage

- Use tabs in the main content area or, alternatively use the [vertical nav](/components/vertical-nav) component to break up separate views.
- Don't use tabs to break user interactions into a series of steps. Serial workflows are best presented in a multi-step workflow, like [wizard](/components/wizard), [stepper](/components/stepper), or a [timeline](/components/timeline).

### Content

Content projected within tabs is flexible. Follow these guidelines to organize and present content effectively:

1. Place content in each view that is independent of the content in other views
2. Don’t force users to navigate back and forth to compare data
3. Avoid cross-linking between tabs
4. When the content within a view is broad, divide it into subsections
5. Avoid using tabs in a [card](/components/card) and [modal](/components/modal)

### Presentation

Tabs appear in a single, non-scrollable row, above their content. The width of each tab is dependent on its label.

When there are seven or fewer tabs, limit the labels to on or two words. This ensures that all tabs appear in the container. If the application is using Angular and there need to be more than seven tabs look into the overflow input for [ClrTabLink](/components/tab/api/#clrtablink).

### Labels

Use labels to organize the tabs and their content.

1. Ensure that the labels show a clear relationship between views
2. Favor nouns over verbs, for example, Settings, Permissions, and Performance
3. Avoid generic labels such as General or Advanced
4. Use title-style caps
5. Avoid using icons in labels

## Types

There are four types of tabs that might be used.

For optimization, tabs component uses the \*clrIfActive structural directive to lazy load the content of an active tab.
If you need two-way binding on the active state of a tab, use the de-sugared syntax for the [ClrIfActive](/components/tab/api/#clrifactive) structural directive shown below in the two way binding example.

### Horizontal

<doc-demo>
!!!include(.vuepress/public/demos/tabs/horizontal-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/tabs/horizontal-ng.html
</doc-code>

### Vertical

<doc-demo>
!!!include(.vuepress/public/demos/tabs/vertical-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/tabs/vertical-ng.html
</doc-code>

### Overflow

When there are to many horizontal tabs to fit into the viewport, use overflow to hide less important tabs.
<doc-demo>
!!!include(.vuepress/public/demos/tabs/overflow-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/tabs/overflow-ng.html
</doc-code>

### Two-way Binding

<doc-demo>
!!!include(.vuepress/public/demos/tabs/two-way-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/tabs/two-way-ng.html
</doc-code>

## Accessibility

The Clarity Angular components implement the following behaviors to make them accessible.

1. The active tab has the attribute aria-selected set to true, and the others to false
1. The active panel associated with the active tab has the attribute aria-hidden set to true, and the others panels to false
1. ach tab should has an aria-controls attribute set to the id of the matching panel and each panel has an aria-labelledby attribute set to the id of the tab associated with the panel
