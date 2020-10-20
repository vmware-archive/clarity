---
title: API
toc: true
---

<cds-alert-group type="default" status="warning">
 <cds-alert closable><strong>Deprecation</strong>: Since v4, we will no longer handle setting `aria-live` and announcing the message for you by default. Based on the application use case, you can use the new `ClrAriaLiveService` to make announcements when they make sense for a user to hear about updates or loading status changes. This will result in of removing few inputs provided by the component such as `clrPolite`, `clrAssertive`, `clrOff`.
 <cds-alert-actions>
 </cds-alert-actions>
 </cds-alert>
 </cds-alert-group>

## Angular Components

{.section-header}

### ClrAlert

The `ClrAlert` component displays a single alert.

#### Selector & Basic Usage

<doc-code>

```html
<clr-alert clrAlertType="warning"></clr-alert>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrAlert" item="bindings" />

### ClrAlerts

The `ClrAlerts` component can host a group of alerts to enable pagination.

<doc-code>

```html
<clr-alerts>
  <clr-alert>...</clr-alert>
</clr-alerts>
```

</doc-code>

<DocComponentApi component="ClrAlerts" item="bindings" />

### ClrAlertItem

The `ClrAlertItem` component wraps the alert content to support displaying an icon.

<doc-code>

```html
<clr-alert>
  <clr-alert-item>This is my alert text</clr-alert-item>
</clr-alert>
```

</doc-code>

## CSS Classes

### Wrappers

There are two types of wrappers that be placed inside of the `ClrAlertItem` component.

<doc-code>

```html
<clr-alert-item>
  <div class="alert-text">The alert text goes here.</div>
  <div class="alert-actions">
    <button class="btn alert-action">Buttons or Dropdowns go here.</button>
  </div>
</clr-alert-item>
```

</doc-code>

<DocComponentApi component="ClrAlertItem" item="css" />
