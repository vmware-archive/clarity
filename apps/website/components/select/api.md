---
title: API
toc: true
---

## Angular Components

### ClrSelect

#### Selector & Basic Usage

<doc-code>

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

</doc-code>

#### Bindings

<DocComponentApi component="ClrFormCommon" item="bindings" />
