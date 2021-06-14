/**
 * Testing Badge
 *
 * vdiff --specs="./specs/core.foundations.vspec.js"
 *
 */
const VisualDiffContext = require('../dist/index').VisualDiffContext;

const CLARITY_STORYBOOK_URL = process.env.CLARITY_STORYBOOK_URL || 'https://clarity.design/storybook/core';
const UPDATE_SNAPSHOTS = process.env.UPDATE_SNAPSHOTS || false;

describe(`Core Badge: ${CLARITY_STORYBOOK_URL}`, () => {
  let browser, page, VisualDiff;

  beforeAll(async () => {
    VisualDiff = new VisualDiffContext('core.badge', { updateSnapshots: UPDATE_SNAPSHOTS });
    await VisualDiff.prepare();

    browser = await VisualDiff.createBrowser();

    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}/iframe.html?id=components-badge--page&viewMode=story`,
      browser
    );
  });

  afterAll(async () => {
    page.close();
    browser.close();
  });

  it('Status', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'badge status',
        selector: '#docs-root > div > div > div:nth-child(8) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('Color', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'badge color',
        selector: '#docs-root > div > div > div:nth-child(10) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('Dark Theme', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'badge dark',
        selector: '#story--stories-badge--dark-theme',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });
});
