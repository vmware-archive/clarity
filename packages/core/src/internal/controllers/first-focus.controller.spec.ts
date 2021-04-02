import { html, LitElement } from 'lit';
import { createFragment, customElement, FirstFocusController } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@customElement('first-focus-controller-test-element')
class FirstFocusControllerTestElement extends LitElement {
  firstFocusController = new FirstFocusController(this);
  render() {
    return html`
      <slot></slot>
      <button cds-first-focus>shadow dom</button>
    `;
  }
}

describe('first-focus.controller', () => {
  let component: HTMLElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<first-focus-controller-test-element></first-focus-controller-test-element>`
    );
    component = element.querySelector<FirstFocusControllerTestElement>('first-focus-controller-test-element');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should focus first element with attribute cds-first-focus in shadow dom', async () => {
    await componentIsStable(component);
    expect(((component.shadowRoot as any).activeElement as HTMLElement).innerText).toBe('shadow dom');
  });

  it('should focus first element with attribute cds-first-focus in light dom', async () => {
    await componentIsStable(component);
    component.appendChild(createFragment('<button cds-first-focus>light dom</button>'));
    expect(((component.getRootNode() as any).activeElement as HTMLElement).innerText).toBe('light dom');
  });
});
