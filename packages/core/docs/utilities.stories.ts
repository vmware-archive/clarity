/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  ClrCommonStrings,
  commonStringsDefault,
  CommonStringsService,
  property,
  registerElementSafely,
} from '@cds/core/internal';
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
  const frenchTranslation: Partial<ClrCommonStrings> = {
    open: 'Ouvrir',
    close: 'Fermer',
    show: 'Montrer',
    hide: 'Masquer',
    expand: 'Dérouler',
    collapse: 'Enrouler',
    more: 'Plus',
    select: 'Sélectionner',
    selectAll: 'Tout sélectionner',
    previous: 'Précédent',
    next: 'Suivant',
    current: "Aujourd'hui",
    info: 'Info',
    success: 'Succès',
    warning: 'Avertissement',
    danger: 'Erreur',
    rowActions: 'Actions disponibles',
    pickColumns: 'Modifier les colonnes',
    showColumns: 'Afficher les colonnes',
    sortColumn: 'Colonne de tri',
    firstPage: 'Première page',
    lastPage: 'Dernière page',
    nextPage: 'Page suivante',
    previousPage: 'Page précédente',
    currentPage: 'Page actuelle',
    totalPages: 'Pages totales',
  };
  const language = select(
    'language',
    { 'english (default)': commonStringsDefault, 'french (custom)': frenchTranslation },
    commonStringsDefault as any
  );

  const getValues = () => {
    CommonStringsService.localize(language);
    return html`${JSON.stringify(CommonStringsService.keys, null, 2)}`;
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
