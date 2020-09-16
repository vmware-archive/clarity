---
title: Overview
toc: true
---

The HTML5 range input element is used when a user can choose between a min and a max value but the precise value chosen is not considered important.

## Usage

The range input control allows the user to chose a value when they don’t care (or know) what the specific number value chosen is. This is an imprecise input control that should only be used when the exact value is not important for the user to know. Range controls work well when the users is more concerned with percent distance between the min and the max.

## Code & Examples

The Range input uses standard HTML5 attributes and can be used with Clarity forms.

### Basic

<doc-demo>
!!!include(.vuepress/public/demos/range/basic-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/range/basic-ng.html
</doc-code>

### Full Example

<doc-demo>
!!!include(.vuepress/public/demos/range/helper-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/range/helper-ng.html
</doc-code>

### Disabled

<doc-demo>
!!!include(.vuepress/public/demos/range/disabled-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/range/disabled-ng.html
</doc-code>

### Value Changes

Applications may need to be aware of the current slider value. They can use the standard Angular `(change)` output to handle changes to the slider value.
