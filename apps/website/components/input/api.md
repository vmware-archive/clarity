---
title: API
toc: true
---

Use checkboxes when users need to select multiple options in a list of related options.

## Angular Components

### ClrInput

#### Selector & Basic Usage

<DocDemo toggle="false">

```html
<form clrForm>
  <clr-input-container>
    <label>My name</label>
    <input clrInput placeholder="Enter text here!" name="name" [(ngModel)]="name" />
  </clr-input-container>
</form>
```

</DocDemo>

#### Bindings

<DocComponentApi component="ClrFormCommon" item="bindings" />
