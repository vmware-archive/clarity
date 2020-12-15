---
title: Overview
toc: true
---

A timeline displays a series of events which can guide the user through processes or pre-defined steps while also showing current progress.

## Usage

Timeline sets an expectation for the whole process by breaking it up into concrete steps and a pre-determined goal. It shows the user their progress along the steps of the timeline with a current step. For all of the steps, a timeline can provide additional information such as a header (timestamp), an icon showing state, a title and a description that optionally includes related contextual actions.

**Use a timeline:**

- When the workflow requires the full content area to show information
- For content with distinct higher-level stages
- When the user needs clear progress indication
- For workflows with complex steps
- For workflows between 3 to 5 steps for horizontal timeline; 5+ steps for vertical

## Types

There are two types of layouts, horizontal and vertical.

### Horizontal

- Used when there are workflows of 3 - 5 steps
- Used when all steps can be displayed without wrapping

<doc-demo>
!!!include(.vuepress/code/demos/timeline/horizontal.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/timeline/horizontal-ng.html
</doc-code>

### Vertical

- Used when there are workflows greater than five steps
- Used when timestamps are optional

<doc-demo
!!!include(.vuepress/code/demos/timeline/vertical.html)!!!
</doc-demo>

 <doc-code>
 <<< .vuepress/code/demos/timeline/vertical-ng.html
 </doc-code>

## Anatomy

### Step description

It is optional to have a step description that offers additional information and guidance to the user. This information can be displayed all of the time or only for the current step.

<div class="clr-row">

<div class="clr-col-12 clr-col-md-6">

::: inset Single Step Description
![Single Step Description](/images/angular-components/timeline/single-step-description.svg)
:::
**Single Step Description**

</div>
<div class="clr-col-12 clr-col-md-6">

::: inset All step descriptions
![All step descriptions](/images/angular-components/timeline/all-step-descriptions.svg)
:::
**All step descriptions**

</div>
</div>

## States

Every timeline step has one of five steps. With one exception these steps are represented with a Clarity Icon. The exception is for loading state which uses the clr-spinner component.

- <cds-icon size="36" shape="success-standard" aria-label="Success">Success</cds-icon> Step complete uses the success-standard shape
- <cds-icon size="36" shape="dot-circle" aria-label="Current step">Success</cds-icon> Current step uses the dot-circle shape
- <cds-icon size="36" shape="circle" aria-label="Not started">Success</cds-icon> Not started, available to start uses the circle shape
- <span class="spinner demo-spinner">Loading...</span> Processing user initiated action uses the clr-spinner (w/ clrMedium size) component
- <cds-icon size="36" shape="error-standard" aria-label="Error" class="is-error" role="none">Success</cds-icon> Error completing step uses the error shape

## Behavior

### Showing the current step

As users move through the timeline steps should be progressively marked with the current and success icons to indicate progress.

<div class="clr-row">
<div class="clr-col-12 clr-col-md-4">
By default, step one is highlighted as the current step.
</div>
<div class="clr-col-12 clr-col-md-8">
<ClrImage src="/images/angular-components/timeline/timeline-step-1.svg" title="Showing current step"></ClrImage>
</div>
</div>
<div class="clr-row">
<div class="clr-col-12 clr-col-md-4">
When step one is complete the step two gets highlighted.
</div>
<div class="clr-col-12 clr-col-md-8">
<ClrImage src="/images/angular-components/timeline/timeline-step-3.svg" title="Showing current step"></ClrImage>
</div>
</div>
<div class="clr-row">
<div class="clr-col-12 clr-col-md-4">
When the user has completed all steps, they are all marked complete.
</div>
<div class="clr-col-12 clr-col-md-8">
<ClrImage src="/images/angular-components/timeline/timeline-step-4.svg" title="Showing current step"></ClrImage>
</div>
</div>
<div class="clr-row">
<div class="clr-col-12 clr-col-md-4">
When steps one and two are complete, step three gets highlighted.
</div>
<div class="clr-col-12 clr-col-md-8">
<ClrImage src="/images/angular-components/timeline/timeline-step-4.svg" title="Showing current step"></ClrImage>
</div>
</div>

### Error State

<ClrImage src="/images/angular-components/timeline/timeline-error-state.svg" title="Error state"></ClrImage>

- Display the error message under the error icon if needed
- Tooltips are not recommended because of low affordance

### Loading State

<ClrImage src="/images/angular-components/timeline/timeline-loading-state.svg" title="Error state"></ClrImage>

- When loading or taking action, display a spinner
- Disable buttons when loading or make buttons contextual for the loading state (e.g CANCEL)

## Angular Component

Besides a static HTML/CSS Timeline component, we also offer a fully interactive Angular version of the component. So if you are using Angular, you can use the `ClrTimeline` component. By using `ClrTimeline`, you'll be able to leverage its interactive behavior and features out-of-the-box. If you would like to learn more about how to customize its default interactive behavior, please refer to [the API tab](./api.html).

<doc-code>

```html
<clr-timeline>
  <clr-timeline-step [clrState]="currentState">
    <clr-timeline-step-header>11:59 am</clr-timeline-step-header>
    <!-- clr-timeline-step-title -->
    <!-- clr-timeline-step-description -->
  </clr-timeline-step>
  <!-- Additional clr-timeline-step components -->
</clr-timeline>
```

</doc-code>
