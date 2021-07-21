/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { query } from 'lit/decorators/query.js';
import { queryAll } from 'lit/decorators/query-all.js';
import { customElement, keyNavigationGrid } from '@cds/core/internal';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';

@keyNavigationGrid<GridKeyNavigationControllerTestElement>()
@customElement('grid-key-navigation-controller-test-element')
class GridKeyNavigationControllerTestElement extends LitElement {
  @query('section') keyNavGrid: HTMLElement;
  @queryAll('section > div') rows: NodeListOf<HTMLElement>;
  @queryAll('section > div > *') cells: NodeListOf<HTMLElement>;

  render() {
    return html`
      <section>
        <div>
          <button>0</button>
          <button>1</button>
          <button>2</button>
        </div>
        <div>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <div>
          <button>6</button>
          <button>7</button>
          <button>8</button>
        </div>
        <div>
          <button>9</button>
          <button>10</button>
          <button>11</button>
        </div>
        <div>
          <button>12</button>
          <button>13</button>
          <button>14</button>
        </div>
        <div>
          <div>15 <input /></div>
          <div><button>16</button></div>
          <div><button>17-1</button><button>17-2</button></div>
        </div>
      </section>
    `;
  }
}

// https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html#kbd_label
// https://w3c.github.io/aria-practices/#gridNav_focus
describe('grid-key-navigation.controller', () => {
  let component: GridKeyNavigationControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<grid-key-navigation-controller-test-element></grid-key-navigation-controller-test-element>`
    );
    component = element.querySelector<GridKeyNavigationControllerTestElement>(
      'grid-key-navigation-controller-test-element'
    );
    component.dispatchEvent(new MouseEvent('mouseover', { bubbles: true })); // trigger initialization
    component.cells[0].focus();
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should set tabindex -1 on grid cells and 0 for the first cell', async () => {
    await componentIsStable(component);
    expect(component.cells[0].getAttribute('tabindex')).toBe('0');
    expect(component.cells[8].getAttribute('tabindex')).toBe('-1');
  });

  it('should set activate a cell on left click', async () => {
    await componentIsStable(component);
    component.cells[2].dispatchEvent(new MouseEvent('mouseup', { bubbles: true, buttons: 1 }));
    expect(component.cells[0].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[1].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[2].getAttribute('tabindex')).toBe('0');
  });

  it('should support arrow key navigation', async () => {
    component.cells[0].dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', bubbles: true }));
    component.cells[1].dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', bubbles: true }));
    await componentIsStable(component);

    expect(component.cells[0].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[1].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[2].getAttribute('tabindex')).toBe('0');

    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft' }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft' }));
    await componentIsStable(component);

    expect(component.cells[0].getAttribute('tabindex')).toBe('0');
    expect(component.cells[1].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[2].getAttribute('tabindex')).toBe('-1');

    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    await componentIsStable(component);

    expect(component.cells[0].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[3].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[6].getAttribute('tabindex')).toBe('0');

    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    await componentIsStable(component);

    expect(component.cells[0].getAttribute('tabindex')).toBe('0');
    expect(component.cells[3].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[6].getAttribute('tabindex')).toBe('-1');
  });

  it('should support key navigation shortcuts from wcag spec', async () => {
    // last in row
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'End' }));
    await componentIsStable(component);
    expect(component.cells[0].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[1].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[2].getAttribute('tabindex')).toBe('0');

    // first in row
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'Home' }));
    await componentIsStable(component);
    expect(component.cells[0].getAttribute('tabindex')).toBe('0');
    expect(component.cells[1].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[2].getAttribute('tabindex')).toBe('-1');

    // last cell in grid
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'End', ctrlKey: true, metaKey: true }));
    await componentIsStable(component);
    expect(component.cells[0].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[17].getAttribute('tabindex')).toBe('0');

    // first cell in grid
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'Home', ctrlKey: true, metaKey: true }));
    await componentIsStable(component);
    expect(component.cells[0].getAttribute('tabindex')).toBe('0');
    expect(component.cells[17].getAttribute('tabindex')).toBe('-1');

    // page down (every 5th cell)
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'PageDown' }));
    await componentIsStable(component);
    expect(component.cells[0].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[12].getAttribute('tabindex')).toBe('0');

    // page up (every 5th cell)
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'PageUp' }));
    await componentIsStable(component);
    expect(component.cells[0].getAttribute('tabindex')).toBe('0');
    expect(component.cells[12].getAttribute('tabindex')).toBe('-1');
  });

  it('should not page beyond index when using page up or page down', async () => {
    // limit reached should focus first available cell
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'PageUp' }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'PageUp' }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'PageUp' }));
    await componentIsStable(component);
    expect(component.cells[0].getAttribute('tabindex')).toBe('0');
    expect(component.cells[12].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[15].getAttribute('tabindex')).toBe('-1');

    // limit reached should focus last available cell
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'PageDown' }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'PageDown' }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'PageDown' }));
    await componentIsStable(component);
    expect(component.cells[0].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[12].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[15].getAttribute('tabindex')).toBe('0');
  });

  it('should invert directions when in RTL mode', async () => {
    await componentIsStable(component);
    component.dir = 'rtl';

    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft' }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft' }));
    await componentIsStable(component);
    expect(component.cells[0].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[1].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[2].getAttribute('tabindex')).toBe('0');

    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight' }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight' }));
    await componentIsStable(component);
    expect(component.cells[0].getAttribute('tabindex')).toBe('0');
    expect(component.cells[1].getAttribute('tabindex')).toBe('-1');
    expect(component.cells[2].getAttribute('tabindex')).toBe('-1');
  });

  // https://w3c.github.io/aria-practices/#gridNav_focus
  it('should retain focus on grid cell if more than one interactive item is within cell', async () => {
    await componentIsStable(component);
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'End', ctrlKey: true, metaKey: true }));
    await componentIsStable(component);
    expect(component.cells[17].getAttribute('tabindex')).toBe('0');
    expect(component.shadowRoot.activeElement).toEqual(component.cells[17]);
    expect(component.shadowRoot.activeElement).not.toEqual(component.cells[17].querySelectorAll('button')[0]);
    expect(component.shadowRoot.activeElement).not.toEqual(component.cells[17].querySelectorAll('button')[1]);
  });

  it('should allow inner interactive elements to be access in the tabflow when cell is active', async () => {
    await componentIsStable(component);
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'End', ctrlKey: true, metaKey: true }));
    await componentIsStable(component);
    expect(component.cells[17].getAttribute('tabindex')).toBe('0');
    expect(component.shadowRoot.activeElement).toEqual(component.cells[17]);
    expect(component.shadowRoot.activeElement).not.toEqual(component.cells[17].querySelectorAll('button')[0]);
    expect(component.shadowRoot.activeElement).not.toEqual(component.cells[17].querySelectorAll('button')[1]);

    component.cells[17].querySelectorAll('button')[0].focus();
    await componentIsStable(component);
    expect(component.shadowRoot.activeElement).not.toEqual(component.cells[17]);
    expect(component.shadowRoot.activeElement).toEqual(component.cells[17].querySelectorAll('button')[0]);
    expect(component.shadowRoot.activeElement).not.toEqual(component.cells[17].querySelectorAll('button')[1]);
  });

  it('should focus internactive item within cell if only interactive item within cell', async () => {
    await componentIsStable(component);
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'End', ctrlKey: true, metaKey: true }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true }));
    await componentIsStable(component);
    expect(component.shadowRoot.activeElement).toEqual(component.cells[16].querySelectorAll('button')[0]);
  });

  it('should retain focus on grid cell if interactive item a complex type (uses key navigation)', async () => {
    await componentIsStable(component);
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'End', ctrlKey: true, metaKey: true }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true }));
    await componentIsStable(component);
    expect(component.cells[15].getAttribute('tabindex')).toBe('0');
    expect(component.shadowRoot.activeElement).toEqual(component.cells[15]);
    expect(component.shadowRoot.activeElement).not.toEqual(component.cells[15].querySelectorAll('input')[0]);
  });

  it('should allow complex types to be activated via `enter` key', async () => {
    await componentIsStable(component);
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'End', ctrlKey: true, metaKey: true }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true }));
    component.cells[15].dispatchEvent(new KeyboardEvent('keyup', { code: 'Enter', bubbles: true }));

    await componentIsStable(component);
    expect(component.cells[15].getAttribute('tabindex')).toBe('0');
    expect(component.shadowRoot.activeElement).toEqual(component.cells[15].querySelectorAll('input')[0]);
  });

  it('should allow refocus to cell from cell interactions when pressing key `escape`', async () => {
    await componentIsStable(component);
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'End', ctrlKey: true, metaKey: true }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true }));
    component.cells[15].dispatchEvent(new KeyboardEvent('keyup', { code: 'Enter', bubbles: true }));
    await componentIsStable(component);

    expect(component.cells[15].getAttribute('tabindex')).toBe('0');
    expect(component.shadowRoot.activeElement).toEqual(component.cells[15].querySelectorAll('input')[0]);

    component.cells[15].dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape', bubbles: true }));
    await componentIsStable(component);

    expect(component.cells[15].getAttribute('tabindex')).toBe('0');
    expect(component.shadowRoot.activeElement).toEqual(component.cells[15]);
  });

  it('should ignore any key navigation inputs when a interactive element is active wihtin a cell', async () => {
    await componentIsStable(component);
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'End', ctrlKey: true, metaKey: true }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true }));
    component.keyNavGrid.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true }));
    component.cells[15].dispatchEvent(new KeyboardEvent('keyup', { code: 'Enter', bubbles: true }));

    await componentIsStable(component);
    expect(component.cells[15].getAttribute('tabindex')).toBe('0');
    expect(component.shadowRoot.activeElement).toEqual(component.cells[15].querySelectorAll('input')[0]);

    component.cells[15].dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', bubbles: true }));
    await componentIsStable(component);
    expect(component.cells[15].getAttribute('tabindex')).toBe('0');
    expect(component.shadowRoot.activeElement).toEqual(component.cells[15].querySelectorAll('input')[0]);
  });
});
