/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/card/register.js';
import '@cds/core/divider/register.js';
import '@cds/core/forms/register.js';
import { getElementStorybookArgs, getElementStorybookArgTypes, spreadProps } from '@cds/core/internal';
import { html } from 'lit';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { shareIcon } from '@cds/core/icon/shapes/share.js';
import { thumbsUpIcon } from '@cds/core/icon/shapes/thumbs-up.js';

ClarityIcons.addIcons(shareIcon, thumbsUpIcon);

const placeholder = 'Placeholder';

export default {
  title: 'Stories/Card',
  component: 'cds-card',
  parameters: {
    options: { showPanel: true },
  },
};

/** @website **/
export function Basic(args: { [key: string]: unknown }) {
  return html`<cds-card aria-label="Basic card" ...="${spreadProps(getElementStorybookArgs(args))}">
    <p cds-text="body light">${placeholder}</p>
  </cds-card>`;
}

/** @website **/
export function WithLayout() {
  return html` <cds-card aria-labelledby="cardWithLayout">
    <div cds-layout="vertical gap:md">
      <h2 id="cardWithLayout" cds-text="section" cds-layout="p-y:sm">Card Title</h2>

      <div cds-text="body light" cds-layout="p-y:lg">
        Message: Can you imagine what we will be downloading in another twenty years? Who would have ever thought that
        you could record sound with digital quality fifty years ago? Now we routinely download whole albums worth of
        music in a couple of minutes.
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
    </div>
  </cds-card>`;
}

/** @website **/
export function WithContainerOfCards() {
  return html`
    <div cds-layout="grid cols@md:6 cols@lg:3 gap:md">
      <cds-card aria-labelledby="containerOfCards1">
        <div cds-layout="vertical gap:md">
          <h2 id="containerOfCards1" cds-text="section" cds-layout="horizontal align:vertical-center">
            Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
          </h2>

          <div cds-text="body light" cds-layout="p-y:lg">
            Message: Can you imagine what we will be downloading in another twenty years? Who would have ever thought
            that you could record sound with digital quality fifty years ago? Now we routinely download whole albums
            worth of music in a couple of minutes.
          </div>

          <cds-divider cds-card-remove-margin></cds-divider>

          <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
        </div>
      </cds-card>
      <cds-card aria-labelledby="containerOfCards2">
        <div cds-layout="vertical gap:md">
          <h2 id="containerOfCards2" cds-text="section" cds-layout="horizontal align:vertical-center">
            Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
          </h2>

          <div cds-text="body light" cds-layout="p-y:lg">
            Message: Can you imagine what we will be downloading in another twenty years? Who would have ever thought
            that you could record sound with digital quality fifty years ago? Now we routinely download whole albums
            worth of music in a couple of minutes.
          </div>

          <cds-divider cds-card-remove-margin></cds-divider>

          <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
        </div>
      </cds-card>
      <cds-card aria-labelledby="containerOfCards3">
        <div cds-layout="vertical gap:md">
          <h2 id="containerOfCards3" cds-text="section" cds-layout="horizontal align:vertical-center">
            Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
          </h2>

          <div cds-text="body light" cds-layout="p-y:lg">
            Message: Can you imagine what we will be downloading in another twenty years? Who would have ever thought
            that you could record sound with digital quality fifty years ago? Now we routinely download whole albums
            worth of music in a couple of minutes.
          </div>

          <cds-divider cds-card-remove-margin></cds-divider>

          <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
        </div>
      </cds-card>
      <cds-card aria-labelledby="containerOfCards4">
        <div cds-layout="vertical gap:md">
          <h2 id="containerOfCards4" cds-text="section" cds-layout="horizontal align:vertical-center">
            Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
          </h2>

          <div cds-text="body light" cds-layout="p-y:lg">
            Message: Can you imagine what we will be downloading in another twenty years? Who would have ever thought
            that you could record sound with digital quality fifty years ago? Now we routinely download whole albums
            worth of music in a couple of minutes.
          </div>

          <cds-divider cds-card-remove-margin></cds-divider>

          <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
        </div>
      </cds-card>
    </div>
  `;
}

/** @website **/
export function WithAlert() {
  return html`
    <cds-card aria-labelledby="cardWithAlert">
      <div id="cardWithAlert" cds-layout="vertical gap:md">
        <div cds-text="section" cds-layout="horizontal align:vertical-center">
          Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
        </div>

        <div cds-text="body light" cds-layout="p-y:lg">
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
    <cds-card aria-labelledby="cardWithForms">
      <div id="cardWithForms" cds-layout="vertical gap:md">
        <div cds-text="section" cds-layout="horizontal align:vertical-center">
          Card Title <cds-icon shape="times" cds-layout="align:right"></cds-icon>
        </div>

        <div cds-text="body" cds-layout="p-y:lg">
          <form>
            <cds-form-group validate>
              <cds-input>
                <label>text input (required)</label>
                <input placeholder="placeholder text" required />
                <cds-control-message error="valueMissing">required</cds-control-message>
              </cds-input>

              <cds-input>
                <label>number input (min/max)</label>
                <input type="number" min="1" max="5" value="3" />
                <cds-control-message error="rangeOverflow">Maximum is 5</cds-control-message>
                <cds-control-message error="rangeUnderflow">Minimum is 1</cds-control-message>
              </cds-input>

              <cds-input>
                <label>U.S telephone (pattern)</label>
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="111-222-3333" />
                <cds-control-message error="patternMismatch"
                  >please enter US phone number (111-222-3333)</cds-control-message
                >
              </cds-input>

              <cds-input>
                <label>email input (required/type)</label>
                <input type="email" placeholder="example@example.com" required />
                <cds-control-message error="valueMissing">a email address is required to continue</cds-control-message>
                <cds-control-message error="typeMismatch">please enter a valid email address</cds-control-message>
              </cds-input>

              <cds-button>save</cds-button>
            </cds-form-group>
          </form>
        </div>

        <cds-divider cds-card-remove-margin></cds-divider>

        <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
          <cds-button>Submit</cds-button>
        </div>
      </div>
    </cds-card>
  `;
}

/** @website **/
export function WithLayoutAndTwoDividers(args: { [key: string]: unknown }) {
  return html` <cds-card
    aria-labelledby="cardWithLayoutAndDividers"
    ...="${spreadProps(getElementStorybookArgs(args))}"
  >
    <div cds-layout="vertical gap:md">
      <h2 id="cardWithLayoutAndDividers" cds-text="section" cds-layout="p-y:sm">Card Title</h2>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-text="body light" cds-layout="p-y:md">
        Message: Can you imagine what we will be downloading in another twenty years? Who would have ever thought that
        you could record sound with digital quality fifty years ago? Now we routinely download whole albums worth of
        music in a couple of minutes.
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center"></div>
    </div>
  </cds-card>`;
}

/** @website **/
export function WithLayoutTwoDividersAndButton(args: { [key: string]: unknown }) {
  return html` <cds-card
    aria-labelledby="cardWithLayoutDividersAndButton"
    ...="${spreadProps(getElementStorybookArgs(args))}"
  >
    <div cds-layout="vertical gap:md">
      <h2 id="cardWithLayoutDividersAndButton" cds-text="section" cds-layout="p-y:sm">Card Title</h2>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-text="body light" cds-layout="p-y:md">
        Message: Can you imagine what we will be downloading in another twenty years? Who would have ever thought that
        you could record sound with digital quality fifty years ago? Now we routinely download whole albums worth of
        music in a couple of minutes.
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
        <cds-button action="flat-inline">View</cds-button>
      </div>
    </div>
  </cds-card>`;
}

export function WithImage() {
  return html`<cds-card aria-labelledby="cardWithImage">
    <div cds-layout="vertical gap:md">
      <h2 id="cardWithImage" cds-text="section" cds-layout="p-y:sm">Card Title</h2>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-text="body light" cds-layout="p-y:md">
        <img src="https://dummyimage.com/200x200/000/fff" alt="placeholder image" />
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
        <cds-button action="flat-inline">View</cds-button>
      </div>
    </div>
  </cds-card>`;
}

/** @website **/
export function WithLists() {
  return html`<cds-card aria-labelledby="cardWithList" style="--width: 15rem">
    <div cds-layout="vertical gap:md">
      <h2 id="cardWithList" cds-text="section" cds-layout="horizontal gap:sm align:vertical-center">
        Card with list
      </h2>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-text="body light" cds-layout="p-y:md">
        <ul cds-list="unstyled">
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
        </ul>
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
        <cds-button action="flat-inline">Action</cds-button>
      </div>
    </div>
  </cds-card>`;
}

/** @website **/
export function SocialPost() {
  ClarityIcons.addIcons([
    'batman',
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="29.25 -183.153 985.166 985.166">
      <defs/>
      <path fill="#030303" stroke="#030303" stroke-width=".5" d="M692.199 102.8l-.199-.3-.2-.3-.3-.2-.301-.2-.199-.3-.2-.3-.3-.2-.301-.2-.199-.3-.2-.3-.3-.2-.301-.2-.199-.3-.2-.3-.3-.2-.301-.2-.199-.3-.2-.3-.3-.2-.301-.2-.199-.3-.2-.3-.3-.2-.301-.2-.199-.3h4l2 .5 2 .5 34 9.5c22.666 6.333 44 13.5 64 21.5s37.267 15.9 51.8 23.7c14.467 7.866 27.6 15.866 39.399 24 11.867 8.2 22.533 16.533 32 25 9.533 8.533 18.134 17.8 25.801 27.8 7.666 10 13.666 19.333 18 28 4.333 8.667 7.5 17.333 9.5 26s2.833 17.333 2.5 26c-.334 8.666-1.834 17.666-4.5 27-2.667 9.334-6.334 18.666-11 28-4.667 9.334-10.5 18.666-17.5 28s-14.4 17.934-22.2 25.8c-7.867 7.8-18.3 16.367-31.3 25.7s-26.667 17.833-41 25.5c-14.334 7.667-30.334 14.833-48 21.5-17.667 6.667-28 10.5-31 11.5s-5.167 1.667-6.5 2l-2 .5-1.5.5-1.5.5-1.5.5-1.5.5-1 .3-1 .2v-2l1-.2 1-.3.199-.3.301-.2.3-.2.2-.3.199-.3.301-.2.3-.2.2-.3.199-.3.301-.2.3-.2.2-.3.199-.3.301-.2.3-.2c.133-.2.6-.733 1.399-1.6.867-.8 5.533-6.267 14-16.4 8.533-10.2 15.533-20.533 21-31 5.533-10.533 9.301-20.467 11.301-29.8 2-9.334 2.666-17.334 2-24-.667-6.666-2.167-12.5-4.5-17.5-2.334-5-5.268-9.1-8.801-12.3-3.467-3.134-7.699-5.7-12.699-7.7s-11.5-3-19.5-3-17 1.666-27 5-20.167 8.166-30.5 14.5c-10.334 6.334-19.834 13.166-28.5 20.5l-13 11-.2.3-.3.2-.301.2-.199.3-1.5.3-1.5.2-.2-1c-.2-.666-2.634-4.334-7.3-11-4.667-6.666-9.233-11.6-13.7-14.8-4.533-3.134-8.967-4.866-13.3-5.2-4.334-.334-9.167.834-14.5 3.5-5.334 2.666-10 6-14 10s-9.667 11.166-17 21.5c-7.334 10.333-17.733 27.934-31.2 52.8L523.5 503l-.5 1-.5 1-.5 1-.5 1-.5 1-.5 1-.5-1-.5-1-.5-1-.5-1-.301-.2-.199-.3-.2-.3-.3-.2-.5-1c-.334-.667-5.334-10.167-15-28.5-9.667-18.333-18.5-34-26.5-47s-15.233-23.1-21.7-30.3c-6.533-7.134-12.134-12.034-16.8-14.7-4.667-2.666-9-4.166-13-4.5s-7-.166-9 .5-5.167 2.666-9.5 6c-4.334 3.334-8.667 8.434-13 15.3L386 410l-1.5-.2-1.5-.3-.2-.3-.3-.2-.301-.2-.199-.3-13-11c-8.667-7.334-18.167-14.166-28.5-20.5-10.334-6.334-19.667-11-28-14-8.334-3-16-4.834-23-5.5s-13.5-.334-19.5 1-10.834 3.1-14.5 5.3c-3.667 2.134-5.5 3.534-5.5 4.2s-.334 1-1 1c-.667 0-2.4 2.5-5.2 7.5-2.867 5-4.8 9.834-5.8 14.5s-1.167 11-.5 19c.666 8 2.666 16.667 6 26 3.333 9.333 8.166 18.833 14.5 28.5 6.333 9.667 12.733 18.1 19.2 25.3 6.533 7.134 9.866 10.8 10 11l.3.2.3.2.2.3.2.3.3.2.3.2.2.3.2.3.3.2.3.2.2.3.2.3.3.2.3.2.2.3 1 .3 1 .2v2l-1-.2-1-.3-1.5-.5-1.5-.5-1.5-.5-1.5-.5-1.5-.5c-1-.333-4.834-1.5-11.5-3.5-6.667-2-18.5-6.5-35.5-13.5s-32.167-14.167-45.5-21.5c-13.334-7.333-25.5-15-36.5-23s-20.434-15.9-28.3-23.7a280.521 280.521 0 01-22-25 199.702 199.702 0 01-18-28c-5.134-9.866-9.034-19.634-11.7-29.3-2.667-9.666-4.167-19-4.5-28-.334-9 .5-17.667 2.5-26s5.333-17.167 10-26.5c4.666-9.333 10.899-18.934 18.7-28.8 7.866-9.8 16.966-19.2 27.3-28.2 10.333-9 20.833-17.167 31.5-24.5 10.666-7.333 23.5-15 38.5-23s32.666-16 53-24c20.333-8 41.333-15 63-21l32.5-9 2-.5 2-.5h4l-.2.3-.3.2-.301.2-.199.3-.2.3-.3.2-.301.2-.199.3-.2.3-.3.2-.301.2-.199.3-.2.3-.3.2-.301.2-.199.3-.2.3-.3.2-.301.2-.199.3-.2.3-.3.2-.301.2-.199.3-10.2 12.3c-6.867 8.134-12.134 15.867-15.8 23.2-3.667 7.333-6.167 13.667-7.5 19-1.334 5.333-1.834 10.833-1.5 16.5.333 5.667 1.732 11.233 4.199 16.7 2.533 5.533 5.301 10.133 8.301 13.8s7.833 7.667 14.5 12c6.666 4.333 14.5 8 23.5 11s19.5 4.5 31.5 4.5 20.333-1.167 25-3.5c4.666-2.333 8.933-5.066 12.8-8.2 3.8-3.2 8.033-8.3 12.7-15.3 4.666-7 8.666-14.833 12-23.5 3.333-8.667 5.833-25.667 7.5-51 1.666-25.333 3.066-40.934 4.199-46.8 1.2-5.8 4.4-3.8 9.601 6 5.133 9.866 8.267 16.633 9.399 20.3 1.2 3.667 4.967 4.9 11.301 3.7 6.333-1.134 14.166-1.534 23.5-1.2 9.333.333 16 .934 20 1.8 4 .8 7.6-2.8 10.8-10.8 3.133-8 6.366-14.833 9.7-20.5 3.333-5.667 6 .833 8 19.5s3.333 34.333 4 47c.666 12.667 2.666 23.333 6 32 3.333 8.667 7.1 16.066 11.3 22.2 4.133 6.2 8.033 11.133 11.7 14.8 3.666 3.667 8.166 6.833 13.5 9.5 5.333 2.667 14 4 26 4s22.5-1.5 31.5-4.5 16.333-6.333 22-10c5.666-3.667 10.566-7.733 14.699-12.2 4.2-4.533 7.467-9.633 9.801-15.3 2.333-5.667 3.5-12 3.5-19s-1.167-13.833-3.5-20.5c-2.334-6.667-5.834-13.667-10.5-21-4.667-7.333-9.167-13.5-13.5-18.5-4.334-5-6.6-7.566-6.801-7.7z"/>
      <path fill="#030303" stroke="#030303" stroke-width=".5" d="M963.8 190.5l.2.5v1.8c0 1.134.066 1.8.199 2l.301.2v3l-.301-.2c-.133-.2-.533-.4-1.199-.6-.667-.134-1.067.133-1.2.8-.2.667-1.2 1.167-3 1.5l-2.8.5.5 1.2c.333.866.767 1.066 1.3.6.467-.533.8-.3 1 .7l.2 1.5h-2l-.2 1-.3 1-.301-.2-.199-.3-.2-.3-.3-.2-.5-1c-.334-.667-.733-.733-1.2-.2l-.8.7-.2.3-.3.2-.301.2-.199.3v.5l-.5-.2c-.334-.2-4.167-3.966-11.5-11.3-7.334-7.333-15.934-14.9-25.801-22.7-9.8-7.866-21.6-16.066-35.399-24.6-13.867-8.467-29.467-16.7-46.8-24.7-17.334-8-36.334-15.5-57-22.5-20.667-7-42.834-13.167-66.5-18.5-23.667-5.333-48.167-9.667-73.5-13-25.334-3.333-53-5.5-83-6.5s-56.834-.833-80.5.5c-23.667 1.333-47.5 3.667-71.5 7s-48 7.833-72 13.5-46 12-66 19-38.334 14.5-55 22.5c-16.667 8-31.834 16.167-45.5 24.5-13.667 8.333-26.167 17.167-37.5 26.5-11.334 9.333-20.834 18.333-28.5 27-7.667 8.667-14.334 17.233-20 25.7L67 241h-.2c-.2 0-.4.167-.6.5l-.2.5-2 .2-2 .3-1 .3-1 .2v-2l1.5-.2c1-.2.333-.533-2-1-2.334-.533-3.567-1.8-3.7-3.8-.2-2-.867-4-2-6l-1.8-3 .5-.2c.333-.2.5-.4.5-.6v-.2l7.8-11.5c5.133-7.667 12.6-16.767 22.4-27.3 9.866-10.467 20.8-20.367 32.8-29.7s25.833-18.667 41.5-28c15.666-9.333 32-17.833 49-25.5s34.666-14.667 53-21c18.333-6.333 39.333-12.333 63-18 23.666-5.667 48.333-10.333 74-14 25.666-3.667 50.666-6.167 75-7.5 24.333-1.333 51.333-1.5 81-.5 29.666 1 57.333 3.167 83 6.5 25.666 3.333 50.333 7.667 74 13 23.666 5.333 47 11.833 70 19.5s43.833 15.833 62.5 24.5c18.666 8.667 35.166 17.5 49.5 26.5 14.333 9 25.232 16.4 32.699 22.2 7.533 5.866 15.134 12.3 22.801 19.3 7.666 7 12.333 11.333 14 13 1.666 1.667 2.6 2.667 2.8 3z"/>
      <path fill="#020202" stroke="#020202" stroke-width=".5" d="M102.8 428.5l1.2-1.5 16 13.2c10.666 8.866 22.666 17.633 36 26.3 13.333 8.667 28.5 17.167 45.5 25.5s36.333 16.333 58 24c21.666 7.667 44.5 14.333 68.5 20s48 10.167 72 13.5 47.833 5.667 71.5 7c23.666 1.333 50.5 1.5 80.5.5s57.666-3.167 83-6.5c25.333-3.333 49.833-7.667 73.5-13 23.666-5.333 45.833-11.5 66.5-18.5 20.666-7 40.066-14.733 58.199-23.2 18.2-8.533 34.4-17.2 48.601-26 14.133-8.866 23.533-15.133 28.2-18.8 4.666-3.667 7.333-5.667 8-6l1-.5.5-.3.5-.2 1 .2 1 .3.199.3.301.2.3.2.2.3 1.5.3 1.5.2v3h2l.5 4.2c.333 2.866.566 4.399.699 4.6.2.134.4.533.601 1.2l.2 1v.2c0 .2-.334.399-1 .6l-1 .2-.2-.5c-.2-.333-.733-.667-1.601-1-.8-.333-1.133-.167-1 .5l.301 1-.301.8c-.133.467-.199.8-.199 1v.2l-.5.2c-.334.2-.5.399-.5.6v.2l-.2.5c-.2.333-5.967 4.333-17.3 12-11.334 7.667-24.233 15.434-38.7 23.3-14.533 7.8-31.634 15.7-51.3 23.7-19.667 8-41 15.333-64 22s-47.167 12.333-72.5 17a849.113 849.113 0 01-76 10.5c-25.334 2.333-52.834 3.5-82.5 3.5-29.667 0-54.667-.833-75-2.5-20.334-1.667-42.667-4.5-67-8.5-24.334-4-48-9-71-15s-44-12.5-63-19.5-37.5-15-55.5-24-33.5-17.667-46.5-26-24.334-16.6-34-24.8L95 444l-.5-.2-.5-.3v-.7c0-.2.267-.533.8-1l.7-.8-.3-.2-.2-.3.2-.3.3-.2.5-2c.333-1.333.6-2.5.8-3.5l.2-1.5 2-.2c1.333-.2 2.066-.733 2.2-1.6.2-.8.733-1.7 1.6-2.7zM964 192.8V191l11.199 14c7.533 9.333 13.967 19 19.301 29 5.333 10 9.666 20.667 13 32 3.333 11.333 5.333 19.667 6 25 .666 5.333.833 13.166.5 23.5-.334 10.334-1.834 20.834-4.5 31.5-2.667 10.666-6.5 21.166-11.5 31.5s-7.667 15.834-8 16.5l-.5 1-.301.2-.199.3-.2.3-.3.2-.5 1.5-.5 1.5-.301.2-.199.3-.2.3-.3.2-.301.2-.199.3-.2.3-.3.2h-.5l.199-2 .301-2v-1l-.301-.2-.199-.3-.2-.3-.3-.2-.301-.2-.199-.3.199-.3.301-.2v-.5c0-.334-.233-2-.7-5-.533-3-1.467-4.5-2.8-4.5-1.334 0-1.934-.334-1.801-1 .2-.666.4-1.834.601-3.5.133-1.666-.467-2.334-1.8-2l-2 .5.199-1c.2-.666 1.634-3.666 4.301-9 2.666-5.334 5.333-13 8-23 2.666-10 4-21.834 4-35.5 0-13.667-1.167-25-3.5-34-2.334-9-5.834-18.333-10.5-28-4.667-9.667-10.101-18.566-16.301-26.7L953 208.5l-.2-.3-.3-.2-.301-1-.199-1v-.5l.199-.3.301-.2.3-.2.2-.3.8-.7c.467-.533.866-.466 1.2.2l.5 1 .3.2.2.3.199.3.301.2v-1.5c0-1-.101-2-.301-3L956 200l2.199-.5c1.533-.333 2.2-.833 2-1.5-.133-.667.467-.934 1.801-.8 1.333.2 2.066.4 2.199.6l.301.2v-3l-.301-.2c-.132-.2-.199-.866-.199-2zm-5.801 9a.501.501 0 010-.6c.2-.134.301-.034.301.3s-.1.434-.301.3z"/>
      <path fill="#020202" stroke="#020202" stroke-width=".5" d="M52.8 226h.2l1 2.8c.666 1.8 1.166 3.934 1.5 6.4.333 2.533 1.666 4.066 4 4.6 2.333.467 3 .8 2 1l-1.5.2v2l1-.2 1-.3 1.5-.5c1-.333 1.833-.6 2.5-.8l1-.2-6.2 15c-4.2 10-7.134 19.5-8.8 28.5-1.667 9-2.334 18.834-2 29.5.333 10.666 1.833 21 4.5 31 2.666 10 6.566 19.934 11.7 29.8 5.2 9.8 11.3 19.2 18.3 28.2s11.899 15.066 14.7 18.2c2.866 3.2 4.399 4.967 4.6 5.3l.2.5-1.2 1.5c-.867 1-1.4 1.9-1.6 2.7-.134.866-.867 1.399-2.2 1.6l-2 .2-.2 1.5c-.2 1-.467 2.167-.8 3.5l-.5 2-.3.2-.2.3.2.3.3.2v3H95l-.5-.2-.5-.3v-.5l-.5-.2-.5-.3-.2-.3-.3-.2-.3-.2-.2-.3-.2-.3-.3-.2-.3-.2-.2-.3-.2-.3-.3-.2-.3-.2-.2-.3-.2-.3c-.2-.134-1.3-1.2-3.3-3.2S79 427.5 70 416.5 53.333 393.666 47 381c-6.334-12.666-10.834-24.334-13.5-35-2.667-10.666-4-23-4-37s1.333-26.167 4-36.5c2.666-10.333 6.433-20.5 11.3-30.5l7.2-15 .2-.5c.2-.333.4-.5.6-.5z"/>
      <path fill="#030303" stroke="#030303" stroke-width=".5" d="M976.8 377.5l.2-.5h1.5c1 0 1.433.834 1.3 2.5-.2 1.666-.4 2.834-.601 3.5-.133.666.467 1 1.801 1 1.333 0 2.267 1.5 2.8 4.5.467 3 .7 4.666.7 5v.5l-.301.2-.199.3.199.3.301.2.3.2.2.3 1 .3c.666.134 1 .534 1 1.2v1l-.5.2c-.334.2-.5.399-.5.6v.2h-.2c-.2 0-.4.334-.601 1l-.199 1-.2 1c-.2.666-4.3 5.834-12.3 15.5-8 9.667-17.101 19.167-27.301 28.5L930 460l-.2-1c-.2-.667-.4-.667-.601 0l-.199 1-.2.5-.3.5h-.5l-.2.5-.3.5-.301.2-.199.3-.2.3-.3.2-.301.2-.199.3-1 .3-1 .2v-2l1-.2 1-.3-.2-.3-.3-.2-.301-1c-.133-.667.134-1 .801-1 .666 0 1.066-.333 1.199-1 .2-.667.4-2.333.601-5l.2-4-1-.2c-.667-.2-1.667-.399-3-.6-1.334-.134-1.934-.7-1.801-1.7l.301-1.5-.301-.2-.199-.3-1-.3-1-.2v-.5l.199-.3.301-.2.3-.2.2-.3.199-.3.301-.2 12-11c8-7.333 15.666-15.666 23-25 7.333-9.334 12.333-16.166 15-20.5 2.666-4.334 4.1-6.666 4.3-7l.2-.5h.199c.201 0 .401-.166.601-.5z"/>
    </svg>`,
  ]);

  return html`<cds-card aria-labelledby="cardSocialPost" style="--width: 15rem">
    <div cds-layout="vertical gap:md">
      <h2 id="cardSocialPost" cds-text="section" cds-layout="horizontal gap:sm align:vertical-center">
        <div
          cds-layout="horizontal p:sm m-r:sm align:vertical-center"
          style="border-radius: 50%; border: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-container-border-color"
        >
          <cds-icon shape="batman" size="md"></cds-icon>
        </div>

        Batman
      </h2>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-text="body light" cds-layout="p-y:md">
        If you can carry it to the top of the mountain you may find what you were looking for in the first place.
      </div>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
        <cds-button action="flat-inline"><cds-icon shape="thumbs-up"></cds-icon> Like</cds-button>
        <cds-button action="flat-inline"><cds-icon shape="share"></cds-icon> Share</cds-button>
      </div>
    </div>
  </cds-card>`;
}

export function WithLayoutAndOverflow() {
  return html`<cds-card aria-labelledby="cardWithOverflow">
    <div cds-layout="vertical gap:md">
      <h2 id="cardWithOverflow" cds-text="section" cds-layout="p-y:sm">Card Title</h2>

      <cds-divider cds-card-remove-margin></cds-divider>

      <div cds-layout="p-y:md" cds-text="body light" style="height: 4rem; overflow: auto; height: 100px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat tortor eget quam auctor, quis
        sagittis libero auctor. Nulla augue ante, tincidunt sit amet semper vitae, tempus at ipsum. Vestibulum
        elementum, turpis quis ullamcorper fermentum, elit turpis placerat ipsum, quis convallis ex nisi sit amet lacus.
        Ut enim ipsum, tincidunt nec luctus id, pharetra id velit. Aliquam nec elit ut neque lacinia mattis id ac lorem.
        Vivamus egestas massa nulla, ac elementum purus pretium eu. Duis ultrices nec tortor varius consectetur.
        Maecenas convallis bibendum urna, et aliquam quam tincidunt in. Nam viverra, leo vitae imperdiet ultrices, ante
        mi facilisis mi, ac vehicula erat nulla sed nibh. Nam euismod gravida est, convallis placerat nunc pharetra sed.
        Nullam scelerisque dui augue, eu porta erat tempus in. Integer egestas massa orci, id scelerisque libero
        lobortis vitae. Vivamus aliquet sem massa, eget sodales sapien dictum eu. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Suspendisse non interdum sem, nec egestas nulla. Duis vitae leo justo. Fusce
        ante enim, tincidunt nec faucibus sed, fringilla et ipsum. Proin quis diam elit. Cras nec finibus libero. Sed
        bibendum lectus eget magna ultricies eleifend. Duis ut molestie urna. Proin cursus dolor ac ex rutrum, eu
        condimentum elit tincidunt. In a dolor faucibus, vehicula ipsum eu, viverra lorem. Aenean congue fermentum
        commodo. Sed ex purus, consectetur mollis urna eget, vestibulum mollis dolor. Donec sodales, felis sit amet
        gravida ornare, magna dolor ullamcorper turpis, vel facilisis odio ipsum semper sem.
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
