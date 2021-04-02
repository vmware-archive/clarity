import { html, LitElement } from 'lit';
import { customElement, FocusTrapTrackerService } from '@cds/core/internal';
import { ClosableController } from './closable.controller.js';
import { componentIsStable, createTestElement, onceEvent, removeTestElement } from '@cds/core/test';

@customElement('closable-controller-test-element')
class ClosableControllerTestElement extends LitElement {
  closableController = new ClosableController(this);

  render() {
    return html`...`;
  }
}
@customElement('closable-controller-trap-element')
class ClosableControllerTrapElement extends LitElement {
  closableController = new ClosableController(this);

  focusTrapId: string;

  render() {
    return html`...`;
  }
}

describe('closable.controller', () => {
  const ftts = FocusTrapTrackerService;
  let component: ClosableControllerTestElement;
  let trap: ClosableControllerTrapElement;
  let element: HTMLElement;
  let button: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`
        <button></button>
        <closable-controller-test-element></closable-controller-test-element>
        <closable-controller-trap-element></closable-controller-trap-element>
      `
    );
    component = element.querySelector<ClosableControllerTestElement>('closable-controller-test-element');
    trap = element.querySelector<ClosableControllerTrapElement>('closable-controller-trap-element');
    button = element.querySelector<HTMLButtonElement>('button');
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

  it('should refocus on prior focused element when hidden', async () => {
    component.hidden = true;
    button.focus();
    await componentIsStable(component);

    component.hidden = false;
    await componentIsStable(component);
    button.blur();

    component.hidden = true;
    await componentIsStable(component);
    expect((component.getRootNode() as any).activeElement).toBe(button);
  });

  it('should refocus on prior focused element when removed from DOM', async () => {
    component.hidden = true;
    button.focus();
    await componentIsStable(component);

    component.hidden = false;
    await componentIsStable(component);
    button.blur();

    component.remove();

    expect(document.activeElement).toBe(button);
  });

  it('should prevent escape event from bubbling past the host element', async () => {
    let counter = 0;

    function updateCounter() {
      counter++;
    }

    await componentIsStable(component);
    document.addEventListener('keyup', updateCounter);
    component.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
    await componentIsStable(component);

    expect(counter).toBe(0, 'escape-keypress did not bubble up');
    document.removeEventListener('keyup', updateCounter);
  });

  it('should update focus trap tracker if a focus trap', async () => {
    trap.hidden = true;
    trap.focusTrapId = 'ohai';
    await componentIsStable(trap);
    expect(ftts.getTrapElements()).toEqual([], 'starts out empty');

    trap.hidden = false;
    await componentIsStable(trap);

    expect(ftts.getTrapElements()[0].focusTrapId).toBe('ohai', 'adds focusTrapId when shown');

    trap.hidden = true;
    await componentIsStable(trap);

    expect(ftts.getTrapElements()).toEqual([], 'removes when hidden');

    trap.hidden = false;
    await componentIsStable(trap);

    expect(ftts.getTrapElements()[0].focusTrapId).toBe('ohai', 'setting up to test removal');

    trap.remove();
    await componentIsStable(trap);

    expect(ftts.getTrapElements()).toEqual([], 'removes when disconnected');
  });

  it('should have focus trap tracker ignore demo mode', async () => {
    trap.setAttribute('_demo-mode', '');
    trap.hidden = true;
    await componentIsStable(trap);
    expect(ftts.getTrapElements()).toEqual([], 'starts out empty');

    trap.hidden = false;
    await componentIsStable(trap);
    expect(ftts.getTrapElements()).toEqual([], 'stays empty');
  });

  it('should have focus trap tracker ignore when told to do so', async () => {
    trap.setAttribute('cds-ignore-focus-trap', '');
    trap.hidden = true;
    await componentIsStable(trap);
    expect(ftts.getTrapElements()).toEqual([], 'starts out empty');

    trap.hidden = false;
    await componentIsStable(trap);
    expect(ftts.getTrapElements()).toEqual([], 'stays empty');
  });
});
