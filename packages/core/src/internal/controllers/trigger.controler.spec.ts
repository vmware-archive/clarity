import { html, LitElement } from 'lit';
import { customElement, getActiveElement, property, triggerable } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@triggerable<TriggerControllerTestElement>()
@customElement('trigger-controller-test-element')
class TriggerControllerTestElement extends LitElement {
  @property({ type: Object }) trigger: HTMLElement;
}

describe('trigger.controller', () => {
  let element: HTMLElement;
  let component: TriggerControllerTestElement;
  let trigger: HTMLButtonElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <button>trigger</button>
      <trigger-controller-test-element></trigger-controller-test-element>
      <button></button>
    `);
    component = element.querySelector<TriggerControllerTestElement>('trigger-controller-test-element');
    trigger = element.querySelector('button');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should set focus back to explicit trigger element if element is hidden', async () => {
    component.trigger = trigger;
    await componentIsStable(component);
    expect(getActiveElement()).toBe(document.body);

    component.hidden = true;
    await componentIsStable(component);

    expect(getActiveElement()).toBe(trigger);
  });

  it('should set focus back to inferred trigger element if element is hidden', async () => {
    trigger.focus();
    await componentIsStable(component);
    expect(getActiveElement()).toBe(trigger);

    component.hidden = true;
    await componentIsStable(component);

    expect(getActiveElement()).toBe(trigger);
  });

  it('should set focus back to explicit trigger element if element is removed from DOM', async () => {
    component.trigger = trigger;
    await componentIsStable(component);
    expect(getActiveElement()).toBe(document.body);

    element.removeChild(component);
    await componentIsStable(component);

    expect(getActiveElement()).toBe(trigger);
  });

  it('should set focus back to inferred trigger element if element is removed', async () => {
    trigger.focus();
    await componentIsStable(component);
    expect(getActiveElement()).toBe(trigger);

    component.hidden = false;
    await componentIsStable(component);
    element.removeChild(component);
    await componentIsStable(component);

    expect(getActiveElement()).toBe(trigger);
  });
});
