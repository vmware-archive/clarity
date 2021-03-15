setup({});
specOptions({
  selector: 'main.content-area'
});

group({
  name: 'combobox',
  tests: [
    {url: 'combobox'},
    {
      name: 'Example combobox test name',
      url: 'combobox',
      options: {
        ignoreCSSAnimations: true,
        selector: 'main form:nth-of-type(1)',
        before: async function (page) {
          await page.evaluate(selector => {
            document.querySelector(selector).value = ""
          }, 'input[role="combobox"]');
          await page.type('input[role="combobox"]', '2', {delay: 1})
          await page.waitForTimeout(100)
        }
      }
    },
  ],
  options: {}
})
