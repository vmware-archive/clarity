# Visual Diff testing

Testing tool/s for visual comparing changes over time by making snapshots and comparing pixel-by-pixel for changes.

## Setup

Install all needed node modules.

```bash
yarn install
```

## Quick start

To run all tests in one go, use the following command:

```bash
yarn install

yarn start
```

## Usage

By default file naming is `<target>.vspec.js`, but in the end - it depends on you. `*.vspec.js` is used so no conflict with other specs runner will be made.

There are multiple ways of running visual diff spec files. The initial design of that is to be able to run in any form of runner even a simple script.

To setup and prepare the Visual Diff an instance of the `VisualDiffContext` is required.

```js
VisualDiff = new VisualDiffContext('target.name');

// Create all folders for snapshots
await VisualDiff.prepare();
```

After that creating a browser is done by calling `createBrowser()` method.

```js
const browser = await VisualDiff.createBrowser();
```

From this browser we could open multiple pages (tabs in desktop terms) and interact with the content.

```js
const page = await VisualDiff.goto('http://localhost:port/path', browser);
```

To take a screenshot

```js
const screenshot = await VisualDiff.screenshot({ name: 'screenshot-name' }, page);
// Fullpage screenshot (screenshot-name.png)

const screenshot = await VisualDiff.screenshot({ name: 'screenshot-body', selector: 'table.userlist' }, page);
// Screenshot only a table with class 'userlist'
```

If this is the first time making this screenshot it will be automatically set as base image - and used as reference in the next time.

To compare the images with previous version of this the `name` must match so it could be found based on the Visual Diff context.

```js
await VisualDiff.expectToMatchBase(screenshot);
// => Will throw error if they don't match.
```

Interacting with the elements on the page:

### Click on an element

```js
const linkId = 'a.active-link';

// Make sure the link is render
await page.waiteForSelector(linkId);
// find and click
await page.$eval(linkId, el => el.click());
```

### Dropdowns and animations

```js
// Use waitForTimeout to wait until the animation is finish. To be on the save side use something
// between 250-300ms. Things like dropdown, tabs, show and hide most of the time require some
// additional time to finish rendering.
await page.waitForTimeout(100);
```

## Using runners to run multiple tests and snapshots

At the moment this project is setup to run with two runners (not limited to others). Jest and small Jest lookalike runner, both with there pros and cons. Instruction on how to setup and run both of them are below.

Both runners try to run identical specs.

### Jest

Jest specs are located inside the `./__tests__` folder and are referring files from `./specs`.

```bash
jest --testMatch="**/__tests__/**/*.vspec.ts"
```

In the case when all base images must be replaced a GLOBAL variable could be used to tell `VisualDiffContext` to overwrite base images.

```js
const VisualDiff = new VisualDiffContext('website.vspec.js', {
  updateSnapshots: process.env.UPDATE_SNAPSHOTS || false,
});
```

To set `UPDATE_SNAPSHOTS`:

```bash
UPDATE_SNAPSHOTS=true jest --testMatch="**/__tests__/**/*.vspec.ts"
```

#### Pros

- Focusable and Skippable describe blocks
- TypeScript support
- Watch mode and re-running specs when change

#### Cons

- 2x-3x slower run time
- No control over reporting results
- `jest` is reporting that there is some running task and don't finish the command. Could be fixed

## Basic Runner

Basic runner is a simple quick and dirty spec runner implementing basic API like
`describe` and `it` and all basic block hooks `beforeEach`, `afterEach`, `beforeAll`, `afterAll` so simple and super complex specs could be run.

Specs are located at `./specs` and have the same requirement as Jest specs.

To run the basic runner:

```bash
yarn build && yarn link

vdiff --specs="./specs/**/*.vspec.js"
```

Fixing issues with `yarn link` command when getting `Permission denied` - It seems that Yarn is not making sure to add executable flags to `bin` commands when linking so this had to be done by hand.

```bash
chmod +x ~/.config/yarn/link/vdiff/dist/runner/cli.js
```

This issue is not there when using `npm`.

If you don't want to do this you could use `node`

```bash
./node_modules/.bin/tsc && node ./dist/runner/cli.js --specs="./specs/**/*.vspec.js"
```

In the case when all base images must be updated:

```bash
UPDATE_SNAPSHOTS=true vdiff --specs="./specs/**/*.vspec.js"
```

### Pros

- Custom Reporter to address screenshots
- A lot more faster than other runners (missing a lot of them... that's why)

### Cons

- Don't support at the moment focusable describe but support ignoring describe blocks (`xdescribe`) - same is valid for tests `it` and `xit`.
- No watch mode for spec changes
- Don't support TypeScript out of the box (you need to run `tsc` before run)

## Modify specs from outside.

There is a way to inject variables inside the specs from outside.

```bash
CLARITY_DESIGN_URL="http://localhost:8080" vdiff --specs="../specs/website.vspec.js"
```

To create this type of arguments use the `process.env`

```js
// example.spec.js

const PRODUCTION_ADDRESS = process.env.PROD ? 'http://production.website.com' : 'http://localhost';

console.log(PRODUCTION_ADDRESS);
```

```bash
PROD=true vdiff --specs="./specs/example.vspec.js"

// => 'http://production.website.com'
```

## Simple example

```ts
// For typescript version
import { VisualDiffContext } from '../src/index';

// Javascript version
const VisualDiffContext = require('../dist/index').VisualDiffContext;

const TARGET_URL = process.env.TARGET_URL || 'https://localhost';
const UPDATE_SNAPSHOTS = process.env.UPDATE_SNAPSHOTS || false;

describe(`Testing ${TARGET_URL}`, () => {
  beforeAll(async () => {
    // Create new visual diff context
    VisualDiff = new VisualDiffContext('target.vspec.js', { updateSnapshots: UPDATE_SNAPSHOTS });
    // prepare visual diff folders and setup the context
    await VisualDiff.prepare();

    browser = await VisualDiff.createBrowser();
  });

  afterAll(async () => {
    // Don't leave open browser after spec is finish
    await browser.close();
  });

  afterEach(async () => {
    // Make sure that after the test is finish we gonna close the page
    await page.close();
  });

  it('user list table', async () => {
    page = await VisualDiff.goto(`${TARGET_URL}/users`, browser);

    const screenshot = await VisualDiff.screenshot(
      {
        name: 'user list table',
        selector: 'table.userlist',
      },
      page
    );

    await VisualDiff.expectToMatchBase(screenshot);
  });

  /**
   * Same as above but in it's short version
   */
  it('user list short', async () => {
    // Goto address, locate element, compare it with base image.
    await VisualDiff.visitAndCompareWithBase(
      // Url to open
      `${TARGET_URL}/users`,
      // HTML selector to locate
      'table.userlist',
      // Screenshot name
      'user list table',
      // Browser instance
      browser
    );
  });
});
```

### Example of testing multiple stories in storybook.

In some cases it is needed to test multiple stories in storybook.

```js
const CLARITY_STORYBOOK_URL = process.env.CLARITY_STORYBOOK_URL || 'my-url-to-snapshots';
const UPDATE_SNAPSHOTS = process.env.UPDATE_SNAPSHOTS || false;

const stories = ['story-url1', 'story-url2', 'story-url3'];

describe(`Core Stories: ${CLARITY_STORYBOOK_URL}`, () => {
  let browser, page, VisualDiff;

  beforeAll(async () => {
    VisualDiff = new VisualDiffContext('core.multiple-snapshosts', { updateSnapshots: UPDATE_SNAPSHOTS });
    await VisualDiff.prepare();

    // One instance only
    browser = await VisualDiff.createBrowser();
  });

  afterEach(async () => {
    // Close pages after every test
    page.close();
  });

  afterAll(async () => {
    browser.close();
  });

  stories.forEach(story => {
    it(`Snapshot ${story}`, async () => {
      page = await VisualDiff.goto(`${CLARITY_STORYBOOK_URL}/iframe.html?id=${story}&viewMode=story`, browser);

      const snapshot = await VisualDiff.screenshot(
        {
          name: story,
          selector: '#root',
        },
        page
      );

      await VisualDiff.expectToMatchBase(snapshot);
    });
  });
});
```

The example above will create a snapshot for each story in storybook. But this type of snapshots could be changed to monitor any page or sub-application
that we just need to compare a simple region that is repeatable over the pages. Similar tests are done for Angular Development application and so on.

### Interact with dropdowns, input text and check results.

Example below will try to visit the website, open the search combobox, input a value and snapshot the result.

```js
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
});
```

As additional step we could click on elements by using the `$eval` method.

```js
await page.$eval('.css-selector', el => el.click());
```

Keep in mind that on some cases the effect of it could take some additional time so better check with `page.waitForSelector` or `page.waitForTimeout` method to be sure that the effect is finished.

**Note**: almost everything must be into `async/await` calls because visiting pages, finding elements on it and taking pictures is asynchronous task.

## Known issues

- Clarity Icons - Core Icons that we use - are running inside ShadowDOM so we could not prevent the animations from running - Probably a work around will be to use ignoreBoxes to prevent detecting changes.
- You need to have a root Describe block for Basic Runner. Detached test could have strange behavior. - planned fix.

### Directories

- `specs` - contains all the tests.
- `__tests__` - contains jest spec files that link to `specs` directory.
- `src` - source code for runner and visual diff class
- `images` - snapshot images will be stored there by default
