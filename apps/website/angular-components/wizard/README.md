---
title: Overview
toc: true
---

A wizard provides an interface for a user to proceed through a sequence of steps required to complete a task.

## Usage

Wizards are used to help users walk through a defined step-by-step process. Each step is in the sidebar on the left. As users complete steps, the steps are marked with a green bar to the left.

Here is when you might want to use a wizard over just a normal form:

- if the user is not familiar with the domain knowledge needed to complete a process
- if the user needs to accomplish a goal that has many steps in it
- if steps must be completed in a specific sequence

::: inset
![Basic Wizard](/images/angular-components/wizard/basic.png)
:::

<doc-code>
<<< .vuepress/public/demos/wizard/basic-ng.html
</doc-code>

## Anatomy

### Sizes

There are multiple sizes for wizards. The Clarity wizard defaults to x-large but different sizes could be used based on the content and screen sizes you are planning to support. Always remember to test responsiveness as you design and use wizards. The best size is one that doesn’t feel like there is too much or too little whitespace. If you’re unsure, test different ones to see which looks best.

#### Medium: Width - 576px

::: inset
![Medium Modal](/images/angular-components/wizard/wizard-md.png)
:::

#### Large: Width - 864px

::: inset
![Large Modal](/images/angular-components/wizard/wizard-lg.png)
:::

#### Extra Large: Width - 1152px

::: inset
![Large Modal](/images/angular-components/wizard/wizard-xl.png)
:::

### Steps

Wizards should have at least 2 steps. If your wizard exceeds 10 steps, consider combining similar steps.

<div class="clr-row">

<div class="clr-col-6">

#### Step Indicators

- Current step is indicated by a row-selected blue background
- Complete steps are indicated by a green bar to the left

</div>
<div class="clr-col-6">

::: inset
![Wizard Steps](/images/angular-components/wizard/wizard-steps.png)
:::

</div>
</div>

#### Building Steps

When building a step, it’s important to organize related tasks in it. Unrelated tasks should be separate into a new step. This helps preserve context around the step being completed.
If a step’s content scrolls, consider splitting the step into two steps or use a larger sized wizard. Scrolling content can sometimes be overlooked and users may try to progress to the next step unintentionally.
It’s best to include only the required tasks in a step so users know they need to fill out everything they see. Optional tasks slow the process of filling out a wizard.

#### Conditional Steps

Conditional wizards change step content or the number of steps based on the entry from another step. Non-conditional wizards are preferable. However, if a conditional wizard is necessary, it is preferred to update the next step to be completed. Otherwise, users might lose context of what change was made.

### Titles

Titles are concise summaries. The wizard title describes the overall workflow. The step title describes the task being completed. The content title should be similar to its step title.

### Content area

The content may differ between different types of wizards. Content can be text, a form, or both. Be concise and provide a clear explanation of the task or information a user should focus on.

### Buttons

Default progress buttons are provided, but can be overridden. Buttons are right-aligned based on the Z Pattern. Read more about it in [Button Placement](/angular-components/button/#placement).

## Behavior

### Error Validation

Enhancement to the wizard component to add an error state to the wizard step states.

<div class="clr-row"></div>
<div class="clr-row">

<div class="clr-col-6">

#### Error Reported

When an error occurs, replace the step number with the error icon. This design is consistent with the stepper design. Change the progress indicator to red and add a one pixel gap above and below the red bar for accessibility.

</div>
<div class="clr-col-6">

::: inset
![Wizard Error Reported](/images/angular-components/wizard/wizard-error-reported.png)
:::

</div>
</div>

<div class="clr-row">

<div class="clr-col-6">

#### Error State Active

Indicate clearly why the error occurs on the error step.

</div>
<div class="clr-col-6">

::: inset
![Wizard Error Active](/images/angular-components/wizard/wizard-error-active.png)
:::

</div>
</div>

<div class="clr-row">

<div class="clr-col-6">

#### Error Resolved

The progress indicator changed back to green once all errors are resolved.

</div>
<div class="clr-col-6">

::: inset
![Wizard Error Resolved](/images/angular-components/wizard/wizard-error-resolved.png)
:::

</div>
</div>

### Dismissing Wizard

<div class="clr-row">

<div class="clr-col-6">

- A user needs to actively dismiss a wizard. A wizard should not disappear on its own
- Completing all of the steps or cancelling should dismiss the wizard
- The wizard can be closed by clicking the finish button, the cancel button, or canceling out by clicking the close "X" in the top right.
  Content

<cds-alert-group status="warning" type="default">
<cds-alert>Clarity Wizards are not dismissed when clicking on the background overlay. This prevents losing information or data. An option to override this is available.</cds-alert>
</cds-alert-group>

</div>
<div class="clr-col-6">

::: inset
![Wizard Dismiss Indicators](/images/angular-components/wizard/wizard-dismissing.png)
:::

</div>
</div>

#### Use Cases Under Consideration

- When selections in a later step in the wizard invalidate entries in earlier steps
- When the user resolves an error/errors in the current step

[//]: #Placement
[//]: #Content
