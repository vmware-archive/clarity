---
title: API
toc: true
---

## Angular Components

### ClrToggle

#### Selector & Basic Usage

<doc-code>

```html
<input type="checkbox" clrToggle value="option1" name="options" />
```

</doc-code>

#### Bindings

<DocComponentApi component="ClrFormCommon" item="bindings" />

### ClrToggleContainer

A container component used to enable helper and error messages and works with Angular forms.

#### Selector & Basic Usage

<doc-code>

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

</doc-code>

#### Bindings

<DocComponentApi component="ClrCheckboxContainer" item="bindings" />

### ClrToggleWrapper

The ClrToggleWrapper associates a specific label with the ClrToggle input.

#### Selector & Basic Usage

<doc-code>

```html
<clr-toggle-wrapper>
  <input type="checkbox" clrToggle value="option1" name="options" />
  <label>Option 1</label>
</clr-toggle-wrapper>
```

</doc-code>
