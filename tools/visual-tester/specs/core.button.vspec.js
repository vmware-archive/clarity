/**
 * Testing Button
 *
 * vdiff --specs="./specs/core.button.vspec.js"
 *
 */
const VisualDiffContext = require('../dist/index').VisualDiffContext;

const CLARITY_STORYBOOK_URL = process.env.CLARITY_STORYBOOK_URL || 'https://clarity.design/storybook/core';
const UPDATE_SNAPSHOTS = process.env.UPDATE_SNAPSHOTS || false;

describe(`Core Button: ${CLARITY_STORYBOOK_URL}`, () => {
  let browser, page, VisualDiff;

  beforeAll(async () => {
    VisualDiff = new VisualDiffContext('core.button', { updateSnapshots: UPDATE_SNAPSHOTS });
    await VisualDiff.prepare();

    browser = await VisualDiff.createBrowser();

    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}/iframe.html?id=components-button--page&viewMode=story`,
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

  it('Actions', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'button actions',
        selector: '#docs-root > div > div > div:nth-child(8) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('Disabled', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'button disabled',
        selector: '#docs-root > div > div > div:nth-child(10) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('Status', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'button status',
        selector: '#docs-root > div > div > div:nth-child(12) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('Outline', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'button outline',
        selector: '#docs-root > div > div > div:nth-child(14) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });

  it('Inverse', async () => {
    const snapshot = await VisualDiff.screenshot(
      {
        name: 'button inverse',
        selector: '#docs-root > div > div > div:nth-child(16) > div',
      },
      page
    );

    await VisualDiff.expectToMatchBase(snapshot);
  });
});
