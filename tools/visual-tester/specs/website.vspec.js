/**
 * Testing website
 *
 * vdiff --specs="./specs/website.vspec.js"
 *
 */
const VisualDiffContext = require('../dist/index').VisualDiffContext;

const CLARITY_DESIGN_URL = process.env.CLARITY_DESIGN_URL || 'https://clarity.design';
const UPDATE_SNAPSHOTS = process.env.UPDATE_SNAPSHOTS || false;

describe(`Clarity Design ${CLARITY_DESIGN_URL}`, () => {
  let browser, page, VisualDiff;

  beforeAll(async () => {
    VisualDiff = new VisualDiffContext('website.vspec.js', { updateSnapshots: UPDATE_SNAPSHOTS });
    await VisualDiff.prepare();
    browser = await VisualDiff.createBrowser();
  });

  beforeEach(async () => {
    page = await VisualDiff.goto(CLARITY_DESIGN_URL, browser);
  });

  afterAll(async () => {
    browser.close();
  });

  afterEach(async () => {
    page.close();
  });

  it('display and show search dialog', async () => {
    const searchId = 'input#algolia-search-input';
    const dropdownId = '#algolia-autocomplete-listbox-0';

    await page.waitForSelector(searchId);
    await page.evaluate(selector => {
      document.querySelector(selector).value = '';
    }, searchId);
    await page.type(searchId, 'combo', { delay: 1 });

    await page.waitForSelector(dropdownId);

    // @NOTE need to wait a little to be sure that animation is finish.
    await page.waitForTimeout(300);

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'open search dialog',
        selector: 'body',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });

  it('second level of the sidenav', async () => {
    await page.waitForSelector('.side-nav-container');
    await page.$eval('.nav-group:nth-child(2) button', el => el.click());

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'open second navigation branch',
        selector: 'body',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });
});
