# Disallows usage of Clarity Angular icons (no-clr-icon)

The use of Clarity Angular icons is discouraged. Use Clarity Core icons instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-icon></clr-icon>
<clr-icon dir="left"></clr-icon>
<clr-icon dir="left" class="is-inverse my-class is-solid has-badge--info"></clr-icon>
```

Examples of **correct** code for this rule:

```html
<cds-icon></cds-icon>
<cds-icon direction="left"></cds-icon>
<cds-icon direction="left" class="my-class" inverse solid badge="info"></cds-icon>
```
