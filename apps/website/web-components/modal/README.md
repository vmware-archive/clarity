---
title: Overview
toc: true
---

::: component-summary

Modals inform users about a task and can contain decisive information that requires immediate attention.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use a modal when required to interrupt the user to address a specific critical task that needs immediate resolution.

When to use a modal:

<ul cds-list cds-text="body" cds-layout="p-t:md p-b:lg">
    <li>To grab user’s attention for <b>an important message</b>.</li>
    <li>To show <b>additional information</b> without losing the context of the parent page.</li>
    <li>To break down <b>a complex workflow</b> into a series of less complicated steps.</li>
</ul>

When not to use a modal:

<ul cds-list cds-text="body" cds-layout="p-t:md">
    <li>For <b>nonessential information</b> that is not related to the current workflow.</li>
    <li>For complex workflows that require additional information <b>not contained within the modal</b>.</li>
    <li><b>Avoid modal over modal</b>. Context becomes confusing when modals are stacked.</li>
</ul>

:::

:::component-section-level-one-title

## Sizes

:::

:::component-section-level-one

There are multiple sizes for modals. The default size is medium, however other sizes are available. Select the size best suited for the content and screen size displaying the modal. Remember to test responsiveness.

:::

<div cds-layout="p-b:xxl p-t:md">
!!!include(.vuepress/code/core-usage-demos/modal/sizes.html)!!!
</div>

::: component-section-level-one-title

## Behavior

:::

:::component-section-level-one

Consider using modals for the following scenarios: alerting the user, confirmation dialogs, and task-oriented workflows.

:::

:::component-section-level-two-title

### Dismissing modals

:::

:::component-section-level-two

<div cds-layout="horizontal gap:lg align:fill">
<div cds-layout="vertical">
<p>A user needs to actively dismiss a modal. A modal should not disappear on its own. Taking any of the actions to either cancel or proceed should eventually dismiss the modal.</p>

<p>There are multiple ways to dismiss a modal but a user needs to intentionally make that choice.</p>

<p>Clarity modals are not dismissed when clicking on the background overlay. This prevents losing information or data. An option to override this is available.</p>
</div>
<div>
<ClrImage title="Image that shows multiple ways to dismiss a modal." src="/images/components/modal/dismissing.png" />
</div>
</div>

:::

:::component-section-level-two-title

### Stacking modals

:::

<div cds-layout="horizontal gap:lg align:fill p-b:xxl">
<div cds-layout="vertical gap:md">
<p>Modals should not launch other modals. Stacking modals makes it hard to dismiss them and confuses the user on their levels of importance.</p>
<p>If you see a need to stack modals, you should:</p>
<ul cds-list cds-text="body">
<li>Seek alternatives to the second modal such as inline expansion within the first one.</li>
<li>Seek alternatives to the use of modals in that scenario and explore alternatives such as inline task completion.</li>
</ul>
</div>
<div>
<ClrImage title="Image that shows multiple modals stacked on top of each other as an example for what not to do." src="/images/components/modal/stacking.png" />
</div>
</div>
