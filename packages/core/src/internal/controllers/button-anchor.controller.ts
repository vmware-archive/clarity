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
  private previousAnchor: HTMLElement;

  private get currentAnchor() {
    return this.host.parentElement?.tagName === 'A' ? this.host.parentElement : null;
  }

  constructor(private host: T) {
    this.host.addController(this);
  }

  hostConnected() {
    this.setAnchor();
  }

  hostUpdated() {
    this.setAnchor();
  }

  private setAnchor() {
    if (this.currentAnchor && this.currentAnchor !== this.previousAnchor) {
      this.previousAnchor = this.currentAnchor;
      this.host.readonly = true;
      this.currentAnchor.style.lineHeight = '0';
      this.currentAnchor.style.textDecoration = 'none'; // fixes issue when style is applied to text node
    }
  }
}
