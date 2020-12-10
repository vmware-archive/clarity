---
title: Overview
toc: true
---

::: component-summary

Alerts are banners that draw the user's attention to an important message. Elements of an alert, such as icons and color, indicate the type and urgency of the message's information.

:::

::: component-section-level-one-title

## Usage

:::

:::component-section-level-one

Use alerts to grab the user’s attention to provide critical information needed in context.

:::

:::component-section-level-one-title

## Types

:::

:::component-section-level-one

There are three types of alerts: standard, app level and lightweight.

:::

:::component-section-level-two-title

### Standard Alerts

:::

:::component-section-level-two

Standard alerts are for use in the context of an application either in the content area itself or within components.

<div>
!!!include(.vuepress/public/core-usage-demos/alert/default-type.html)!!!
</div>

:::

:::component-section-level-two-title

### App-Level Alerts

:::

:::component-section-level-two

App-level alerts are for use in the global context of an application. Place them at the very top of all content and navigation.

<div>
!!!include(.vuepress/public/core-usage-demos/alert/app-level-type.html)!!!
</div>

:::

:::component-section-level-two-title

### Lightweight Alerts

:::

:::component-section-level-two

Lightweight alerts are for use inside containers such as cards and layouts.

<div>
!!!include(.vuepress/public/core-usage-demos/alert/lightweight-type.html)!!!
</div>

:::

::: component-section-level-one-title

## Standard Alerts

:::

:::component-section-level-one

Standard alerts are for use in the context of an application either in the content area itself or within components.

:::

:::component-section-level-two-title

### Status

:::

:::component-section-level-two

There are four different status of standard alerts: error, warning, info, and success.

:::

:::component-section-level-three-title

#### Error

:::

:::component-section-level-three

Reserved for warnings: a message that needs the user's attention and acknowledgment but might not cause errors.

<div>
!!!include(.vuepress/public/core-usage-demos/alert/standard-error.html)!!!
</div>

:::

:::component-section-level-three-title

#### Warning

:::

:::component-section-level-three

Reserved for warnings: a message that needs the user's attention and acknowledgment but might not cause errors.

<div>
!!!include(.vuepress/public/core-usage-demos/alert/standard-warning.html)!!!
</div>

:::

:::component-section-level-three-title

#### Info

:::

:::component-section-level-three

Provides info to user’s in context. Be careful not to overuse to replace regular content.

<div>
!!!include(.vuepress/public/core-usage-demos/alert/standard-info.html)!!!
</div>

:::

:::component-section-level-three-title

#### Success

:::

:::component-section-level-three

Reserved to provide a static persistent success message.

<div>
!!!include(.vuepress/public/core-usage-demos/alert/standard-success.html)!!!
</div>

:::

:::component-section-level-three-title

#### Alert group

:::

:::component-section-level-three

In the case there are multiples of each sub-type, group them by sub-type and show by urgency. For example, show multiple errors before the first warning is.

<div>
!!!include(.vuepress/public/core-usage-demos/alert/standard-group.html)!!!
</div>

:::

:::component-section-level-three-title

Sizes

:::

:::component-section-level-three

There are two sizes of standard alerts: default and compact. Use the compact alert only in places where vertical space is scarce, and information density is needed.

<div>
!!!include(.vuepress/public/core-usage-demos/alert/sizes.html)!!!
</div>

:::

:::component-section-level-two-title

### Placement

:::

:::component-section-level-two

Standard alerts are for use in the context of an application either in the content area itself or within components.

:::

:::component-section-level-three-title

In Modals

:::

:::component-section-level-three

Alerts can appear within modals. Clarity recommends that no more than one alert appears within a modal.

<DocInset style="display: contents">
<div style="position: relative; height: 400px">
!!!include(.vuepress/public/core-usage-demos/alert/modal-alert.html)!!!
</div>
</DocInset>

:::

:::component-section-level-three-title

In Cards

:::

:::component-section-level-three

Clarity recommends using as concise language as possible. Additionally, Clarity recommends using a compact-size alert. The focus of the alert should be on its content, not on the alert appearing in it.

Use an alert at the very top of a card, on top of its title. An alert is meant to attract the attention of the user.

Using more than one alert within a card distracts the user and dilutes the importance of the alerts displayed.

<div>
!!!include(.vuepress/public/core-usage-demos/alert/card-alert.html)!!!
</div>

:::

::: component-section-level-one-title

## App-Level Alerts

:::

:::component-section-level-one

Use app-level alerts in the global context of an application. Place them at the very top of all content and navigation.

:::

:::component-section-level-two-title

### Status

:::

:::component-section-level-two

There are three different statuses of app-level alerts: error, warning, and error.
App-level alerts follow the same urgency order as standard alerts: error, warning, and info.

<ClrSummary>

**Why no success app-level alert?**

App-level alerts are global in nature. Reporting a success of an operation should either be communicated within context or as a notification message

</ClrSummary>
:::

:::component-section-level-three-title

#### Error

:::

:::component-section-level-three

Reserved for malfunctions, as well as critical issues like license expiration.

!!!include(.vuepress/public/core-usage-demos/alert/app-level-error.html)!!!

:::

:::component-section-level-three-title

#### Warning

:::

:::component-section-level-three

Reserved for messages that needs the user’s attention and acknowledgment but might not cause errors.

!!!include(.vuepress/public/core-usage-demos/alert/app-level-warning.html)!!!

:::

:::component-section-level-three-title

#### Info

:::

:::component-section-level-three

Provides info to user’s in context. Be careful not to overuse to replace regular content.

!!!include(.vuepress/public/core-usage-demos/alert/app-level-info.html)!!!

:::

:::component-section-level-two-title

### Placement

:::

:::component-section-level-two

Place app-level alerts at the very top of the global context. Be careful not to place them in any other configuration.

<ClrImage title="Image that shows App level alert above the page header." src="/images/angular-components/alert/app_level_placement.png" />
:::

::: component-section-level-one-title

## Lightweight Alerts

:::

:::component-section-level-one

Use lightweight alerts to show important but not as urgent messages as standard and app-level alerts. Another use for a lightweight alert is to show the status or the result of an operation.

:::

:::component-section-level-two-title

### Status

:::

:::component-section-level-two

There are six status sub-types of lightweight alerts: error, warning, info, success, loading, and unknown.
Lightweight alerts fall into an order of importance, starting with the most important: error, warning, info, then success.

:::

:::component-section-level-three-title

#### Error

:::

:::component-section-level-three

Reserved for malfunctions, as well as critical issues such license expiration.

!!!include(.vuepress/public/core-usage-demos/alert/lightweight-error.html)!!!

:::

:::component-section-level-three-title

#### Warning

:::

:::component-section-level-three

Reserved for messages that needs the user’s attention and acknowledgment but might not cause errors.

!!!include(.vuepress/public/core-usage-demos/alert/lightweight-warning.html)!!!

:::

:::component-section-level-three-title

#### Info

:::

:::component-section-level-three

Provides info to user’s in context. Be careful not to overuse to replace regular content.

!!!include(.vuepress/public/core-usage-demos/alert/lightweight-info.html)!!!

:::

:::component-section-level-three-title

#### Success

:::

:::component-section-level-three

Reserved to provide to a static persistent success message.

!!!include(.vuepress/public/core-usage-demos/alert/lightweight-success.html)!!!

:::

:::component-section-level-three-title

#### Loading

:::

:::component-section-level-three

Use the loading status to set the expectation that the action is in progress.

!!!include(.vuepress/public/core-usage-demos/alert/lightweight-loading.html)!!!

:::

:::component-section-level-three-title

#### Unknown

:::

:::component-section-level-three

When a status cannot be detected by the system, unknown is shown.

!!!include(.vuepress/public/core-usage-demos/alert/lightweight-unknown.html)!!!

:::

:::component-section-level-three-title

#### Alert group

:::

:::component-section-level-three

In the case there are multiple of each sub-type, show one at a time and start with the highest urgency. Show all of a sub-type together before another type is displayed. For example, show all errors before the first warning is shown.

!!!include(.vuepress/public/core-usage-demos/alert/lightweight-group.html)!!!

:::

:::component-section-level-three-title

#### Sizes

:::

:::component-section-level-three

There are two sizes of lightweight alerts: default and compact. Use the compact alert only in places where vertical space is scarce, and information density is needed.

!!!include(.vuepress/public/core-usage-demos/alert/default-vs-compact.html)!!!

:::

:::component-section-level-two-title

### Placement

:::

:::component-section-level-two

Lightweight alerts are used in the context of an application either in the content area or within a container.

:::

:::component-section-level-three-title

#### In Containers

:::

:::component-section-level-three

A lightweight alert can be used in containers like a card to save space while showing important information without too much visual styling.

!!!include(.vuepress/public/core-usage-demos/alert/lightweight-card.html)!!!

:::

:::component-section-level-three-title

#### In Page

:::

:::component-section-level-three

Lightweight alert can also be used in a page layout.

:::
