setup({});
specOptions({
  selector: 'div.sbdocs-content'
});

group({
  name: 'object-styles',
  tests: [
    {
      url: 'foundation-object-styles--page',
      name: 'Test Object Border Width',
      options: {
        selector: 'div#story--stories-design-tokens--object-border-width',
        before: async function (page) {
          await page.waitForSelector("iframe");
          const elementHandle = await page.$('#storybook-preview-iframe');
          const frame = await elementHandle.contentFrame();
          await frame.waitForSelector('div#story--stories-design-tokens--object-border-width');
          await frame.evaluate(selector => {
            document.querySelector(selector).scrollIntoView();
          }, 'div#story--stories-design-tokens--object-border-width');
          return frame;
        }
      }
    },
    {
      url: 'foundation-object-styles--page',
      name: 'Test Object Border Radius',
      options: {
        selector: 'div#story--stories-design-tokens--object-border-radius',
        before: async function (page) {
          await page.waitForSelector("iframe");
          const elementHandle = await page.$('#storybook-preview-iframe');
          const frame = await elementHandle.contentFrame();
          await frame.waitForSelector('div#story--stories-design-tokens--object-border-radius');
          await frame.evaluate(selector => {
            document.querySelector(selector).scrollIntoView();
          }, 'div#story--stories-design-tokens--object-border-radius');
          return frame;
        }
      }
    },
    {
      url: 'foundation-object-styles--page',
      name: 'Test Object Border Color',
      options: {
        selector: 'div#story--stories-design-tokens--object-border-color',
        before: async function (page) {
          await page.waitForSelector("iframe");
          const elementHandle = await page.$('#storybook-preview-iframe');
          const frame = await elementHandle.contentFrame();
          await frame.waitForSelector('div#story--stories-design-tokens--object-border-color');
          await frame.evaluate(selector => {
            document.querySelector(selector).scrollIntoView();
          }, 'div#story--stories-design-tokens--object-border-color');
          return frame;
        }
      }
    },
    {
      url: 'foundation-object-styles--page',
      name: 'Test Object Opacity',
      options: {
        selector: 'div#story--stories-design-tokens--object-opacity',
        before: async function (page) {
          await page.waitForSelector("iframe");
          const elementHandle = await page.$('#storybook-preview-iframe');
          const frame = await elementHandle.contentFrame();
          await frame.waitForSelector('div#story--stories-design-tokens--object-opacity');
          await frame.evaluate(selector => {
            document.querySelector(selector).scrollIntoView();
          }, 'div#story--stories-design-tokens--object-opacity');
        }
      }
    },
    {
      url: 'foundation-object-styles--page',
      name: 'Test Shadow',
      options: {
        selector: 'div#story--stories-design-tokens--object-shadow',
        before: async function (page) {
          await page.waitForSelector("iframe");
          const elementHandle = await page.$('#storybook-preview-iframe');
          const frame = await elementHandle.contentFrame();
          await frame.waitForSelector('div#story--stories-design-tokens--object-shadow');
          await frame.evaluate(selector => {
            document.querySelector(selector).scrollIntoView();
          }, 'div#story--stories-design-tokens--object-shadow');
        }
      }
    },
    {
      url: 'foundation-object-styles--page',
      name: 'Test Object Layers',
      options: {
        selector: 'div#story--stories-design-tokens--object-layers',
        before: async function (page) {
          await page.waitForSelector("iframe");
          const elementHandle = await page.$('#storybook-preview-iframe');
          const frame = await elementHandle.contentFrame();
          await frame.waitForSelector('div#story--stories-design-tokens--object-layers');
          await frame.evaluate(selector => {
            document.querySelector(selector).scrollIntoView();
          }, 'div#story--stories-design-tokens--object-layers');
        }
      }
    }
  ],
  options: {}
})
