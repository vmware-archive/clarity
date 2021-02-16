# Disallows usage of Clarity Angular modal (no-clr-modal)

The use of Clarity Angular modal is discouraged. Use Clarity Core modal instead.

## Rule Details

Examples of **incorrect** code for this rule:

```html
<clr-modal [(clrModalOpen)]="openModal">
  <h3 class="modal-title">I have a nice title</h3>
  <div class="modal-body">
    <p>But not much to say...</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline" (click)="openModal = false">Cancel</button>
    <button type="button" class="btn btn-primary" (click)="openModal = false">Ok</button>
  </div>
</clr-modal>
```

Examples of **correct** code for this rule:

```html
<cds-modal>
  <cds-modal-header>
    <h3 cds-text="title">I have a nice title</h3>
  </cds-modal-header>
  <cds-modal-content>
    <p cds-text="body">But not much to say...</p>
  </cds-modal-content>
  <cds-modal-actions>
    <cds-button action="outline">Cancel</cds-button>
    <cds-button>Ok</cds-button>
  </cds-modal-actions>
</cds-modal>
```
