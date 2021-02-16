# Disallows usage of Clarity Angular toggle (no-clr-toggle)

The use of Clarity Angular toggle is discouraged. Use Clarity Core toggle instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-toggle-wrapper>
  <input type="checkbox" clrToggle />
  <label>toggle</label>
</clr-toggle-wrapper>
```

Examples of **correct** code for this rule:

```html
<cds-toggle>
  <label>toggle</label>
  <input type="checkbox" checked />
</cds-toggle>
```
