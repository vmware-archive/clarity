var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

// @TODO COVERED BY APPLITOOLS, REMOVE
gemini.suite('accordion', child => {
  child
    .setUrl('/accordion')
    .before((actions, find) => {
      actions.setWindowSize(1200, 1550);
      actions.waitForElementToShow('.content-area', WAIT_TIME);
      actions.wait(WAIT_LOAD_TIME);
    })
    .setCaptureElements('.content-area')
    .capture('default');
});
