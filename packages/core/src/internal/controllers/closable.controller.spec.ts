import { html, LitElement } from 'lit';
import { customElement, ClosableController, closable } from '@cds/core/internal';
import { componentIsStable, createTestElement, onceEvent, removeTestElement } from '@cds/core/test';

@closable<ClosableControllerTestElement>()
@customElement('closable-controller-test-element')
class ClosableControllerTestElement extends LitElement {
  closableController: ClosableController<this>;
}

describe('closable.controller', () => {
  let component: ClosableControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`<closable-controller-test-element></closable-controller-test-element>`);
    component = element.querySelector<ClosableControllerTestElement>('closable-controller-test-element');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should provide closeChange event on escape', async () => {
    await componentIsStable(component);
    const eventPromise = onceEvent(component, 'closeChange');
    component.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
    const event = await eventPromise;
    expect(event.detail).toBe('escape-keypress');
  });

  it('should allow component to dispatch a custom close event', async () => {
    await componentIsStable(component);
    const eventPromise = onceEvent(component, 'closeChange');
    component.closableController.close('custom-close');
    const event = await eventPromise;
    expect(event.detail).toBe('custom-close');
  });
});
