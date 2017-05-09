var WAIT_TIME = 5000;
var WAIT_LOAD_TIME = 1000;

gemini.suite('tree-view', (child) => {

        gemini.suite('Tree Node', (child) => {
            child.setUrl('/tree-view/basic-tree-node')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
        });

        gemini.suite('Tree Node - DM', (child) => {
            child.setUrl('/tree-view/basic-tree-node-dm')
            .before((actions, find) => {
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
        });
    
        gemini.suite('Tree View - Basic', (child) => {
            child.setUrl('/tree-view/basic-tree-view')
            .before((actions, find) => {
                actions.waitForElementToShow('.row', WAIT_TIME);
                actions.wait(WAIT_TIME);
            })
            .setCaptureElements('.row')
            .capture('default');
        });
    
        gemini.suite('Tree View Routing', (child) => {
            child.setUrl('/tree-view/tree-node-routing')
            .before((actions, find) => {
                actions.waitForElementToShow('.row', WAIT_TIME);
                actions.wait(WAIT_TIME);
            })
            .setCaptureElements('.row')
            .capture('default');
        });

        gemini.suite('Tree View Dynamic', (child) => {
            child.setUrl('/tree-view/tree-view-dynamic')
            .before((actions, find) => {
                actions.waitForElementToShow('.row', WAIT_TIME);
                actions.wait(WAIT_TIME);
            })
            .setCaptureElements('.row')
            .capture('default');
        });

        gemini.suite('Tree View Pre Population', (child) => {
            child.setUrl('/tree-view/tree-node-prepopulate')
            .before((actions, find) => {
                actions.wait(WAIT_TIME);
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default');
        });

        gemini.suite('Tree Node Toggle Selection', (child) => {
            child.setUrl('/tree-view/tree-node-selection')
            .before((actions, find) => {
                actions.wait(WAIT_TIME);
                actions.waitForElementToShow('.clr-example', WAIT_TIME);
                actions.wait(WAIT_TIME);
            })
            .setCaptureElements('.clr-example')
            .capture('default')
            .capture('toggle using a button', function(actions, find) {
                this.toggleButton = find('.btn');
                actions.click(this.toggleButton);
                actions.wait(WAIT_TIME);
            })
            .capture('click a tree node checkbox', function(actions, find) {
                this.checkbox = find('clr-checkbox')
                actions.click(this.checkbox);
                actions.wait(WAIT_TIME);
            })
        });

});