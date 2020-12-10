---
title: API
toc: true
---

## Angular Components

### ClrTimeline

ClrTimeline component is the container component of all children timeline components. It sets the orientation of the timeline.

#### Selector & Basic Usage

<doc-code>

```html
<clr-timeline>
  <!-- One or more clr-timeline-step components -->
</clr-timeline>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrTimeline" item="bindings" />

### ClrTimelineStep

ClrTimelineStep is the container component for the parts of an individual step. It provides a state input that is reflected in the icon for the step.

#### Selector & Basic Usage

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

#### Bindings

<DocComponentApi component="ClrTimelineStep" item="bindings" />

### ClrTimelineStepHeader

Content which appears above (horizontal) or left of (vertical) the step icon.

#### Selector & Basic Usage

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

### ClrTimelineStepTitle

Title content for the step.

#### Selector & Basic Usage

<doc-code>

```html
<clr-timeline>
  <clr-timeline-step [clrState]="currentState">
    <!-- clr-timeline-step-header -->
    <clr-timeline-step-title>Step Title</clr-timeline-step-title>
    <!-- clr-timeline-step-description -->
  </clr-timeline-step>
  <!-- Additional clr-timeline-step components -->
</clr-timeline>
```

</doc-code>

### ClrTimelineStepDescription

Description content (including buttons) for the step.

#### Selector & Basic Usage

<doc-code>

```html
<clr-timeline>
  <clr-timeline-step [clrState]="currentState">
    <!-- clr-timeline-step-header -->
    <!-- clr-timeline-step-title -->
    <clr-timeline-step-description>Step Title</clr-timeline-step-description>
  </clr-timeline-step>
  <!-- Additional clr-timeline-step components -->
</clr-timeline>
```

</doc-code>
