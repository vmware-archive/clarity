import { html, LitElement } from 'lit';
import { customElement } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@customElement('draggable-list-controller-test-element')
class DraggableListControllerTestElement extends LitElement {
  render() {
    return html`...`;
  }
}

describe('draggable-list.controller', () => {
  let component: HTMLElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<draggable-list-controller-test-element></draggable-list-controller-test-element>`
    );
    component = element.querySelector<DraggableListControllerTestElement>('draggable-list-controller-test-element');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
