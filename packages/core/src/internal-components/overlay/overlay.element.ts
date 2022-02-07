/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  AnimationModalEnterName,
  animate,
  baseStyles,
  CdsBaseFocusTrap,
  createId,
  event,
  EventEmitter,
  FocusTrapTrackerService,
  HTMLAttributeTuple,
  i18n,
  I18nService,
  setAttributes,
  state,
  property,
  reverseAnimation,
} from '@cds/core/internal';
import { html } from 'lit';
import { query } from 'lit/decorators/query.js';
import styles from './overlay.element.scss';
import sharedStyles from './shared.element.scss';

export function isNestedOverlay(
  myId: string,
  overlayPrefix: string,
  trapIds: string[],
  previousValue?: boolean
): boolean {
  const overlayIds = trapIds.filter(id => id.indexOf(overlayPrefix) > -1);

  if (previousValue === true && trapIds.indexOf(myId) < 0) {
    // handling situation where focusTrapIds remove our overlay from the list and we still need to consider
    // this overlay as nested. this happens when an overlay is being closed/hidden
    return true;
  }

  return overlayIds.indexOf(myId) > 0; // id is present and not the first one...
}

export function overlayIsActive(overlayId: string, focusTrapService = FocusTrapTrackerService) {
  return focusTrapService.getCurrent()?.focusTrapId === overlayId;
}

export type CloseChangeSources = 'backdrop-click' | 'escape-keypress' | 'close-button-click' | 'custom';

/** @private */
export class CdsInternalStaticOverlay extends CdsBaseFocusTrap {
  @property({ type: Boolean })
  closable = false;

  @property({ type: Boolean, attribute: 'cds-ignore-focus-trap' })
  ignoreFocusTrap = false;

  protected get customBumpers(): [HTMLElement, HTMLElement] | [] {
    return [];
  }

  @i18n() i18n = I18nService.keys.overlay;

  // renderRoot needs delegatesFocus so that focus can cross the shadowDOM
  // inside an element with aria-modal set to true
  /** @private */
  static get shadowRootOptions(): any {
    // any is used until TS 4.4.x adopted through other @cds/* libraries. Can be removed in 6.0
    return { ...super.shadowRootOptions, delegatesFocus: true };
  }

  private overlayIdPrefix = '_overlay-';

  @event() closeChange: EventEmitter<CloseChangeSources>;

  @state({ type: Boolean })
  protected isLayered = false;

  @state({ type: String })
  protected focusTrapId: string;

  /* @private */
  getFocusTrapId(): string {
    // we need this for some unit tests
    return this.focusTrapId;
  }

  /* c8 ignore next */
  @query('.overlay-backdrop') protected backdrop: HTMLElement;

  connectedCallback() {
    super.connectedCallback();
    this.ariaModal = 'true';
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.backdrop.addEventListener('click', this.fireEventOnBackdropClick);
  }

  updated(props: Map<string, any>) {
    super.updated(props);
    const oldLayered = this.isLayered;
    const newLayered = isNestedOverlay(
      this.focusTrapId,
      this.overlayIdPrefix,
      FocusTrapTrackerService.getTrapElements().map(e => e.focusTrapId),
      oldLayered
    );

    if (oldLayered !== newLayered) {
      this.isLayered = newLayered;
      this.requestUpdate('isLayered', oldLayered);
    }

    this.setAriaRole();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.backdrop.removeEventListener('click', this.fireEventOnBackdropClick);
  }

  // we do this so that screen-readers can make their way through nested/layered overlays.
  // it sets a virtual cursor trap on the top-most overlay
  private setAriaRole() {
    const myRole = FocusTrapTrackerService.getCurrent()?.focusTrapId === this.focusTrapId ? 'dialog' : 'region';
    setAttributes(this, ['role', myRole]);
  }

  protected get closeButtonAttrs(): HTMLAttributeTuple[] {
    return [
      ['cds-layout', 'align:top'],
      ['aria-label', this.i18n.closeButtonAriaLabel],
      ['icon-size', '24'],
    ];
  }

  constructor() {
    super();

    // override focus-trap base id so we know this is an overlay
    this.focusTrapId = createId(this.overlayIdPrefix);
  }

  closeOverlay(trigger: CloseChangeSources = 'custom') {
    this.closableController.close(trigger);
  }

  protected get closeButtonTemplate() {
    return html`<cds-internal-close-button
      cds-layout="align:top"
      aria-label=${this.i18n.closeButtonAriaLabel}
      icon-size="24"
      @click=${() => this.closeOverlay('close-button-click')}
    ></cds-internal-close-button>`;
  }

  protected get backdropTemplate() {
    return html`<div
      class="${this.isLayered ? 'overlay-backdrop layered' : 'overlay-backdrop'}"
      aria-hidden="true"
    ></div>`;
  }

  protected render() {
    return html`
      ${this.backdropTemplate}
      <div class="private-host" tabindex="-1">
        <slot></slot>
      </div>
    `;
  }

  protected fireEventOnBackdropClick = () => {
    if (overlayIsActive(this.focusTrapId)) {
      this.closeOverlay('backdrop-click');
    }
  };

  static get styles() {
    return [baseStyles, styles, sharedStyles];
  }
}

/**
 *
 * ```typescript
 * import '@cds/core/internal-components/overlay/register.js';
 * ```
 *
 * ```html
 * <cds-internal-overlay>
 *  <section cds-layout="vertical align:horizontal-stretch">
 *    <div cds-layout="vertical pad:md gap:md">
 *      <h2 cds-text="display">A Title</h2>
 *      <div>
 *        <p cds-text="body">
 *          Content inside a generic overlay.
 *        </p>
 *      </div>
 *    </div>
 *  </section>
 * </cds-internal-overlay>
 * ```
 *
 * @beta
 * @element cds-internal-overlay
 * @slot - Content slot for the content inside the overlay's panel
 * @event closeChange - Notify user when close event has occurred
 * @cssprop --backdrop-background
 * @cssprop --layered-backdrop-background
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 *
 * KNOWN ISSUE: Safari jumps through the exit animation but only when the ESC key is pressed.
 *
 */
@animate({
  hidden: {
    true: reverseAnimation(AnimationModalEnterName),
    false: AnimationModalEnterName,
  },
})
export class CdsInternalOverlay extends CdsInternalStaticOverlay {
  @property({ type: String })
  cdsMotion = 'on';

  @event()
  cdsMotionChange: EventEmitter<string>;
}
