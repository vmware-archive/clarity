---
title: Overview
toc: true
---

Modals are dialogues which provide information or help a user complete a task. They require the user to take an action to dismiss them.

## Usage

Use a modal for self-contained processes with a clear start and end point. For the limited time frame of this action, a modal takes the user out of the current user workflow. Instead, it lets the user focus on the action and then return to the original context.

<DocVideo src="/images/angular-components/modal/modal-basic.mp4" :width="736"  :autoplay="true" bgColor="#353335"></DocVideo>

<div class="top-margin-wrapper">
  <cds-alert-group status="warning">
    <cds-alert>Modals are disruptive. Only use modals when you need the user’s full attention for the period of time the modal is displayed.</cds-alert>
  </cds-alert-group>
</div>

**Use a modal:**

- When you need to grab user’s attention for important message
- When you want to show additional information without losing the context of the parent page.
- To break down a complex workflow into simpler step

**Do not use a modal:**

- For nonessential information that is not related to the current workflow.
- For complex workflow that requires additional information unavailable in the modal
- Avoid modal over modal. It can confuse user about the context.

## Anatomy

<DocModalWrapper></DocModalWrapper>

### Title

The title **summarizes the purpose** of the modal. In a confirmation modal, use a question in your title and make sure the action is clearly called out in the buttons.

### Content

The content may differ between different types of modals. **Be concise and provide a clear explanation** of the task or information a user should focus on.

### Buttons

Buttons should include clear and direct action for the user to take. Buttons are right-aligned based on the **Z&#160;Pattern**. Read more about it in Button Placement.

### Overlay backdrop

The background overlay is dark with opacity to provide the feeling of a third dimensional layer. This also eliminates distraction and helps the user focus on the modal content.

<!-- <doc-demo>
!!!include(.vuepress/public/demos/modal/modal-backdrop.html)!!!
</doc-demo> -->

<doc-code>

```html
<div class="modal-backdrop" aria-hidden="true"></div>
```

</doc-code>

### Sizes

There are multiple sizes for modals. The Clarity modal defaults to medium but different sizes could be used based on the content and screen sizes you are planning to support. Always remember to test responsiveness as you design and use modals.

<doc-demo>
!!!include(.vuepress/public/demos/modal/modal-sizes.html)!!!
</doc-demo>

<div class="top-margin-wrapper">
  <cds-alert-group status="info">
    <cds-alert>The default size is medium so there is no style class for a medium size modal.</cds-alert>
  </cds-alert-group>
</div>

In the following example, we are using a small size modal dialog.

<DocModalWrapper size="sm"></DocModalWrapper>

<doc-code>

```html
<div class="modal">
  <div class="modal-dialog modal-sm" role="dialog" aria-hidden="true">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
<div class="modal-backdrop" aria-hidden="true"></div>
```

</doc-code>

## Behavior

Modals are used in different scenarios. Most notably: alerting the user, confirmation dialogs, and task-oriented workflows.

### Animation

The background overlay animates once a modal is launched to grab a user’s attention and retain their focus. Modals and backdrops support fading animations. Clarity recommends using `fadeDown` on the `modal-dialog` and `fade` on the `modal-backdrop`. These animations hide the modal and backdrop by default. Adding or removing the `in` class animates the modal or backdrop in or out, respectively.

<div class="top-margin-wrapper">

<doc-code>

```html
<div class="modal">
  <div class="modal-dialog fadeDown in" role="dialog" aria-hidden="true">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
<div class="modal-backdrop fade in" aria-hidden="true"></div>
```

</doc-code>

</div>

### Dismissing modals

A user needs to **actively** dismiss a modal. A modal should not disappear on its own. Taking any of the actions to either cancel or proceed should eventually dismiss the modal.

<div class="clr-row">
<div class="clr-col-lg-6 clr-col-md-12">

There are multiple ways to dismiss a modal but a user needs to intentionally make that choice.

Clarity Modals are not dismissed when clicking on the background overlay. This prevents losing information or data. An option to override this is available.

</div>
<div class="clr-col-lg-6 clr-col-md-12">

<ClrImage title="Dismissing modals" src="/images/angular-components/modal/dismissing.png" :align="'left'" :width="420" />

</div>
</div>

### Stacking modals

Modals **should not** launch other modals. Stacking modals makes it hard to dismiss them and confuses the user on their levels of importance.

<div class="clr-row">
<div class="clr-col-lg-6 clr-col-md-12">

If you see a need to stack modals, you should:

- Seek alternatives to the second modal such as inline expansion within the first one.
- Seek alternatives to the use of modals in that scenario and explore alternatives such as inline task completion.

</div>
<div class="clr-col-lg-6 clr-col-md-12">

<ClrImage title="Stacking modals" src="/images/angular-components/modal/stacking.png" :align="'left'" :width="420" />

</div>
</div>

### Scrolling

Scrolling makes it hard for a user to go through the content of your modal or complete the task assigned. Use scrolling only when absolutely needed.

If your modals scroll, make sure:

- You’re using the right modal size based on your content and supported screen sizes.
- Consider alternative components to using modal if the content is too long or too complex within a modal.

## Angular Component

Besides a static HTML/CSS Modal component, we also offer a fully interactive Angular version of the component. So if you are using Angular, you can use the `ClrModal` component. By using `ClrModal`, you'll be able to leverage its interactive behavior and features out-of-the-box. If you would like to learn more about how to customize its default interactive behavior, please refer to [the API tab](./api.html).

<div class="top-margin-wrapper">

<doc-code>

```html
<clr-modal [(clrModalOpen)]="openModal">
  <h3 class="modal-title">I have a nice title</h3>
  <div class="modal-body">
    <p>But not much to say...</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline" (click)="openModal = false">Cancel</button>
    <button type="button" class="btn btn-primary" (click)="openModal = false">Ok</button>
  </div>
</clr-modal>
```

</doc-code>

</div>
