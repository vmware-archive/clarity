/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CdsInlineButton } from '@clr/core/button';
import { CdsIcon } from '@clr/core/icon-shapes';
import '@clr/core/button';
import '@clr/core/icon';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('Inline button element', () => {
  let testElement: HTMLElement;
  let component: CdsInlineButton;
  const placeholderText = 'ohai';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <form>
        <cds-inline-button>${placeholderText}</cds-inline-button>
      </form>
    `;

    await waitForComponent('cds-inline-button');
    component = testElement.querySelector<CdsInlineButton>('cds-inline-button');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });
});

describe('Inline button element with icon', () => {
  it('add the anchored-icon classname to icons', async () => {
    const testElement = createTestElement();
    testElement.innerHTML = `
      <form>
        <cds-inline-button><cds-icon shape="go-niners"></cds-icon>kthxbye</cds-inline-button>
      </form>
    `;

    await waitForComponent('cds-inline-button');
    const component = testElement.querySelector<CdsInlineButton>('cds-inline-button');
    const icon = component.querySelector<CdsIcon>('cds-icon');

    expect(icon.classList.contains('anchored-icon'));
    removeTestElement(testElement);
  });
});
