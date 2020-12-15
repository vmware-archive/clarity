---
title: API
toc: true
---

## Angular Components

### ClrDatalist

#### Selector & Basic Usage

<doc-code>

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

</doc-code>

#### Bindings

<DocComponentApi component="ClrFormCommon" item="bindings" />
