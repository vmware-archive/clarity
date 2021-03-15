setup({});
specOptions({
  selector: 'main.content-area'
});

group({
  name: 'accordion',
  tests: [
    {url: 'accordion', options: {selector: '.clr-accordion:nth-of-type(1)'}},
    {
      url: 'accordion',
      options: {
        ignoreCSSAnimations: true,
        selector: '.clr-accordion:nth-of-type(1)',
        before: async function (page) {
          await page.waitForSelector('button#clr-accordion-header-clr-id-3-0');
          await page.$eval('button#clr-accordion-header-clr-id-3-0', form => form.click());
          await page.waitForTimeout(350);
        }
      }
    },
    {
      name: 'Example accordion test name',
      url: 'accordion',
      options: {
        ignoreCSSAnimations: true,
        selector: '.clr-accordion:nth-of-type(2)',
        before: async function (page) {
          await page.waitForSelector('button#clr-accordion-header-clr-id-4-1');
          await page.$eval('button#clr-accordion-header-clr-id-4-1', form => form.click());
          await page.waitForSelector('button#clr-accordion-header-clr-id-6-1');
          await page.$eval('button#clr-accordion-header-clr-id-6-1', form => form.click());
          await page.waitForTimeout(350);
        }
      }
    }
  ],
  options: {}
})
