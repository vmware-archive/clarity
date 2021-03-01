# Disallows usage of Clarity Angular label (no-clr-label)

The use of Clarity Angular label is discouraged. Use Clarity Core label instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<span class="label">Seattle</span>
<span class="label label-purple">Austin</span>
<span class="label label-blue">New York</span>
<span class="label label-orange">Palo Alto</span>
<span class="label label-light-blue">San Francisco</span>
```

Examples of **correct** code for this rule:

```html
<cds-tag readonly>Seattle</cds-tag>
<cds-tag readonly color="purple">Austin</cds-tag>
<cds-tag readonly color="blue">New York</cds-tag>
<cds-tag readonly color="orange">Palo Alto</cds-tag>
<cds-tag readonly color="light-blue">San Francisco</cds-tag>
```
