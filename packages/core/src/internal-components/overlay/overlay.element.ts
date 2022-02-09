/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Animatable,
  animate,
  baseStyles,
  createId,
  CdsBaseFocusTrap,
  event,
  EventEmitter,
  FocusTrapTrackerService,
  state,
  onKey,
  property,
  AnimationModalEnterName,
  reverseAnimation,
} from '@cds/core/internal';
import { html, PropertyValues } from 'lit';
import { query } from 'lit/decorators/query.js';
import styles from './overlay.element.scss';

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

type CloseChangeSources = 'backdrop-click' | 'escape-keypress' | 'close-button-click' | 'custom';

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
export class CdsInternalOverlay extends CdsBaseFocusTrap implements Animatable {
  @property({ type: String })
  cdsMotion = 'on';

  @event()
  cdsMotionChange: EventEmitter<string>;

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

  @query('.overlay-backdrop') protected backdrop: HTMLElement;

  firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);
    this.backdrop.addEventListener('click', this.fireEventOnBackdropClick);
  }

  updated(props: PropertyValues<this>) {
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
  }

  connectedCallback() {
    super.connectedCallback();
    this.ariaModal = 'true';
    this.role = 'dialog';
    window.addEventListener('keydown', this.fireEventOnEscape);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.fireEventOnEscape);
    this.backdrop.removeEventListener('click', this.fireEventOnBackdropClick);
  }

  constructor() {
    super();

    // override focus-trap base id so we know this is an overlay
    this.focusTrapId = createId(this.overlayIdPrefix);
  }

  closeOverlay(trigger: CloseChangeSources = 'custom') {
    this.closeChange.emit(trigger);
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
      <div class="private-host" tabindex="-1" aria-modal="true" role="dialog">
        <slot></slot>
      </div>
    `;
  }

  protected fireEventOnBackdropClick = () => {
    if (overlayIsActive(this.focusTrapId)) {
      this.closeOverlay('backdrop-click');
    }
  };

  protected fireEventOnEscape = (e: KeyboardEvent) => {
    if (overlayIsActive(this.focusTrapId)) {
      onKey('escape', e, () => {
        this.closeOverlay('escape-keypress');
      });
    }
  };

  static get styles() {
    return [baseStyles, styles];
  }
}
