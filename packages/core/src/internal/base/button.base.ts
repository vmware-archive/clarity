/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement } from 'lit';
import { property } from '../decorators/property.js';
import { active } from '../controllers/active.controller.js';
import { ariaPopupTrigger } from '../controllers/aria-popup-trigger.controller.js';
import { ariaDisabled } from '../controllers/aria-disabled.controller.js';
import { ariaPressed } from '../controllers/aria-pressed.controller.js';
import { ariaButton } from '../controllers/aria-button.controller.js';
import { buttonAnchor } from '../controllers/button-anchor.controller.js';
import { buttonSubmit } from '../controllers/button-submit.controller.js';
import { ariaExpanded } from '../controllers/aria-expanded.controller.js';

/**
 * Base class that provides all nessesary behavior for enabling a custom element to emulate a native button.
 */
@active<CdsBaseButton>()
@ariaButton<CdsBaseButton>()
@ariaPressed<CdsBaseButton>()
@ariaExpanded<CdsBaseButton>()
@ariaDisabled<CdsBaseButton>()
@ariaPopupTrigger<CdsBaseButton>()
@buttonSubmit<CdsBaseButton>()
@buttonAnchor<CdsBaseButton>()
export class CdsBaseButton extends LitElement {
  @property({ type: Boolean }) pressed: boolean;

  @property({ type: Boolean }) expanded: boolean;

  @property({ type: Boolean }) readonly: boolean;

  @property({ type: String }) type: 'button' | 'submit';

  @property({ type: String }) name: string;

  @property({ type: String }) value: string;

  @property({ type: Boolean }) disabled = false;

  @property({ type: String }) popup: string;
}
