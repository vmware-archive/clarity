(function(window) {
    if (!window.ClarityWeb) {
        window.ClarityWeb = {};
    }

    var $allSidenavLinks = $clr(".sidenav .nav-link");
    var $allSidenavResponsiveLinks = $clr(".sliding-sidenav .nav-link");
    var scrollNavCollection = [];
    var contentScroller = window.document.getElementById('content-area');

    function showSidebarNavLink(navLink) {
        var activeClass = "active";
        var $myNavlink = $clr(navLink);

        if($myNavlink.hasClass(activeClass)) {
            // get out of here to avoid doubling down
            return;
        }

        $allSidenavLinks = $clr(".sidenav .nav-link");

        $allSidenavLinks.removeClass(activeClass);
        $allSidenavResponsiveLinks.removeClass(activeClass);

        syncActiveClasses(navLink);

        window.ClarityWeb.hideSidenav();
    }

    function syncActiveClasses(navLink) {
        // not a great way to do this...
        var linkToFind = navLink.innerText;

        for (var i=0, len=scrollNavCollection.length; i < len; i++) {
            var currentObj = scrollNavCollection[i];

            if (currentObj.linkText === linkToFind) {
                $clr(currentObj.linkDOM).addClass("active");
                $clr(currentObj.linkResponsiveDOM).addClass("active");
                break;
            }
        }
    }

    window.ClarityWeb.showSidebarNavLink = showSidebarNavLink;

    function getSectionPosition(myId) {
        return document.getElementById(myId).offsetTop;
    }

    function setupScrollNavPositions() {
        var i = 0,
            convertedLinks = Array.prototype.slice.call($allSidenavLinks.collection),
            convertedReponsiveLinks = Array.prototype.slice.call($allSidenavResponsiveLinks.collection),
            len = convertedLinks.length;

        for (; i < len; i++) {
            var myLink = convertedLinks[i],
                sectionId = myLink.href.split("#")[1],
                myObj = {
                    linkDOM: myLink,
                    linkResponsiveDOM: convertedReponsiveLinks[i],
                    sectionId: sectionId,
                    linkText: myLink.innerText,
                    scrollPos: getSectionPosition(sectionId)
                };

            scrollNavCollection.push(myObj);
        }
    }

    function handleScrollNavHighlighting() {
        var currentY = contentScroller.scrollTop,
            i = 0,
            len = scrollNavCollection.length,
            isSafari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1,
            paddingBetweenSections = isSafari ? -100 : 0;

        for(; i < len; i++) {
            var currentObj = scrollNavCollection[i],
                previousIndex = ((i - 1) > -1) ? (i - 1) : i;

            if(currentY + paddingBetweenSections <= currentObj.scrollPos) {
                showSidebarNavLink(currentObj.linkDOM);
                break;
            }

            if (i === len - 1 && (currentY + paddingBetweenSections) >= currentObj.scrollPos) {
                showSidebarNavLink(currentObj.linkDOM);
                break;
            }
        }
    }

    window.document.addEventListener("DOMContentLoaded", setupScrollNavPositions);

    contentScroller.addEventListener('scroll', handleScrollNavHighlighting);

    window.addEventListener("resize", function() {
        setupScrollNavPositions();
        handleScrollNavHighlighting();
    });

})(window);
