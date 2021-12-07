import { html, LitElement } from 'lit';
import { customElement, ariaButton, property } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@ariaButton<AriaButtonControllerTestElement>()
@customElement('aria-button-controller-test-element')
class AriaButtonControllerTestElement extends LitElement {
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) disabled = false;
}

describe('aria-button.controller', () => {
  let component: AriaButtonControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<aria-button-controller-test-element></aria-button-controller-test-element>`
    );
    component = element.querySelectorAll<AriaButtonControllerTestElement>('aria-button-controller-test-element')[0];
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should initialize role button and tabindex 0', async () => {
    await componentIsStable(component);
    expect(component.role).toBe('button');
    expect(component.tabIndex).toBe(0);
  });

  it('should remove tabindex if disabled', async () => {
    component.disabled = true;
    await componentIsStable(component);
    expect(component.tabIndex).toBe(-1);
  });

  it('should remove tabindex and role if readonly', async () => {
    component.readonly = true;
    await componentIsStable(component);
    expect(component.tabIndex).toBe(-1);
    expect(component.role).toBe(null);
  });
});
