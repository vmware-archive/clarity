<template>
  <section>
    <div class="clr-row" v-if="table == 'text-styles'">
      <table class="table">
        <thead>
          <tr>
            <th class="left">Style Name</th>
            <th class="left">Attributes</th>
            <th class="left">Selectors</th>
            <th class="left">Used For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="left">
              <p class="p1">Body text</p>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Regular</li>
                <li>color: #565656</li>
                <li>font-size: 14px</li>
                <li>letter-spacing: normal</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">p, .p1</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Default text styling <em>(page_bodyText)</em></li>
                <li>Sidenav text <em>(sidenav_text)</em></li>
                <li>Body text in cards <em>(card_text)</em></li>
                <li>Text and dropdowns <em>(dropdown_text)</em></li>
                <li>Tab navigation links <em>(tab_text)</em></li>
                <li>Wizard steps and table of contents</li>
                <li>General paragraphs, sentences, lists</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <p class="p2">Section header</p>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Medium</li>
                <li>color: #565656</li>
                <li>font-size: 13px</li>
                <li>letter-spacing: normal</li>
              </ul>
            </td>

            <td class="left"><code class="clr-code">.p2</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Stack view header <em>(stackview_header)</em></li>
                <li>Form headers</li>
                <li>Tree view headers</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <p class="p3">Table, grid, and form text</p>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Regular</li>
                <li>color: #565656</li>
                <li>font-size: 13px</li>
                <li>letter-spacing: normal</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">.p3</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Text in alerts <em>(alert_text)</em></li>
                <li>Stack view text <em>(stackview_text)</em></li>
                <li>Datagrid text <em>(table_text)</em></li>
                <li>Text in HTML tables <em>(table_text)</em></li>
                <li>Text in tooltips and validations <em>(tooltip_text)</em></li>
                <li>Form text</li>
                <li>Treeview text</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <p class="p4">Form labels and column headers</p>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Semibold</li>
                <li>color: #565656</li>
                <li>font-size: 12px</li>
                <li>letter-spacing: normal</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">.p4</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Button text (Normal)</li>
                <li>Table and datagrid headers <em>(table_header)</em></li>
                <li>Dropdown headers <em>(dropdown_header)</em></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <p class="p5">Table footers and chart data</p>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Regular</li>
                <li>color: #565656</li>
                <li>font-size: 12px</li>
                <li>letter-spacing: normal</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">.p5</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Table and datagrid footers</li>
                <li>Chart and data visualization info</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <p class="p6">Small headers</p>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Semibold</li>
                <li>color: #565656</li>
                <li>font-size: 11px</li>
                <li>letter-spacing: 0.03em</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">.p6</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Button text (Small)</li>
                <li>Usually used in all caps</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <p class="p7">Tags and labels</p>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Regular</li>
                <li>color: #565656</li>
                <li>font-size: 11px</li>
                <li>letter-spacing: 0.03em</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">.p7</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Text inside tags and labels <em>(label_text)</em></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <p class="p8">Badges</p>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Regular</li>
                <li>color: #565656</li>
                <li>font-size: 10px</li>
                <li>letter-spacing: 0.03em</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">.p8</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Text inside badges</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <p><code>Monospaced</code></p>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Consolas Regular</li>
                <li>font-size: 14px</li>
                <li>letter-spacing: normal</li>
              </ul>
            </td>
            <td class="left">
              <code class="clr-code">pre.<br />language-*<br />or code.<br />language-*</code>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Code or system-type messages like in a terminal or console</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="clr-row" v-if="table == 'header-styles'">
      <table class="table">
        <thead>
          <tr>
            <th class="left">Style Name</th>
            <th class="left">Attributes</th>
            <th class="left">Selectors</th>
            <th class="left">Used For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="left">
              <h1>Heading 1</h1>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Light</li>
                <li>color: #000000</li>
                <li>font-size: 32px</li>
                <li>letter-spacing: normal</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">h1</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Login screen product name <em>(login_productName)</em></li>
                <li>Large display numbers (charts/data visualization)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <h2>Heading 2</h2>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Light</li>
                <li>color: #000000</li>
                <li>font-size: 28px</li>
                <li>letter-spacing: normal</li>
              </ul>
            </td>

            <td class="left"><code class="clr-code">h2</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Main content header <em>(page_mainHeading)</em></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <h3>Heading 3</h3>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Light</li>
                <li>color: #000000</li>
                <li>font-size: 22px</li>
                <li>letter-spacing: normal</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">h3</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Secondary content header <em>(page_secondaryHeading)</em></li>
                <li>Modal/Wizard/Dialog header <em>(modal_header)</em></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <h4>Heading 4</h4>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Light</li>
                <li>color: #000000</li>
                <li>font-size: 18px</li>
                <li>letter-spacing: normal</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">h4</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Tertiary content header <em>(page_tertiaryHeading)</em></li>
                <li>Card header/title <em>(card_title)</em></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <h5>Heading 5</h5>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Regular</li>
                <li>color: #565656</li>
                <li>font-size: 16px</li>
                <li>letter-spacing: 0.01em</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">h5</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Section header 1 <em>(page_sectionHeader)</em></li>
                <li>Introductory paragraph <em>(page_introParagraph)</em></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="left">
              <h6>Heading 6</h6>
            </td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Metropolis Medium</li>
                <li>color: #313131</li>
                <li>font-size: 14px</li>
                <li>letter-spacing: normal</li>
              </ul>
            </td>
            <td class="left"><code class="clr-code">h6</code></td>
            <td class="left">
              <ul class="list compact list-unstyled">
                <li>Section header 2</li>
                <li>Sidenav section header <em>(sidenav_sectionHeader)</em></li>
                <li>TOC header <em>(toc_header)</em></li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DocTypographyTable',
  props: {
    table: '',
  },
};
</script>

<style lang="scss" scoped>
.clr-row {
  margin-bottom: 2rem;
}
</style>
