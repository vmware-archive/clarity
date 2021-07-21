import { ReactiveControllerHost } from 'lit';
import { isNumericString, listenForAttributeListChange, onFirstInteraction } from '@cds/core/internal';

export type GridColumnSize = ReactiveControllerHost &
  HTMLElement & {
    width: string;
    type: string;
  };

export class GridColumnSizeController {
  private observers: (ResizeObserver | MutationObserver)[] = [];

  private get hostGrid() {
    return this.host.parentElement as HTMLElement & { rows: NodeListOf<any> };
  }

  private get hostRange() {
    return this.host.shadowRoot?.querySelector<HTMLInputElement>('cds-internal-split-handle input');
  }

  constructor(private host: GridColumnSize) {
    this.host.addController(this);
  }

  async hostConnected() {
    this.setActionWidth();
    this.hostGrid.shadowRoot?.addEventListener('slotchange', () => this.setActionWidth());
    this.observers.push(listenForAttributeListChange(this.host, ['type'], () => this.setActionWidth()));
    await this.host.updateComplete;
    await onFirstInteraction(this.hostGrid);

    if (this.hostRange) {
      this.hostRange.max = `${parseInt(getComputedStyle(this.hostGrid).width)}`;
      this.hostRange.value = `${parseInt(getComputedStyle(this.host).width)}`;
      this.hostRange.addEventListener('input', (e: any) => this.updateResizedColumnWidth(e.target.valueAsNumber));
      this.hostRange.addEventListener('change', (e: any) => this.updateResizedColumnWidth(e.target.valueAsNumber));
    }
  }

  async hostUpdated() {
    await this.host.updateComplete;
    this.updateSetColumnWidth();
  }

  hostDisconnected() {
    this.observers.forEach(o => o.disconnect());
  }

  private setActionWidth() {
    if (this.host.type === 'action' || this.host.getAttribute('type') === 'action') {
      this.host.width = '36px';
      const index = Array.from((this.hostGrid as any).columns).indexOf(this.host);
      this.hostGrid.rows.forEach(r => r.cells[index].setAttribute('type', 'action'));
    }
  }

  private updateSetColumnWidth() {
    if (this.host.width && this.host.ariaColIndex !== undefined) {
      this.hostGrid.style.setProperty(
        `--ch${this.host.ariaColIndex}`,
        isNumericString(this.host.width) ? `${this.host.width}px` : this.host.width
      );

      if (this.hostRange) {
        this.hostRange.min = `${parseInt(this.host.width)}` ?? '';
        this.hostRange.value = this.host.width;
      }
    }
  }

  private updateResizedColumnWidth(width: number) {
    this.host.dispatchEvent(new CustomEvent('resizeChange', { detail: width, bubbles: true }));
    const updatedWidth = Math.max(
      isNumericString(this.host.width) || this.host.width?.includes('px') ? parseInt(this.host.width) : 36,
      width
    );
    this.hostGrid.style.setProperty(`--ch${this.host.ariaColIndex}`, `${updatedWidth}px`);
  }
}
