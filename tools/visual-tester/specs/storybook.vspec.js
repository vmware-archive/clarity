/**
 * Testing Storybook
 *
 * vdiff --specs="./specs/storybook.vspec.js"
 *
 */
const VisualDiffContext = require('../dist/index').VisualDiffContext;

const CLARITY_STORYBOOK_URL = process.env.CLARITY_STORYBOOK_URL || 'https://clarity.design/storybook/core/';
const UPDATE_SNAPSHOTS = process.env.UPDATE_SNAPSHOTS || false;

describe(`Clarity Storybook ${CLARITY_STORYBOOK_URL}`, () => {
  let browser, page, VisualDiff;

  beforeAll(async () => {
    VisualDiff = new VisualDiffContext('storybook.vspec.js', { updateSnapshots: UPDATE_SNAPSHOTS });
    await VisualDiff.prepare();

    browser = await VisualDiff.createBrowser();
  });

  afterAll(async () => {
    browser.close();
  });

  afterEach(async () => {
    page.close();
  });

  it('design tokens', async () => {
    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}iframe.html?id=foundation-design-tokens--page&viewMode=story`,
      browser
    );

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'clarity storybook design token',
        // @NOTE if we don't pass selector we gonna make fullscreen snapshot
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });

  it('typography', async () => {
    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}iframe.html?id=foundation-typography--page&viewMode=story`,
      browser
    );

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'clarity storybook typography',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });

  it('object-styles', async () => {
    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}iframe.html?id=foundation-object-styles--page&viewMode=story`,
      browser
    );

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'clarity storybook object-styles',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });

  it('interaction-styles', async () => {
    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}iframe.html?id=foundation-interaction-styles--page&viewMode=story`,
      browser
    );

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'clarity storybook interaction-styles',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });

  it('spacing', async () => {
    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}iframe.html?id=foundation-spacing--page&viewMode=story`,
      browser
    );

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'clarity storybook spacing',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });

  it('colors', async () => {
    page = await VisualDiff.goto(
      `${CLARITY_STORYBOOK_URL}iframe.html?id=foundation-color--page&viewMode=story`,
      browser
    );

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'clarity storybook colors',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });

  it('grid', async () => {
    page = await VisualDiff.goto(`${CLARITY_STORYBOOK_URL}iframe.html?id=layout-grid--page&viewMode=story`, browser);

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'clarity storybook grid',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });

  it('layout spacing', async () => {
    page = await VisualDiff.goto(`${CLARITY_STORYBOOK_URL}iframe.html?id=layout-spacing--page&viewMode=story`, browser);

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'clarity storybook layout spacing',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });

  it('status', async () => {
    // @NOTE too compact maybe?
    const screenshot = await VisualDiff.screenshot(
      {
        name: 'clarity storybook status',
      },
      await VisualDiff.goto(`${CLARITY_STORYBOOK_URL}iframe.html?id=foundation-status--page&viewMode=story`, browser)
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });
});
