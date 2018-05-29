/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/*
 * @deprecated since 0.12
 */
export const GHOST_PAGE_ANIMATION = {
  STATES: { NO_PAGES: 'inactive', ALL_PAGES: 'ready', NEXT_TO_LAST_PAGE: 'penultimateGhost', LAST_PAGE: 'lastGhost' },
  TRANSITIONS: { IN: '100ms ease-out', OUT: '100ms ease-in' },
};
