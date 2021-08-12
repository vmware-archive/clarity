/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/forms/register.js';

export default {
  title: 'Stories/Forms Control',
  component: 'cds-control',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A1',
    },
  },
};

/** @website */
export function control() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-control layout="vertical">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message>message text</cds-control-message>
      </cds-control>

      <cds-control layout="vertical" status="error">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-control>

      <cds-control layout="vertical" status="success">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-control>
    </div>
  `;
}

/** @website */
export function controlHorizontal() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-control layout="horizontal">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message>message text</cds-control-message>
      </cds-control>

      <cds-control layout="horizontal" status="error">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-control>

      <cds-control layout="horizontal" status="success">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-control>
    </div>
  `;
}

/** @website */
export function controlCompact() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-control layout="compact">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message>message text</cds-control-message>
      </cds-control>

      <cds-control layout="compact" status="error">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-control>

      <cds-control layout="compact" status="success">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-control>
    </div>
  `;
}

export function genericContent() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-control>
        <label>label</label>
        <p cds-text="body" cds-control cds-layout="m-t:sm">
          Use the <code cds-text="code">cds-control</code> attribute to place generic content into a control layout.
        </p>
        <cds-control-message>control message</cds-control-message>
      </cds-control>

      <cds-control>
        <label>label</label>
        <p cds-text="body" cds-control cds-layout="m-t:sm" style="opacity: 0.3" aria-disabled="true">
          Use the <code cds-text="code">aria-disabled</code> to render a non-form control inert. Note that applications
          need to manage the styles of their own custom controls.
        </p>
        <cds-control-message>control message</cds-control-message>
      </cds-control>

      <cds-control>
        <label>long input</label>
        <input
          cds-control
          value="A billion trillion another world rogue rich in heavy atoms worldlets cosmic ocean? The ash of stellar alchemy preserve and cherish that pale blue dot network of wormholes two ghostly white figures in coveralls and helmets are softly dancing a very small stage in a vast cosmic arena something incredible is waiting to be known. Permanence of the stars courage of our questions network of wormholes across the centuries bits of moving fluff a mote of dust suspended in a sunbeam. Tesseract hydrogen atoms circumnavigated dispassionate extraterrestrial observer the carbon in our apple pies vastness is bearable only through love. Prime number from which we spring muse about kindling the energy hidden in matter decipherment brain is the seed of intelligence? Hundreds of thousands from which we spring something incredible is waiting to be known of brilliant syntheses kindling the energy hidden in matter prime number. Hundreds of thousands made in the interiors of collapsing stars muse about the only home we've ever known a mote of dust suspended in a sunbeam from which we spring and billions upon billions upon billions upon billions upon billions upon billions upon billions."
        />
        <cds-control-message>control message</cds-control-message>
      </cds-control>

      <cds-control layout="vertical" status="success">
        <label>long input with control badge</label>
        <input
          value="A billion trillion another world rogue rich in heavy atoms worldlets cosmic ocean? The ash of stellar alchemy preserve and cherish that pale blue dot network of wormholes two ghostly white figures in coveralls and helmets are softly dancing a very small stage in a vast cosmic arena something incredible is waiting to be known. Permanence of the stars courage of our questions network of wormholes across the centuries bits of moving fluff a mote of dust suspended in a sunbeam. Tesseract hydrogen atoms circumnavigated dispassionate extraterrestrial observer the carbon in our apple pies vastness is bearable only through love. Prime number from which we spring muse about kindling the energy hidden in matter decipherment brain is the seed of intelligence? Hundreds of thousands from which we spring something incredible is waiting to be known of brilliant syntheses kindling the energy hidden in matter prime number. Hundreds of thousands made in the interiors of collapsing stars muse about the only home we've ever known a mote of dust suspended in a sunbeam from which we spring and billions upon billions upon billions upon billions upon billions upon billions upon billions."
        />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-control>

      <cds-control status="success">
        <label>long input</label>
        <p cds-control cds-text="body truncate" style="border: 1px solid black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <cds-control-message status="success">control message</cds-control-message>
      </cds-control>

      <cds-control>
        <label>long input</label>
        <input
          cds-control
          value="A billion trillion another world rogue rich in heavy atoms worldlets cosmic ocean? The ash of stellar alchemy preserve and cherish that pale blue dot network of wormholes two ghostly white figures in coveralls and helmets are softly dancing a very small stage in a vast cosmic arena something incredible is waiting to be known. Permanence of the stars courage of our questions network of wormholes across the centuries bits of moving fluff a mote of dust suspended in a sunbeam. Tesseract hydrogen atoms circumnavigated dispassionate extraterrestrial observer the carbon in our apple pies vastness is bearable only through love. Prime number from which we spring muse about kindling the energy hidden in matter decipherment brain is the seed of intelligence? Hundreds of thousands from which we spring something incredible is waiting to be known of brilliant syntheses kindling the energy hidden in matter prime number. Hundreds of thousands made in the interiors of collapsing stars muse about the only home we've ever known a mote of dust suspended in a sunbeam from which we spring and billions upon billions upon billions upon billions upon billions upon billions upon billions."
        />
        <cds-control-message>control message</cds-control-message>
      </cds-control>

      <cds-control>
        <label>long input</label>
        <p cds-control cds-text="body truncate" style="border: 1px solid black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <cds-control-message>control message</cds-control-message>
      </cds-control>

      <cds-control status="success">
        <label>long input</label>
        <p cds-control cds-text="body truncate" style="border: 1px solid black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <cds-control-message status="success">control message</cds-control-message>
      </cds-control>

      <cds-control status="success">
        <label>long input</label>
        <p cds-control cds-text="body truncate" style="border: 1px solid black; margin-left: 0.3rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
        <cds-control-action
          action="suffix"
          readonly
          aria-label="Icon indicating that the selected host status is stable"
          title="Icon indicating that the selected host status is stable"
        >
          <cds-icon
            shape="cloud"
            badge="success"
            role="img"
            aria-label="Icon of host cloud with green badge"
          ></cds-icon>
        </cds-control-action>

        <cds-control-message status="success">control message</cds-control-message>
      </cds-control>
    </div>
  `;
}
