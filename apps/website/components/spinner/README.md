---
title: Overview
toc: true
---

A spinner is visual indicator of an ongoing, user-initiated process.

## Usage

Use a spinner to offer visual feedback to show users their action is processing. Below is a comparison of spinner usage with [progress bar](/components/progress-bar) usage.

<div class="clr-row">
<div class="clr-col-md-12 clr-col-lg-6">

<div class="doc-height-100-container" cds-layout="p-t:md">
<doc-demo>
!!!include(.vuepress/public/demos/spinner/page-css.html)!!!
</doc-demo>
</div>

**Spinner Usage**

::: inset

<ul class="list">
<li>When you want to indicate "This will be a moment". Between 1-10 seconds</li>
<li>When progress cannot be indicated by percentage</li>
<li>When space is limited</li>
</ul>
:::

</div>
<div class="clr-col-md-12 clr-col-lg-6">
<div class="doc-height-100-container" cds-layout="p:xl">
<doc-demo>
!!!include(.vuepress/public/demos/progress/labeled-css.html)!!!
</doc-demo>
</div>

**Progress Bar Usage**

::: inset

<ul class="list">
<li>To want to indicate "This will take awhile, here is an estimate". More than 10 seconds</li>
<li>When progress can be indicated by percentage</li>
<li>When space permits</li>
</ul>

:::

</div>
</div>

## Types

Clarity has two types of spinners.

### Page Spinner

When the operation to be tracked is related to the entire page.
<doc-demo>
!!!include(.vuepress/public/demos/spinner/page-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/spinner/page-ng.html
</doc-code>

### Inline Spinner

When the operation being tracked is related to a specific component or section on a page.
<doc-demo>
!!!include(.vuepress/public/demos/spinner/inline-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/spinner/inline-ng.html
</doc-code>

### Inverse Spinner

When there is a dark background behind a spinner, use the inverse to make it accessible.
<doc-demo>
!!!include(.vuepress/public/demos/spinner/inverse-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/spinner/inverse-ng.html
</doc-code>

## Sizes

### Large

Large spinners have 3rem (72px) width and height. Use them to track progress of an operation that is related to the page. For example, while a form is being authenticated, use a large spinner on top of or in place of the form controls.
<doc-demo>
!!!include(.vuepress/public/demos/spinner/large-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/spinner/large-ng.html
</doc-code>

### Medium

Medium spinners have 1.5rem (36px) width and height. Use them to track progress when content is being loaded. For example when data for a table or datagrid is being loaded.
<doc-demo>
!!!include(.vuepress/public/demos/spinner/medium-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/spinner/medium-ng.html
</doc-code>

### Small

Small spinners have 0.75rem (18px) width and height. Use them in constrained spaces like an input field or next to a button. While the spinner is animating and active the input field or button should be disabled until the action is complete.
<doc-demo>
!!!include(.vuepress/public/demos/spinner/small-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/spinner/small-ng.html
</doc-code>

## Label

An optional label can be projected into the element that describes the process.
