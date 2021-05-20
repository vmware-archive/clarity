/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/card/register.js';
import '@cds/core/divider/register.js';
import { getElementStorybookArgs, getElementStorybookArgTypes, spreadProps } from '@cds/core/internal';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import customElements from '../../dist/core/custom-elements.json';
import { form } from '../forms/forms.stories';

const placeholder = 'Placeholder';
const basicContent = `
    Message: Can you imagine what we will be downloading in another twenty years?
    Who would have ever thought that you could record sound with digital quality fifty years ago?
    Now we routinely download whole albums worth of music in a couple of minutes.`;
const longerContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Praesent volutpat tortor eget quam auctor, quis sagittis libero auctor.
    Nulla augue ante, tincidunt sit amet semper vitae, tempus at ipsum.
    Vestibulum elementum, turpis quis ullamcorper fermentum, elit turpis placerat ipsum, quis convallis ex nisi sit amet lacus.
    Ut enim ipsum, tincidunt nec luctus id, pharetra id velit. Aliquam nec elit ut neque lacinia mattis id ac lorem.
    Vivamus egestas massa nulla, ac elementum purus pretium eu. Duis ultrices nec tortor varius consectetur.
    Maecenas convallis bibendum urna, et aliquam quam tincidunt in.
    Nam viverra, leo vitae imperdiet ultrices, ante mi facilisis mi, ac vehicula erat nulla sed nibh.
    Nam euismod gravida est, convallis placerat nunc pharetra sed. Nullam scelerisque dui augue, eu porta erat tempus in.

    Integer egestas massa orci, id scelerisque libero lobortis vitae.
    Vivamus aliquet sem massa, eget sodales sapien dictum eu.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Suspendisse non interdum sem, nec egestas nulla.
    Duis vitae leo justo. Fusce ante enim, tincidunt nec faucibus sed, fringilla et ipsum.
    Proin quis diam elit. Cras nec finibus libero. Sed bibendum lectus eget magna ultricies eleifend.
    Duis ut molestie urna. Proin cursus dolor ac ex rutrum, eu condimentum elit tincidunt.
    In a dolor faucibus, vehicula ipsum eu, viverra lorem. Aenean congue fermentum commodo.
    Sed ex purus, consectetur mollis urna eget, vestibulum mollis dolor.
    Donec sodales, felis sit amet gravida ornare, magna dolor ullamcorper turpis, vel facilisis odio ipsum semper sem.
  `;

export default {
  title: 'Stories/Card',
  component: 'cds-card',
  argTypes: getElementStorybookArgTypes('cds-card', customElements),
  parameters: {
    options: { showPanel: true },
  },
};

export function API(args: { [key: string]: unknown }) {
  return html`<cds-card ...="${spreadProps(getElementStorybookArgs(args))}">
    <p cds-text="body">${placeholder}</p>
  </cds-card>`;
}

export function WithLayout() {
  return html` <cds-card>
    <div cds-layout="vertical gap:md">
      <div cds-text="section" cds-layout="p-y:sm">
        Card Title
      </div>

      <div cds-text="body" cds-layout="p-y:lg">
        ${basicContent}
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
    </div>
  </cds-card>`;
}

export function WithContainerOfCards() {
  return html`
    <div cds-layout="grid cols@md:6 cols@lg:3 gap:md">
      <cds-card>
        <div cds-layout="vertical gap:md">
          <div cds-text="section" cds-layout="horizontal align:vertical-center">
            Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
          </div>

          <div cds-text="body" cds-layout="p-y:lg">
            ${basicContent}
          </div>

          <cds-divider cds-card-remove-margin></cds-divider>

          <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
        </div>
      </cds-card>
      <cds-card>
        <div cds-layout="vertical gap:md">
          <div cds-text="section" cds-layout="horizontal align:vertical-center">
            Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
          </div>

          <div cds-text="body" cds-layout="p-y:lg">
            ${basicContent}
          </div>

          <cds-divider cds-card-remove-margin></cds-divider>

          <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
        </div>
      </cds-card>
      <cds-card>
        <div cds-layout="vertical gap:md">
          <div cds-text="section" cds-layout="horizontal align:vertical-center">
            Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
          </div>

          <div cds-text="body" cds-layout="p-y:lg">
            ${basicContent}
          </div>

          <cds-divider cds-card-remove-margin></cds-divider>

          <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
        </div>
      </cds-card>
      <cds-card>
        <div cds-layout="vertical gap:md">
          <div cds-text="section" cds-layout="horizontal align:vertical-center">
            Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
          </div>

          <div cds-text="body" cds-layout="p-y:lg">
            ${basicContent}
          </div>

          <cds-divider cds-card-remove-margin></cds-divider>

          <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
        </div>
      </cds-card>
    </div>
  `;
}

export function WithAlert() {
  return html`
    <cds-card>
      <div cds-layout="vertical gap:md">
        <div cds-text="section" cds-layout="horizontal align:vertical-center">
          Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
        </div>

        <div cds-text="body" cds-layout="p-y:lg">
          <cds-alert-group>
            <cds-alert status="info">This is an alert with a status of "info"</cds-alert>
          </cds-alert-group>
        </div>

        <cds-divider cds-card-remove-margin></cds-divider>

        <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
      </div>
    </cds-card>
  `;
}

export function WithForms() {
  return html`
    <cds-card>
      <div cds-layout="vertical gap:md">
        <div cds-text="section" cds-layout="horizontal align:vertical-center">
          Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
        </div>

        <div cds-text="body" cds-layout="p-y:lg">
          <!-- ${unsafeHTML(form().values as any)} -->
        </div>

        <cds-divider cds-card-remove-margin></cds-divider>

        <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
          <cds-button>Submit</cds-button>
        </div>
      </div>
    </cds-card>
  `;
}

export function WithLayoutAndTwoDividers(args: { [key: string]: unknown }) {
  return html` <cds-card ...="${spreadProps(getElementStorybookArgs(args))}">
    <div cds-layout="vertical gap:md">
      <div cds-text="section" cds-layout="p-y:sm">
        Card Title
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-text="body" cds-layout="p-y:md">
        ${basicContent}
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
    </div>
  </cds-card>`;
}

export function WithLayoutTwoDividersAndButton(args: { [key: string]: unknown }) {
  return html` <cds-card ...="${spreadProps(getElementStorybookArgs(args))}">
    <div cds-layout="vertical gap:md">
      <div cds-text="section" cds-layout="p-y:sm">
        Card Title
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-text="body" cds-layout="p-y:md">
        ${basicContent}
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
        <cds-button action="flat-inline">View</cds-button>
      </div>
    </div>
  </cds-card>`;
}

export function WithImage() {
  return html`<cds-card>
    <div cds-layout="vertical gap:md">
      <div cds-text="section" cds-layout="p-y:sm">
        Card Title
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-text="body" cds-layout="p-y:md">
        <img src="https://dummyimage.com/200x200/000/fff" alt="placeholder image" />
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
        <cds-button action="flat-inline">View</cds-button>
      </div>
    </div>
  </cds-card>`;
}

export function WithLayoutAndOverflow() {
  return html` <style>
      cds-card#cds-card-with-fixed-height #cds-card-with-fixed-height__body {
        height: 1rem;
        overflow: auto;
      }
    </style>
    <cds-card id="cds-card-with-fixed-height">
      <div cds-layout="vertical gap:md">
        <div cds-text="section" cds-layout="p-y:sm">
          Card Title
        </div>

        <cds-divider cds-card-remove-margin></cds-divider>

        <div
          id="cds-card-with-fixed-height__body"
          cds-layout="p-y:md"
          cds-text="body"
          style="overflow: auto"
          height="100px"
        >
          ${longerContent}
        </div>

        <cds-divider cds-card-remove-margin></cds-divider>

        <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
          <cds-button action="flat-inline">View</cds-button>
          <cds-button> View </cds-button>
          <cds-button status="success"> View Success </cds-button>
          <cds-button status="danger"> View Danger </cds-button>
        </div>
      </div>
    </cds-card>`;
}
