# Disallows usage of Clarity Angular alerts (no-clr-alert)

The use of Clarity Angular alerts is discouraged. Use Clarity Core alerts instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-alert [clrAlertType]="'warning'" *ngIf="warning" (clrAlertClosedChange)="warning = false">
  <clr-alert-item>
    <span class="alert-text">Try closing this alert.</span>
  </clr-alert-item>
</clr-alert>
```

Examples of **correct** code for this rule:

```html
<cds-alert-group status="warning" *ngIf="warning">
  <cds-alert closable="true" (closeChange)="warning = false">Try closing this alert</cds-alert>
</cds-alert-group>
```
