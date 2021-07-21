import { html, LitElement } from 'lit';
import { customElement, ActiveInteractionController } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@customElement('active-interaction-controller-test-element')
class ActiveInteractionTestElement extends LitElement {
  activeInteractionController = new ActiveInteractionController(this);
  render() {
    return html`...`;
  }
}

describe('active-interaction.controller', () => {
  it('should add active attr on click', async () => {
    const element = await createTestElement(
      html`<active-interaction-controller-test-element></active-interaction-controller-test-element>`
    );
    const component = element.querySelector<ActiveInteractionTestElement>('active-interaction-controller-test-element');
    expect(component.hasAttribute('cds-active')).toBe(false);

    component.dispatchEvent(new MouseEvent('mousedown'));
    await componentIsStable(component);

    expect(component.hasAttribute('cds-active')).toBe(true);
    removeTestElement(element);
  });

  it('should NOT add active attr if element is disabled', async () => {
    const element = await createTestElement(
      html`<active-interaction-controller-test-element disabled></active-interaction-controller-test-element>`
    );
    const component = element.querySelector<ActiveInteractionTestElement>('active-interaction-controller-test-element');
    await componentIsStable(component);
    expect(component.hasAttribute('cds-active')).toBe(false);

    component.dispatchEvent(new MouseEvent('mousedown'));
    await componentIsStable(component);
    expect(component.hasAttribute('cds-active')).toBe(false);
    removeTestElement(element);
  });

  it('should NOT add active attr if button is readonly', async () => {
    const element = await createTestElement(
      html`<active-interaction-controller-test-element readonly></active-interaction-controller-test-element>`
    );
    const component = element.querySelector<ActiveInteractionTestElement>('active-interaction-controller-test-element');
    await componentIsStable(component);
    expect(component.hasAttribute('cds-active')).toBe(false);

    component.dispatchEvent(new MouseEvent('mousedown'));
    await componentIsStable(component);
    expect(component.hasAttribute('cds-active')).toBe(false);
    removeTestElement(element);
  });
});
