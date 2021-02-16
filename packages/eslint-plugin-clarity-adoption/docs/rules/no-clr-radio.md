# Disallows usage of Clarity Angular radio (no-clr-radio)

The use of Clarity Angular radio is discouraged. Use Clarity Core radio instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-radio-container clrInline>
  <label>radio group</label>
  <clr-radio-wrapper>
    <input type="radio" clrRadio name="options" required value="option1" [(ngModel)]="options" />
    <label>radio 1</label>
  </clr-radio-wrapper>
  <clr-radio-wrapper>
    <input type="radio" clrRadio name="options" required value="option2" [(ngModel)]="options" />
    <label>radio 2</label>
  </clr-radio-wrapper>
</clr-radio-container>
```

Examples of **correct** code for this rule:

```html
<cds-radio-group>
  <label>radio group</label>
  <cds-radio>
    <label>radio 1</label>
    <input type="radio" checked />
  </cds-radio>
  <cds-radio>
    <label>radio 2</label>
    <input type="radio" />
  </cds-radio>
</cds-radio-group>
```
