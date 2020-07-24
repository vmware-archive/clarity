export function scrollToGuard(to, from) {
  if (from.path === '/' && to.hash) {
    // bookmarked links with anchor hash needs to wait for Vue to render DOM
    document.onreadystatechange = () => {
      if (document.readyState == 'complete' && document.getElementById(to.hash.substring(1))) {
        // TODO should smooth scrolling work with Firefox? It doesn't at first implementation.
        document.getElementById(to.hash.substring(1)).scrollIntoView({ behavior: 'smooth' });
      }
    };
  } else if (to.hash && document.getElementById(to.hash.substring(1))) {
    // In page navigation doesn't work with smooth scrolling behavior
    // navigate the current page to the
    document.getElementById(to.hash.substring(1)).scrollIntoView(); // TODO: (investigate why the { behavior: 'smooth' } option doesn't work
  } else if (document.getElementById('content-area')) {
    // scroll to the top of the page after route change
    // handles case where they are partially scrolled down and we want the user to land at the top next
    document.getElementById('content-area').scrollTo(0, 0);
  }
}
