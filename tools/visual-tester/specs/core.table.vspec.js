/**
 * Testing Table
 *
 * vdiff --specs="./specs/core.table.vspec.js"
 *
 */
const VisualDiffContext = require('../dist/index').VisualDiffContext;

const CLARITY_STORYBOOK_URL = process.env.CLARITY_STORYBOOK_URL || 'https://clarity.design/storybook/core';
const UPDATE_SNAPSHOTS = process.env.UPDATE_SNAPSHOTS || false;

describe(`Core Table: ${CLARITY_STORYBOOK_URL}`, () => {
  let browser, page, VisualDiff;

  beforeAll(async () => {
    VisualDiff = new VisualDiffContext('core.table', { updateSnapshots: UPDATE_SNAPSHOTS });
    await VisualDiff.prepare();

    browser = await VisualDiff.createBrowser();

    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}/iframe.html?id=components-table--page&viewMode=story`,
      browser
    );
  });

  afterAll(async () => {
    /**
     * @NOTE: we gonna close the tab at the end and reuse it for the tests
     */
    page.close();
    browser.close();
  });

  it('Basic', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'table basic',
        selector: '#docs-root > div > div > div:nth-child(15) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('Center aligned', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'table center aligned',
        selector: '#docs-root > div > div > div:nth-child(17) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('Right aligned', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'table right aligned',
        selector: '#docs-root > div > div > div:nth-child(19) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('All border', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'table all border',
        selector: '#docs-root > div > div > div:nth-child(21) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('Non Border', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'table non border',
        selector: '#docs-root > div > div > div:nth-child(23) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('Compact', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'table compact',
        selector: '#docs-root > div > div > div:nth-child(25) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('Vertical', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'table vertical',
        selector: '#docs-root > div > div > div:nth-child(27) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });
});
