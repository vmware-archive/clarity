import { html, css, LitElement } from 'lit';
import { customElement, touch } from '@cds/core/internal';
import { componentIsStable, createTestElement, onceEvent, removeTestElement } from '@cds/core/test';

@touch<TouchControllerTestElement>()
@customElement('touch-controller-test-element')
class TouchControllerTestElement extends LitElement {
  static style = [
    css`
      :host {
        display: block;
        width: 100px;
        height: 100px;
        position: relative;
      }

      button {
        position: absolute;
        left: 20px;
        top: 20px;
      }
    `,
  ];

  render() {
    return html`<button></button>`;
  }
}

describe('touch.controller', () => {
  let component: TouchControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`<touch-controller-test-element></touch-controller-test-element>`);
    component = element.querySelectorAll<TouchControllerTestElement>('touch-controller-test-element')[0];
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should trigger cdsTouchStart when clicked', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'cdsTouchStart');

    component.dispatchEvent(new PointerEvent('pointerdown'));
    expect((await event) instanceof CustomEvent).toBe(true);
  });

  it('should trigger cdsTouchEnd when clicked', async () => {
    await componentIsStable(component);
    const startEvent = onceEvent(component, 'cdsTouchStart');
    const endEvent = onceEvent(component, 'cdsTouchEnd');

    component.dispatchEvent(new PointerEvent('pointerdown'));
    expect((await startEvent) instanceof CustomEvent).toBe(true);

    document.dispatchEvent(new PointerEvent('pointerup'));
    expect((await endEvent) instanceof CustomEvent).toBe(true);
  });

  it('should return coordinates of touch start event', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'cdsTouchStart');

    component.dispatchEvent(new PointerEvent('pointerdown'));
    expect((await event).detail).toEqual({ x: 0, y: 0 });
  });

  it('should return coordinates of touch end event', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'cdsTouchEnd');

    component.dispatchEvent(new PointerEvent('pointerdown'));
    document.dispatchEvent(new PointerEvent('pointerup'));
    expect((await event).detail).toEqual({ x: 0, y: 0, offsetX: 0, offsetY: 0 });
  });

  it('should return coordinates of touch move event', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'cdsTouchMove');

    component.dispatchEvent(new PointerEvent('pointerdown', { clientX: 0, clientY: 0 }));
    document.dispatchEvent(new PointerEvent('pointermove', { clientX: 50, clientY: 50 }));

    const result = await event;
    expect(result.detail).toEqual({ x: 50, y: 50, offsetX: 50, offsetY: 50 });
  });

  it('should return offset value from original starting point of touch start', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'cdsTouchEnd');

    component.dispatchEvent(new PointerEvent('pointerdown', { clientX: 40, clientY: 20 }));
    document.dispatchEvent(new PointerEvent('pointerup', { clientX: 80, clientY: 40 }));

    expect((await event).detail).toEqual({ x: 80, y: 40, offsetX: 40, offsetY: 20 });
  });
});
