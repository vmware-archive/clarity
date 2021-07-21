import { html, LitElement, PropertyValues } from 'lit';
import {
  baseStyles,
  ClosableController,
  i18n,
  I18nService,
  property,
  ResponsiveController,
  state,
  listenForAttributeChange,
  propUpdated,
  renderAfter,
  ariaModal,
  firstFocus,
  focusTrap,
  ariaPopup,
  layer,
  closable,
  triggerable,
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
 * @beta
 * @element cds-grid-detail
 * @event closeChange
 * @csspart close
 * @cssprop --width
 * @cssprop --inset-inline-start
 * @cssprop --inset-inline-end
 * @cssprop --backdrop-background
 */

@layer<CdsGridDetail>()
@closable<CdsGridDetail>()
@ariaModal<CdsGridDetail>()
@ariaPopup<CdsGridDetail>()
@focusTrap<CdsGridDetail>()
@firstFocus<CdsGridDetail>()
@triggerable<CdsGridDetail>()
export class CdsGridDetail extends LitElement {
  @property({ type: String }) anchor: HTMLElement | string;

  @property({ type: String }) position = 'right';

  @i18n() i18n = I18nService.keys.grid;

  @state({ type: String, reflect: true }) protected overlay: '' | 'full' = '';

  protected closableController: ClosableController<this>;

  protected responsiveController = new ResponsiveController(this, { element: this.parentElement as HTMLElement });

  private observer: MutationObserver;

  private get grid() {
    return this.parentElement as CdsGrid;
  }

  get trigger(): HTMLElement {
    return typeof this.anchor === 'string'
      ? ((this.getRootNode() as HTMLElement).querySelector<HTMLElement>(`#${this.anchor}`) as HTMLElement)
      : this.anchor;
  }

  static styles = [baseStyles, styles];

  private get closeButton() {
    // safari https://bugs.webkit.org/show_bug.cgi?id=174667
    return html` <cds-button-action
      @click=${() => this.closableController.close()}
      shape="times"
      aria-label=${this.i18n.closeDetails}
      part="close"
    ></cds-button-action>`;
  }

  private get triggerRow() {
    return this.trigger?.closest('cds-grid-row');
  }

  render() {
    return html`<div class="private-host" role="presentation">
        <div cds-layout="display:screen-reader-only">${this.i18n.rowDetailStart}</div>
        <slot></slot>

        <div cds-layout="display:screen-reader-only">${this.i18n.rowDetailEnd}</div>
      </div>
      <div class="caret" role="presentation"></div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.slot = 'detail';
    renderAfter(this.closeButton, this);
    this.addEventListener('cdsResizeChange', (e: any) => (this.overlay = e.detail.width > 500 ? '' : 'full'));
    this.observer = listenForAttributeChange(this, 'hidden', async hidden => {
      this.grid.scrollLock = !hidden;
      await this.updateComplete;
      this.setDetailWidthAlignment();
      this.toggleAnchorHover();
    });
  }

  async updated(props: PropertyValues) {
    super.updated(props);
    await this.updateComplete;

    if (propUpdated(this, props, 'anchor')) {
      this.setAnchorPointer(props.get('anchor') as HTMLElement);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer.disconnect();
    this.triggerRow?.removeAttribute('_detail-row');
  }

  private toggleAnchorHover() {
    if (this.hidden) {
      this.triggerRow?.removeAttribute('_detail-row');
    } else {
      this.triggerRow?.setAttribute('_detail-row', '');
    }
  }

  private setAnchorPointer(previousAnchor?: HTMLElement) {
    if (previousAnchor?.closest) {
      previousAnchor?.closest('cds-grid-row')?.removeAttribute('_detail-row');
    }

    this.toggleAnchorHover();
    const top = this.trigger?.getBoundingClientRect()?.top - (this?.getBoundingClientRect().top as number) - 8;
    this.style.setProperty('--caret-top', `${top}px`);
  }

  private setDetailWidthAlignment() {
    if (this.position === 'bottom') {
      this.alignToBottom();
    }

    const rowheader = Array.from(this.triggerRow?.cells ?? []).find(c => c.role === 'rowheader') as HTMLElement;
    if (rowheader) {
      this.alignToSide(rowheader);
    }
  }

  private alignToBottom() {
    const gridRect = this.parentElement?.getBoundingClientRect() as DOMRect;
    const rowRect = this.triggerRow?.getBoundingClientRect();
    this.style.setProperty('--width', '100%');

    if (this.position === 'bottom' && rowRect) {
      this.style.top = `${rowRect?.bottom - gridRect.top - 1}px`;
    }
  }

  private alignToSide(rowheader: HTMLElement) {
    const gridRect = this.parentElement?.getBoundingClientRect() as DOMRect;
    const cellRect = rowheader.getBoundingClientRect();
    this.style.setProperty('--width', 'auto');

    if (this.position === 'left' || this.parentElement?.getAttribute('dir') === 'rtl') {
      this.style.right = `${gridRect.right - cellRect.left}px`;
    } else {
      this.style.left = `${cellRect.right - gridRect.left}px`;
    }
  }
}
