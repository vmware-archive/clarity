/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button/register.js';
import '@cds/core/pagination/register.js';
import { html } from 'lit';

export default {
  title: 'Stories/Pagination',
  component: 'cds-pagination',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A673',
    },
  },
};

export const API = () => {
  return html`
    <cds-pagination aria-label="pagination">
      <cds-pagination-button aria-label="go to first" action="first" disabled></cds-pagination-button>
      <cds-pagination-button aria-label="go to previous" action="prev" disabled></cds-pagination-button>
      <span aria-label="current page">1 / 3</span>
      <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
      <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
    </cds-pagination>
  `;
};

export const basic = () => {
  return html` <cds-pagination aria-label="pagination">
    <cds-pagination-button aria-label="go to first" action="prev" disabled></cds-pagination-button>
    <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
  </cds-pagination>`;
};

export const basicPaginationNumber = () => {
  return html`
    <cds-pagination aria-label="pagination">
      <cds-pagination-button aria-label="go to first" action="prev" disabled></cds-pagination-button>
      <span aria-label="current page">1 / 3</span>
      <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
    </cds-pagination>
  `;
};

export const firstAndLast = () => {
  return html` <cds-pagination aria-label="pagination">
    <cds-pagination-button aria-label="go to first" action="first" disabled></cds-pagination-button>
    <cds-pagination-button aria-label="go to previous" action="prev" disabled></cds-pagination-button>
    <span aria-label="current page">1 / 3</span>
    <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
    <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
  </cds-pagination>`;
};

export const editablePaginationNumber = () => {
  return html`<cds-pagination aria-label="pagination">
    <cds-pagination-button aria-label="go to first" action="first" disabled></cds-pagination-button>
    <cds-pagination-button aria-label="go to previous" action="prev" disabled></cds-pagination-button>
    <cds-input cds-pagination-number>
      <input type="text" value="1" size="1" aria-label="current page" />
      <cds-control-message>/ 3</cds-control-message>
    </cds-input>
    <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
    <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
  </cds-pagination>`;
};

export const customPaginationContent = () => {
  return html`
    <style>
      .show-pages {
        --color: var(--cds-alias-status-neutral);
      }
      .show-pages .active {
        --background: var(--cds-alias-status-neutral);
        --color: white;
      }
      .outline-pagination-items cds-pagination-button {
        border: 1px solid #666666;
        --padding: 0;
      }
      .show-pages cds-pagination-button {
        --padding: 6px;
        border-radius: 4px;
      }
    </style>
    <div cds-layout="m-y:lg">
      <cds-pagination aria-label="pagination" cds-layout="horizontal gap:lg align:center">
        <cds-pagination-button aria-label="go to previous" disabled>
          <cds-icon shape="arrow" direction="left"></cds-icon>
        </cds-pagination-button>
        <cds-pagination-button aria-label="go to next">
          <cds-icon shape="arrow" direction="right"></cds-icon>
        </cds-pagination-button>
      </cds-pagination>
    </div>
    <div cds-layout="m-y:lg">
      <cds-pagination aria-label="pagination" cds-layout="horizontal gap:lg align:center">
        <cds-pagination-button disabled>First</cds-pagination-button>
        <cds-pagination-button disabled>Prev</cds-pagination-button>
        <cds-pagination-button>Next</cds-pagination-button>
        <cds-pagination-button>Last</cds-pagination-button>
      </cds-pagination>
    </div>
    <div cds-layout="m-y:lg">
      <cds-pagination aria-label="pagination" class="show-pages">
        <cds-pagination-button aria-label="go to first" action="first"></cds-pagination-button>
        <cds-pagination-button aria-label="go to previous" action="prev"></cds-pagination-button>
        <cds-pagination-button aria-label="go to page 1">1</cds-pagination-button>
        <cds-pagination-button aria-label="go to page 2">2</cds-pagination-button>
        ...
        <cds-pagination-button aria-label="go to page 49">49</cds-pagination-button>
        <cds-pagination-button aria-label="go to page 50" class="active">50</cds-pagination-button>
        <cds-pagination-button aria-label="go to page 51">51</cds-pagination-button>
        ...
        <cds-pagination-button aria-label="go to page 99">99</cds-pagination-button>
        <cds-pagination-button aria-label="go to page 100">100</cds-pagination-button>
        <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
        <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
      </cds-pagination>
    </div>
    <div cds-layout="m-y:lg">
      <cds-pagination aria-label="pagination" class="show-pages outline-pagination-items">
        <cds-pagination-button aria-label="go to first" action="first"></cds-pagination-button>
        <cds-pagination-button aria-label="go to previous" action="prev"></cds-pagination-button>
        <cds-pagination-button>1</cds-pagination-button>
        <cds-pagination-button>2</cds-pagination-button>
        ...
        <cds-pagination-button>49</cds-pagination-button>
        <cds-pagination-button class="active">50</cds-pagination-button>
        <cds-pagination-button>51</cds-pagination-button>
        ...
        <cds-pagination-button>99</cds-pagination-button>
        <cds-pagination-button>100</cds-pagination-button>
        <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
        <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
      </cds-pagination>
    </div>
    <div cds-layout="m-y:lg">
      <cds-pagination aria-label="pagination">
        <cds-input layout="horizontal" control-width="shrink">
          <label>Users per page</label>
          <input type="number" value="20" min="1" max="103" />
        </cds-input>
        <cds-divider orientation="vertical"></cds-divider>
        <div>
          1 - 20 of 103 users
        </div>
        <cds-divider orientation="vertical"></cds-divider>
        <cds-pagination-button aria-label="go to first" action="first" disabled></cds-pagination-button>
        <cds-pagination-button aria-label="go to previous" action="prev" disabled></cds-pagination-button>
        <cds-input cds-pagination-number>
          <input type="text" value="1" size="1" aria-label="current page" />
          <cds-control-message>/ 6</cds-control-message>
        </cds-input>
        <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
        <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
      </cds-pagination>
    </div>
  `;
};

export const customPaginationStyles = () => {
  return html`
    <style>
      .custom-pagination-color cds-pagination-button {
        --color: blue;
      }
      .custom-pagination-color cds-pagination-button[disabled] {
        --color: lightblue;
      }

      .custom-pagination-button cds-pagination {
        --color: green;
      }

      .custom-pagination-button cds-pagination-button {
        --background: orange;
      }

      .custom-pagination-button cds-pagination-button[disabled] {
        --color: pink;
        --background: hotpink;
      }

      .custom-outline-pagination-items cds-pagination-button {
        border: 1px solid #666666;
      }

      .custom-outline-pagination-items cds-pagination-button[disabled] {
        --color: #666666;
        --background: #999999;
      }

      .custom-outline-pagination-items cds-input {
        --border-radius: 0;
        --width: 12px;
        --height: 12px;
      }

      .custom-outline-pagination-items cds-pagination-button:not([disabled]):hover {
        --background: #666666;
        --color: #ffffff;
      }
    </style>
    <div cds-layout="m-y:sm" class="custom-pagination-color">
      <cds-pagination aria-label="pagination" cds-layout="horizontal gap:lg align:center">
        <cds-pagination-button aria-label="go to first" action="first" disabled></cds-pagination-button>
        <cds-pagination-button aria-label="go to previous" action="prev" disabled></cds-pagination-button>
        <cds-input cds-pagination-number>
          <input type="text" value="40" size="2" aria-label="current page" />
          <cds-control-message>/ 80</cds-control-message>
        </cds-input>
        <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
        <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
      </cds-pagination>
    </div>
    <div cds-layout="m-y:lg" class="custom-pagination-button">
      <cds-pagination aria-label="pagination">
        <cds-pagination-button aria-label="go to first" action="first" disabled></cds-pagination-button>
        <cds-pagination-button aria-label="go to previous" action="prev" disabled></cds-pagination-button>
        <cds-input cds-pagination-number>
          <input type="text" value="40" size="2" aria-label="current page" />
          <cds-control-message>/ 80</cds-control-message>
        </cds-input>
        <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
        <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
      </cds-pagination>
    </div>
    <div cds-layout="m-y:lg" class="custom-outline-pagination-items">
      <cds-pagination aria-label="pagination">
        <cds-pagination-button aria-label="go to first" action="first" disabled></cds-pagination-button>
        <cds-pagination-button aria-label="go to previous" action="prev" disabled></cds-pagination-button>
        <cds-input cds-pagination-number>
          <input type="text" value="40" size="2" aria-label="current page" />
          <cds-control-message>/ 80</cds-control-message>
        </cds-input>
        <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
        <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
      </cds-pagination>
    </div>
  `;
};

export const customPaginationAlignments = () => {
  return html`
    <div cds-layout="m-y:sm">
      <cds-pagination aria-label="pagination" cds-layout="horizontal gap:md align:left">
        <cds-pagination-button aria-label="go to first" action="first" disabled></cds-pagination-button>
        <cds-pagination-button aria-label="go to previous" action="prev" disabled></cds-pagination-button>
        <cds-input cds-pagination-number>
          <input type="text" value="40" size="2" aria-label="current page" />
          <cds-control-message>/ 80</cds-control-message>
        </cds-input>
        <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
        <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
      </cds-pagination>
    </div>
    <div cds-layout="m-y:sm">
      <cds-pagination aria-label="pagination" cds-layout="horizontal gap:md align:right">
        <cds-pagination-button aria-label="go to first" action="first" disabled></cds-pagination-button>
        <cds-pagination-button aria-label="go to previous" action="prev" disabled></cds-pagination-button>
        <cds-input cds-pagination-number>
          <input type="text" value="40" size="2" aria-label="current page" />
          <cds-control-message>/ 80</cds-control-message>
        </cds-input>
        <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
        <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
      </cds-pagination>
    </div>
    <div cds-layout="m-y:sm">
      <cds-pagination aria-label="pagination" cds-layout="vertical gap:md align:center">
        <cds-pagination-button disabled>
          <cds-icon shape="angle" direction="up"></cds-icon>
        </cds-pagination-button>
        1 / 3
        <cds-pagination-button>
          <cds-icon shape="angle" direction="down"></cds-icon>
        </cds-pagination-button>
      </cds-pagination>
    </div>
    <div cds-layout="m-y:sm">
      <cds-pagination aria-label="pagination" cds-layout="vertical gap:md align:center">
        <cds-pagination-button disabled>
          <cds-icon shape="angle" direction="up"></cds-icon>
        </cds-pagination-button>
        <cds-input cds-pagination-number>
          <input type="text" value="40" size="2" aria-label="current page" />
          <cds-control-message>/ 80</cds-control-message>
        </cds-input>
        <cds-pagination-button>
          <cds-icon shape="angle" direction="down"></cds-icon>
        </cds-pagination-button>
      </cds-pagination>
    </div>
  `;
};

export const darkTheme = () => {
  return html`
    <div cds-layout="m-y:sm" cds-theme="dark">
      <cds-pagination aria-label="pagination">
        <cds-pagination-button aria-label="go to first" action="first" disabled></cds-pagination-button>
        <cds-pagination-button aria-label="go to previous" action="prev" disabled></cds-pagination-button>
        <cds-input cds-pagination-number>
          <input type="text" value="40" size="2" aria-label="current page" />
          <cds-control-message>/ 80</cds-control-message>
        </cds-input>
        <cds-pagination-button aria-label="go to next" action="next"></cds-pagination-button>
        <cds-pagination-button aria-label="go to last" action="last"></cds-pagination-button>
      </cds-pagination>
    </div>
  `;
};
