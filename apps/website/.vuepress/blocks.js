const md = require('markdown-it')();

module.exports = [
  // SUMMARY BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'summary',
      render: function (tokens, idx) {
        const item = tokens[idx];
        // TODO: revisit pr comment: https://github.com/vmware/clarity/pull/4820#discussion_r460762288
        if (item.type === 'container_summary_open') {
          return `<ClrSummary>`;
        } else if (item.type === 'inline') {
          return item.content;
        } else if (item.type === 'container_summary_close') {
          return `</ClrSummary>`;
        }
      },
    },
  ],
  // COMPONENT SUMMARY BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'component-summary',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_component-summary_open') {
          return `<div class="component-summary no-clr-ui" cds-text="subsection">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_component-summary_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 1 TITLE BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'component-section-level-one-title',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_component-section-level-one-title_open') {
          return `<div class="component-section-title level-one no-clr-ui" cds-text="title" cds-layout="m-b:md">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_component-section-level-one-title_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 1 BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'component-section-level-one',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_component-section-level-one_open') {
          return `<div class="component-section no-clr-ui" cds-text="body">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_component-section-level-one_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 2 TITLE BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'component-section-level-two-title',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_component-section-level-two-title_open') {
          return `<div class="component-section-title no-clr-ui" cds-text="section" cds-layout="m-b:md">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_component-section-level-two-title_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 2 BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'component-section-level-two',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_component-section-level-two_open') {
          return `<div class="component-section no-clr-ui" cds-text="body">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_component-section-level-two_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 3 TITLE BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'component-section-level-three-title',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_component-section-level-three-title_open') {
          return `<div class="component-subsection-title no-clr-ui" cds-text="subsection" cds-layout="m-b:xs">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_component-section-level-three-title_close') {
          return `</div>`;
        }
      },
    },
  ],
  // COMPONENT SECTION LVL 3 BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'component-section-level-three',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_component-section-level-three_open') {
          return `<div class="component-subsection no-clr-ui" cds-text="body">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_component-section-level-three_close') {
          return `</div>`;
        }
      },
    },
  ],
  // DO BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'do',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_do_open') {
          return `<DocDo summary="${md.renderInline(item.info.replace('do ', ''))}">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_do_close') {
          return `</DocDo>`;
        }
      },
    },
  ],
  // DON'T BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'dont',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_dont_open') {
          return `<DocDont summary="${md.renderInline(item.info.replace('dont ', ''))}">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_dont_close') {
          return `</DocDont>`;
        }
      },
    },
  ],
  // COL BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'col',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_col_open') {
          return `<DocCol summary="${md.renderInline(item.info.trim().substr(3).trim())}">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_col_close') {
          return `</DocCol>`;
        }
      },
    },
  ],
  // INSET BLOCK
  [
    'vuepress-plugin-container',
    {
      type: 'inset',
      render: function (tokens, idx) {
        const item = tokens[idx];

        if (item.type === 'container_inset_open') {
          return `<DocInset align="${item.info.replace('inset ', '')}">`;
        } else if (item.type === 'html_block') {
          return item.content;
        } else if (item.type === 'container_inset_close') {
          return `</DocInset>`;
        }
      },
    },
  ],
];
