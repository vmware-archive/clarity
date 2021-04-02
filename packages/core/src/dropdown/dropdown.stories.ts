/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button/register.js';
import '@cds/core/radio/register.js';
import '@cds/core/dropdown/register.js';
import '@cds/core/modal/register.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { spreadProps, getElementStorybookArgs, state, property } from '@cds/core/internal';
import { html, LitElement } from 'lit';
import { query } from 'lit/decorators/query.js';
import { CdsButton } from '@cds/core/button';
import { CdsDropdown } from '@cds/core/dropdown';
import { CdsModal } from '@cds/core/modal';

export default {
  title: 'Stories/Dropdown',
  component: 'cds-dropdown',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A673',
    },
  },
};

export function API(args: any) {
  return html` <cds-dropdown ...="${spreadProps(getElementStorybookArgs(args))}"> ${args.default} </cds-dropdown> `;
}

class DemoDropdown extends LitElement {
  @state({ type: Boolean, reflect: true }) protected isInitted = false;
  @query('cds-button') popupAnchor: CdsButton | HTMLElement;
  @query('cds-dropdown') popup: CdsDropdown;
  @state() showOverlay = false;

  protected createRenderRoot() {
    return this;
  }

  render() {
    return html``;
  }
}

@customElement('demo-dropdown-basic')
class DemoDropdownBasic extends DemoDropdown {
  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.popup.anchor = this.popupAnchor;
  }

  render() {
    return html`<cds-button
        status="primary"
        type="button"
        @click=${() => (this.showOverlay = true)}
        popup="demo-dropdown-basic-dd"
        >Show Basic Dropdown</cds-button
      >
      <cds-dropdown
        ?hidden=${!this.showOverlay}
        aria-labelledby="basic-dropdown-title"
        id="demo-dropdown-basic-dd"
        @closeChange=${() => (this.showOverlay = false)}
      >
        <div cds-layout="vertical gap:lg p:lg align:stretch">
          <h3 cds-first-focus cds-text="section" id="basic-dropdown-title">Dropdown</h3>
          <p cds-text="body">Any content can be placed inside a generic dropdown.</p>
          <cds-button style="max-height: 36px" type="button" @click=${() => (this.showOverlay = false)}
            >Close Dropdown</cds-button
          >
        </div>
      </cds-dropdown>`;
  }
}

@customElement('demo-dropdown-scrollable')
class DemoDropdownScrollable extends DemoDropdown {
  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.popup.anchor = this.popupAnchor;
  }

  render() {
    return html`<cds-button
        status="primary"
        type="button"
        @click=${() => (this.showOverlay = true)}
        popup="demo-dropdown-scrollable-dd"
        >Show Scrollable Dropdown</cds-button
      >
      <cds-dropdown
        ?hidden=${!this.showOverlay}
        style="--max-height: 420px"
        aria-labelledby="scrolling-dropdown-title"
        closable
        id="demo-dropdown-scrollable-dd"
        @closeChange=${() => (this.showOverlay = false)}
      >
        <div cds-layout="vertical gap:lg p-y:lg align:stretch">
          <h3 cds-first-focus cds-text="section" cds-layout="p-x:lg" id="scrolling-dropdown-title">
            Scrollable Dropdown
          </h3>
          <div
            tabindex="0"
            cds-layout="p-x:lg"
            style="overflow: hidden; overflow-y: auto; max-height: 200px; flex: 1 1 200px"
          >
            <div cds-layout="vertical gap:lg">
              <p cds-text="body">Demo to show how to scroll through a dropdown with a lot of content.</p>
              <p cds-text="body">
                A still more glorious dawn awaits globular star cluster science preserve and cherish that pale blue dot
                citizens of distant epochs take root and flourish. White dwarf the carbon in our apple pies tingling of
                the spine corpus callosum vanquish the impossible corpus callosum? With pretty stories for which there's
                little good evidence invent the universe Orion's sword invent the universe are creatures of the cosmos
                something incredible is waiting to be known.
              </p>
              <p cds-text="body">
                Vangelis colonies consciousness globular star cluster cosmic fugue courage of our questions.
                Astonishment hydrogen atoms courage of our questions bits of moving fluff two ghostly white figures in
                coveralls and helmets are softly dancing extraplanetary. With pretty stories for which there's little
                good evidence concept of the number one something incredible is waiting to be known something incredible
                is waiting to be known something incredible is waiting to be known rich in heavy atoms.
              </p>
              <form><label for="formfield">Ohai</label><input type="text" id="formfield" /></form>
              <p cds-text="body">
                Extraordinary claims require extraordinary evidence corpus callosum galaxies inconspicuous motes of rock
                and gas are creatures of the cosmos star stuff harvesting star light? Bits of moving fluff finite but
                unbounded finite but unbounded kindling the energy hidden in matter shores of the cosmic ocean finite
                but unbounded? Dispassionate extraterrestrial observer the carbon in our apple pies white dwarf shores
                of the cosmic ocean two ghostly white figures in coveralls and helmets are softly dancing a mote of dust
                suspended in a sunbeam.
              </p>
              <p cds-text="body">
                Quasar shores of the cosmic ocean stirred by starlight Rig Veda vanquish the impossible realm of the
                galaxies. Concept of the number one star stuff harvesting star light extraplanetary star stuff
                harvesting star light the sky calls to us two ghostly white figures in coveralls and helmets are softly
                dancing? The only home we've ever known concept of the number one rich in heavy atoms across the
                centuries concept of the number one Orion's sword and billions upon billions upon billions upon billions
                upon billions upon billions upon billions.
              </p>
            </div>
          </div>
          <div cds-layout="p-x:lg">
            <cds-button style="max-height: 36px" type="button" @click=${() => (this.showOverlay = false)}
              >Close Dropdown</cds-button
            >
          </div>
        </div>
      </cds-dropdown>`;
  }
}

type PointerTypes = 'default' | 'angle' | 'none';

@customElement('demo-dropdown-pointer')
class DemoDropdownPointer extends DemoDropdown {
  @state({ type: String }) pointerType: PointerTypes = 'default';

  updatePointerType(newType: PointerTypes) {
    this.pointerType = newType;
  }

  updateAlignments(align: 'start' | 'mid' | 'end') {
    this.popup.pointerAlign = align;
    this.popup.anchorAlign = align;
  }

  protected get pointerTemplate() {
    if (this.pointerType === 'angle') {
      return html`<cds-internal-pointer type="angle" slot="pointer"></cds-internal-pointer>`;
    }

    return html`<cds-internal-pointer type="default" slot="pointer"></cds-internal-pointer>`;
  }

  render() {
    return html` <div cds-layout="vertical gap:lg">
        <div>
          <cds-button
            status="primary"
            type="button"
            @click=${() => (this.showOverlay = true)}
            popup="demo-pointer-dd"
            id="demo-pointer-anchor"
            >Show Dropdown With Pointer</cds-button
          >
        </div>
        <div>
          <cds-radio-group layout="horizontal-inline">
            <label>Pointer Type:</label>
            <cds-radio>
              <label>default</label>
              <input type="radio" value="default" checked @change=${() => this.updatePointerType('default')} />
            </cds-radio>

            <cds-radio>
              <label>angle</label>
              <input type="radio" value="angle" @change=${() => this.updatePointerType('angle')} />
            </cds-radio>

            <cds-radio>
              <label>none</label>
              <input type="radio" value="none" @change=${() => this.updatePointerType('none')} />
            </cds-radio>
          </cds-radio-group>
        </div>
        <div>
          <cds-radio-group layout="horizontal-inline">
            <label>Pointer Alignment:</label>
            <cds-radio>
              <label>start</label>
              <input type="radio" value="start" checked @change=${() => this.updateAlignments('start')} />
            </cds-radio>

            <cds-radio>
              <label>middle/center</label>
              <input type="radio" value="mid" @change=${() => this.updateAlignments('mid')} />
            </cds-radio>

            <cds-radio>
              <label>end</label>
              <input type="radio" value="end" @change=${() => this.updateAlignments('end')} />
            </cds-radio>
          </cds-radio-group>
        </div>
      </div>

      <cds-dropdown
        ?hidden=${!this.showOverlay}
        aria-labelledby="pointer-dropdown-title"
        id="demo-pointer-dd"
        anchor="demo-pointer-anchor"
        @closeChange=${() => (this.showOverlay = false)}
      >
        <div cds-layout="vertical gap:lg p:lg align:stretch">
          <h3 cds-first-focus cds-text="section" id="pointer-dropdown-title">Dropdown With Pointer</h3>
          <p cds-text="body">Any content can be placed inside a generic dropdown.</p>
          <cds-button style="max-height: 36px" type="button" @click=${() => (this.showOverlay = false)}
            >Close Dropdown</cds-button
          >
        </div>
        ${this.pointerType === 'none' ? '' : this.pointerTemplate}
      </cds-dropdown>`;
  }
}

@customElement('demo-dropdown-responsive')
class DemoDropdownResponsive extends DemoDropdown {
  render() {
    return html`<cds-button
        status="primary"
        type="button"
        @click=${() => (this.showOverlay = true)}
        id="demo-responsive-anchor"
        popup="demo-responsive-dd"
        >Show Responsive Dropdown</cds-button
      >
      <cds-dropdown
        ?hidden=${!this.showOverlay}
        orientation="none"
        aria-labelledby="responsive-dropdown-title"
        id="demo-responsive-dd"
        anchor="demo-responsive-anchor"
        @closeChange=${() => (this.showOverlay = false)}
      >
        <div cds-layout="vertical gap:lg p:lg align:stretch">
          <h3 cds-first-focus cds-text="section" id="responsive-dropdown-title">Responsive Dropdown</h3>
          <div cds-layout="vertical gap:lg">
            <p cds-text="body">
              When there is not enough room on the screen for a dropdown to show, it goes into a "responsive" style.
            </p>
            <p cds-text="body">A dropdown in a "responsive" orientation looks like this.</p>
            <p cds-text="body">
              A dropdown can be forced to display in the responsive style by setting its orientation to <i>none</i>.
            </p>
          </div>
          <div>
            <cds-button style="max-height: 36px" type="button" @click=${() => (this.showOverlay = false)}
              >Close Dropdown</cds-button
            >
          </div>
        </div>
      </cds-dropdown>`;
  }
}

@customElement('demo-dropdown-closable')
class DemoDropdownClosable extends DemoDropdown {
  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.popup.anchor = this.popupAnchor;
  }

  render() {
    return html`<cds-button
        status="primary"
        type="button"
        @click=${() => (this.showOverlay = true)}
        popup="demo-closable-dd"
        >Show Closable Dropdown</cds-button
      >
      <cds-dropdown
        ?hidden=${!this.showOverlay}
        closable
        aria-labelledby="closable-dropdown-title"
        id="demo-closable-dd"
        @closeChange=${() => (this.showOverlay = false)}
      >
        <div cds-layout="vertical gap:lg p:lg align:stretch">
          <h3 cds-first-focus cds-text="section" id="closable-dropdown-title">Closable Dropdown</h3>
          <div cds-layout="vertical gap:lg">
            <p cds-text="body">
              A dropdown can be "closable". This will put a close action at the top of the dropdown.
            </p>
            <p cds-text="body">
              Clicking on the close action will allow you to close the dropdown via the dropdown's closeChange custom
              event.
            </p>
          </div>
        </div>
      </cds-dropdown>`;
  }
}

@customElement('demo-dropdown-alt-anchored')
class DemoDropdownAltAnchored extends DemoDropdown {
  @query('#altAnchor') popupAnchor: HTMLElement;

  render() {
    return html` <div cds-layout="grid gap:md">
        <div cds-layout="col:4">
          <cds-button status="primary" type="button" @click=${() => (this.showOverlay = true)} popup="demo-anchored-dd"
            >Show Anchored Dropdown</cds-button
          >
        </div>
        <div cds-layout="col:8 align:right">
          <div
            cds-layout="p-y:md p-x:xl"
            cds-text="body right"
            id="altAnchor"
            style="background: var(--cds-alias-object-container-background-shade)"
          >
            Dropdown Anchored Here
          </div>
        </div>
      </div>
      <cds-dropdown
        ?hidden=${!this.showOverlay}
        anchor="altAnchor"
        pointer-align="end"
        anchor-align="end"
        aria-labelledby="anchored-dropdown-title"
        id="demo-anchored-dd"
        @closeChange=${() => (this.showOverlay = false)}
      >
        <div cds-layout="vertical gap:lg p:lg align:stretch">
          <h3 cds-first-focus cds-text="section" id="anchored-dropdown-title">Anchored Dropdown</h3>
          <div cds-layout="vertical gap:lg">
            <p cds-text="body">A dropdown can be anchored to any element on the page.</p>
            <p cds-text="body">It doesn't have to be anchored to the element that the user clicks on to show it.</p>
          </div>
          <cds-button style="max-height: 36px" type="button" @click=${() => (this.showOverlay = false)}
            >Close Dropdown</cds-button
          >
        </div>
        <cds-internal-pointer type="default"></cds-internal-pointer>
      </cds-dropdown>`;
  }
}

@customElement('demo-dropdown-orientation')
class DemoDropdownOrientation extends DemoDropdown {
  @state({ type: String }) orientationPref = 'default';

  updateOrientation(newPref: string) {
    this.orientationPref = newPref;
  }

  private get myOrientationPref() {
    switch (this.orientationPref) {
      case 'vertical':
        return 'not:left not:right';
      case 'horizontal':
        return 'not:top not:bottom';
      case 'top-left':
        return 'top left';
      case 'bottom':
        return 'only:bottom';
      default:
        return '';
    }
  }

  private get myOrientationDisplay() {
    switch (this.orientationPref) {
      case 'vertical':
        return 'The dropdown will only try positioning the dropdown to above or below the anchor if the orientation preference is set to "not:left not:right".';
      case 'horizontal':
        return 'The dropdown will only try positioning the dropdown to the left or right of the anchor if the orientation preference is set to "not:top not:bottom".';
      case 'top-left':
        return 'Setting the preferences to "top left" will have the dropdown try to position itself first above the anchor then to the left of it. Then it will try the remaining positions of bottom and right.';
      case 'bottom':
        return 'The dropdown\'s orientation is set to "only:bottom". This means the dropdown will only position itself below the anchor. If it cannot fit, it will show a responsive dropdown.';
      default:
        return 'Default preferences are bottom, right, left, and top. The dropdown will try to position itself in relation to the anchor in that order.';
    }
  }

  private orientationPrefCode() {
    if (this.myOrientationPref !== '') {
      return html`<p cds-text="body">
        Orientation preference is set to <span cds-text="code">${this.myOrientationPref}</span>.
      </p>`;
    } else {
      return '';
    }
  }

  render() {
    return html` <div cds-layout="vertical gap:lg">
        <div>
          <cds-radio-group layout="horizontal-inline">
            <label>Dropdown Preferences:</label>
            <cds-radio>
              <label>default</label>
              <input type="radio" value="default" checked @change=${() => this.updateOrientation('default')} />
            </cds-radio>

            <cds-radio>
              <label>top and left preferred</label>
              <input type="radio" value="vertical" @change=${() => this.updateOrientation('top-left')} />
            </cds-radio>

            <cds-radio>
              <label>only bottom</label>
              <input type="radio" value="vertical" @change=${() => this.updateOrientation('bottom')} />
            </cds-radio>

            <cds-radio>
              <label>only vertical</label>
              <input type="radio" value="vertical" @change=${() => this.updateOrientation('vertical')} />
            </cds-radio>

            <cds-radio>
              <label>only horizontal</label>
              <input type="radio" value="none" @change=${() => this.updateOrientation('horizontal')} />
            </cds-radio>
          </cds-radio-group>
        </div>
        <div
          style="background:  var(--cds-alias-object-container-background-shade); width: 100%; height: 5rem; display: flex; align-items: center; justify-content: center"
        >
          <cds-button
            status="primary"
            type="button"
            @click=${() => (this.showOverlay = true)}
            popup="demo-orientations-dd"
            id="demo-orientations-anchor"
            >Show Dropdown</cds-button
          >
        </div>
      </div>

      <cds-dropdown
        ?hidden=${!this.showOverlay}
        anchor-align="mid"
        pointer-align="mid"
        orientation=${this.myOrientationPref}
        aria-labelledby="orientation-dropdown-title"
        anchor="demo-orientations-anchor"
        id="demo-orientations-dd"
        @closeChange=${() => (this.showOverlay = false)}
      >
        <div cds-layout="vertical gap:lg p:lg align:stretch">
          <h3 cds-first-focus cds-text="section" id="orientation-dropdown-title">Dropdown Orientation</h3>
          <p cds-text="body">
            The preference for where the dropdown should be placed can be changed to suit the requirements of your
            application.
          </p>
          ${this.orientationPrefCode()}
          <p cds-text="body">${this.myOrientationDisplay}</p>
          <cds-button style="max-height: 36px" type="button" @click=${() => (this.showOverlay = true)}
            >Close Dropdown</cds-button
          >
        </div>
        <cds-internal-pointer type="angle"></cds-internal-pointer>
      </cds-dropdown>`;
  }
}

@customElement('demo-dropdown-dark-theme')
class DemoDropdownDarkTheme extends DemoDropdown {
  @property({ type: String }) cdsTheme = 'dark';

  render() {
    return html`<cds-button
        status="primary"
        type="button"
        id="dark-theme-btn"
        @click=${() => (this.showOverlay = true)}
        popup="demo-dark-dd"
        >Show Dark Theme Dropdown</cds-button
      >
      <cds-dropdown
        ?hidden=${!this.showOverlay}
        anchor="dark-theme-btn"
        aria-labelledby="dark-theme-title"
        id="demo-dark-dd"
        @closeChange=${() => (this.showOverlay = false)}
      >
        <div cds-layout="vertical gap:lg p:lg align:stretch">
          <h3 cds-first-focus cds-text="section" id="dark-theme-title">Dropdown</h3>
          <p cds-text="body">Any content can be placed inside a generic dropdown.</p>
          <cds-button style="max-height: 36px" type="button" @click=${() => (this.showOverlay = false)}
            >Close Dropdown</cds-button
          >
        </div>
      </cds-dropdown>`;
  }
}

@customElement('demo-dropdown-in-modal')
class DemoDropdownInModal extends DemoDropdown {
  @state() showModal = false;
  @state() showDropdown = false;

  @query('cds-modal') modal: CdsModal;

  render() {
    return html`<cds-button status="primary" type="button" @click=${() => (this.showModal = true)}
        >Show Modal</cds-button
      >
      <cds-modal
        aria-labelledby="default-modal-title"
        ?hidden=${!this.showModal}
        @closeChange=${() => (this.showModal = false)}
      >
        <cds-modal-header>
          <h3 cds-text="title" cds-first-focus id="default-modal-title">Modal With Dropdown</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">
            This is an example of a modal with a dropdown inside of it. Click the button below to open the dropdown.
          </p>
          <cds-button @click=${() => (this.showDropdown = true)} popup="demo-modal-dd" id="ddown-anchor"
            >Open Dropdown</cds-button
          >
        </cds-modal-content>
        <cds-modal-actions>
          <cds-button @click=${() => (this.showModal = false)}>Close Modal</cds-button>
        </cds-modal-actions>
      </cds-modal>

      <cds-dropdown
        ?hidden=${!this.showDropdown}
        aria-labelledby="ddown-modal-title"
        id="demo-modal-dd"
        anchor="ddown-anchor"
        @closeChange=${() => (this.showDropdown = false)}
      >
        <div cds-layout="vertical gap:lg p:lg align:stretch">
          <h3 cds-first-focus cds-text="section" id="ddown-modal-title">Dropdown</h3>
          <p cds-text="body">Any content can be placed inside a generic dropdown.</p>
          <cds-button style="max-height: 36px" type="button" @click=${() => (this.showDropdown = false)}
            >Close Dropdown</cds-button
          >
        </div>
      </cds-dropdown> `;
  }

  protected createRenderRoot() {
    return this;
  }
}

export function basic() {
  return html`<demo-dropdown-basic></demo-dropdown-basic>`;
}

basic.element = DemoDropdownBasic;

export function scrollable() {
  return html`<demo-dropdown-scrollable></demo-dropdown-scrollable>`;
}

scrollable.element = DemoDropdownScrollable;

export function pointer() {
  return html`<demo-dropdown-pointer></demo-dropdown-pointer>`;
}

pointer.element = DemoDropdownPointer;

export function responsive() {
  return html`<demo-dropdown-responsive></demo-dropdown-responsive>`;
}

responsive.element = DemoDropdownResponsive;

export function closable() {
  return html`<demo-dropdown-closable></demo-dropdown-closable>`;
}

closable.element = DemoDropdownClosable;

export function altAnchored() {
  return html`<demo-dropdown-alt-anchored></demo-dropdown-alt-anchored>`;
}

altAnchored.element = DemoDropdownAltAnchored;

export function orientation() {
  return html`<demo-dropdown-orientation></demo-dropdown-orientation>`;
}

orientation.element = DemoDropdownOrientation;

export function darkTheme() {
  return html`<div cds-theme="dark"><demo-dropdown-dark-theme></demo-dropdown-dark-theme></div>`;
}

darkTheme.element = DemoDropdownDarkTheme;

export function dropdownInModal() {
  return html`<demo-dropdown-in-modal></demo-dropdown-in-modal>`;
}

dropdownInModal.element = DemoDropdownInModal;
