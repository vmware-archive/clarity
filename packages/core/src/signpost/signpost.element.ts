/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { property } from '@cds/core/internal';
import { CdsInternalPopup } from '@cds/core/internal-components/popup';

/**
 * Signposts are dropdowns which default to having a pointer and a close
 * action. Like dropdowns, signposts are generic containers that are
 * designed to hold any type of content.
 *
 * ```typescript
 * import '@cds/core/signpost/register.js';
 * ```
 *
 * ```html
 * <cds-signpost>...</cds-signpost>
 * ```
 * @beta
 * @element cds-signpost
 * @slot - Content slot for the content inside the signpost
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
 * @property trigger
 *
 */
export class CdsSignpost extends CdsInternalPopup {
  @property({ type: Boolean })
  closable = true;

  @property({ type: String })
  defaultPointerType: string | null = 'angle';
}
