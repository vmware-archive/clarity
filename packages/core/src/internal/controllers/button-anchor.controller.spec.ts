import { html, LitElement } from 'lit';
import { customElement, buttonAnchor, property } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@buttonAnchor<ButtonAnchorTestElement>()
@customElement('button-anchor-controller-test-element')
class ButtonAnchorTestElement extends LitElement {
  @property({ type: Boolean }) readonly = false;
}

describe('button-anchor.controller', () => {
  let element: HTMLElement;
  let componentWithoutAnchor: ButtonAnchorTestElement;
  let componentWithAnchor: ButtonAnchorTestElement;
  let anchor: HTMLAnchorElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <button-anchor-controller-test-element></button-anchor-controller-test-element>
      <a>
        <button-anchor-controller-test-element></button-anchor-controller-test-element>
      </a>
    `);

    componentWithoutAnchor = element.querySelector<ButtonAnchorTestElement>('button-anchor-controller-test-element');
    componentWithAnchor = element.querySelector<ButtonAnchorTestElement>('a > button-anchor-controller-test-element');
    anchor = element.querySelector<HTMLAnchorElement>('a');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should set host anchor styles', async () => {
    await componentIsStable(componentWithoutAnchor);
    await componentIsStable(componentWithAnchor);
    expect(window.getComputedStyle(anchor).lineHeight).toBe('0px');
    expect(window.getComputedStyle(anchor).textDecoration).toBe('none solid rgb(0, 0, 0)');
  });

  it('should set button type to readonly if host anchor exists', () => {
    expect(componentWithoutAnchor.readonly).toBe(false);
    expect(componentWithAnchor.readonly).toBe(true);
  });
});
