import { html, LitElement } from 'lit';
import { customElement, property, AriaMultiSelectableController } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@customElement('aria-multiselectable-controller-test-element')
class AriaMultiSelectableControllerTestElement extends LitElement {
  @property({ type: String }) selectable: 'multi' | 'single' | null;
  disabled = false;
  readonly = false;
  ariaMultiSelectableController = new AriaMultiSelectableController(this);

  render() {
    return html`...`;
  }
}

describe('aria-multiselectable.controller', () => {
  let component: AriaMultiSelectableControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<aria-multiselectable-controller-test-element></aria-multiselectable-controller-test-element>`
    );
    component = element.querySelectorAll<AriaMultiSelectableControllerTestElement>(
      'aria-multiselectable-controller-test-element'
    )[0];
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should not initialize aria-multiselectable', async () => {
    await componentIsStable(component);
    expect(component.selectable).toBe(undefined);
    expect(component.ariaMultiSelectable).toBe(null);
  });

  it('should updated aria-selected selected API is updated', async () => {
    await componentIsStable(component);
    expect(component.selectable).toBe(undefined);
    expect(component.ariaSelected).toBe(null);

    component.selectable = 'multi';
    await componentIsStable(component);
    expect(component.ariaMultiSelectable).toBe('true');

    component.selectable = 'single';
    await componentIsStable(component);
    expect(component.ariaMultiSelectable).toBe('false');

    component.selectable = null;
    await componentIsStable(component);
    expect(component.ariaMultiSelectable).toBe(null);
  });
});
