---
title: API
toc: true
---

## Angular Components

### ClrForm

#### Selector & Basic Usage

<doc-code>

```html
<form clrForm>
  <clr-date-container>
    <label>Basic Demo</label>
    <input type="date" clrDate name="demo" [(ngModel)]="demo" />
  </clr-date-container>
</form>
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrForm" item="bindings" />

### ClrControlContainer

A generic control container that supports form controls not directly support in Clarity. (e.g app specific controls or third party controls)

````html
#### Selector & Basic Usage ```html
<form clrForm>
  <clr-control-container>
    <label>Required</label>
    <input
      clrControl
      placeholder="Input control"
      name="required"
      [(ngModel)]="model.required"
      pattern="asdfasdf"
      required
      minlength="5"
    />
  </clr-control-container>
  <button class="btn btn-primary" type="submit">Submit</button>
</form>
````

</doc-code>

### ClrControlError

Enable error messages per form control.

#### Selector & Basic Usage

<doc-code>

```html
<form clrForm>
  <clr-CONTROL-container>
    <!-- see individual controls for template structure -->
    <label>Control 1</label>
    <input clrCONTROL type="text" [(ngModel)]="model" name="example" required />
    <clr-control-error>Error message to appear after loss of focus and control is invalid.</clr-control-error>
  </clr-CONTROL-container>
</form>
```

</doc-code>

### ClrControlHelper

Enable helper messages per form control.

#### Selector & Basic Usage

<doc-code>

```html
<form clrForm>
  <clr-CONTROL-container>
    <!-- see individual controls for template structure -->
    <label>Control 1</label>
    <input clrCONTROL type="text" [(ngModel)]="model" name="example" required />
    <clr-control-helper>Helper message to appear.</clr-control-helper>
  </clr-CONTROL-container>
</form>
```

</doc-code>

## Angular Directives

### ClrLayout

Use the ClrLayout directive to enable different layouts for the form.

#### Selector & Basic Usage

<doc-code>

```html
<form clrForm clrLayout="horizontal">
  ... form controls
</form>
```

</doc-code>
