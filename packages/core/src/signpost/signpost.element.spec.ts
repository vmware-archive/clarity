import { html } from 'lit';
// import { customElement } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { CdsSignpost } from './signpost.element.js';
import { CdsInternalPointer } from '../internal-components/popup/pointer.element.js';
import '@cds/core/signpost/register.js';

describe('signpost.element', () => {
  const defaultSignpostId = 'default';
  const customSignpostId = 'custom';
  let defaultComponent: CdsSignpost;
  let customComponent: CdsSignpost;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`
        <cds-signpost id="${defaultSignpostId}"></cds-signpost>
        <cds-signpost id="${customSignpostId}">
          <cds-internal-pointer type="default"></cds-internal-pointer>
        </cds-signpost>
      `
    );
    defaultComponent = element.querySelector<CdsSignpost>(`#${defaultSignpostId}`);
    customComponent = element.querySelector<CdsSignpost>(`#${customSignpostId}`);
    await componentIsStable(customComponent);
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create the component', () => {
    expect(defaultComponent).not.toBe(null);
  });

  it('should be closable by default', () => {
    expect(defaultComponent.closable).toBe(true);
  });

  it('should have an "angle" pointer by default', () => {
    const pointer = defaultComponent.querySelector<CdsInternalPointer>('cds-internal-pointer');
    expect(pointer).not.toBeNull();
    expect(pointer.type).toBe('angle');
  });

  it('should be able to customize the pointer', () => {
    const pointer = customComponent.querySelector<CdsInternalPointer>('cds-internal-pointer');
    expect(pointer).not.toBeNull();
    expect(pointer.type).toBe('default');
  });
});
