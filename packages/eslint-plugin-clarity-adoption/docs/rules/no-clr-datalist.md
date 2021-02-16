# Disallows usage of Clarity Angular datalist (no-clr-datalist)

The use of Clarity Angular datalist is discouraged. Use Clarity Core datalist instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-datalist-container>
  <label>label</label>
  <input clrDatalistInput [(ngModel)]="vertical" placeholder="placeholder text" />
  <datalist>
    <option *ngFor="let item of items" [value]="item"></option>
  </datalist>
</clr-datalist-container>
```

Examples of **correct** code for this rule:

```html
<cds-datalist control-width="shrink">
  <label>datalist</label>
  <input placeholder="placeholder text" />
  <datalist>
    <option *ngFor="let item of items" [value]="item"></option>
  </datalist>
</cds-datalist>
```
