# Disallows usage of Clarity Angular range (no-clr-range)

The use of Clarity Angular range is discouraged. Use Clarity Core range instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-range-container>
  <label>range</label>
  <input type="range" clrRange min="60" max="80" />
</clr-range-container>
```

Examples of **correct** code for this rule:

```html
<cds-range>
  <label>range</label>
  <input type="range" min="60" max="80" />
</cds-range>
```
