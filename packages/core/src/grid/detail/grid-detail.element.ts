import { html, LitElement, PropertyValues } from 'lit';
import {
  AriaModalController,
  AriaPopupController,
  baseStyles,
  ClosableController,
  InlineFocusTrapController,
  i18n,
  I18nService,
  property,
  ResponsiveController,
  state,
  FirstFocusController,
  listenForAttributeChange,
  propUpdated,
  renderAfter,
  LayerController,
} from '@cds/core/internal';
import { CdsGrid } from '../grid/grid.element.js';
import styles from './grid-detail.element.scss';

/**
 * Grid Detail
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * @element cds-grid-detail
 * @event closeChange
 * @csspart private-host
 * @csspart detail
 * @csspart caret
 * @csspart close
 * @cssprop --width
 * @cssprop --inset-inline-start
 * @cssprop --inset-inline-end
 * @cssprop --backdrop-background
 */
export class CdsGridDetail extends LitElement {
  @property({ type: String }) anchor: HTMLElement | string | null;

  @i18n() i18n = I18nService.keys.grid;

  @state({ type: String, reflect: true, attribute: 'slot' }) slot = 'detail';

  @state({ type: String, reflect: true }) protected overlay: '' | 'full' = '';

  protected ariaModalController = new AriaModalController(this);

  protected ariaPopupController = new AriaPopupController(this);

  protected closableController = new ClosableController(this);

  protected inlineFocusTrapController = new InlineFocusTrapController(this);

  protected firstFocusController = new FirstFocusController(this);

  protected layerController = new LayerController(this);

  protected responsiveController = new ResponsiveController(this, { element: this.parentElement });

  #observer: MutationObserver;

  get #grid() {
    return this.parentElement as CdsGrid;
  }

  get trigger(): HTMLElement {
    return typeof this.anchor === 'string'
      ? (this.getRootNode() as HTMLElement).querySelector(`#${this.anchor}`)
      : this.anchor;
  }

  static styles = [baseStyles, styles];

  get #closeButton() {
    // safari https://bugs.webkit.org/show_bug.cgi?id=174667
    return html` <cds-action
      @click=${() => this.closableController.close()}
      shape="times"
      aria-label=${this.i18n.closeDetails}
      part="close"
    ></cds-action>`;
  }

  get #triggerRow() {
    return this.trigger?.closest('cds-grid-row');
  }

  render() {
    return html`<div part="detail" role="presentation">
        <div cds-layout="display:screen-reader-only">${this.i18n.rowDetailStart}</div>
        <slot></slot>

        <div cds-layout="display:screen-reader-only">${this.i18n.rowDetailEnd}</div>
      </div>
      <div part="caret" role="presentation"></div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    renderAfter(this.#closeButton, this);
    this.addEventListener('cdsResizeChange', (e: any) => (this.overlay = e.detail.width > 500 ? '' : 'full'));
    this.#observer = listenForAttributeChange(this, 'hidden', (hidden: string) => {
      this.#grid.scrollLock = !hidden;
      this.#setDetailWidthAlignment();
      this.#toggleAnchorHover();
    });
  }

  async updated(props: PropertyValues) {
    super.updated(props);
    await this.updateComplete;

    if (propUpdated(this, props, 'anchor')) {
      this.#setAnchorPointer(props.get('anchor') as HTMLElement);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#observer.disconnect();
    this.#triggerRow?.removeAttribute('_detail-row');
  }

  #toggleAnchorHover() {
    if (this.hidden) {
      this.#triggerRow?.removeAttribute('_detail-row');
    } else {
      this.#triggerRow?.setAttribute('_detail-row', '');
    }
  }

  #setAnchorPointer(previousAnchor?: HTMLElement) {
    if (previousAnchor?.closest) {
      previousAnchor?.closest('cds-grid-row')?.removeAttribute('_detail-row');
    }

    this.#toggleAnchorHover();
    const top = this.trigger?.getBoundingClientRect()?.top - this?.getBoundingClientRect().top - 8;
    this.style.setProperty('--caret-top', `${top}px`);
  }

  #setDetailWidthAlignment() {
    const rowheader = Array.from(this.#triggerRow?.cells ?? []).find((c: any) => c.role === 'rowheader') as HTMLElement;
    if (rowheader) {
      const cellRect = rowheader.getBoundingClientRect();
      const gridRect = this.parentElement.getBoundingClientRect();
      const rtl = this.parentElement.getAttribute('dir') === 'rtl';
      this.style.setProperty('--width', 'auto');

      if (rtl) {
        this.style.right = `${gridRect.right - cellRect.left}px`;
      } else {
        this.style.left = `${cellRect.right - gridRect.left}px`;
      }
    }
  }
}
