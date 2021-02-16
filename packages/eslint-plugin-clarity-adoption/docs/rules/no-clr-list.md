# Disallows usage of Clarity Angular list (no-clr-list)

The use of Clarity Angular list is discouraged. Use Clarity Core list instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```

Examples of **correct** code for this rule:

```html
<ul cds-list>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
```
