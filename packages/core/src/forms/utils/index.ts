/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-element';
import { isVisible } from '@cds/core/internal';
import { ControlLayout, FormLayout } from './interfaces.js';
import { CdsInternalControlGroup } from '../control-group/control-group.element.js';
import { CdsControl } from '../control/control.element.js';
import { CdsControlMessage } from '../control-message/control-message.element.js';

export const formLayouts: FormLayout[] = ['vertical', 'vertical-inline', 'horizontal', 'horizontal-inline', 'compact'];

export const defaultFormLayout = 'horizontal';

export const defaultControlWidth = 'stretch';

export function associateInputAndLabel(input: HTMLInputElement, label: HTMLLabelElement, id: string) {
  input.id = id;
  label.setAttribute('for', input.id);
}

export function associateInputToDatalist(input: HTMLInputElement, datalist: HTMLDataListElement) {
  if (datalist) {
    datalist.id = `${input.id}-datalist`;
    input.setAttribute('list', datalist.id);
  }
}

export const layoutGroupToControlMapper: { [key: string]: ControlLayout } = {
  'horizontal-inline': 'horizontal',
  'vertical-inline': 'vertical',
  horizontal: 'horizontal',
  vertical: 'vertical',
  compact: 'compact',
};

export function getStatusIcon(status: 'error' | 'success' | 'neutral') {
  return html`${status !== 'neutral'
    ? html` <cds-control-action readonly class="status" cds-layout="align:shrink">
        <cds-icon
          status="${status === 'error' ? 'danger' : 'success'}"
          shape="${status === 'error' ? 'exclamation-circle' : 'check-circle'}"
          size="16"
          inner-offset=${4}
        ></cds-icon>
      </cds-control-action>`
    : ''} `;
}

export async function getLargestPrimaryLabelWidth(controls: (CdsControl | CdsInternalControlGroup)[]) {
  return Promise.all(controls.map(c => c.updateComplete)).then(() => {
    const primaryLabels = controls.filter(c => c.controlLabel?.action === 'primary');
    return Math.max(...primaryLabels.map(c => c.controlLabel.getBoundingClientRect().width));
  });
}

export function controlIsWrapped(input: HTMLElement, label: HTMLElement, layout: FormLayout) {
  return (
    layout !== 'vertical' &&
    layout !== 'vertical-inline' &&
    input.getBoundingClientRect().top > label.getBoundingClientRect().top + 12 // 12px buffer for rounding and inputs that are thin like the range input
  );
}

export function inlineControlListIsWrapped(inlineControls: CdsControl[], layout: FormLayout) {
  const first = inlineControls[0];
  const last = inlineControls[inlineControls.length - 1];
  const isInlineLayout = layout === 'vertical-inline' || layout === 'horizontal-inline';
  return isInlineLayout && last.getBoundingClientRect().top > first.getBoundingClientRect().top;
}

export function isVerticalLayout(layout: FormLayout) {
  return layout === 'vertical' || layout === 'vertical-inline';
}

export async function getCurrentMessageStatus(messages: CdsControlMessage[]) {
  const message = messages.find(m => m.status !== 'neutral');
  await message?.updateComplete;
  return message && isVisible(message) ? message.status : 'neutral';
}
