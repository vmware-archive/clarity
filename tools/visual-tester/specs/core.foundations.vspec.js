/**
 * Testing Core Foundations
 *
 * vdiff --specs="./specs/core.foundations.vspec.js"
 *
 */
const VisualDiffContext = require('../dist/index').VisualDiffContext;

const CLARITY_STORYBOOK_URL = process.env.CLARITY_STORYBOOK_URL || 'https://clarity.design/storybook/core';
const UPDATE_SNAPSHOTS = process.env.UPDATE_SNAPSHOTS || false;

describe(`Core Foundations: ${CLARITY_STORYBOOK_URL}`, () => {
  let browser, page, VisualDiff;

  beforeAll(async () => {
    VisualDiff = new VisualDiffContext('core.foundations', { updateSnapshots: UPDATE_SNAPSHOTS });
    await VisualDiff.prepare();

    browser = await VisualDiff.createBrowser();
  });

  afterAll(async () => {
    browser.close();
  });

  afterEach(async () => {
    page.close();
  });

  /**
   * @NOTE reuse the already loaded page to make multiple screenshots and skip
   * documentation text to minimize the chance of error if changed.
   */
  it('Design Tokens', async () => {
    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}/iframe.html?id=foundation-design-tokens--page&viewMode=story`,
      browser
    );

    const globalLayoutSpacing = await VisualDiff.screenshot(
      {
        name: 'global layout spacing',
        selector: '#story--stories-design-tokens--layout-spacing > div > table',
      },
      page
    );

    await VisualDiff.expectToMatchBase(globalLayoutSpacing);

    const globalSpacing = await VisualDiff.screenshot(
      {
        name: 'global spacing',
        selector: '#story--stories-design-tokens--spacing > div > table',
      },
      page
    );

    await VisualDiff.expectToMatchBase(globalSpacing);

    const aliasObjects = await VisualDiff.screenshot(
      {
        name: 'alias objects',
        selector: '#story--stories-design-tokens--objects > div > table',
      },
      page
    );

    await VisualDiff.expectToMatchBase(aliasObjects);

    const aliasStatusColors = await VisualDiff.screenshot(
      {
        name: 'alias status colors',
        selector: '#story--stories-design-tokens--status-color > div > table',
      },
      page
    );

    await VisualDiff.expectToMatchBase(aliasStatusColors);

    const globalTypography = await VisualDiff.screenshot(
      {
        name: 'global typography',
        selector: '#story--stories-design-tokens--typography > div > table',
      },
      page
    );

    await VisualDiff.expectToMatchBase(globalTypography);

    const globalColorPalette = await VisualDiff.screenshot(
      {
        name: 'global color palette',
        selector: '#story--stories-design-tokens--color > div > table',
      },
      page
    );

    await VisualDiff.expectToMatchBase(globalColorPalette);
  });

  it('Interactive Styles', async () => {
    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}/iframe.html?id=foundation-interaction-styles--page&viewMode=story`,
      browser
    );

    const interactiveStyles = await VisualDiff.screenshot(
      {
        name: 'interactive styles',
        selector: '#story--stories-design-tokens--interactions > div > table',
      },
      page
    );

    await VisualDiff.expectToMatchBase(interactiveStyles);
  });
});
