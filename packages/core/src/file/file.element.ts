/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, PropertyValues } from 'lit';
import { state } from '@cds/core/internal';
import { i18n, I18nService } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import styles from './file.element.scss';

/**
 * Time Input
 *
 * ```typescript
 * import '@cds/core/file/register.js';
 * ```
 *
 * ```html
 * <cds-file>
 *   <label>file</label>
 *   <input type="file" />
 * </cds-file>
 * ```
 *
 * @element cds-file
 * @slot - For projecting file input and label
 */
export class CdsFile extends CdsControl {
  @i18n() i18n = I18nService.keys.file;

  @state() private buttonLabel = this.i18n.browse;

  @state() protected fixedControlWidth = true;

  @state() protected supportsPrefixSuffixActions = false;

  static get styles() {
    return [...super.styles, styles];
  }

  protected get inputTemplate() {
    return html`
      <div cds-layout="horizontal gap:sm align:vertical-center">
        <cds-button size="sm" action="outline" @click="${() => this.label.click()}" ?disabled=${this.disabled}>
          <cds-icon shape="folder" aria-hidden="true"></cds-icon>
          <span>${this.buttonLabel}</span>
        </cds-button>
        ${this.clearFilesControlTemplate}
      </div>
    `;
  }

  protected get clearFilesControlTemplate() {
    return this.inputControl.files?.length && !this.disabled
      ? html`<cds-button-action
          shape="times"
          @click=${() => this.clearFiles()}
          aria-label="${this.i18n.removeFile}"
        ></cds-button-action>`
      : html``;
  }

  firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);
    (this.inputControl as Element).addEventListener('change', e => {
      // NOTE: have to distinguish here being user-caused events and programmatic
      // events (e.isTrusted true/false) so that we don't fire a change event loop
      if (e.isTrusted) {
        this.updateLabelAndFocus((e.target as any).files);
      }
    });
  }

  /** @private */
  clearFiles(fireEvent = true) {
    this.buttonLabel = this.i18n.browse;
    this.inputControl.value = '';

    // when input is reset like this it isn't registering an onchange event
    // NOTE: tsc + karma is complaining about dispatchEvent being a method on inputControl
    if (fireEvent && this.inputControl.dispatchEvent) {
      (this.inputControl as Element).dispatchEvent(new Event('change'));
    }

    const browseButton = this.shadowRoot?.querySelector('cds-button');
    if (browseButton) {
      browseButton.focus();
    }
  }

  /** @private */
  updateLabelAndFocus(files?: FileList) {
    if (files && files.length) {
      this.buttonLabel = files.length > 1 ? `${files.length} ${this.i18n.files}` : files[0].name;
    } else {
      this.clearFiles(false);
    }
  }
}
