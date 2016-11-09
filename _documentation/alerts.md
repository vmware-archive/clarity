---
title: Alerts
permalink: /documentation/alerts
layout: documentation
---

{: .component-summary }
#### An alert is a banner that uses text, color, and an icon to denote the severity of a message.

**.alert**
<div>
    This class is a wrapper around <code class="clr-code">.alert-item</code> and the
    <code class="clr-code">.close</code> button. Place the <code class="clr-code">.close</code>
    button before the alert items.
</div>

**.alert-item**
<div>
    This class is a wrapper around <code class="clr-code">.alert-text</code> and <code class="clr-code">.alert-actions</code>.
</div>

**.alert-actions**
<div>
    <code class="clr-code">.alert-actions</code> can consist of dropdowns or links.
    Each action should extend the <code class="clr-code">.alert-action</code> class.
</div>

### Types

Clarity has error, warning, information, and success alerts denoted by the following classes:

- .alert-danger
- .alert-warning
- .alert-info
- .alert-success

<clr-alert-demo-styles></clr-alert-demo-styles>

### Placement

#### Alerts in the Content Area
<clr-alert-demo-content-area></clr-alert-demo-content-area>

#### Alerts in Cards
<clr-alert-demo-cards></clr-alert-demo-cards>

#### Alerts in Modals
<clr-alert-demo-modals></clr-alert-demo-modals>

### Size

Use the <code class="clr-code">.alert-sm</code> class with <code class="clr-code">.alert</code> for an alert 24 pixels in height. The default is 36 pixels.

<clr-alert-demo-sizes></clr-alert-demo-sizes>

### App-Level Alerts

**.alert-app-level**
<div>
    This class must be applied with <code class="clr-code">.alert</code> to render an app-level alert.
</div>

<clr-alert-demo-app-level></clr-alert-demo-app-level>

## Angular Component

### Summary of Options

<table class="table">
    <thead>
        <tr>
            <th class="left">Input</th>
            <th class="left">Values</th>
            <th>Default</th>
            <th class="left">Effect</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left">[clrAlertClosable]</td>
            <td class="left">true, false</td>
            <td>true</td>
            <td class="left">If false, the alert will not be closable by clicking on the top-right "x".</td>
        </tr>
        <tr>
            <td class="left">[(clrAlertClosed)]</td>
            <td class="left">true, false</td>
            <td>false</td>
            <td class="left">
                Two-way binding on the state of the alert: opened or closed.
            </td>
        </tr>
        <tr>
            <td class="left">[clrAlertType]</td>
            <td class="left">"alert-info", "alert-warning", "alert-success" and "alert-danger"</td>
            <td>"alert-info"</td>
            <td class="left">Sets the type of the alert.</td>
        </tr>
        <tr>
            <td class="left">[clrAlertSizeSmall]</td>
            <td class="left">true, false</td>
            <td>false</td>
            <td class="left">If true, renders a small alert.</td>
        </tr>
        <tr>
            <td class="left">[clrAlertAppLevel]</td>
            <td class="left">true, false</td>
            <td>false</td>
            <td class="left">If true, renders an app-level alert.</td>
        </tr>
    </tbody>
</table>


##### Examples

###### 1. clrAlertClosable set to false. Default value is true.

<clr-alert-not-closable-demo-angular></clr-alert-not-closable-demo-angular>

###### 2. clrAlertType set to alert-success. Default value is alert-info. Accepts values same as the static alert type classes.

<clr-alert-success-demo-angular></clr-alert-success-demo-angular>

###### 3. clrAlertSizeSmall set to true. Default value is false.

<clr-alert-small-demo-angular></clr-alert-small-demo-angular>

###### 4. Binding to the clrAlertClosedChange event.

<clr-alert-close-event-demo-angular></clr-alert-close-event-demo-angular>

###### 5. clrAlertAppLevel set to true. Default is false.

<clr-alert-app-level-demo-angular></clr-alert-app-level-demo-angular>

{% comment %}
    Design guidelines start here...
{% endcomment %}

## Using Standard Alerts

Standard alerts are part of the content area.  These alerts are for notifying users that a particular component or area of the screen needs attention.  Standard alerts have four levels, denoted by color and icon. From most to least severe, they are:

{: .list}
- Error–a problem needs fixing
- Warning–an action might have a harmful outcome
- Info–a situation needs attention, at some point
- Success–a significant achievement occurred

Other choices for displaying messages are [input field validations]({{ site.baseurl }}/documentation/input-fields)  and [modals]({{ site.baseurl }}/documentation/modals) .  However, these components require users to take action before proceeding.

### Placement and Size

Alert positioning should be contextual to the component or area to which it applies. For example, if the alert applies to the entire content area, place it at the top and span the width of that area.

Base the height of the alert (36 or 24 pixels) on its location.  The larger alert is for use in the application's main content area, modals, and wizards.  The smaller alert is for use in cards.

### Closing Alerts

A close button (X) serves as a method for users to acknowledge the alert.  It also allows users to declutter the view. Omit the close button if the alert should be persistent.

### Message Text

Keep the message text short and concise.  If combining multiple messages in a single alert, make sure that the messages are of the same type.  Avoid mixing error and warning messages.

### Stacking Alerts

When showing multiple alerts, stack from most severe to least severe:

<ol class="list">
    <li>Error</li>
    <li>Warning</li>
    <li>Info</li>
    <li>Success</li>
</ol>

  Stack up to three alerts. For more than three, consider an alternate pattern, such as displaying the information on another page.

### Actions

You can display up to two actions in an alert.  For more than two actions, use a dropdown menu, limiting the number of items to five.

The most common course of action goes at the top of the menu, destructive actions at the bottom.  Avoid placing destructive actions directly in the alert.

Actions in standard alerts are represented by links because  links take up less space than buttons and are light in appearance.  <!-- One line is 36 pixels tall using links.  With flat buttons, the line is taller to accommodate the button state change. -->

### Color

Alerts have their own color palette of red, yellow, green, and blue. They are not styled with Stoplight colors to avoid competition with call-to-action buttons.


## Using App-Level Alerts

An app-level alert appears at the top of the screen, above the application header.  This alert is reserved for a single, system-level message.

App-level alerts have three severity levels:

<table class="table .table-noborder ">
  <tr>
    <th class="left">Type</th>
    <th class="left">Example</th>
  </tr>
  <tr>
    <td class="left">Error</td>
    <td class="left">A problem exists with a server</td>
  </tr>
  <tr>
    <td class="left">Warning</td>
    <td class="left">A license is about to expire</td>
  </tr>
  <tr>
    <td valign="top" class="left">Info</td>
    <td class="left"> A trial is about to end<br>
    Support is required for a feature </td>
  </tr>
</table>

### Guidelines

{: .list}
- Show only one app-level alert at a time.
- Keep the message text to one line–don't wrap the text.
- Include up to two actions and keep button labels concise.
- Do not include a menu within the alert.
- When appropriate, include a close icon so that the app-level alert can be dismissed.
