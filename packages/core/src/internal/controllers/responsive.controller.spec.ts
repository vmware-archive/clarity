import { css, html, LitElement } from 'lit';
import { customElement, ResponsiveController } from '@cds/core/internal';
import { createTestElement, onceEvent, removeTestElement } from '@cds/core/test';

@customElement('responsive-controller-test-element')
class ResponsiveControllerTestElement extends LitElement {
  responsiveController = new ResponsiveController(this);

  static styles = [
    css`
      :host {
        display: block;
        width: 200px;
        height: 200px;
      }
    `,
  ];

  render() {
    return html`...`;
  }
}

describe('responsive.controller', () => {
  let component: HTMLElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`<responsive-controller-test-element></responsive-controller-test-element>`);
    component = element.querySelector('responsive-controller-test-element');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should notify of host resize', done => {
    let event: any;

    onceEvent(component, 'cdsResizeChange').then(e => {
      event = e;
      expect(event.detail.width).toBe(500);
      done();
    });

    component.style.width = '500px';
  });
});
