# Disallows usage of Clarity Angular select (no-clr-select)

The use of Clarity Angular select is discouraged. Use Clarity Core select instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<select clrSelect name="options" [(ngModel)]="options">
  <option value="one">One</option>
  <option value="two">Two</option>
  <option value="three">Three</option>
</select>
```

Examples of **correct** code for this rule:

```html
<cds-select control-width="shrink">
  <select>
    <option>One</option>
    <option>Two</option>
    <option>Three</option>
  </select>
</cds-select>
```
