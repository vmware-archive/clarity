/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, TemplateResult } from 'lit';
import { query } from 'lit/decorators/query.js';
import {
  animate,
  Animatable,
  AnimationModalEnterName,
  i18n,
  I18nService,
  isScrollable,
  property,
  reverseAnimation,
  setAttributes,
  querySlot,
} from '@cds/core/internal';
import { CdsInternalOverlay } from '@cds/core/internal-components/overlay';
import styles from './modal.element.scss';
import { CdsModalHeader } from './modal-header.element';
import { CdsModalActions } from './modal-actions.element';

/**
 * Web component modal.
 *
 * ```typescript
 * import '@cds/core/modal/register.js';
 * ```
 *
 * ```html
 * <cds-modal>
 *   <cds-modal-header>
 *      <h3 cds-text="title">My Modal</h3>
 *   </cds-modal-header>
 *   <cds-modal-content>
 *     <p>Lorem Ipsum</p>
 *   </cds-modal-content>
 *   <cds-modal-actions>
 *       <cds-button>Ok</cds-button>
 *   </cds-modal-actions>
 * </cds-modal>
 * ```
 *
 * @element cds-modal
 * @slot
 * @slot cds-modal-content
 * @slot cds-modal-header
 * @slot cds-modal-actions
 * @event closeChange - notify when the user has clicked the close button
 * @cssprop --backdrop-background - inherited from the internal overlay component
 * @cssprop --layered-backdrop-background - inherited from the internal overlay component
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --border-radius
 * @cssprop --background
 * @cssprop --box-shadow
 * @cssprop --width
 * @cssprop --content-overflow - set as { x, y }. take care when customizing because overflow settings can have unintended side effects.
 * @cssprop --max-height - sets hard limit on height of modal
 * @cssprop --tablet-max-height - sets hard limit on height of modal when on a tablet in landscape mode
 */
@animate({
  hidden: {
    true: reverseAnimation(AnimationModalEnterName),
    false: AnimationModalEnterName,
  },
})
export class CdsModal extends CdsInternalOverlay implements Animatable {
  protected get customBumpers(): [HTMLElement, HTMLElement] {
    return [this.modalHeader, this.modalFooter];
  }

  static get styles() {
    return [...super.styles, styles];
  }

  @i18n() i18n = I18nService.keys.modal;

  /** If false, the modal will not render the close button.  */
  @property({ type: Boolean })
  closable = true;

  @property({ type: Boolean })
  hidden = true;

  /** Sets the overall height and width of the modal and icon based on value */
  @property({ type: String })
  size: 'default' | 'sm' | 'lg' | 'xl';

  @query('.modal-body') content: HTMLElement;
  @querySlot('cds-modal-header') modalHeader: CdsModalHeader;
  @querySlot('cds-modal-actions') modalFooter: CdsModalActions;

  protected isScrollable = false;

  updated(props: Map<string, any>) {
    if (props.has('hidden') && props.get('hidden') === true) {
      this.isScrollable = isScrollable(this.content);
      setAttributes(
        this.content,
        ['tabindex', this.isScrollable ? '0' : false],
        ['aria-label', this.isScrollable ? this.i18n.contentBox : false]
      );
    }

    super.updated(props);
  }

  private get modalFooterTemplate(): TemplateResult {
    if (this.modalFooter) {
      return html`<div cds-layout="align-stretch p-x:lg p-b:lg">
        <slot name="modal-actions"></slot>
      </div>`;
    } else {
      return html``;
    }
  }

  // modal-body requires a tab index so it can be scrolled
  render() {
    return html`
      ${this.backdropTemplate}
      <div class="modal-dialog private-host" tabindex="-1" cds-layout="m:md m@md:xl">
        <div cds-layout="display:screen-reader-only">${this.i18n.contentStart}</div>
        <div class="modal-content" cds-layout="vertical gap:md gap@md:lg align:stretch">
          <div cds-layout="horizontal gap:md wrap:none align:vertical-center p-x:lg p-t:lg">
            <div>
              <slot name="modal-header"></slot>
            </div>
            <div cds-layout="align:right">
              <slot name="modal-header-actions"></slot>
            </div>
            ${this.closable ? this.closeButtonTemplate : ''}
          </div>
          <div class="modal-body" cds-layout="p-x:lg">
            <slot></slot>
          </div>
          ${this.modalFooterTemplate}
        </div>
        <div cds-layout="display:screen-reader-only">${this.i18n.contentEnd}</div>
      </div>
    `;
  }
}
