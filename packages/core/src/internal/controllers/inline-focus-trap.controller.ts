import { html, ReactiveController, ReactiveElement } from 'lit';
import { getFlattenedFocusableItems } from '../utils/traversal.js';
import { renderAfter, renderBefore } from '../utils/lit.js';
import { ignoreFocus } from '../utils/focus.js';

/**
 * Focus Trap that given a DOM element creates a flattened tree traversal
 * between both Shadow DOM and Light DOM
 *
 * safari https://bugs.webkit.org/show_bug.cgi?id=174667
 */
export function focusTrap<T extends ReactiveElement>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new InlineFocusTrapController(instance));
}

export class InlineFocusTrapController<T extends ReactiveElement> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  private get focusableItems() {
    return getFlattenedFocusableItems(this.root).filter(
      e =>
        !e.hasAttribute('cds-focus-boundary') && (this.root.contains(e) || e.closest('[cds-focus-trap]') === this.host)
    );
  }

  private get root() {
    return (this.host.shadowRoot ? this.host.shadowRoot : this.host) as HTMLElement;
  }

  private get styles() {
    return html`<style cds-focus-style>
      :host(:host:focus-within) [cds-focus-boundary],
      :host(:focus-within) [cds-focus-boundary] {
        display: block !important;
      }
    </style>`;
  }

  private boundary(index: number) {
    return html`<div
      @focusin=${() => this.focusableItems.at(index)?.focus()}
      test=${index}
      cds-focus-boundary
      tabindex="0"
      style="display:none;position:absolute;width:1px;height:1px;clip:rect(0,0,0,0)"
    >
      boundary
    </div>`;
  }

  async hostConnected() {
    await this.host.updateComplete;
    if (!ignoreFocus(this.host)) {
      renderBefore(this.styles, this.root);
      renderBefore(this.boundary(-1), this.root);
      renderAfter(this.boundary(0), this.root);
      this.host.setAttribute('cds-focus-trap', '');
    }
  }
}
