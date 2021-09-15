import { expect, fixture, html } from '@open-wc/testing';

import './register.js';
import { DocComponentStatus } from './component-status.element.js';

describe('doc-component-status', () => {
  let component: DocComponentStatus;

  beforeEach(async () => {
    component = await fixture(html`<doc-component-status name="accordion"></doc-component-status>`);
  });

  it('should component exist', () => {
    expect(component).toBeDefined();
  });
});
