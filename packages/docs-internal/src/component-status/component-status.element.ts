import { html, LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';
import styles from './component-status.element.scss';
import { baseStyles } from '../internal';

import ComponentInformationService, { ComponentInformationResult } from '../services/component-information.service';

console.log('This file is loaded');
/**
 * Display Component status in a card format - that include links to the component's Figma file,
 * version information, eslint rule information and more.
 *
 * @param name {String} - The name of the component
 * @param description {String} - The description of the component (optional)
 *
 * @slot - The content for inside the tag (optional, default is empty, at the end of description block)
 *
 * @element doc-component-status
 */
export class DocComponentStatus extends LitElement {
  static get styles() {
    return [baseStyles, styles];
  }

  /**
   * @type {String}
   * The name of the component to display information for
   */
  @property({ type: String })
  name = '';

  /**
   * @type {String}
   * The description of the component to display information that could be used to overwrite the default description
   */
  @property({ type: String })
  description = undefined;

  /** Used to store the fetched data from the service */
  private data?: ComponentInformationResult;

  connectedCallback() {
    super.connectedCallback();
    this.data = ComponentInformationService.fetch(this.name);

    console.log('Just say that you love me');
  }

  /**
   *
   * @param version {String} - The version of the component
   * @param link {String} - The link to the component's Documentation page
   * @param storybook {String} - The link to the component's Storybook page
   */
  versions(version?: string, link?: string, storybook?: string) {
    if (version) {
      return html`<dd>
        ${version && html`Available since ${version}, `}
        ${link && html`<a href="${link}" target="_blank">view documentation</a>`}
        ${storybook && html`<a href="${storybook}" target="_blank">view storybook</a>`}
      </dd>`;
    }

    return html`<dd>Not yet available</dd>`;
  }

  /**
   *
   * @param angular {String} - The link to the Angular component's Figma file
   * @param core {String} - The link to the Core component's Figma file
   */
  figma(angular?: string, core?: string) {
    if (angular || core) {
      return html`
        <dd>
          ${angular && html`<a href="${angular}" target="_blank">Angular figma</a>`}
          ${core && html`<a href="${core}" target="_blank">Core figma</a>`}
        </dd>
      `;
    }
    return html`<dd>Not yet available</dd>`;
  }

  /**
   *
   * @param eslint {Boolean} - Whether the component has an ESLint rule
   */
  eslint(eslint?: boolean) {
    if (eslint) {
      return html`<a href="https://adoption.clarity.design/adoption-tooling">Available, view documentation</a>`;
    }
    return html`<dd>Not yet available</dd>`;
  }

  render() {
    return html`
      <div cds-layout="grid p:md m-y:md">
        <div cds-layout="col:12 col@sm:4 p-r:sm" cds-text="message">
          ${this.description || this.data?.description}
          <slot></slot>
        </div>
        <div
          cds-layout="col:12 col@sm:8 align:stretch p-l:md"
          style="border-left: solid 0.25rem var(--cds-alias-object-border-color)"
        >
          <div cds-layout="grid">
            <dl cds-list cds-layout="col:6">
              <dt>Clarity Core</dt>
              ${this.versions(this.data?.core?.version, this.data?.core?.link, this.data?.core?.storybook)}
              <dt>Clarity Angular</dt>
              ${this.versions(this.data?.angular?.version, this.data?.angular?.link)}
            </dl>
            <dl cds-list cds-layout="col:6">
              <dt>Figma</dt>
              ${this.figma(this.data?.angular?.figma, this.data?.core?.figma)}
              <dt>ESLint Rule</dt>
              ${this.eslint(this.data?.angular?.eslint)}
            </dl>
          </div>
        </div>
      </div>
    `;
  }
}
