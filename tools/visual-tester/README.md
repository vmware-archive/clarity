# Visual Testing tool

### Usage

Run default configuration against already started dev application

```bash
$ yarn install

$ yarn start
```

To run it with CLI options

```bash
$ node index.js
```

For example to change the base address

```bash
$ node index.js --baseUrl=http://localhost:8080
```

### Runner

By default the runner is running in compare mode. So it will try to make snapshot of the page and compare it with the base image. If NO base image is found it will make one. So for the first time the test always pass. If mismatch is found and error is thrown.

Some tests may fail for network issues - so the runner will try two times by default to re-run the test. After that will throw an error.

Parameters:
* `--overwrite=true` will run all test without comparing them and set everything as base image.
* `--openBrowser` will open Chrome and you will see what the test is doing. By default, Chrome will run in `Headless` mode.
* `--disableIncognito` will run all test in a regular mode. By default, they run in `Incognito` mode.
* `--testGroups=<group1>,<group2>...` will run all test in the provided groups list only. By default, will run all tests in the spec folder.

Runner is waiting to get `DOM Content Loaded` event before making the snapshot.

Default screen size is `1240x1600` - could be less depending on the use-case.

### Specs

All specs are located inside `./specs` folder and have the suffix of `*.spec.js`.

Inside specs there are these methods:

```js
// Simple test
it(url, options);

// Ignore this test and don't run it but announce it when starting (reminder)
xit(url, options);

// Focus on this test only
fit(url, options);

// Test group. You can provide the name of the group, the group tests and group options
// Each test has a URL, a name and test option where you can execute test specific actions.
group({
  name: '<groupName>',
  tests: [
    {
      url: '<testUrl>',
      name: '<testOptions>',
      options: {
        selector: '<testSelector>',
        before: async function (page) {}
      }
    }
  ],
  options: {}
})
```

Example of a basic spec

```js
it('tooltips/directions');
```

Example of a spec that has internal animations that trigger changes

```js
it('timeline/static', { ignoreCSSAnimations: true });
```

**By adding `{ignoreCSSAnimations: true}` as option the runner will try to disable all CSS Animation - this may result in strange artefacts in some of the components but is working for loaders and spinners**

There is an option to create `ignoreBoxes` to prevent the two images to be compared.

```js
it('timeline/static', {
  ignoreBoxes: [{ top: 20, right: 50, bottom: 500, left: 40 }],
});
```

If you can't add extra space to the box to be sure that no viewport shake or small changes until loading will move the box.


Example of a spec that has test group. You can have multiple groups in a given spec file.

```js
setup({});
specOptions({
  selector: '<specSelector>'
});

group({
  name: '<groupName>',
  tests: [
    {url: '<testUrl>'},
    {
      name: '<testName>',
      url: '<testUrl>',
      options: {
        ignoreCSSAnimations: true,
        selector: '<testSelector>',
        before: async function (page) {}
      }
    },
  ],
  options: {}
})
```
### Reporters

Currently there two reporters `dot` and `console`. Dot is better for CI/CD and console is a lot more verbuse of what is going on - better for debugging.

### Known issues

- You can execute spec against different sites. To do so however you need to pass the URL for the given spec in the spec options like this:
  ```js
  setup({
      url: '<specWideUrl>'
  })
  ```
  If you do not supply such URL but rather use the command line parameter make sure all tests in the spec folder execute against that URL. Otherwise, some might fail.
- There maybe case when the runner may not pick animation change at the start so a test could pass or fail - this is easily noticeable with test that have loaders in them, if the test is too fast it will take the snapshot at the beginning of the animation but if it's millisecond late it will have pixel mismatch.
- Missing multiple-thread runs in parallel
- If you have simple tests and test groups in a single spec file there is no way to skip the single tests even if you pass a group parameter. Therefore, you should always prefer the test groups rather than single instances of test.
