/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { componentStringsDefault, I18nStrings, I18nService, property, registerElementSafely } from '@cds/core/internal';
import { select } from '@storybook/addon-knobs';
import { html, LitElement } from 'lit-element';

export default {
  title: 'Utilities (Preview)/utils',
  parameters: {
    options: { showPanel: true },
    a11y: { disable: true }, // disabled for scroll jump
  },
};

export const internationalization = () => {
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
  const language = select(
    'language',
    { 'english (default)': componentStringsDefault, 'french (custom)': frenchTranslation },
    componentStringsDefault as any
  );

  const getValues = () => {
    I18nService.localize(language);
    return html`${JSON.stringify(I18nService.keys, null, 2)}`;
  };

  return html`
    <h2>Internationalization (i18n)</h2>
    <pre>
      ${getValues()}
    </pre
    >
  `;
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
