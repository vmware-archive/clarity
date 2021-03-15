setup({});
specOptions({
  selector: 'div.sbdocs-content'
});

group({
  name: 'basic-accordion',
  tests: [
    {
      url: 'stories-accordion-panel--basic-accordion',
      name: 'Test basic accordion',
      options: {
        selector: 'cds-accordion',
        before: async function (page) {
          await page.waitForSelector("iframe");
          const elementHandle = await page.$('#storybook-preview-iframe');
          const frame = await elementHandle.contentFrame();
          await frame.waitForSelector('cds-accordion');
          return frame;
        }
      }
    }
  ],
  options: {}
})

group({
  name: 'accordion-interactive',
  tests: [
    {
      url: 'stories-accordion--interactive',
      name: 'Test interactive accordion',
      options: {
        selector: 'cds-accordion:nth-of-type(1)',
        before: async function (page) {
          await page.waitForSelector("iframe");
          const elementHandle = await page.$('#storybook-preview-iframe');
          const frame = await elementHandle.contentFrame();
          await frame.waitForSelector('cds-accordion');
          await frame.$eval('cds-accordion-panel:nth-of-type(2) > cds-accordion-header', form => form.click());
          await frame.$eval('cds-accordion-panel:nth-of-type(4) > cds-accordion-header', form => form.click());
          return frame;
        }
      }
    }
  ],
  options: {}
})
