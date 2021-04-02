import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { AriaPopupTriggerController } from './aria-popup-trigger.controller.js';

@customElement('aria-popup-controller-test-element')
class AriaPopupTriggerControllerTestElement extends LitElement {
  ariaPopupTriggerController = new AriaPopupTriggerController(this);
  render() {
    return html`...`;
  }
}

describe('aria-popup-trigger.controller', () => {
  let component: AriaPopupTriggerControllerTestElement;
  let noponent: AriaPopupTriggerControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`
        <aria-popup-controller-test-element id="initme" popup="popup-el"></aria-popup-controller-test-element>
        <aria-popup-controller-test-element id="dontinitme"></aria-popup-controller-test-element>
      `
    );
    component = element.querySelector('#initme');
    noponent = element.querySelector('#dontinitme');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should initialize aria attributes for popup type triggers', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('aria-controls')).toBe('popup-el');
    expect(component.getAttribute('aria-haspopup')).toBe('true');
    expect(component.getAttribute('aria-expanded')).toBe('false');
  });

  it('should NOT initialize aria attributes for triggers without a popup id', async () => {
    await componentIsStable(noponent);
    expect(noponent.hasAttribute('popup')).toBe(false);
    expect(noponent.hasAttribute('aria-controls')).toBe(false);
    expect(noponent.hasAttribute('aria-haspopup')).toBe(false);
    expect(noponent.hasAttribute('aria-expanded')).toBe(false);
  });
});
