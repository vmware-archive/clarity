import { html, LitElement } from 'lit';
import { customElement, property, ariaPopup } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@ariaPopup<AriaPopupControllerTestElement>()
@customElement('aria-popup-controller-test-element')
class AriaPopupControllerTestElement extends LitElement {
  @property({ type: Object }) trigger: HTMLElement;
}

describe('aria-popup.controller', () => {
  let component: AriaPopupControllerTestElement;
  let element: HTMLElement;
  let trigger: HTMLElement;
  let triggerTwo: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html` <div id="trigger-1" popup="popup-el"></div>
        <div id="trigger-2" popup="popup-el"></div>
        <aria-popup-controller-test-element id="popup-el" hidden></aria-popup-controller-test-element>`
    );
    component = element.querySelector<AriaPopupControllerTestElement>('aria-popup-controller-test-element');
    trigger = element.querySelector('#trigger-1');
    triggerTwo = element.querySelector('#trigger-2');
    component.trigger = trigger;
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should default to not expanded', async () => {
    await componentIsStable(component);
    expect(trigger.ariaExpanded).toBe('false');
  });

  it('should toggle aria-expanded on trigger if available', async () => {
    component.hidden = false;
    await componentIsStable(component);
    expect(trigger.ariaExpanded).toBe('true');

    component.hidden = true;
    await componentIsStable(component);
    expect(trigger.ariaExpanded).toBe('false');
  });

  it('should update prior trigger aria-* attributes if trigger changes on host element', async () => {
    component.hidden = false;
    await componentIsStable(component);
    expect(trigger.ariaExpanded).toBe('true');

    component.trigger = triggerTwo;
    component.hidden = true;
    await componentIsStable(component);
    expect(trigger.ariaExpanded).toBe('false');

    component.hidden = false;
    await componentIsStable(component);
    expect(triggerTwo.ariaExpanded).toBe('true');
  });
});
