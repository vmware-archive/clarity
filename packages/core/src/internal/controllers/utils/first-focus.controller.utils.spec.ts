import { html, LitElement } from 'lit';
import { customElement, getFocusableItems } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { getHostElementToFocus, getItemToFocus, ignoreFocusTrap } from './first-focus.controller.utils.js';

@customElement('focus-controller-utils-test-element')
class FocusControllerUtilsTestElement extends LitElement {
  render() {
    return html`
      <div tabindex="-1" id="zero">ohai</div>
      <div id="one">shadow dom one</div>
      <slot></slot>
      <button id="five">shadow dom two</button>
    `;
  }
}

@customElement('focus-controller-utils-test-private-host')
class FocusControllerUtilsTestPrivateHost extends LitElement {
  ignoreFocusTrap: boolean;
  render() {
    return html`<div class="private-host"><slot></slot></div>`;
  }
}

describe('first-focus.controller: getItemToFocus()', () => {
  let component: HTMLElement;
  let element: HTMLElement;
  let shadowRoot: ShadowRoot;

  beforeEach(async () => {
    element = await createTestElement(
      html` <focus-controller-utils-test-element>
        <button id="three">light dom one</button>
        <button id="four">light dom two</button>
      </focus-controller-utils-test-element>`
    );
    component = element.querySelector<FocusControllerUtilsTestElement>('focus-controller-utils-test-element');
    shadowRoot = component.shadowRoot;
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should return first element with cds-first-focus (light dom)', async () => {
    await componentIsStable(component);
    component.querySelector('#three').setAttribute('cds-first-focus', '');
    await componentIsStable(component);

    const testme = getItemToFocus(component, getFocusableItems(component));

    expect(testme).toEqual(component.querySelector('#three') as HTMLElement, 'light dom first-focused');
  });

  it('should return first element with cds-first-focus (shadow dom)', async () => {
    await componentIsStable(component);
    shadowRoot.querySelector('#one').setAttribute('cds-first-focus', '');
    await componentIsStable(component);

    const testme = getItemToFocus(component, getFocusableItems(component));
    const expected = shadowRoot.querySelector('#one') as HTMLElement;

    expect(testme).toEqual(expected, 'shadow dom first-focused');
    expect(expected.hasAttribute('tabindex')).toBe(true, 'non-focusable gets tabindexed');
  });

  it('should return first focusable element in tabflow if no first focus', async () => {
    await componentIsStable(component);

    const testme = getItemToFocus(component, getFocusableItems(component));
    const expected = component.querySelector('#three') as HTMLElement;

    expect(testme).toEqual(expected, 'first tabflow item');
  });

  it('should remove/ignore focus boundaries', async () => {
    await componentIsStable(component);
    component.querySelector('#three').setAttribute('cds-focus-boundary', '');
    component.querySelector('#four').setAttribute('cds-focus-boundary', '');
    await componentIsStable(component);

    const testme = getItemToFocus(component, getFocusableItems(component));
    const expected = shadowRoot.querySelector('#five') as HTMLElement;

    expect(testme).toEqual(expected, 'it ignored buttons with focus boundary attr');
  });

  it('should default to host el if nothing else is focusable', async () => {
    await componentIsStable(component);
    component.querySelector('#three').remove();
    component.querySelector('#four').remove();
    shadowRoot.querySelector('#five').remove();
    await componentIsStable(component);

    const testme = getItemToFocus(component, getFocusableItems(component));

    expect(testme).toEqual(component, 'fallsback to host');
  });

  it('should default to host el if element is empty', async () => {
    await componentIsStable(component);
    shadowRoot.querySelector('#zero').remove();
    shadowRoot.querySelector('#one').remove();
    component.querySelector('#three').remove();
    component.querySelector('#four').remove();
    shadowRoot.querySelector('#five').remove();
    await componentIsStable(component);

    const testme = getItemToFocus(component, getFocusableItems(component));

    expect(testme).toEqual(component, 'fallsback to host if empty');
  });
});

describe('first-focus.controller: getHostElementToFocus()', () => {
  let privateHost: HTMLElement;
  let component: FocusControllerUtilsTestPrivateHost;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<focus-controller-utils-test-private-host>ohai</focus-controller-utils-test-private-host>`
    );
    component = element.querySelector<FocusControllerUtilsTestPrivateHost>('focus-controller-utils-test-private-host');
    privateHost = component.shadowRoot.querySelector('.private-host');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should return focusable private-host if one exists', async () => {
    await componentIsStable(component);
    const testme = getHostElementToFocus(component);
    expect(testme).toEqual(privateHost, 'it got private host');
    expect(privateHost.getAttribute('tabindex')).toBe('-1', 'private host was tabindexed');
  });

  it('should return focusable host if no private-host el exists', async () => {
    await componentIsStable(component);
    privateHost.classList.remove('private-host');
    await componentIsStable(component);
    const testme = getHostElementToFocus(component);
    expect(testme).toEqual(component, 'no private host');
    expect(component.getAttribute('tabindex')).toBe('-1', 'hostEl was tabindexed');
  });

  it('should return focusable el if not a host and no private-host el exists', async () => {
    const newTestEl = await createTestElement(html`<div>ohai</div>`);
    const div = newTestEl.querySelector('div');
    const testme = getHostElementToFocus(div);
    expect(testme).toEqual(div, 'div returned');
    expect(div.getAttribute('tabindex')).toBe('-1', 'div was tabindexed');
  });
});

describe('first-focus.controller: ignoreFocusTrap()', () => {
  let component: FocusControllerUtilsTestPrivateHost;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<focus-controller-utils-test-private-host>ohai</focus-controller-utils-test-private-host>`
    );
    component = element.querySelector<FocusControllerUtilsTestPrivateHost>('focus-controller-utils-test-private-host');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should return true if ignoreFocusTrap is set', async () => {
    await componentIsStable(component);
    component.ignoreFocusTrap = true;
    await componentIsStable(component);
    expect(ignoreFocusTrap(component)).toBe(true);
  });

  it('should return true if _demo-mode', async () => {
    await componentIsStable(component);
    component.setAttribute('_demo-mode', '');
    await componentIsStable(component);
    expect(ignoreFocusTrap(component)).toBe(true);
  });

  it('should return true if cds-ignore-focus-trap attr is reflected', async () => {
    await componentIsStable(component);
    component.setAttribute('cds-ignore-focus-trap', '');
    await componentIsStable(component);
    expect(ignoreFocusTrap(component)).toBe(true);
  });

  it('should return false otherwise', async () => {
    await componentIsStable(component);
    expect(ignoreFocusTrap(component)).toBe(false);
  });
});
