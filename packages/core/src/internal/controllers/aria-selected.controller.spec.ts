import { html, LitElement } from 'lit';
import { customElement, AriaSelectedController, property } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@customElement('aria-selected-controller-test-element')
class AriaSelectedControllerTestElement extends LitElement {
  @property({ type: Boolean }) selected: boolean;
  @property({ type: Boolean }) readonly: boolean;
  ariaSelectedController = new AriaSelectedController(this);

  render() {
    return html`...`;
  }
}

describe('aria-selected.controller', () => {
  let component: AriaSelectedControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<aria-selected-controller-test-element></aria-selected-controller-test-element>`
    );
    component = element.querySelectorAll<AriaSelectedControllerTestElement>('aria-selected-controller-test-element')[0];
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should not initialize aria selected', async () => {
    await componentIsStable(component);
    expect(component.selected).toBe(undefined);
    expect(component.ariaSelected).toBe(null);
  });

  it('should update aria-selected when selected API is updated', async () => {
    await componentIsStable(component);
    expect(component.selected).toBe(undefined);
    expect(component.ariaSelected).toBe(null);

    component.selected = true;
    await componentIsStable(component);
    expect(component.ariaSelected).toBe('true');

    component.selected = false;
    await componentIsStable(component);
    expect(component.ariaSelected).toBe('false');
  });
});
