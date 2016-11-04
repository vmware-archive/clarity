window.ClarityWeb = {};

(function(win) {
    var showNavClass = "show-leftnav";
    var showSidebarClass = "show-sidebar";
    var d = win.document;

    function toggleNav(topNavOrSidebar) {
        var $bd = $clr('body');
        var activeNavClass = (topNavOrSidebar == "topnav") ? showNavClass : showSidebarClass;
        var inactiveNavClass = (topNavOrSidebar == "topnav") ? showSidebarClass : showNavClass;
        var currentlyActive = $bd.hasClass(activeNavClass);

        if (currentlyActive) {
            // clicking on hamburger while already open closes nav...
            $bd.removeClass(activeNavClass);
        } else {
            $bd.removeClass(inactiveNavClass);
            $bd.addClass(activeNavClass);
        }
    }

    function hideSidenav() {
        var $bd = $clr('body');
        if ($bd.hasClass(showSidebarClass)) {
            $bd.removeClass(showSidebarClass);
        }
    }

    window.ClarityWeb.toggleNav = toggleNav;
    window.ClarityWeb.hideSidenav = hideSidenav;
})(window);
