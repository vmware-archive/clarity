# Disallows usage of Clarity Angular checkbox (no-clr-checkbox)

The use of Clarity Angular checkbox is discouraged. Use Clarity Core checkbox instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-checkbox-wrapper>
  <input type="checkbox" clrCheckbox />
  <label>checkbox</label>
</clr-checkbox-wrapper>
```

Examples of **correct** code for this rule:

```html
<cds-checkbox>
  <label>checkbox</label>
  <input type="checkbox" />
  <cds-control-message>message text</cds-control-message>
</cds-checkbox>
```
