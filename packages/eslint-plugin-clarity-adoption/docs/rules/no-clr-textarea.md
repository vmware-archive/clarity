# Disallows usage of Clarity Angular textarea (no-clr-textarea)

The use of Clarity Angular textarea is discouraged. Use Clarity Core textarea instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-textarea-container>
  <label>textarea</label>
  <textarea clrTextarea [(ngModel)]="description"></textarea>
</clr-textarea-container>
```

Examples of **correct** code for this rule:

```html
<cds-textarea control-width="shrink">
  <label>textarea</label>
  <textarea></textarea>
</cds-textarea>
```
