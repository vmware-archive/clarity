import { html, LitElement } from 'lit';
import { customElement, property, ariaExpanded } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@ariaExpanded<AriaExpandedControllerTestElement>()
@customElement('aria-expanded-controller-test-element')
class AriaExpandedControllerTestElement extends LitElement {
  @property({ type: Boolean }) expanded: boolean;
  @property({ type: Boolean }) readonly: boolean;
}

describe('aria-expanded.controller', () => {
  let component: AriaExpandedControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<aria-expanded-controller-test-element></aria-expanded-controller-test-element>`
    );
    component = element.querySelectorAll<AriaExpandedControllerTestElement>('aria-expanded-controller-test-element')[0];
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should not set aria-expanded if expanded was not intialized to true or false', async () => {
    await componentIsStable(component);
    expect(component.expanded).toBe(undefined);
    expect(component.ariaExpanded).toBe(null);
  });

  it('should set aria-expanded when expanded API changes', async () => {
    component.expanded = true;
    await componentIsStable(component);
    expect(component.expanded).toBe(true);
    expect(component.ariaExpanded).toBe('true');

    component.expanded = false;
    await componentIsStable(component);
    expect(component.expanded).toBe(false);
    expect(component.ariaExpanded).toBe('false');
  });

  it('should remove aria expanded if readonly', async () => {
    component.readonly = true;
    await componentIsStable(component);
    expect(component.ariaDisabled).toBe(null);
  });
});
