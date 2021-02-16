# Disallows usage of Clarity Angular form (no-clr-form)

The use of Clarity Angular form is discouraged. Use Clarity Core form instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<form clrForm>
  <clr-input-container>
    <label>input</label>
    <input clrInput />
  </clr-input-container>
</form>
```

Examples of **correct** code for this rule:

```html
<form>
  <cds-form-group>
    <cds-input>
      <label>input</label>
      <input type="text" />
    </cds-input>
  </cds-form-group>
</form>
```
