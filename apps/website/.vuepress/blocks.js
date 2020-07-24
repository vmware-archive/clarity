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
