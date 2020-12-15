---
title: Overview
toc: true
---

A predefined form for applications that require authentication as part of the login experience.

## Usage

The login form is flexible and should be customized removing or adding elements as needed to suit a specific use case.
<doc-demo>
!!!include(.vuepress/code/demos/login/login-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/code/demos/login/login-ng.html
</doc-code>

### Validation

Validation can occur when a user enters information into a control or when they submit the form. I there are errors a validation message appears below the password field.

For security reasons, doe not call out whether the error occurred in the user name or password field. The validation message text should indicate this situation; for example, “The user name or password is incorrect.”

### Responsiveness

The layout adapts to different screen sizes at 768px and 544px.

## Accessibility

In order to facilitate screen readers, you should still include label elements in the form controls. We provide the clr-sr-only class to add to the label to move it offscreen, which keeps the visual experience as you see above while still helping screen readers understand what the form controls are for.
