---
title: Login Page
permalink: /documentation/login
layout: documentation
---

{: .component-summary }
#### The login page is a predefined form required for every application.

Use Clarity's login form by extending the `.login` classname on `form` and wrapping it in a container extending the `.login-wrapper` class.

###### .title, .subtitle and .trademark

Extend the `.title` and `.subtitle` class on labels indicating the product title and subtitle. If your product title has the trademark symbol, make sure to wrap the trademark symbol in a `span` with the `.trademark` class on it.
</div>

###### .username

Extend the `.username` class on the username input field.

###### .password

Extend the `.password` class on the password input field.

###### .error, .active

This wrapper contains a validation message. Extend the `.active` class with `.error` to display the validation message.

#### Example

<clr-login-demo></clr-login-demo>

{% comment %}
    Design guidelines start here...
{% endcomment %}

#### Usage

This component provides a complete login experience.

To customize the login page, remove the elements you don't need, per your use case. For example, your app may require fewer fields.

Use the provided, Clarity-themed login image. Future Clarity releases will provide additional image choices.

#### Validation

Validation occurs on submit. If the user enters an incorrect user name or password, a validation message appears below the password field.

For security reasons, Clarity does not call out whether the error occurred in the user name or password field.  The validation message text should indicate this situation; for example, "The user name or password is incorrect."

#### Responsiveness

The layout adapts to different screen sizes at 768px and 544px.
