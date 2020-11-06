/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, internalProperty } from 'lit-element';
import { CommonStringsService } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { folderIcon } from '@cds/core/icon/shapes/folder.js';
import { styles } from './file.element.css.js';

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
  @internalProperty() private buttonLabel = CommonStringsService.keys.browse;

  @internalProperty() protected fixedControlWidth = true;

  @internalProperty() protected supportsPrefixSuffixActions = false;

  static get styles() {
    return [...super.styles, styles];
  }

  protected get inputTemplate() {
    return html`
      <div>
        <cds-button size="sm" action="outline" @click="${() => this.label.click()}" ?disabled=${this.disabled}>
          <cds-icon shape="folder" aria-hidden="true"></cds-icon>
          ${this.buttonLabel}
        </cds-button>
        ${this.clearFiles}
      </div>
    `;
  }

  protected get clearFiles() {
    return this.inputControl.files?.length
      ? html` <cds-control-action
          @click="${() => this.updateLabel()}"
          aria-label="${CommonStringsService.keys.removeFile}"
        >
          <cds-icon shape="times"></cds-icon>
        </cds-control-action>`
      : html``;
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.inputControl.addEventListener('change', e => this.updateLabel((e.target as any).files));
  }

  private updateLabel(files?: FileList) {
    if (files && files.length) {
      this.buttonLabel = files.length > 1 ? `${files.length} ${CommonStringsService.keys.files}` : files[0].name;
    } else {
      this.buttonLabel = CommonStringsService.keys.browse;
      this.inputControl.value = '';
    }
  }

  constructor() {
    super();
    ClarityIcons.addIcons(folderIcon);
  }
}
