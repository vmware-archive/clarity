# Disallows usage of Clarity Angular input (no-clr-input)

The use of Clarity Angular input is discouraged. Use Clarity Core input instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-input-container>
  <label>input</label>
  <input clrInput />
</clr-input-container>
```

Examples of **correct** code for this rule:

```html
<cds-input>
  <label>input</label>
  <input type="text" />
</cds-input>
```
