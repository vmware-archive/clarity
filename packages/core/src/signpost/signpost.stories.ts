/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button/register.js';
import '@cds/core/signpost/register.js';
import '@cds/core/modal/register.js';
import '@cds/core/icon/register.js';
import '@cds/core/forms/register.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { spreadProps, getElementStorybookArgs, property, querySlot, state, baseStyles } from '@cds/core/internal';
import { css, html, LitElement, svg } from 'lit';
import { query } from 'lit/decorators/query.js';
import { CdsButton } from '@cds/core/button';
import { CdsSignpost } from '@cds/core/signpost';
import { CdsModal } from '@cds/core/modal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { infoCircleIcon } from '@cds/core/icon/shapes/info-circle.js';

ClarityIcons.addIcons(infoCircleIcon);

export default {
  title: 'Stories/Signpost',
  component: 'cds-signpost',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A673',
    },
  },
};

export function API(args: any) {
  return html` <cds-signpost ...="${spreadProps(getElementStorybookArgs(args))}"> ${args.default} </cds-signpost> `;
}

class DemoSignpost extends LitElement {
  @query('.demo-anchor') anchor: CdsButton | HTMLElement;
  @query('.main-signpost') signpost: CdsSignpost;
  @state() showOverlay = false;

  protected createRenderRoot() {
    return this;
  }

  render() {
    return html``;
  }
}

@customElement('demo-signpost-basic')
class DemoSignpostBasic extends DemoSignpost {
  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.signpost.anchor = this.anchor;
  }

  render() {
    return html`<cds-button
        class="demo-anchor"
        status="primary"
        type="button"
        @click=${() => (this.showOverlay = true)}
        popup="demo-signpost-basic"
        >Show Basic Signpost</cds-button
      >
      <cds-signpost
        ?hidden=${!this.showOverlay}
        aria-labelledby="basic-signpost-title"
        id="demo-signpost-basic"
        class="main-signpost"
        @closeChange=${() => (this.showOverlay = false)}
      >
        <div cds-layout="vertical gap:lg align:stretch">
          <h3 cds-first-focus cds-text="section" id="basic-signpost-title">Signpost</h3>
          <p cds-text="body">Any content can be placed inside a signpost.</p>
          <cds-button style="max-height: 36px" type="button" @click=${() => (this.showOverlay = false)}
            >Close Signpost</cds-button
          >
        </div>
      </cds-signpost>`;
  }
}

// basic signpost
export function basic() {
  return html`<demo-signpost-basic></demo-signpost-basic>`;
}

basic.element = DemoSignpostBasic;

@customElement('demo-signpost-trigger')
class DemoSignpostTrigger extends LitElement {
  @state() showOverlay = false;

  get trigger() {
    return this.shadowRoot.querySelector<HTMLElement>('#demo-trigger');
  }

  static styles = [
    baseStyles,
    css`
      :host {
        contain: none;
      }
    `,
  ];

  render() {
    return html`
      <div cds-layout="horizontal gap:sm">
        <cds-button id="demo-anchor" @click=${() => (this.showOverlay = true)} popup="demo-signpost">
          Show Trigger Signpost
        </cds-button>
        <cds-button id="demo-trigger" status="danger" action="outline">
          Trigger Receives Focus On Close
        </cds-button>
      </div>
      <cds-signpost
        id="demo-signpost"
        ?hidden=${!this.showOverlay}
        .trigger=${this.trigger}
        @closeChange=${() => (this.showOverlay = false)}
        aria-labelledby="trigger-signpost-title"
        anchor="demo-anchor"
      >
        <div cds-layout="vertical gap:lg">
          <h3 cds-first-focus cds-text="section" id="trigger-signpost-title">Signpost</h3>
          <p cds-text="body">Any content can be placed inside a signpost.</p>
          <cds-button style="max-height: 36px" type="button" @click=${() => (this.showOverlay = false)}
            >Close Signpost</cds-button
          >
        </div>
      </cds-signpost>
    `;
  }
}

/* 
  signpost tour commented out due to a11y concerns.
  most likely this will need to be more fleshed out as it's own workflow because there
  are too many issues we will need to resolve to make it accessible.
  kept here for reference for potential future complex workflow/component.

@customElement('demo-signpost-tour')
class DemoSignpostTour extends DemoSignpost {
  demoType = 'tour';
  signpostId = `demo-signpost-${this.demoType}`;
  titleId = `${this.demoType}-signpost-title`;
  signpostButtonIdPrefix = 'signpost-tour-btn';

  signpostContent = [
    html`<h3 cds-first-focus cds-text="section" id="${this.titleId}">Signpost Tour Demo</h3>
      <p cds-text="body">
        This is an example of a signpost tour. The signposts in a tour point towards elements in the user interface and
        give users helpful information about different interactive areas of a workflow.
      </p>
      <p cds-text="body">
        Here, the signpost tour points at buttons in the user interface. Click the "Next" button in the signpost to move
        to the next step or press the Escape key or close button to exit the tour.
      </p>`,
    html`<h3 cds-first-focus cds-text="section" id="${this.titleId}">Signpost Tour, First Stop</h3>
      <p cds-text="body">
        This is an example of a signpost tour. It is pointing towards a button in the user interface that says "First
        Stop". Click the "Next" button in the signpost to move to the next step or press the Escape key or close button
        to exit the tour.
      </p>`,
    html`<h3 cds-first-focus cds-text="section" id="${this.titleId}">Signpost Tour, Second Stop</h3>
      <p cds-text="body">
        This is an example of a signpost tour. It is pointing towards a button in the user interface that says "Second
        Stop". Click the "Next" button in the signpost to move to the next step or press the Escape key or close button
        to exit the tour.
      </p>`,
    html`<h3 cds-first-focus cds-text="section" id="${this.titleId}">Signpost Tour, Last Stop</h3>
      <p cds-text="body">
        This is an example of a signpost tour. It is pointing towards a button in the user interface that says "Third
        Stop". Click the "Finish Tour" button in the signpost complete the tour.
      </p>`,
  ];

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.signpost.anchor = this.anchor;
    this.signpost.trigger = this.anchor;

    this.signpost.addEventListener('cdsMotionChange', async (d: any) => {
      if (d.detail.indexOf('animation done') > -1 && this.currentStep === 4) {
        this.resetTour();
      }
    });
  }

  @state({ type: Number })
  currentStep = 0;

  @state({ type: String })
  get nextButtonStatus() {
    return this.currentStep < 3 ? 'primary' : 'success';
  }

  @state({ type: String })
  get signpostTourContent() {
    return this.signpostContent[this.currentStep];
  }

  resetTour() {
    this.signpost.hidden = true;
  }

  async startTour() {
    this.resetTour();
    this.currentStep = 0;
    this.signpost.anchor = this.anchor;
    await componentIsStable(this.signpost);
    this.signpost.hidden = false;
  }

  @state({ type: String })
  get nextButtonText() {
    return this.currentStep < 3 ? 'Next' : 'Finish Tour';
  }

  async next() {
    this.signpost.hidden = true;
    if (this.currentStep < 3) {
      this.currentStep = this.currentStep + 1;
      this.signpost.anchor =
        this.currentStep < 1
          ? this.anchor
          : queryChildFromLightOrShadowDom(this, `#${this.signpostButtonIdPrefix}-${this.currentStep}`);
      await componentIsStable(this.signpost);
      this.signpost.hidden = false;
    }
  }

  render() {
    return html`
      <style>
        .signpost-tour cds-button {
          width: 9.7rem;
        }
      </style>
      <cds-demo class="signpost-tour" layout tall wide>
        <div cds-layout="grid cols:6 gap:sm align:stretch">
          <cds-placeholder cds-text="left">
            <cds-button
              class="demo-anchor"
              @click=${() => {
                this.startTour();
              }}
              status="primary"
              id="${this.signpostButtonIdPrefix}-0"
              popup="${this.signpostId}"
              >Click to Start Tour</cds-button
            >
          </cds-placeholder>
          <cds-placeholder cds-text="right">
            <cds-button status="primary" id="${this.signpostButtonIdPrefix}-1">First Stop</cds-button>
          </cds-placeholder>
          <cds-placeholder cds-text="left">
            <cds-button status="primary" id="${this.signpostButtonIdPrefix}-2">Second Stop</cds-button>
          </cds-placeholder>
          <cds-placeholder cds-text="right">
            <cds-button status="primary" id="${this.signpostButtonIdPrefix}-3">Third Stop</cds-button>
          </cds-placeholder>
        </div>
      </cds-demo>
      <cds-signpost
        ?hidden=${true}
        aria-labelledby="${this.titleId}"
        id="${this.signpostId}"
        class="main-signpost"
        @closeChange=${() => {
          this.resetTour();
        }}
      >
        <div cds-layout="vertical gap:lg align:stretch">
          ${this.signpostTourContent}
          <cds-button
            style="max-height: 36px"
            status=${this.nextButtonStatus}
            type="button"
            @click=${() => {
              this.next();
            }}
            >${this.nextButtonText}</cds-button
          >
        </div>
      </cds-signpost>
    `;
  }
}

*/

// layered signpost
@customElement('demo-signpost-stacked')
class DemoSignpostStacked extends DemoSignpost {
  @querySlot('#default-modal-form')
  myForm: HTMLFormElement;

  @querySlot('cds-modal')
  modal: CdsModal;

  @state({ type: Boolean })
  showSignpost = false;

  private titleId = 'stacked-signpost-title';

  @state({ type: Number })
  activeSignpost = 0;

  private contentForSignpost = [
    html`<h3 cds-first-focus cds-text="section" id="${this.titleId}">Signpost For Input Field 1</h3>
      <p cds-text="body">This signpost explains details about input field number one.</p>`,
    html`<h3 cds-first-focus cds-text="section" id="${this.titleId}">Signpost For Input Field 2</h3>
      <p cds-text="body">This signpost explains details about input field number two.</p>`,
  ];

  private get signpostContent() {
    return this.contentForSignpost[this.activeSignpost];
  }

  openSignpost(whichOne: number, anchorRef: EventTarget) {
    this.activeSignpost = whichOne;
    this.signpost.anchor = anchorRef as HTMLElement;
    this.signpost.trigger = anchorRef as HTMLElement;
    this.showSignpost = true;
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);

    this.modal.addEventListener('cdsMotionChange', (d: any) => {
      if (d.detail.indexOf('animation done') > -1) {
        this.myForm.reset();
      }
    });
  }

  updateAndShowSignpost(whichContent: number) {
    return whichContent;
  }

  hideOverlay(evt?: Event) {
    if (evt) {
      evt.preventDefault();
    }
    this.showOverlay = false;
  }

  render() {
    return html`<div cds-layout="m-y:xxs">
        <cds-button
          class="demo-anchor"
          status="primary"
          type="button"
          @click=${() => (this.showOverlay = true)}
          popup="demo-signpost-stacked"
          >Show Modal With Signpost</cds-button
        >
      </div>
      <cds-modal ?hidden=${!this.showOverlay} aria-labelledby="default-modal-title" @closeChange=${this.hideOverlay}>
        <cds-modal-header>
          <h3 cds-text="section" cds-first-focus id="default-modal-title">Modal With Signposts In It</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">
            This modal has a form with signposts describing the form fields. This is a common pattern we see in forms.
          </p>
          <form
            id="default-modal-form"
            @submit=${(e: Event) => {
              this.hideOverlay(e);
            }}
          >
            <cds-form-group>
              <cds-input>
                <label>Example text input 1</label>
                <input type="text" />
                <cds-control-action action="suffix" type="button" @click=${(e: Event) => this.openSignpost(0, e.target)}
                  ><cds-icon shape="info-circle"></cds-icon
                ></cds-control-action>
              </cds-input>

              <cds-input>
                <label>Example text input 2</label>
                <input type="text" />
                <cds-control-action action="suffix" type="button" @click=${(e: Event) => this.openSignpost(1, e.target)}
                  ><cds-icon shape="info-circle"></cds-icon
                ></cds-control-action>
              </cds-input>

              <button type="submit" cds-layout="display:screen-reader-only">submit form</button>
            </cds-form-group>
          </form>
        </cds-modal-content>
        <cds-modal-actions>
          <cds-button action="outline" @click=${this.hideOverlay}>Cancel</cds-button>
          <cds-button @click=${this.hideOverlay}>Ok</cds-button>
        </cds-modal-actions>
      </cds-modal>

      <cds-signpost
        ?hidden=${!this.showSignpost}
        aria-labelledby="${this.titleId}"
        id="demo-signpost-stacked"
        class="main-signpost"
        orientation="right"
        anchor-align="mid"
        pointer-align="mid"
        @closeChange=${() => (this.showSignpost = false)}
      >
        <div cds-layout="vertical gap:lg">
          ${this.signpostContent}
          <cds-button style="max-height: 36px" type="button" @click=${() => (this.showSignpost = false)}
            >Close Signpost</cds-button
          >
        </div>
      </cds-signpost>`;
  }
}

// custom pointer
const customPointerSvg = svg`<svg version="1.1" width="36" height="36"  viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<title>cursor-hand-line</title>
<path class="clr-i-outline clr-i-outline-path-1" d="M30.74,15.19a13.66,13.66,0,0,0-6.87-3.83A26,26,0,0,0,18,10.58V5.28A3.4,3.4,0,0,0,14.5,2,3.4,3.4,0,0,0,11,5.28v10L9.4,13.7a3.77,3.77,0,0,0-5.28,0A3.67,3.67,0,0,0,3,16.33a3.6,3.6,0,0,0,1,2.56l4.66,5.52a11.53,11.53,0,0,0,1.43,4,10.12,10.12,0,0,0,2,2.54v1.92a1.07,1.07,0,0,0,1,1.08H27a1.07,1.07,0,0,0,1-1.08v-2.7a12.81,12.81,0,0,0,3-8.36v-6A1,1,0,0,0,30.74,15.19ZM29,21.86a10.72,10.72,0,0,1-2.6,7.26,1.11,1.11,0,0,0-.4.72V32H14.14V30.52a1,1,0,0,0-.44-.83,7.26,7.26,0,0,1-1.82-2.23,9.14,9.14,0,0,1-1.2-3.52,1,1,0,0,0-.23-.59L5.53,17.53a1.7,1.7,0,0,1,0-2.42,1.76,1.76,0,0,1,2.47,0l3,3v3.14l2-1V5.28A1.42,1.42,0,0,1,14.5,4,1.42,1.42,0,0,1,16,5.28v11.8l2,.43V12.59a24.27,24.27,0,0,1,2.51.18V18l1.6.35V13c.41.08.83.17,1.26.28a14.88,14.88,0,0,1,1.53.49v5.15l1.6.35V14.5A11.06,11.06,0,0,1,29,16.23Z"></path>
</svg>`;

const customPointerSignpostDemoId = 'demo-signpost-custom-pointer';

function toggleCustomPointerSignpost(show: boolean) {
  document.getElementById(customPointerSignpostDemoId).hidden = !show;
}

export function custompointer() {
  return html` <div cds-layout="vertical gap:xs m-b:md" cds-text="body">
      <p>
        This is an advanced use case where the pointer images provided by Clarity are overridden with a custom SVG. Note
        that the custom pointer needs to come through the light DOM so that the signpost knows to assign it to the
        expected slot. Note also that the custom pointer image needs to be equilateral (same height and width) so that
        the positioning logic handles it as expected.
      </p>
    </div>
    <style>
      .clr-i-outline {
        fill: var(--pointer-outline);
      }
    </style>
    <cds-button
      class="demo-anchor"
      status="primary"
      type="button"
      id="${customPointerSignpostDemoId}-anchor"
      @click=${() => {
        toggleCustomPointerSignpost(true);
      }}
      popup="${customPointerSignpostDemoId}"
      >Show Signpost With Custom Pointer</cds-button
    >
    <cds-signpost
      ?hidden=${true}
      aria-labelledby="signpost-title"
      id="${customPointerSignpostDemoId}"
      anchor="${customPointerSignpostDemoId}-anchor"
      class="main-signpost"
      pointer-align="mid"
      @closeChange=${() => {
        toggleCustomPointerSignpost(false);
      }}
    >
      <cds-internal-pointer>${customPointerSvg}</cds-internal-pointer>
      <div cds-layout="vertical gap:lg">
        <h3 cds-first-focus cds-text="section" id="signpost-title">Signpost</h3>
        <p cds-text="body">The pointer used by the signpost can be customized!</p>
        <cds-button
          style="max-height: 36px"
          type="button"
          @click=${() => {
            toggleCustomPointerSignpost(false);
          }}
          >Close Signpost</cds-button
        >
      </div>
    </cds-signpost>`;
}

// signpost with assigned trigger element
export function trigger() {
  return html`<demo-signpost-trigger></demo-signpost-trigger>`;
}

trigger.element = DemoSignpostTrigger;

// signpost tour demo -- see comments above for DemoSignpostTour for more info
// export function tour() {
//   return html`<demo-signpost-tour></demo-signpost-tour>`;
// }
// tour.element = DemoSignpostTour;

// stacked/layered signpost demo
export function stacked() {
  return html`<demo-signpost-stacked></demo-signpost-stacked>`;
}

stacked.element = DemoSignpostStacked;

@customElement('demo-signpost-dark')
class DemoSignpostDarkTheme extends DemoSignpost {
  @property({ type: String }) cdsTheme = 'dark';

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.signpost.anchor = this.anchor;
  }

  render() {
    return html`<div cds-layout="vertical p:xl" style="background: var(--cds-alias-object-container-background)">
      <cds-button
        class="demo-anchor"
        status="primary"
        type="button"
        @click=${() => (this.showOverlay = true)}
        popup="demo-signpost-dark-theme"
        >Show Dark Theme Signpost</cds-button
      >
      <cds-signpost
        ?hidden=${!this.showOverlay}
        aria-labelledby="dark-signpost-title"
        id="demo-signpost-dark-theme"
        class="main-signpost"
        @closeChange=${() => (this.showOverlay = false)}
      >
        <div cds-layout="vertical gap:lg">
          <h3 cds-first-focus cds-text="section" id="dark-signpost-title">Signpost</h3>
          <p cds-text="body">Any content can be placed inside a signpost.</p>
          <cds-button style="max-height: 36px" type="button" @click=${() => (this.showOverlay = false)}
            >Close Signpost</cds-button
          >
        </div>
      </cds-signpost>
    </div>`;
  }
}

// dark theme signpost
/** @website */
export function darktheme() {
  return html`<demo-signpost-dark></demo-signpost-dark>`;
}

darktheme.element = DemoSignpostDarkTheme;

@customElement('demo-signpost-custom')
class DemoSignpostCustom extends DemoSignpost {
  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.signpost.anchor = this.anchor;
  }

  render() {
    return html` <style>
        .custom-signpost cds-button {
          --border-radius: 0.8rem;
          --background: var(--cds-global-color-azure-600);
          --color: var(--cds-global-color-azure-1000);
        }

        .custom-signpost cds-signpost {
          --cds-alias-object-interaction-background: var(----cds-global-color-ochre-300);
          --color: var(--cds-global-color-azure-1000);
          --border-color: var(--cds-alias-object-border-color);
          --border-radius: 0;
        }

        .custom-signpost cds-signpost [cds-text] {
          color: var(--cds-global-color-azure-1000);
        }
      </style>
      <div
        class="custom-signpost"
        cds-layout="vertical p:md"
        style="background: var(--cds-alias-object-container-background)"
      >
        <cds-button
          class="demo-anchor"
          status="primary"
          type="button"
          @click=${() => (this.showOverlay = true)}
          popup="demo-signpost-custom"
          >Show Custom Signpost</cds-button
        >
        <cds-signpost
          ?hidden=${!this.showOverlay}
          class="main-signpost"
          defaultPointerType="default"
          aria-labelledby="custom-signpost-title"
          id="demo-signpost-custom"
          @closeChange=${() => (this.showOverlay = false)}
        >
          <div cds-layout="vertical gap:lg align:stretch">
            <h3 cds-first-focus cds-text="section" id="custom-signpost-title">Signpost</h3>
            <p cds-text="body">Any content can be placed inside a signpost.</p>
            <cds-button style="max-height: 36px" type="button" @click=${() => (this.showOverlay = false)}
              >Close Signpost</cds-button
            >
          </div>
        </cds-signpost>
      </div>`;
  }
}

// custom signpost
/** @website */
export function custom() {
  return html`<demo-signpost-custom></demo-signpost-custom>`;
}

custom.element = DemoSignpostCustom;
