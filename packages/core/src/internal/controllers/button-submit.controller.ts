import { html, ReactiveController, ReactiveElement } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { stopEvent } from '../utils/events.js';
import { onAnyKey } from '../utils/keycodes.js';
import { renderAfter } from '../utils/lit.js';

export type ButtonSubmit = ReactiveElement &
  HTMLElement & {
    name: string;
    value: string;
    disabled: boolean;
    type: 'button' | 'submit';
    readonly: boolean;
  };

/**
 * Shim for allowing native submit type events with custom element buttons as Safari prevents use of extending native element types
 */
export function buttonSubmit<T extends ButtonSubmit>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new ButtonSubmitController(instance));
}

export class ButtonSubmitController<T extends ButtonSubmit> implements ReactiveController {
  private triggerNativeButtonBehaviorHandler = this.triggerNativeButtonBehavior.bind(this);
  private emulateKeyBoardEventBehaviorHandler = this.emulateKeyBoardEventBehavior.bind(this);

  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    this.setButtonType();
    this.setupNativeButtonBehavior();
  }

  private setButtonType() {
    if (!this.host.type && this.host.closest('form')) {
      this.host.type = 'submit';
    }
  }

  private setupNativeButtonBehavior() {
    if (this.host.readonly || this.host.disabled) {
      this.host.removeEventListener('click', this.triggerNativeButtonBehaviorHandler);
      this.host.removeEventListener('keyup', this.emulateKeyBoardEventBehaviorHandler);
    } else {
      this.host.addEventListener('click', this.triggerNativeButtonBehaviorHandler);
      this.host.addEventListener('keyup', this.emulateKeyBoardEventBehaviorHandler);
    }
  }

  private emulateKeyBoardEventBehavior(evt: KeyboardEvent) {
    onAnyKey(['enter', 'space'], evt, () => {
      // When submitting forms with Enter key, the default submit button receives a click event from the form.
      if (this.host.type === 'submit') {
        this.triggerNativeButtonBehavior(evt);
      } else {
        this.host.click();
      }
      stopEvent(evt);
    });
  }

  /**
   * We have to append a hidden button outside the web component in the light DOM
   * This allows us to trigger native submit events within a form element.
   */
  private triggerNativeButtonBehavior(event: Event) {
    if (this.host.disabled) {
      stopEvent(event);
    } else if (!event.defaultPrevented) {
      const submitButton = renderAfter(
        html`<button
          aria-hidden="true"
          role="presentation"
          ?disabled="${this.host.disabled}"
          tabindex="-1"
          style="display: none !important"
          value="${ifDefined(this.host.value)}"
          name="${ifDefined(this.host.name)}"
          type="${ifDefined(this.host.type)}"
        ></button>`,
        this.host
      );

      submitButton?.dispatchEvent(new MouseEvent('click', { relatedTarget: this.host, composed: true }));
      submitButton?.remove();
    }
  }
}
