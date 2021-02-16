# Disallows usage of Clarity Angular password (no-clr-password)

The use of Clarity Angular password is discouraged. Use Clarity Core password instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-password-container>
  <label>password</label>
  <input clrPassword placeholder="Password" name="password" [(ngModel)]="exampleOne" />
</clr-password-container>
```

Examples of **correct** code for this rule:

```html
<cds-password>
  <label>password</label>
  <input type="password" />
</cds-password>
```
