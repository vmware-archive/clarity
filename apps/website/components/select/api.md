---
title: API
toc: true
---

Use checkboxes when users need to select multiple options in a list of related options.

## Angular Components

### ClrSelect

#### Selector & Basic Usage

```html
<form clrForm>
  <clr-select-container>
    <label>Select options</label>
    <select clrSelect name="options" [(ngModel)]="options">
      <option value="one">One</option>
      <option value="two">Two</option>
      <option value="three">Three</option>
    </select>
  </clr-select-container>
</form>
```

#### Bindings

<DocComponentApi component="ClrFormCommon" item="bindings" />
