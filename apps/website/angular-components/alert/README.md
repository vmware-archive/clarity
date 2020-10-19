---
title: Overview
toc: true
---

Alerts are banners that are designed to draw the users attention to an important message. Icons and color indicate the type and urgency of the information contained within the message.

## Usage

Use alerts to grab the user’s attention to provide critical information needed in context.

## Types

There are two types of alerts, standard alerts and app level alerts.

<div class="clr-row">
<div class="clr-col">
<DocInset>
   <ClrImage alt="Standard Alerts" src="/images/angular-components/alert/standard-alert.png" />
</DocInset>
<h3>Standard alerts</h3>
<p>Standard alerts are used in the context of an application either in the content area itself or within components.</p>
<p>There are four different sub-types of standard alerts: error, warning, info, and success.</p>
<p>Ordered standard alerts by the urgency in which the user needs to pay attention to: error, warning, info, then success. In the case there are multiple of each sub-type all of them are shown before another sub-type is reached. For example, multiple errors are shown before the first warning is.</p>
</div>
<div class="clr-col">
<DocInset>
   <ClrImage title="App Alerts" src="/images/angular-components/alert/app-alert.png" />
</DocInset>
<h3>App-Level Alerts</h3>
<p>App-level alerts are used in the global context of an application. They are placed at the very top of all content and navigation.</p>
<p>There are three different sub-types of app-level alerts info, warning, and error.</p>
</div>
</div>

### Sub-types

There are four different sub-types of standard alerts: error, warning, info, and success.
Order standard alerts by the urgency in which the user needs to pay attention to: error, warning, info, then success. In the case there are multiple of each sub-type, all of them are shown before another sub-type is reached. For example, multiple errors are shown before the first warning is.

<div class="clr-row">
<div class="clr-col">
<DocInset>
<ClrImage title="Error Alert" src="/images/angular-components/alert/error-alert.png" />
</DocInset>
<h4>Error</h4>
<p>Reserved for errors, malfunctions, as well as critical issues like license expiration.</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Warning Alert" src="/images/angular-components/alert/warning-alert.png" />
</DocInset>
<h4>Warning</h4>
<p>Reserved for warnings: a message that needs the user attention and acknowledgment but might not cause errors.</p>
</div>
</div>

<div class="clr-row">
<div class="clr-col">
<DocInset>
<ClrImage title="Info Alerts" src="/images/angular-components/alert/info-alert.png" />
</DocInset>
<h4>Info</h4>
<p>Reserved for errors, malfunctions, as well as critical issues like license expiration.</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Success Alert" src="/images/angular-components/alert/success-alert.png" />
</DocInset>
<h4>Success</h4>
<p>Reserved to provide to a static persistent success message.</p>
</div>
</div>

### Anatomy

A standard alert consist of an icon, a message, and optional actions in a container. -Left align the icon and message. Right aligned the actions.

### Size

<div class="clr-row">
<div class="clr-col">
<p>There are two sizes of standard alerts: default and compact. Use the compact alert only in places where vertical space is scarce and information density is needed. Cards provide a good example here.</p>
</div>
<div class="clr-col">
<DocInset>
<ClrImage title="Success Alert" src="/images/angular-components/alert/sizes.png" />
</DocInset>
</div>
</div>

### Placement

Standard alerts are used in the context of an application either in the content area itself or within components.

#### In Modals

<ClrImage title="Alert in modal" src="/images/angular-components/alert/modal.png" align="center" />

Alerts could appear within modals. It is recommended that no more than one alert appear within a modal. Their function should not be to validate, validation should be done inline and closer to the error itself.

#### In Cards

<div class="clr-row">
<div class="clr-col">
<p>It is recommended to use concise language as you share an alert within a card. It is also recommended to use a compact-size alert. The focus of the alert should be on its content not on the alert appearing in it.</p>

<p>It is also recommended to have an alert at the very top of a card, on top of its title. An alert is meant to attract the attention of the user.</p>

<p>Using more than one alert within a card distracts the user and dilutes the importance of the alerts displayed.
There are three sub-types of app-level alerts: error, warning, and info.</p>
</div>
<div class="clr-col">
<DocInset>

<ClrImage title="Alert in card" src="/images/angular-components/alert/card.png" />
</DocInset>
</div>
</div>

## App-Level Alerts

App-level alerts are used in the global context of an application. They are placed at the very top of all content and navigation.

### Sub-types

There are three different sub-types of app-level alerts info, warning, and error.
App-level alerts follow the same urgency order as standard alerts: error, warning, and info.

**Why no success app-level alert?**
App-level alerts are global in nature. Reporting a success of an operation should either be communicated within context or as a notification message.

### Anatomy

An app-level alert consist of an icon, a message, and optional actions in a container. - All elements are centered-aligned. -Add anatomy for inline alerts - Need to add pagination

## Placement

App-level alerts are placed at the very top of the global context. They should not be placed in any other configuration. Their purpose is to provide global alerts available and relating to the full context of the overall application.

<ClrImage title="App Level Warning Alert" src="/images/angular-components/alert/app_level_placement.png" />

## Content

Depending on the sub-type of a standard alert, make sure to communicate a clear, concise, and actionable message.

## Code & Examples

Several classes and elements are required to implement the Clarity alert layout. A table of these classes and elements with a brief description of each follows:

<DocAlertClassesTable table="text-styles" />

### Types

Clarity has error, warning, information, and success alerts denoted by the following classes:

- .alert-danger
- .alert-warning
- .alert-info
- .alert-success

<doc-demo>
!!!include(.vuepress/public/demos/alert/types-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/alert/types-ng.html
</doc-code>

### Placement

#### Alerts in the Content Area

<doc-demo>
!!!include(.vuepress/public/demos/alert/content-area-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/alert/content-area-css.html
</doc-code>

#### Alerts in Cards

<doc-demo>
!!!include(.vuepress/public/demos/alert/card-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/alert/card-ng.html
</doc-code>

#### Alerts in Modals

<doc-demo>
!!!include(.vuepress/public/demos/alert/modal-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/alert/modal-ng.html
</doc-code>

### Size

Use the `.alert-sm` class with `.alert` for an alert 24 pixels in height. The default is 36 pixels.

<doc-demo>
!!!include(.vuepress/public/demos/alert/size-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/alert/size-css.html
</doc-code>

### App-Level Alerts

#### .alert-app-level

This class must be applied with `.alert` to render an app-level alert.

<doc-demo>
!!!include(.vuepress/public/demos/alert/basic-app-level-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/alert/basic-app-level-ng.html
</doc-code>

#### CSS

##### App-Level Alert in the main-container

<doc-demo>
!!!include(.vuepress/public/demos/alert/app-level-main-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/alert/app-level-main-css.html
</doc-code>

##### Custom Icon in an App-Level Alert

<doc-demo>
!!!include(.vuepress/public/demos/alert/app-level-icon-css.html)!!!
</doc-demo>

<doc-code>
<<< .vuepress/public/demos/alert/app-level-icon-css.html
</doc-code>

#### Angular

<!-- these ng demos need movies or images -->

##### clrAlertClosable set to false. Default value is true.

<doc-code>
<<< .vuepress/public/demos/alert/closable-false-ng.html
</doc-code>

##### clrAlertType set to alert-success. Default value is alert-info. Accepts values same as the static alert type classes.

<doc-code>
<<< .vuepress/public/demos/alert/clr-alert-type-ng.html
</doc-code>

##### clrAlertSizeSmall set to true. Default value is false.

<doc-code>
<<< .vuepress/public/demos/alert/clr-alert-size-small-ng.html
</doc-code>

##### Binding to the clrAlertClosedChange event.

<doc-code>
<<< .vuepress/public/demos/alert/clr-alert-closed-change-ng.html
</doc-code>

##### clrAlertAppLevel set to true. Default is false.

<doc-code>
<<< .vuepress/public/demos/alert/clr-alert-app-level-ng.html
</doc-code>

##### Multiple app level alerts can be displayed with previous and next buttons.

<doc-code>
<<< .vuepress/public/demos/alert/multiple-app-level-alerts-ng.html
</doc-code>

## Accessibility

<cds-alert-group status="warning" type="default">
   <cds-alert>Actionable controls inside dynamically generated alerts are not accessible to screen reader users! For this reason Clarity does not recommend using dropdowns, buttons, links inside alerts that appear as dynamic notifications.</cds-alert>
</cds-alert-group>

Accessibility problems related to using actionable controls inside dynamically generated alerts:

- They are announced as part of the alert message, which is out of context and may be confusing. For example, the following alert will be announced as "success acknowledge":
  TODO Fix core components (maybe it cannot be used in the markdown rendering)
- There is no way for the user to directly interact with the announced action controls.

It is acceptable to use actions in static alerts. The following guidelines are recommended:

- Controls can be dropdown, button or link elements.
- Buttons should be used for actions, links for navigation.
- The text for these controls should be as descriptive as possible.
  <cds-alert-group type="default" status="warning">
  <cds-alert closable>Acknowledge
  <cds-alert-actions>
  <cds-button>Action Link</cds-button>
  </cds-alert-actions>
  </cds-alert>
  </cds-alert-group>
