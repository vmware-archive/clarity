import { html, LitElement } from 'lit';
import { customElement, buttonActive, property } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@buttonActive<ActiveInteractionTestElement>()
@customElement('button-active-controller-test-element')
class ActiveInteractionTestElement extends LitElement {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) readonly = false;
}

describe('button-active.controller', () => {
  it('should add active attr on click', async () => {
    const element = await createTestElement(
      html`<button-active-controller-test-element></button-active-controller-test-element>`
    );
    const component = element.querySelector<ActiveInteractionTestElement>('button-active-controller-test-element');
    expect(component.hasAttribute('cds-active')).toBe(false);

    component.dispatchEvent(new MouseEvent('mousedown'));
    await componentIsStable(component);

    expect(component.hasAttribute('cds-active')).toBe(true);
    removeTestElement(element);
  });

  it('should NOT add active attr if element is disabled', async () => {
    const element = await createTestElement(
      html`<button-active-controller-test-element disabled></button-active-controller-test-element>`
    );
    const component = element.querySelector<ActiveInteractionTestElement>('button-active-controller-test-element');
    await componentIsStable(component);
    expect(component.hasAttribute('cds-active')).toBe(false);

    component.dispatchEvent(new MouseEvent('mousedown'));
    await componentIsStable(component);
    expect(component.hasAttribute('cds-active')).toBe(false);
    removeTestElement(element);
  });

  it('should NOT add active attr if button is readonly', async () => {
    const element = await createTestElement(
      html`<button-active-controller-test-element readonly></button-active-controller-test-element>`
    );
    const component = element.querySelector<ActiveInteractionTestElement>('button-active-controller-test-element');
    await componentIsStable(component);
    expect(component.hasAttribute('cds-active')).toBe(false);

    component.dispatchEvent(new MouseEvent('mousedown'));
    await componentIsStable(component);
    expect(component.hasAttribute('cds-active')).toBe(false);
    removeTestElement(element);
  });
});
