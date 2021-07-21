import { html, LitElement } from 'lit';
import { customElement, FirstFocusController, renderBefore } from '@cds/core/internal';
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
    renderBefore(html`<button cds-first-focus>light dom</button>`, component);
    expect(((component.getRootNode() as any).activeElement as HTMLElement).innerText).toBe('light dom');
  });
});

@customElement('first-focus-default-controller-test-element')
class FirstFocusDefaultControllerTestElement extends LitElement {
  firstFocusController = new FirstFocusController(this);
  render() {
    return html`
      <slot></slot>
      <button>shadow dom</button>
    `;
  }
}

describe('first-focus.controller default', () => {
  let component: HTMLElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<first-focus-default-controller-test-element></first-focus-default-controller-test-element>`
    );
    component = element.querySelector<FirstFocusDefaultControllerTestElement>(
      'first-focus-default-controller-test-element'
    );
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should focus host when cds-first-focus is omitted', async () => {
    await componentIsStable(component);
    expect(document.activeElement).toBe(component);
  });
});

@customElement('first-focus-inert-controller-test-element')
class FirstFocusInertControllerTestElement extends LitElement {
  firstFocusController = new FirstFocusController(this, { fallback: 'none' });
  render() {
    return html`
      <slot></slot>
      <button>shadow dom</button>
    `;
  }
}

describe('first-focus.controller inert', () => {
  let component: HTMLElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<first-focus-inert-controller-test-element></first-focus-inert-controller-test-element>`
    );
    component = element.querySelector<FirstFocusInertControllerTestElement>(
      'first-focus-inert-controller-test-element'
    );
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should not auto focus host when cds-first-focus is omitted and hostFocus has been disabled for dynamic keyfocus management', async () => {
    await componentIsStable(component);
    expect(document.activeElement !== component).toBe(true);
  });
});
