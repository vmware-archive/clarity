import { html, LitElement } from 'lit';
import { customElement, firstFocus, focusTrap, InlineFocusTrapController } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@focusTrap<InlineFocusTrapControllerTestElement>()
@firstFocus<InlineFocusTrapControllerTestElement>()
@customElement('inline-focus-trap-controller-test-element')
class InlineFocusTrapControllerTestElement extends LitElement {
  // inlineFocusTrapController = new InlineFocusTrapController(this);
  render() {
    return html`
      <button id="shady-btn">shadow dom one</button>
      <slot></slot>
      <slot name="slot-two"></slot>
      <button>shadow dom two</button>
    `;
  }
}

describe('inline-focus-trap.controller', () => {
  let component: HTMLElement;
  let element: HTMLElement;
  let root: any;
  let shadowRoot: ShadowRoot;

  beforeEach(async () => {
    element = await createTestElement(
      html` <inline-focus-trap-controller-test-element>
        <button slot="slot-two">light dom four</button>
        <button>light dom one</button>
        <p>content</p>
        <button cds-first-focus>light dom two</button>
        <button>light dom three</button>
      </inline-focus-trap-controller-test-element>`
    );
    component = element.querySelector<InlineFocusTrapControllerTestElement>(
      'inline-focus-trap-controller-test-element'
    );
    root = component.getRootNode() as any;
    shadowRoot = component.shadowRoot as any;
  });

  afterEach(() => {
    removeTestElement(element);
  });

  // Rendered Flattened DOM
  // <inline-focus-trap-controller-test-element>
  //   <button>shadow dom one</button>
  //   <inline-focus-trap-controller-test-element>
  //     <button>shadow dom one</button>
  //     <button>light dom one</button>
  //     <p>content</p>
  //     <button cds-first-focus>light dom two</button>
  //     <button>light dom three</button>
  //     <button slot="slot-two">light dom four</button>
  //     <button>shadow dom two</button>
  //   </inline-focus-trap-controller-test-element>
  //   <slot name="slot-two"></slot>
  //   <button>shadow dom two</button>
  // </inline-focus-trap-controller-test-element>

  // it('should focus any element with cds-first-focus', async () => {
  //   await componentIsStable(component);
  //   expect(root.activeElement.innerText).toBe('light dom two');
  // });

  // it('should focus to first focusable in shadow DOM when focused past last item', async () => {
  //   await componentIsStable(component);
  //   expect(root.activeElement.innerText).toBe('light dom two');

  //   const traps = Array.from(shadowRoot.querySelectorAll<HTMLElement>('[tabindex="0"]'));
  //   traps[1].focus();
  //   expect((shadowRoot.activeElement as HTMLElement).innerText).toBe('shadow dom one');
  // });

  // it('should focus to last focusable in shadow DOM when focused prior to first item', async () => {
  //   await componentIsStable(component);
  //   expect(root.activeElement.innerText).toBe('light dom two');

  //   const traps = Array.from(component.shadowRoot.querySelectorAll<HTMLElement>('[tabindex="0"]'));
  //   traps[0].focus();
  //   expect((shadowRoot.activeElement as HTMLElement).innerText).toBe('shadow dom two');
  // });

  // it('should focus to first focusable in light DOM when focused past last item', async () => {
  //   await componentIsStable(component);
  //   expect(root.activeElement.innerText).toBe('light dom two');
  //   shadowRoot.querySelectorAll('button')[0].remove();

  //   const traps = Array.from(shadowRoot.querySelectorAll<HTMLElement>('[tabindex="0"]'));
  //   traps[1].focus();

  //   expect((root.activeElement as HTMLElement).innerText).toBe('light dom one');
  // });

  // it('should focus to last focusable in light DOM when focused prior to first item', async () => {
  //   await componentIsStable(component);
  //   expect(root.activeElement.innerText).toBe('light dom two');
  //   shadowRoot.querySelectorAll('button')[1].remove();

  //   const traps = Array.from(shadowRoot.querySelectorAll<HTMLElement>('[tabindex="0"]'));
  //   traps[0].focus();

  //   expect((root.activeElement as HTMLElement).innerText).toBe('light dom four');
  // });

  it('should only create two boundary items and have the cds-focus-trap attr', async () => {
    await componentIsStable(component);
    const bumpers = shadowRoot.querySelectorAll('[cds-focus-boundary]');
    expect(bumpers.length).toBe(2, 'only two bumpers!');
    expect(component.hasAttribute('cds-focus-trap')).toBe(true, 'has the cds-focus-trap attr');
  });
});
