import { html, LitElement } from 'lit';
import { queryAll } from 'lit/decorators/query-all.js';
import { customElement, KeyNavigationListController } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@customElement('key-navigation-list-controller-test-element')
class KeyNavigationListControllerTestElement extends LitElement {
  @queryAll('section > div') keyListItems: NodeListOf<HTMLElement>;

  keyNavigationListController = new KeyNavigationListController(this);

  render() {
    return html`
      <section>
        <div><button>0</button></div>
        <div><button>1</button></div>
        <div><button>2</button></div>
        <div><button>3</button></div>
        <div><button>4</button></div>
        <div><button>5</button></div>
      </section>
    `;
  }
}

describe('key-navigation-list.controller', () => {
  let component: KeyNavigationListControllerTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<key-navigation-list-controller-test-element></key-navigation-list-controller-test-element>`
    );
    component = element.querySelector<KeyNavigationListControllerTestElement>(
      'key-navigation-list-controller-test-element'
    );
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should initialize first item if focus management is enabled', async () => {
    await componentIsStable(component);
    component.keyNavigationListController.initializeKeyList();
    expect(component.keyListItems[0].tabIndex).toBe(0);
    expect(component.keyListItems[1].tabIndex).toBe(-1);
  });

  it('should set activate a item on click', async () => {
    await componentIsStable(component);
    component.keyNavigationListController.initializeKeyList();

    await componentIsStable(component);
    component.keyListItems[2].click();
    expect(component.keyListItems[0].getAttribute('tabindex')).toBe('-1');
    expect(component.keyListItems[1].getAttribute('tabindex')).toBe('-1');
    expect(component.keyListItems[2].getAttribute('tabindex')).toBe('0');
  });

  it('should support horizontal arrow key navigation', async () => {
    await componentIsStable(component);
    component.keyNavigationListController.initializeKeyList();

    component.keyListItems[0].dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', bubbles: true }));
    component.keyListItems[1].dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowRight', bubbles: true }));
    await componentIsStable(component);

    expect(component.keyListItems[0].getAttribute('tabindex')).toBe('-1');
    expect(component.keyListItems[1].getAttribute('tabindex')).toBe('-1');
    expect(component.keyListItems[2].getAttribute('tabindex')).toBe('0');

    component.keyListItems[2].dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true }));
    component.keyListItems[1].dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowLeft', bubbles: true }));
    await componentIsStable(component);

    expect(component.keyListItems[0].getAttribute('tabindex')).toBe('0');
    expect(component.keyListItems[1].getAttribute('tabindex')).toBe('-1');
    expect(component.keyListItems[2].getAttribute('tabindex')).toBe('-1');
  });

  it('should support vertical arrow key navigation', async () => {
    component.keyNavigationListController = new KeyNavigationListController(component, { layout: 'vertical' });
    await componentIsStable(component);
    component.keyNavigationListController.initializeKeyList();

    component.keyListItems[0].dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown', bubbles: true }));
    component.keyListItems[1].dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown', bubbles: true }));
    await componentIsStable(component);

    expect(component.keyListItems[0].getAttribute('tabindex')).toBe('-1');
    expect(component.keyListItems[1].getAttribute('tabindex')).toBe('-1');
    expect(component.keyListItems[2].getAttribute('tabindex')).toBe('0');

    component.keyListItems[2].dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp', bubbles: true }));
    component.keyListItems[1].dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp', bubbles: true }));
    await componentIsStable(component);

    expect(component.keyListItems[0].getAttribute('tabindex')).toBe('0');
    expect(component.keyListItems[1].getAttribute('tabindex')).toBe('-1');
    expect(component.keyListItems[2].getAttribute('tabindex')).toBe('-1');
  });
});
