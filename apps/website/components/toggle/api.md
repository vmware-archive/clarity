---
title: API
toc: true
---

Use checkboxes when users need to select multiple options in a list of related options.

## Angular Components

### ClrToggle

#### Selector & Basic Usage

```html
<input type="checkbox" clrToggle value="option1" name="options" />
```

#### Bindings

<DocComponentApi component="ClrFormCommon" item="bindings" />

### ClrToggleContainer

A container component used to enable helper and error messages and works with Angular forms.

#### Selector & Basic Usage

```html
<clr-toggle-container>
  <clr-toggle-wrapper>
    <input type="checkbox" clrToggle value="option1" name="options" />
    <label>Option 1</label>
  </clr-toggle-wrapper>
  <clr-toggle-wrapper>
    <input type="checkbox" clrToggle value="option2" name="options" />
    <label>Option 2</label>
  </clr-toggle-wrapper>
  <!-- clr-control-helper -->
  <!-- clr-control-error -->
</clr-toggle-container>
```

#### Bindings

<DocComponentApi component="ClrCheckboxContainer" item="bindings" />

### ClrToggleWrapper

The ClrToggleWrapper associates a specific label with the ClrToggle input.

#### Selector & Basic Usage

```html
<clr-toggle-wrapper>
  <input type="checkbox" clrToggle value="option1" name="options" />
  <label>Option 1</label>
</clr-toggle-wrapper>
```
