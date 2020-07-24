---
title: Overview
toc: true
---

A progress bar is a linear indicator for providing feedback about an ongoing, user-initiated process.

## Usage

Use a progress bar to set expectation of the loading time. Users are more willing to tolerate a long wait time if they see the actual progress. It gives users control to decide whether to wait or not. It may also reduce the perceived wait time.

[//] # (DEMO - progress example)

<div class="clr-row">
<div class="clr-col-12 clr-col-md-6">

::: inset
<DocInset height="100">

- When you want to indicate "This will be a moment". Between 1-10 seconds
- When progress cannot be indicated by percentage
- When space is limited

</DocInset>

:::
**Spinner Usage**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset
<DocInset height="100">

- To want to indicate "This will take awhile, here is an estimate". More than 10 seconds
- When progress can be indicated by percentage
- When space permits

</DocInset>
:::

**Progress Bar Usage**

</div>

</div>

## Types

### Determinate Progress

When there is a specific goal duration use determinate progress to inform users about the process. Two examples are file upload/download, or a series of configuration steps that happen during an initialization process.

[//] # (DEMOS x2 - processing / 3 of 4)

#### Determinate Progress Bar

- Show progress towards a specific maximum goal or known duration
- Has an optional label that shows percentage completion
- Keep messaging minimal
- Use specific messaging: Process starting, Process finished, etc

<doc-demo src="/demos/progress/determinate-ng.html" demo="/demos/progress/determinate-css.html" toggle="false" />

[//] # (DEMOS x2 - processing / 3 of 4)

### Indeterminate Progress

When there is no estimate for the completion time or goal of a process, show indeterminate progress. This indicates that work is occurring but does not indicate a scope or imply an estimate for how long it will take to complete. One example is uploading a file of data that will be analyzed before a response.

#### Indeterminate

- Will animate continuously until complete
- Uses specific messaging: E.g "Loading update 3 of 7"
- Has no estimated end time
- Indicates work is occurring

<doc-demo src="/demos/progress/indeterminate-ng.html" demo="/demos/progress/indeterminate-css.html" toggle="false" />

## Anatomy

### Label

Progress bars fill from left to right. Clarity places an optional label to the right of the progress bar.

<doc-demo src="/demos/progress/labeled-ng.html" demo="/demos/progress/labeled-css.html" toggle="false" />
[//] # (Demo label)
