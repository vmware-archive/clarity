import { html, LitElement } from 'lit';
import { customElement, property, ariaPressed } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@ariaPressed<AriaPressedControllerTestElement>()
@customElement('aria-pressed-controller-test-element')
class AriaPressedControllerTestElement extends LitElement {
  @property({ type: Boolean }) pressed: boolean;
  @property({ type: Boolean }) readonly: boolean;
}

describe('aria-pressed.controller', () => {
  let component: AriaPressedControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<aria-pressed-controller-test-element></aria-pressed-controller-test-element>`
    );
    component = element.querySelectorAll<AriaPressedControllerTestElement>('aria-pressed-controller-test-element')[0];
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should not set aria-pressed if pressed was not intialized to true or false', async () => {
    await componentIsStable(component);
    expect(component.pressed).toBe(undefined);
    expect(component.ariaPressed).toBe(null);
  });

  it('should set aria-pressed when pressed API changes', async () => {
    component.pressed = true;
    await componentIsStable(component);
    expect(component.pressed).toBe(true);
    expect(component.ariaPressed).toBe('true');

    component.pressed = false;
    await componentIsStable(component);
    expect(component.pressed).toBe(false);
    expect(component.ariaPressed).toBe('false');
  });

  it('should remove aria pressed if readonly', async () => {
    component.readonly = true;
    await componentIsStable(component);
    expect(component.ariaDisabled).toBe(null);
  });
});
