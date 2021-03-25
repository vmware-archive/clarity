import { html } from 'lit-html';
import '@cds/core/breadcrumb/register.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { CdsBreadcrumb } from './breadcrumb.element';

describe('Breadcrumb element: ', () => {
  let testElement: HTMLElement;
  let component: CdsBreadcrumb;

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('create the breadcrumb component', () => {
    beforeEach(async () => {
      testElement = await createTestElement(
        html`<cds-breadcrumb><a href="#">item1</a><a href="#">item2</a></cds-breadcrumb>`
      );
      component = testElement.querySelector<CdsBreadcrumb>('cds-breadcrumb');
    });

    it('should create the component', async () => {
      await componentIsStable(component);
      expect(component).toBeTruthy();
    });
  });
});
