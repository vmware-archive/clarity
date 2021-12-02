import { html, LitElement } from 'lit';
import { customElement, property, ariaDisabled } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@ariaDisabled<AriaDisabledControllerTestElement>()
@customElement('aria-disabled-controller-test-element')
class AriaDisabledControllerTestElement extends LitElement {
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) readonly = false;
}

describe('aria-disabled.controller', () => {
  let component: AriaDisabledControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<aria-disabled-controller-test-element></aria-disabled-controller-test-element>`
    );
    component = element.querySelectorAll<AriaDisabledControllerTestElement>('aria-disabled-controller-test-element')[0];
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should initialize aria disabled', async () => {
    component.disabled = false;
    await componentIsStable(component);
    expect(component.ariaDisabled).toBe('false');
  });

  it('should update aria-disabled when disabled API is updated', async () => {
    component.disabled = true;
    await componentIsStable(component);
    expect(component.ariaDisabled).toBe('true');

    component.disabled = false;
    await componentIsStable(component);
    expect(component.ariaDisabled).toBe('false');
  });

  it('should remove aria disabled if readonly', async () => {
    component.readonly = true;
    await componentIsStable(component);
    expect(component.ariaDisabled).toBe(null);
  });
});
