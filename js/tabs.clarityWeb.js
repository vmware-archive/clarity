(function(window, history) {
    if (!window.ClarityWeb) {
        window.ClarityWeb = {};
    }

    function showTab(tabLink) {
        var activeClass = "active";
        var $myTablink = $clr(tabLink);

        var $myPanel,
            $thoseOtherPanels,
            $thoseOtherTablinks;

        if($myTablink.hasClass(activeClass)) {
            // get out of here to avoid doubling down
            return;
        }

        $myPanel = $clr('#'+tabLink.attributes['for'].value);
        $thoseOtherPanels = $clr('.tab-panel.active');
        $thoseOtherTablinks = $clr("#content_tabs a.active");

        $thoseOtherTablinks.removeClass(activeClass);
        $thoseOtherPanels.removeClass(activeClass);
        $myTablink.addClass(activeClass);
        $myPanel.addClass(activeClass);
    }

    function scrollTo(elementToScrollToSelector, tablink) {
        // we should replace this with scrollIntoView after browsers support smooth scrolling
        var targetEl, scrollToTop, didScroll;

        if (!$clr) {
            return;
        }

        scrollToTop = elementToScrollToSelector === "top";
        didScroll = false;

        if (scrollToTop) {
            targetEl = scrollableContainer;
        } else {
            targetEl = $clr(elementToScrollToSelector);
        }

        // check to validate Els aren't empty
        if (targetEl.collection.length > 0) {
            if (scrollToTop) {
                targetEl.collection[0].scrollTop = 0;
                didScroll = true;
            } else {
                targetEl.collection[0].scrollIntoView();

                if (elementToScrollToSelector.substring(0,1) === "#") {
                    history.pushState({}, '', window.location.pathname + elementToScrollToSelector);
                }

                didScroll = true;
            }
        }

        if (didScroll) {
            setActiveTabLink(tablink);
        }
    }

    function setActiveTabLink(linkToMakeActive) {
        $clr(".clrweb-tablink").removeClass("active");
        $clr(linkToMakeActive).addClass("active");
    }

    // only used in one set of pages, make more generic if expanded to others
    var scrollableContainer = $clr('.dox-content'),
        scrollableContainerNode,
        bodyEl = $clr('body'),
        throttle = false;

    function tabLinkScrollChecker() {
        var containerNodePos = scrollableContainerNode.scrollTop,
            guidelinesNode = document.getElementById("guidelines");

        if (containerNodePos < 10) {
            bodyEl.removeClass("clrweb-tablink-scrolled");
        } else if (!bodyEl.hasClass("clrweb-tablink-scrolled")){
            bodyEl.addClass("clrweb-tablink-scrolled");
        }

        // more coupling

        if (guidelinesNode && (containerNodePos + 300) > guidelinesNode.offsetTop) {
            setActiveTabLink(document.getElementById("guidelinesTabLink"));
        } else {
            setActiveTabLink(document.getElementById("topTabLink"));
        }
        throttle = false;
    }

    function highlightContentScroll() {
        if (!throttle) {
            window.requestAnimationFrame(tabLinkScrollChecker);
            throttle = true;
        }
    }

    var jumpToLoops = 0;
    var jumpToTimerId;

    function jumpTo() {
        if (!urlHash) {
            return;
        }

        jumpToTimerId = setInterval(sleepForJumpTo, 150);
    }

    function sleepForJumpTo() {
        jumpToLoops++;

        if (jumpToLoops > 200) {
            clearInterval(jumpToTimerId);
            return;
        }

        if (document.getElementById(urlHash.substr(1))) {
            // too coupled here...
            guidelinesNode = document.getElementById(urlHash.substr(1));
            scrollTo(urlHash, document.getElementById("guidelinesTabLink"));
            clearInterval(jumpToTimerId);
            return;
        }
    }

    var urlHash, guidelinesNode;
    if (scrollableContainer.collection.length > 0) {
        urlHash = window.location.hash;

        scrollableContainerNode = scrollableContainer.collection[0];
        scrollableContainerNode.addEventListener("scroll", highlightContentScroll);

        if (urlHash) {
            window.onload = jumpTo;
        }

    }

    window.ClarityWeb.scrollTo = scrollTo;
    window.ClarityWeb.showTab = showTab;
})(window, history);
