---
title: Login Page
permalink: /documentation/login
layout: documentation
---

{: .component-summary }
#### The login page is a predefined form for applications that require authentification.

Use Clarity's login form by extending the <code>.login</code> classname on <code>form</code> and wrapping it in a container extending the <code>.login-wrapper</code> class.

###### .title, .subtitle and .trademark

Extend the <code>.title</code> and <code>.subtitle</code> class on labels indicating the product title and subtitle. If your product title has the trademark symbol, make sure to wrap the trademark symbol in a <code>span</code> with the <code>.trademark</code> class on it.
</div>

###### .username

Extend the <code>.username</code> class on the username input field.

###### .password

Extend the <code>.password</code> class on the password input field.

###### .error, .active

This wrapper contains a validation message. Extend the <code>.active</code> class with <code>.error</code> to display the validation message.

#### Example

<clr-login-demo></clr-login-demo>

{% comment %}
    Design guidelines start here...
{% endcomment %}

### Usage

This component provides a complete login experience.

To customize the login page, remove the elements you don't need, per your use case. For example, your app may require fewer fields.

#### Validation

Validation occurs on submit. If the user enters an incorrect user name or password, a validation message appears below the password field.

For security reasons, Clarity does not call out whether the error occurred in the user name or password field.  The validation message text should indicate this situation; for example, "The user name or password is incorrect."

#### Responsiveness

The layout adapts to different screen sizes at 768px and 544px.
