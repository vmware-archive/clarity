(function(window) {
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

    window.ClarityWeb.showTab = showTab;
})(window);
