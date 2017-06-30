var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

// gemini.suite('dynamic-show', (child) => {
//     child.setUrl('/modal/dynamic-show')
//         .before((actions, find) => {
//             actions.waitForElementToShow('.btn', WAIT_TIME);
//             actions.click(find('.btn'));
//             actions.waitForElementToShow('.modal-content', WAIT_TIME);
//             actions.wait(WAIT_TIME); // wait for modal to fully appear
//         })
//         .setCaptureElements('.modal-content')
//         .capture('default');
// });

gemini.suite('signposts', (child) => {
    child.setUrl('/signposts')
        .before((actions) => {
            actions.waitForElementToShow('.content-area', WAIT_TIME);
            actions.wait(WAIT_LOAD_TIME);
        })
        .setCaptureElements('.content-area')
        .capture('default')
        .capture('top-left', function(actions, find) {
            actions.click(find('#topLeftTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
        .capture('top-middle', function(actions, find) {
            actions.click(find('#topMiddleTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
        .capture('top-right', function(actions, find) {
            actions.click(find('#topRightTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
        .capture('right-top', function(actions, find) {
            actions.click(find('#rightTopTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
        .capture('right-middle', function(actions, find) {
            actions.click(find('#rightMiddleTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
        .capture('right-bottom', function(actions, find) {
            actions.click(find('#rightBottomTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
        .capture('bottom-left', function(actions, find) {
            actions.click(find('#bottomLeftTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
        .capture('bottom-middle', function(actions, find) {
            actions.click(find('#bottomMiddleTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
        .capture('bottom-right', function(actions, find) {
            actions.click(find('#bottomRightTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
        .capture('left-top', function(actions, find) {
            actions.click(find('#leftTopTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
        .capture('left-middle', function(actions, find) {
            actions.click(find('#leftMiddleTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
        .capture('left-bottom', function(actions, find) {
            actions.click(find('#leftBottomTrigger', WAIT_TIME));
            actions.waitForElementToShow('.signpost-content', WAIT_TIME);
            actions.wait(WAIT_TIME);
        })
});
