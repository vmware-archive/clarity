/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  animate,
  AnimationResponsivePopupEnterName,
  AriaPopupController,
  AxisAligns,
  baseStyles,
  event,
  EventEmitter,
  getElementUpdates,
  i18n,
  I18nService,
  isScrollable,
  PositionableElement,
  property,
  querySlot,
  reverseAnimation,
  setAttributes,
  setPopupPosition,
  state,
} from '@cds/core/internal';
import { html, PropertyValues } from 'lit';
import { query } from 'lit/decorators/query.js';
import { CdsInternalStaticOverlay } from '@cds/core/internal-components/overlay';

import sharedStyles from '../overlay/shared.element.scss';
import styles from './popup.element.scss';
import { CdsInternalPointer } from './pointer.element.js';

/**
 * ```typescript
 * import '@cds/core/internal-components/popup/register.js';
 * ```
 *
 * ```html
 * <cds-internal-popup>
 *  <section cds-layout="vertical align:horizontal-stretch">
 *    <div cds-layout="vertical pad:md gap:md">
 *      <h2 cds-text="display">A Title</h2>
 *      <div>
 *        <p cds-text="body">
 *          Content inside a generic popup.
 *        </p>
 *      </div>
 *    </div>
 *  </section>
 * </cds-internal-popup>
 * ```
 *
 * @beta
 * @element cds-internal-popup
 * @slot - Content slot for the content inside the popup's panel
 * @event closeChange - Notify user when close event has occurred
 * @cssprop --active-corner-border-radius
 * @cssprop --background
 * @cssprop --backdrop-background
 * @cssprop --layered-backdrop-background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --box-shadow
 * @cssprop --close-button-offset
 * @cssprop --color
 * @cssprop --min-height
 * @cssprop --min-width
 * @cssprop --max-height
 * @cssprop --max-width
 * @cssprop --mobile-max-height
 * @cssprop --overflow - sets overflow x and y values respectively
 * @cssprop --height
 * @cssprop --width
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 *
 * KNOWN ISSUE: Safari jumps through the exit animation but only when the ESC key is pressed.
 *
 */
@animate({
  hidden: {
    true: reverseAnimation(AnimationResponsivePopupEnterName),
    false: AnimationResponsivePopupEnterName,
  },
})
export class CdsInternalPopup extends CdsInternalStaticOverlay implements PositionableElement {
  // --- mixins/composables ---

  protected ariaPopupController = new AriaPopupController(this);

  @i18n() i18n = I18nService.keys.popup;

  @property({ type: String })
  cdsMotion = 'on';

  /**
   * force responsive by setting orientation to 'none'.
   * do not manipulate the responsive property because the
   * positioning logic may override your changes.
   */
  /** @private */
  @state({ type: Boolean, reflect: true, attribute: 'responsive' })
  responsive = false;

  @event()
  cdsMotionChange: EventEmitter<string>;

  // --- anchor ---

  /**
   *
   * @type {HTMLElement}
   * @memberof CdsInternalPopup
   * Used to perform lookups for anchors. If unset, it assumes that the document is the container
   * and will then only check for anchors in the light DOM. If set to something other than the
   * document, it will perform checks in both the light and shadow DOM of the given container.
   * This is useful in the situation where an anchor is wrapped up with the dropdown in a parent
   * wrapper element.
   *
   */
  container: HTMLElement;

  /**
   * Accepts both an HTMLElement and a string
   */
  @property({ type: String, reflect: true }) anchor: HTMLElement | string;

  // this getter is stealth private so we can test it in isolation
  /** @private */
  get anchorElement(): HTMLElement | null {
    const anchor = this.anchor;

    // if string we have an id
    if (typeof anchor === 'string') {
      // check shadowRoot first in the event that we have a wrapper web component
      const shadowAnchor = (this.getRootNode() as HTMLElement).querySelector<HTMLElement>(`#${anchor}`);

      if (shadowAnchor === null) {
        // check document/light-dom next; lookup below returns an element or null
        return (this.getRootNode({ composed: true }) as HTMLElement).querySelector<HTMLElement>(`#${this.anchor}`);
      } else {
        return shadowAnchor;
      }
    }

    // anchor is not an id/string; so return whatever it is
    return anchor;
  }

  @property({ type: String })
  anchorAlign: AxisAligns = 'start';

  /** @private */
  get anchorRect(): DOMRect {
    return this.anchorElement?.getBoundingClientRect() || new DOMRect();
  }

  // --- offsets ---
  @property({ type: Number })
  mainAxisOffset: number;

  @property({ type: Number })
  crossAxisOffset: number;

  // --- orientation ---

  @property({ type: String })
  orientation: string;

  // --- close button ---
  /**
   * If false, the dropdown will not show a close button ever.
   * If true, it will always show a close button.
   * If undefined, it will only show a close button when responsive. a11y expects a close button when responsive.
   *
   */
  @property({ type: Boolean })
  closable: boolean;

  // --- pointer ---
  @property({ type: String })
  pointerAlign: AxisAligns = 'start';

  @querySlot('cds-internal-pointer', { assign: 'pointer' }) pointer: CdsInternalPointer;

  /** @private */
  @query('.popup-pointer') pointerWrapper: HTMLElement;

  // --- wrappers ---

  /** @private */
  @query('.private-host') hostWrapper: HTMLElement; // this gets positioned

  /** @private */
  @query('.popup-wrapper') popupWrapper: HTMLElement; // this gets flexed

  /** @private */
  @query('.popup-content') contentWrapper: HTMLElement; // this gets measured and gets close-btn injected into it

  // --- observers and callbacks ---

  protected observers: (MutationObserver | ResizeObserver)[] = [];

  private setUpPositioningObserver() {
    this.observers.push(
      getElementUpdates(this, 'hidden', () => {
        if (this.hidden === false) {
          setPopupPosition(this);
        }
      })
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observers.forEach(o => o.disconnect());
  }

  // --- lifecycle ---

  firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);
    this.setUpPositioningObserver();
  }

  updated(props: PropertyValues<this>) {
    if (this.pointer && !this.pointer.hasAttribute('part')) {
      setAttributes(this.pointer, ['part', 'pointer']);
    }

    if (props.has('hidden')) {
      setAttributes(this.contentWrapper, ['tabindex', isScrollable(this.contentWrapper) ? '0' : false]);
    }

    super.updated(props);
  }

  // --- render and styles ---

  protected render() {
    return html`
      ${this.backdropTemplate}
      <div class="private-host" tabindex="-1">
        <div cds-layout="display:screen-reader-only">${this.i18n.contentStart}</div>
        <div class="popup-wrapper">
          <div class="popup-content">
            ${this.closable || this.responsive ? this.closeButtonTemplate : ''}
            <slot></slot>
          </div>
          <div class="pointer-wrapper">
            <div class="popup-pointer"><slot name="pointer"></slot></div>
          </div>
        </div>
        <div cds-layout="display:screen-reader-only">${this.i18n.contentEnd}</div>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles, sharedStyles];
  }
}
