/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const SCROLL_MARGIN = 20;

export function scrollToGuard(to, smooth = true) {
  const scrollableContentArea = document.getElementById('content-area');

  if (scrollableContentArea) {
    if (to && to.hash) {
      const anchorId = to.hash.substring(1);
      const anchorEl = document.getElementById(anchorId);

      const anchorOffsetTop = anchorEl && anchorEl.offsetTop;

      const scrollDelta = anchorOffsetTop - scrollableContentArea.scrollTop - SCROLL_MARGIN;

      scrollableContentArea.scrollBy({ top: scrollDelta, left: 0, behavior: smooth ? 'smooth' : 'auto' });
    } else if (to && to.hash === '') {
      scrollableContentArea.scrollTo(0, 0);
    }
  }
}
