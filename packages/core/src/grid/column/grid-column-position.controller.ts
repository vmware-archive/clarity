import { ReactiveControllerHost } from 'lit';

export type GridColumnPosition = ReactiveControllerHost & HTMLElement & { position: '' | 'sticky' | 'fixed' };

export class GridColumnPositionController {
  private styles: HTMLElement;
  private previousPosition: '' | 'sticky' | 'fixed' = '';

  private get hostGrid() {
    return this.host.parentElement as HTMLElement & { _id: string };
  }

  constructor(private host: GridColumnPosition) {
    this.host.addController(this);
  }

  async hostUpdated() {
    await this.host.updateComplete;

    if (this.host.ariaColIndex && this.host.position !== this.previousPosition) {
      this.previousPosition = this.host.position;

      if (!this.styles) {
        this.styles = document.createElement('style');
        this.hostGrid.append(this.styles);
      }

      this.calculateColumnPositionStyles();
    }
  }

  private calculateColumnPositionStyles() {
    const gridPosition = this.hostGrid.getBoundingClientRect();
    const side = this.host.offsetLeft < gridPosition.width / 2 ? 'left' : 'right';
    this.styles.innerHTML = `${this.getPositionStyle(side, gridPosition)}\n${this.borderStyle(side)}`;
  }

  private getPositionStyle(side: 'left' | 'right', gridPosition: DOMRect) {
    const position = this.host.getBoundingClientRect();
    const left = this.host.position === 'fixed' ? `${position.left - gridPosition.left - 1}px` : 'initial';
    const right = this.host.position === 'fixed' ? `${position.right - position.left - position.width}px` : 'initial';

    return `
    [__id='${this.hostGrid._id}'] [aria-colindex="${this.host.ariaColIndex}"] {
      ${side === 'left' ? `left: ${left};` : ''}
      ${side === 'right' ? `right: ${right};` : ''}
      ${this.host.position === 'sticky' ? `left: 0px;` : ''}
    }

    [__id='${this.hostGrid._id}'] cds-grid-cell[aria-colindex="${this.host.ariaColIndex}"] {
      z-index: 98;
    }`;
  }

  private borderStyle(side: 'left' | 'right') {
    const lastofLeft = side === 'left' && (this.host.nextElementSibling as any).position !== this.host.position;
    const lastofRight = side === 'right' && (this.host.previousElementSibling as any).position !== this.host.position;

    if (this.host.position !== '' && (lastofLeft || lastofRight)) {
      // todo: test last of position
      return `
      [__id='${this.hostGrid._id}'] cds-grid-cell[aria-colindex="${this.host.ariaColIndex}"] {
        --border-${
          side === 'left' ? 'right' : 'left'
        }: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-border-color);
      }`;
    } else {
      return '';
    }
  }
}
