import { html } from 'lit';
import '@cds/core/breadcrumb/register.js';
import { isVisible } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { CdsBreadcrumb } from './breadcrumb.element.js';

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

    it('should hide the last separator', async () => {
      await componentIsStable(component);
      expect(component).toBeTruthy();

      const separators = component.shadowRoot.querySelectorAll<HTMLElement>('[part="separator"]');
      expect(separators).toBeTruthy();
      expect(separators.length).toBe(2);
      expect(isVisible(separators[1])).toBe(false);
    });
  });

  describe('custom breadcrumb component', () => {
    beforeEach(async () => {
      testElement = await createTestElement(
        html`<cds-breadcrumb
          ><span class="custom-separator" slot="cds-separator">🚘</span><a href="#">item1</a><a href="#">item2</a
          ><a href="#">item3</a></cds-breadcrumb
        >`
      );
      component = testElement.querySelector<CdsBreadcrumb>('cds-breadcrumb');
    });

    it('should allow projection of a custom separator', async () => {
      await componentIsStable(component);
      expect(component).toBeTruthy();

      const projectedSeparators = component.shadowRoot.querySelectorAll<HTMLElement>('.custom-separator');
      expect(projectedSeparators).toBeTruthy();
      expect(projectedSeparators.length).toBe(3);
    });
  });
});
