/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { customElement, html, internalProperty, LitElement } from 'lit-element';
import { componentStringsDefault, I18nStrings, I18nService, property, registerElementSafely } from '@cds/core/internal';

export default {
  title: 'Stories/Utilities',
  parameters: {
    options: { showPanel: true },
  },
};

const frenchTranslation: Partial<I18nStrings> = {
  alert: {
    closeButtonAriaLabel: "fermer l'alerte",
    info: 'Info',
    loading: 'Charger',
    success: 'Succès',
    warning: 'Avertissement',
    danger: 'Erreur',
  },
};

@customElement('i18n-demo')
export class I18nDemo extends LitElement {
  @internalProperty() private i18n = JSON.stringify(I18nService.keys, null, 2);

  render() {
    return html`
      <cds-radio-group layout="vertical">
        <label>language</label>

        <cds-radio>
          <label>English (default)</label>
          <input type="radio" value="1" checked @click=${this.setEnglish} />
        </cds-radio>

        <cds-radio>
          <label>French (custom)</label>
          <input type="radio" value="2" @click=${this.setFrench} />
        </cds-radio>
      </cds-radio-group>
      <pre cds-text="message">${this.i18n}</pre>
    `;
  }

  setEnglish() {
    I18nService.localize(componentStringsDefault);
    this.i18n = JSON.stringify(I18nService.keys, null, 2);
  }

  setFrench() {
    I18nService.localize(frenchTranslation);
    this.i18n = JSON.stringify(I18nService.keys, null, 2);
  }
}

export const internationalization = () => {
  return html`<i18n-demo></i18n-demo>`;
};

export const lazyLoading = () => {
  class LazyDemo extends LitElement {
    @property({ type: Boolean })
    loaded = false;

    render() {
      return html`
        ${this.loaded
          ? html`
              <cds-test-dropdown>
                Hello World
              </cds-test-dropdown>
            `
          : html`<button @click=${() => this.load()}>load component</button>`}
      `;
    }

    load() {
      import('@cds/core/test-dropdown').then(() => (this.loaded = true));
    }
  }

  registerElementSafely('storybook-demo-lazy-load', LazyDemo);

  return html`
    <h1>Lazy Loading</h1>
    <p>
      This demo shows that you can dynamically load components using ESModule dynamic imports.
    </p>
    <storybook-demo-lazy-load></storybook-demo-lazy-load>
  `;
};
