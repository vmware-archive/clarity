import { ReactiveController, ReactiveElement } from 'lit';

export type ButtonAnchor = ReactiveElement &
  HTMLElement & {
    readonly: boolean;
  };

/**
 * Shim for allowing custom element button types to be wrapped with anchors as Safari prevents use of extending native element types.
 * Will detect presence of anchor and set component to a readonly button state.
 *
 * Example:
 *
 * ```html
 * <a href="#">
 *  <cds-button></cds-button>
 * </a>
 * ```
 */
export function buttonAnchor<T extends ButtonAnchor>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new ButtonAnchorController(instance));
}

export class ButtonAnchorController<T extends ButtonAnchor> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    const hasAnchor = this.host.parentElement?.tagName === 'A';
    if (hasAnchor && this.host.parentElement) {
      this.host.readonly = hasAnchor;
      this.host.parentElement.style.lineHeight = '0';
      this.host.parentElement.style.textDecoration = 'none'; // fixes issue when style is applied to text node
    }
  }
}
