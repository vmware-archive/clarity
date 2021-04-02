import { ReactiveControllerHost } from 'lit';
import { createFragment } from '../utils/dom.js';
import { getFlattenedFocusableItems } from '../utils/traversal.js';
import { getHostElementToFocus } from './utils/first-focus.controller.utils.js';

/**
 * Focus Trap that given a DOM element creates a flattened tree traversal
 * between both Shadow DOM and Light DOM
 */
export class InlineFocusTrapController {
  constructor(private host: ReactiveControllerHost & HTMLElement, private config = { start: 'start', end: 'end' }) {
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

  async hostConnected() {
    await this.host.updateComplete;

    const style =
      '<style>:host(:host:focus-within) [cds-focus-boundary],:host(:focus-within) [cds-focus-boundary] {display: block !important}</style>';

    const trap = (v: string) =>
      `<div cds-focus-boundary tabindex="0" style="display:none;position:absolute;width:1px;height:1px;clip:rect(0,0,0,0)">${v}</div>`;

    // this guards against multiple hostConnected calls adding multiple bumpers (this was happening)
    const existingBoundaries = Array.from(this.root.querySelectorAll('[cds-focus-boundary]'));

    if (existingBoundaries.length === 0) {
      this.root.appendChild(createFragment(style));
      this.root.prepend(createFragment(trap(this.config.start)));
      this.root.appendChild(createFragment(trap(this.config.end)));
      this.host.setAttribute('cds-focus-trap', '');
    }

    const [start, end] = Array.from(this.root.querySelectorAll('[cds-focus-boundary]'));

    start.addEventListener('focusin', () =>
      (this.focusableItems.length > 0
        ? this.focusableItems[this.focusableItems.length - 1]
        : getHostElementToFocus(this.host)
      ).focus()
    );

    end.addEventListener('focusin', () =>
      (this.focusableItems.length > 0 ? this.focusableItems[0] : getHostElementToFocus(this.host)).focus()
    );
  }
}
