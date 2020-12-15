---
title: Overview
toc: true
---

A progress bar is a linear indicator for providing feedback about an ongoing, user-initiated process.

## Usage

Use a progress bar to set expectation of the loading time. Users are more willing to tolerate a long wait time if they see the actual progress. It gives users control to decide whether to wait or not. It may also reduce the perceived wait time.

<div class="clr-row">
<div class="clr-col-md-12 clr-col-lg-6">
<div class="doc-height-100-container" cds-layout="p:xl">
<doc-demo>
!!!include(.vuepress/code/demos/progress/labeled-css.html)!!!
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
<div class="clr-col-md-12 clr-col-lg-6">

<div class="doc-height-100-container" cds-layout="p-t:md">
<doc-demo>
!!!include(.vuepress/code/demos/spinner/page-css.html)!!!
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
</div>

## Types

### Determinate Progress

When there is a specific goal duration use determinate progress to inform users about the process. Two examples are file upload/download, or a series of configuration steps that happen during an initialization process.

- Show progress towards a specific maximum goal or known duration
- Has an optional label that shows percentage completion
- Keep messaging minimal
- Use specific messaging: Process starting, Process finished, etc

<doc-demo>
!!!include(.vuepress/code/demos/progress/determinate-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/progress/determinate-ng.html
</doc-code>

### Indeterminate Progress

When there is no estimate for the completion time or goal of a process, show indeterminate progress. This indicates that work is occurring but does not indicate a scope or imply an estimate for how long it will take to complete. One example is uploading a file of data that will be analyzed before a response.

- Will animate continuously until complete
- Uses specific messaging: E.g "Loading update 3 of 7"
- Has no estimated end time
- Indicates work is occurring

<doc-demo>
!!!include(.vuepress/code/demos/progress/indeterminate-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/progress/indeterminate-ng.html
</doc-code>

## Anatomy

### Label

Progress bars fill from left to right. Clarity places an optional label to the right of the progress bar.

<doc-demo>
!!!include(.vuepress/code/demos/progress/labeled-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/progress/labeled-ng.html
</doc-code>
