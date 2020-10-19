---
title: Overview
toc: true
---

A stepper structures multi-step processes into 2 or more expanding panels that break up complex workflows.

## Usage

Each panel representing each step will contain a title and a description that describes the entire workflow at a glance. After completing each step, collapsed panels then replace step descriptions with summaries describing what the user has accomplished.

### Stepper vs Forms or Wizards

Use a stepper when:

- Complex and long work processes that may not fit in one viewport
- When the user would need to see the forms in-line with the rest of the page content
- If users need more detail than step titles to understand the process.
- If summaries of previous steps are helpful in informing next steps.

### Style

<ClrImage alt="Stepper Anatomy" src="/images/angular-components/stepper/stepper-style.png" />

### Anatomy

#### Stepper Header Section

The step title section has three states: completed, active, to-do. When a step is in its active state, its title section will be highlighted and its input section will be visible for users to interact. As users complete steps, the steps are marked with a green bar to the left, and a summary of user's input will replace the description.

#### Stepper Input Section

The input section has two elements: the form and the buttons. The form is used to collect input from users to finish the step. The buttons section will allow the users to proceed to the next step or finish the workflow. To go back to a previous step, users need to click on the step title of one of the previous steps. That step will become the active step with its input section visible for editing.

<div class="clr-row">

<div class="clr-col-sm-12 clr-col-lg-6 doc-do">
<ClrImage class="doc-example" title="stepper do" src="/images/angular-components/stepper/stepper-do.png" align="center" />
Use clear copy in the final call to action to best represent the action that users are taking in completing the stepper.
</div>

<div class="clr-col-sm-12 clr-col-lg-6 doc-dont">
<ClrImage class="doc-example" title="Stepper dont" src="/images/angular-components/stepper/stepper-dont.png" align="center" />
Don't use ambiguous a non-action oriented description that does not specify what users are accomplishing.
</div>

</div>

#### Final Call To Action

For the button label in the final call to action, we recommend that the copy also describe an immediate outcome of completing a stepper. If the workflow will require more time to process after the stepper is complete, then FINISH or other non-specific terminology may work better.

Though we recommend action-oriented button labels, there are use cases where labels like DONE work well. If the user is viewing read-only information, we recommend using labels like DONE.

## Code & Examples

The Stepper is an extension of the base [Accordion](/angular-components/accordion) component. The stepper requires use of the Angular Forms API. Using the Forms API allows the stepper to easily reflect the form state of each step in the stepper template.

Leverage our `*clrIfExpanded` structural directive on the clr-stepper-panel to only instantiate children when they are displayed.

While reactive forms and template forms have the same behavior, the implementations are different. Here is an example of the stepper form behavior. Below is the code for both reactive and template form implementations.

<DocVideo src="/images/angular-components/stepper/reactive-form.mp4" :width="896" :autoplay="true"></DocVideo>

### Reactive Forms

#### HTML

<doc-code>
<<< .vuepress/public/demos/stepper/reactive-form.html
</doc-code>

#### TypeScript

<doc-code>
<<< .vuepress/public/demos/stepper/reactive-form.ts
</doc-code>

### Template Forms

#### HTML

<doc-code>
<<< .vuepress/public/demos/stepper/template-form.html
</doc-code>

#### TypeScript

<doc-code>
<<< .vuepress/public/demos/stepper/template-form.ts
</doc-code>
