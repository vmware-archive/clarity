# Disallows usage of Clarity Angular accordion (no-clr-accordion)

The use of Clarity Angular accordion is discouraged. Use Clarity Core accordion instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-accordion>
  <clr-accordion-panel>
    <clr-accordion-content *clrIfExpanded>Content 1</clr-accordion-content>
  </clr-accordion-panel>
</clr-accordion>
```

Examples of **correct** code for this rule:

```html
<cds-accordion>
  <cds-accordion-section expanded>
    <cds-accordion-header>Expanded accordion panel</cds-accordion-header>
    <cds-accordion-content>
      <p cds-text="body">Content 1</p>
    </cds-accordion-content>
  </cds-accordion-section>
</cds-accordion>
```
