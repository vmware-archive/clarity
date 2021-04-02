import { html, ReactiveControllerHost } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { AriaPopupController } from './aria-popup.controller.js';
import { CdsBaseFocusTrap } from '../base/focus-trap.base.js';

@customElement('aria-popup-controller-test-element')
class AriaPopupControllerTestElement extends CdsBaseFocusTrap {
  trigger: HTMLElement;
  ariaPopupController = new AriaPopupController((this as unknown) as ReactiveControllerHost & CdsBaseFocusTrap);
  render() {
    return html`...`;
  }
}

describe('aria-popup.controller', () => {
  let component: AriaPopupControllerTestElement;
  let element: HTMLElement;
  let trigger: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<button popup="popup-el"></button>
        <aria-popup-controller-test-element id="popup-el" hidden></aria-popup-controller-test-element>`
    );
    component = element.querySelector<AriaPopupControllerTestElement>('aria-popup-controller-test-element');
    trigger = element.querySelector('button');
    component.trigger = trigger;
    await componentIsStable(component);
    trigger.focus(); // need to focus something so there is a previous focus...
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should toggle aria-expanded on trigger if available', async () => {
    await componentIsStable(component);
    expect(trigger.getAttribute('aria-expanded')).toBe(null);

    component.removeAttribute('hidden');
    await componentIsStable(component);
    expect(trigger.getAttribute('aria-expanded')).toBe('true');

    component.setAttribute('hidden', '');
    await componentIsStable(component);
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });
});
