---
title: Overview
toc: true
---

# Spinner

A spinner is visual indicator of an ongoing, user-initiated process.

## Usage

Use a spinner to offer visual feedback to show users their action is processing. Below is a comparison of spinner usage with [progress bar](/components/progress) usage.

<div class="clr-row">
<div class="clr-col-12 clr-col-md-6">

<div class="doc-wrapper">

- When you want to indicate "This will be a moment". Between 1-10 seconds
- When progress cannot be indicated by percentage
- When space is limited

</div>

**Spinner Usage**

</div>
<div class="clr-col-12 clr-col-md-6">

<div class="doc-wrapper">

- To want to indicate "This will take awhile, here is an estimate". More than 10 seconds
- When progress can be indicated by percentage
- When space permits

</div>

**Progress Bar Usage**

</div>

</div>

## Types

Clarity has two types of spinners.

### Page Spinner

When the operation to be tracked is related to the entire page.
<doc-demo src="/demos/spinner/page-ng.html" demo="/demos/spinner/page-css.html" toggle="false" />

### Inline Spinner

When the operation being tracked is related to a specific component or section on a page.
<doc-demo src="/demos/spinner/inline-ng.html" demo="/demos/spinner/inline-css.html" toggle="false" />

### Inverse Spinner

When there is a dark background behind a spinner, use the inverse to make it accessible.
<doc-demo src="/demos/spinner/inverse-ng.html" demo="/demos/spinner/inverse-css.html" toggle="false" />

## Sizes

#### Large

Large spinners have 3rem (72px) width and height. Use them to track progress of an operation that is related to the page. For example, while a form is being authenticated, use a large spinner on top of or in place of the form controls.
<doc-demo src="/demos/spinner/large-ng.html" demo="/demos/spinner/large-css.html" toggle="false" />

#### Medium

Medium spinners have 1.5rem (36px) width and height. Use them to track progress when content is being loaded. For example when data for a table or datagrid is being loaded.
<doc-demo src="/demos/spinner/medium-ng.html" demo="/demos/spinner/medium-css.html" toggle="false" />

#### Small

Small spinners have 0.75rem (18px) width and height. Use them in constrained spaces like an input field or next to a button. While the spinner is animating and active the input field or button should be disabled until the action is complete.
<doc-demo src="/demos/spinner/small-ng.html" demo="/demos/spinner/small-css.html" toggle="false" />

## Label

An optional label can be projected into the element that describes the process.
