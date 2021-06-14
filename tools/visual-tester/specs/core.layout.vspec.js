/**
 * Testing Core Layouts
 *
 * vdiff --specs="./specs/grid.layout.vspec.js"
 *
 */
const VisualDiffContext = require('../dist/index').VisualDiffContext;

const CLARITY_STORYBOOK_URL = process.env.CLARITY_STORYBOOK_URL || 'https://clarity.design/storybook/core';
const UPDATE_SNAPSHOTS = process.env.UPDATE_SNAPSHOTS || false;

describe(`Core Layouts: ${CLARITY_STORYBOOK_URL}`, () => {
  let browser, page, VisualDiff;

  beforeAll(async () => {
    VisualDiff = new VisualDiffContext('core.layout', { updateSnapshots: UPDATE_SNAPSHOTS });
    await VisualDiff.prepare();

    browser = await VisualDiff.createBrowser();
  });

  afterAll(async () => {
    browser.close();
  });

  afterEach(async () => {
    page.close();
  });

  it('Grid', async () => {
    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}/iframe.html?id=iframe.html?id=layout-grid--page&viewMode=story`,
      browser
    );

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'grid layout',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });

  it('Spacing', async () => {
    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}/iframe.html?id=iframe.html?id=layout-spacing--page&viewMode=story`,
      browser
    );

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'grid spacing',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });
});
