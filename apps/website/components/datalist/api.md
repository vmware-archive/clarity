---
title: API
toc: true
---

Use checkboxes when users need to select multiple options in a list of related options.

## Angular Components

### ClrDatalist

#### Selector & Basic Usage

```html
<form clrForm>
  <clr-datalist-container>
    <input clrDatalistInput [(ngModel)]="vertical" placeholder="No label" name="Option" />
    <datalist>
      <option *ngFor="let item of items" [value]="item"></option>
    </datalist>
  </clr-datalist-container>
</form>
```

#### Bindings

<DocComponentApi component="ClrFormCommon" item="bindings" />
