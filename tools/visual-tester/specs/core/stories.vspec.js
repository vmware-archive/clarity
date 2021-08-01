/**
 * Testing Badge
 *
 * vdiff --specs="./specs/core.foundations.vspec.js"
 *
 */
const VisualDiffContext = require('../../dist/index').VisualDiffContext;

const CLARITY_STORYBOOK_URL = process.env.CLARITY_STORYBOOK_URL || 'https://clarity.design/storybook/core';
const UPDATE_SNAPSHOTS = process.env.UPDATE_SNAPSHOTS || false;

const stories = [
  'stories-accordion--basic-accordion',
  'stories-accordion--dark-theme',

  // Alert have loader animations - skipping for now
  'stories-alert-group--api',

  // Alert Group have loader animations - skip
  // Banner group as well
  'stories-badge--status',
  'stories-badge--color',
  'stories-badge--dark-theme',

  'stories-breadcrumb--api',
  'stories-breadcrumb--standard',
  'stories-breadcrumb--separator',
  'stories-breadcrumb--dark-theme',

  'stories-button--actions',
  'stories-button--disabled',
  'stories-button--status',
  'stories-button--status-outline',
  'stories-button--status-inverse',
  'stories-button--icon-with-text',
  'stories-button--icon-with-text-and-badge',

  'stories-card--with-layout',
  'stories-card--with-alert',
  'stories-card--with-forms',

  'stories-checkbox--status',
  'stories-checkbox--vertical-group',
  'stories-checkbox--vertical-inline-group',
  'stories-checkbox--horizontal-group',
  'stories-checkbox--horizontal-inline-group',
  'stories-checkbox--compact-group',

  'stories-datalist--vertical',
  'stories-datalist--horizontal',
  'stories-datalist--compact',

  'stories-date--vertical',
  'stories-date--horizontal',
  'stories-date--compact',

  'stories-design-tokens--interactions',
  'stories-design-tokens--objects',
  'stories-design-tokens--object-border-radius',
  'stories-design-tokens--object-border-width',
  'stories-design-tokens--object-border-color',
  'stories-design-tokens--object-shadow',
  'stories-design-tokens--object-opacity',
  'stories-design-tokens--object-container-background',
  'stories-design-tokens--status-color',
  'stories-design-tokens--aliases',
  'stories-design-tokens--layout',
  'stories-design-tokens--layout-spacing',
  'stories-design-tokens--spacing',
  'stories-design-tokens--typography',
  'stories-design-tokens--color',
  'stories-design-tokens--animation-duration',
  'stories-design-tokens--object-layers',

  'stories-design-tokens--interaction-menu-demo',
  'stories-design-tokens--interaction-vertical-navigation-demo',
  'stories-design-tokens--interaction-sub-navigation-demo',
  'stories-design-tokens--interaction-tabs-demo',
  'stories-design-tokens--interaction-vertical-tabs-demo',
  'stories-design-tokens--interaction-accordion-demo',

  'stories-divider--horizontal',
  'stories-divider--vertical',
  'stories-divider--vertical-fill',

  'stories-file--vertical',
  'stories-file--horizontal',
  'stories-file--compact',
  'stories-forms--form',
  'stories-forms--vertical',
  'stories-forms--vertical-inline',
  'stories-forms--horizontal',
  'stories-forms--horizontal-inline',
  'stories-forms--compact',
  'stories-forms--compact-shrink',
  'stories-forms--control-width',

  'stories-icon--sizes',
  'stories-icon--badges',
  'stories-icon--status',
  'stories-icon--direction',
  'stories-icon--flip',

  'stories-icon-button--status',

  'stories-input-groups--prefix-suffix',
  'stories-input-groups--icons-buttons',
  'stories-input-groups--status',

  'stories-list--ordered-list',
  'stories-list--unordered-list',
  'stories-list--unstyled-list',
  'stories-list--nested-list',

  'stories-modal--small',
  'stories-modal--default-size',
  'stories-modal--large',
  'stories-modal--extra-large',

  'stories-pagination--editable-pagination-number',
  'stories-pagination--custom-pagination-content',

  'stories-table--basic',
  'stories-table--center-table',
  'stories-table--right-table',
  'stories-table--noborder-table',
  'stories-table--compact-table',
  'stories-table--vertical-table',
  'stories-table--quirks-mode',

  'stories-tag--status',
  'stories-tag--badges-status',
  'stories-tag--badges-color',
  'stories-tag--closable',

  'stories-typography--headings',
  'stories-typography--content',
  'stories-typography--links',
  'stories-typography--code',
  'stories-typography--weights',

  'stories-layout--horizontal-layout',
  'stories-layout--horizontal-layout-wrap',
  'stories-layout--horizontal-layout-no-wrap',
  'stories-layout--horizontal-layout-align-top',
  'stories-layout--horizontal-layout-align-bottom',
  'stories-layout--horizontal-layout-align-left',
  'stories-layout--horizontal-layout-align-right',
  'stories-layout--horizontal-layout-align-vertical-center',
  'stories-layout--horizontal-layout-align-horizontal-center',
  'stories-layout--horizontal-layout-align-center',
  'stories-layout--horizontal-layout-align-vertical-stretch',
  'stories-layout--horizontal-layout-align-fill',
  'stories-layout--horizontal-layout-align-horizontal-stretch',
  'stories-layout--horizontal-layout-align-stretch',
  'stories-layout--horizontal-layout-align-responsive',
  'stories-layout--horizontal-layout-item-stretch',
  'stories-layout--horizontal-layout-item-shrink',
  'stories-layout--horizontal-layout-item-align-center',
  'stories-layout--horizontal-layout-item-align-vertical-center',
  'stories-layout--horizontal-layout-item-align-horizontal-center',
  'stories-layout--horizontal-layout-item-align-top',
  'stories-layout--horizontal-layout-item-align-bottom',
  'stories-layout--horizontal-layout-item-align-right',
  'stories-layout--horizontal-layout-item-align-left',
  'stories-layout--horizontal-layout-item-align-responsive',
  'stories-layout--horizontal-gap',
  'stories-layout--horizontal-gap-responsive',
  'stories-layout--vertical-layout',
  'stories-layout--vertical-layout-wrap',
  'stories-layout--vertical-layout-align-top',
  'stories-layout--vertical-layout-align-bottom',
  'stories-layout--vertical-layout-align-left',
  'stories-layout--vertical-layout-align-right',
  'stories-layout--vertical-layout-align-vertical-center',
  'stories-layout--vertical-layout-align-horizontal-center',
  'stories-layout--vertical-layout-align-center',
  'stories-layout--vertical-layout-align-fill',
  'stories-layout--vertical-layout-align-vertical-stretch',
  'stories-layout--vertical-layout-align-horizontal-stretch',
  'stories-layout--vertical-layout-align-stretch',
  'stories-layout--vertical-layout-align-responsive',
  'stories-layout--vertical-layout-item-stretch',
  'stories-layout--vertical-layout-item-shrink',
  'stories-layout--vertical-layout-item-align-center',
  'stories-layout--vertical-layout-item-align-vertical-center',
  'stories-layout--vertical-layout-item-align-horizontal-center',
  'stories-layout--vertical-layout-item-align-top',
  'stories-layout--vertical-layout-item-align-bottom',
  'stories-layout--vertical-layout-item-align-right',
  'stories-layout--vertical-layout-item-align-left',
  'stories-layout--vertical-layout-item-align-responsive',
  'stories-layout--vertical-gap',
  'stories-layout--vertical-gap-responsive',
  'stories-layout--nested-layouts',
  'stories-layout--grid-layout',
  'stories-layout--grid-layout-columns',
  'stories-layout--grid-layout-columns-auto',
  'stories-layout--grid-layout-columns-responsive',
  'stories-layout--grid-layout-columns-wrap',
  'stories-layout--grid-layout-columns-start-end',
  'stories-layout--grid-layout-columns-start-end-responsive',
  'stories-layout--grid-layout-rows',
  'stories-layout--grid-layout-rows-start-end',
  'stories-layout--grid-layout-align-top',
  'stories-layout--grid-layout-align-bottom',
  'stories-layout--grid-layout-align-left',
  'stories-layout--grid-layout-align-right',
  'stories-layout--grid-layout-align-vertical-center',
  'stories-layout--grid-layout-align-horizontal-center',
  'stories-layout--grid-layout-align-center',
  'stories-layout--grid-layout-align-vertical-stretch',
  'stories-layout--grid-layout-align-horizontal-stretch',
  'stories-layout--grid-layout-align-stretch',
  'stories-layout--grid-gap',
  'stories-layout--spacing-padding',
  'stories-layout--spacing-padding-sides',
  'stories-layout--spacing-margin',
  'stories-layout--spacing-margin-sides',
  'stories-layout--utilities-containers',

  'stories-layout--patterns-application-vertical-layout',
  'stories-layout--patterns-application-vertical-layout-subnav',
  'stories-layout--patterns-application-vertical-icon-layout',
  'stories-layout--patterns-application-vertical-icon-layout-hybrid',
  'stories-layout--patterns-content-site-three-column',
  'stories-layout--patterns-content-site-single-rail',
];

function fetchUrl(story) {
  return `${CLARITY_STORYBOOK_URL}/iframe.html?id=${story}&viewMode=story`;
}

describe(`Core Stories: ${CLARITY_STORYBOOK_URL}`, () => {
  let browser, page, VisualDiff;

  beforeAll(async () => {
    VisualDiff = new VisualDiffContext('core.stories', { updateSnapshots: UPDATE_SNAPSHOTS });
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
      page = await VisualDiff.goto(fetchUrl(story), browser);

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
