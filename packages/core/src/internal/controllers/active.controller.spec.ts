import { html, LitElement } from 'lit';
import { customElement, active, property } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@active<ActiveTestElement>()
@customElement('active-controller-test-element')
class ActiveTestElement extends LitElement {
  @property({ type: Boolean }) disabled = false;
}

describe('active.controller', () => {
  it('should add active attr on click', async () => {
    const element = await createTestElement(html`<active-controller-test-element></active-controller-test-element>`);
    const component = element.querySelector<ActiveTestElement>('active-controller-test-element');
    expect(component.hasAttribute('cds-active')).toBe(false);

    component.dispatchEvent(new MouseEvent('mousedown'));
    await componentIsStable(component);

    expect(component.hasAttribute('cds-active')).toBe(true);
    removeTestElement(element);
  });

  it('should NOT add active attr if element is disabled', async () => {
    const element = await createTestElement(
      html`<active-controller-test-element disabled></active-controller-test-element>`
    );
    const component = element.querySelector<ActiveTestElement>('active-controller-test-element');
    await componentIsStable(component);
    expect(component.hasAttribute('cds-active')).toBe(false);

    component.dispatchEvent(new MouseEvent('mousedown'));
    await componentIsStable(component);
    expect(component.hasAttribute('cds-active')).toBe(false);
    removeTestElement(element);
  });
});
