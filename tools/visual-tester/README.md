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

By default the runner is running in compare mode. So it will try to make snapshot of the page and compare it with the base image. If NO base image is found it will make it one. So firtst time test always pass. If mismatch is found and error is thrown.

Some of the test may fail for network issues - so the runner will try two times by default to re-run the test. After that will throw an error.

Passing `--overwrite=true` will run all test without comparing them and set everything as base image. Could be combine with `fit` to update one by one the specs.

Runner is waiting to get `DOM Content Loaded` event before making the snapshot.

Default screen size is `1240x1600` - could be less depending on the use-case.

### Specs

All specs are located inside `./specs` folder and have the suffix of `*.spec.js`.

Inside specs there are this methods:

```js
// Simple test
it(url, options);

// Ignore this test and don't run it but announce it when starting (reminder)
xit(url, options);

// Focus on this test only
fit(url, options);
```

Example of basic spec

```js
it('tooltips/directions');
```

Example of spec that have internal animation that are trigger changes

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

### Reporters

Currently there two reporters `dot` and `console`. Dot is better for CI/CD and console is a lot more verbuse of what is going on - better for debugging.

### Known issues

- Right now there could be multiple specs but only one project could be compared. So if you need to run multiple sites at one pass there is no good workaround at the moment - will update it soon
- There maybe case when the runner may not pick animation change at the start so a test could pass or fail - this is easily noticeble with test that have loaders in them, if the test is too fast it will take the snapshot at the begining of the annimation but if it's milisecond late it will have pixel mismatch.
- Performance depend a lot of the load of the machine
- Missing multiple-thread runs in parallel
