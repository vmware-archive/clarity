<template>
  <section>
    <div class="clr-row" v-if="table == 'text-styles'">
      <table class="table">
        <thead>
          <tr>
            <th class="left">Input</th>
            <th class="left">Values</th>
            <th class="left">Default</th>
            <th class="left">Effect</th>
          </tr>
        </thead>
        <tbody></tbody>
        <tr>
          <td class="left">
            <strong>[clrAlertClosable]</strong> <br />
            Type: Boolean <br />
            Default: true
          </td>
          <td class="left">true, false</td>
          <td class="left">true</td>
          <td class="left">If false, the alert will not be closable by clicking on the top-right "x".</td>
        </tr>
        <tr>
          <td class="left">
            <strong>[(clrAlertClosed)]</strong> <br />
            Type: Boolean <br />
            Default: false
          </td>
          <td class="left">true, false</td>
          <td class="left">false</td>
          <td class="left">Two-way binding on the state of the alert: opened or closed.</td>
        </tr>
        <tr>
          <td class="left">
            <strong>[clrAlertType]</strong> <br />
            Type: String <br />
            Default: "info"
          </td>
          <td class="left">"info", "warning", "success" and "danger"</td>
          <td class="left">"info"</td>
          <td class="left">Sets the type of the alert.</td>
        </tr>
        <tr>
          <td class="left">
            <strong>[clrAlertSizeSmall]</strong> <br />
            Type: Boolean <br />
            Default: false
          </td>
          <td class="left">true, false</td>
          <td class="left">false</td>
          <td class="left">If true, renders a small alert.</td>
        </tr>
        <tr>
          <td class="left">
            <strong>[clrAlertIcon]</strong> <br />
            Type: String <br />
            Default: varies
          </td>
          <td class="left">Icon name as string</td>
          <td class="left">varies</td>
          <td class="left">View <a href="/foundation/icons/">supported icons.</a></td>
        </tr>
        <tr>
          <td class="left">
            <strong>[clrAlertAppLevel]</strong> <br />
            Type: Boolean <br />
            Default: false
          </td>
          <td class="left">true, false</td>
          <td class="left">false</td>
          <td class="left">If true, renders an app-level alert.</td>
        </tr>
        <tr>
          <td class="left">
            <strong>[clrPolite]</strong> <br />
            Type: Boolean <br />
            Default: true
          </td>
          <td class="left">true, false</td>
          <td class="left">true</td>
          <td class="left">aria-live will be set to "polite"</td>
        </tr>
        <tr>
          <td class="left">
            <strong>[clrAssertive]</strong> <br />
            Type: Boolean <br />
            Default: false
          </td>
          <td class="left">true, false</td>
          <td class="left">false</td>
          <td class="left">aria-live will be set to "assertive"</td>
        </tr>
        <tr>
          <td class="left">
            <strong>[clrOff]</strong> <br />
            Type: Boolean <br />
            Default: false
          </td>
          <td class="left">true, false</td>
          <td class="left">false</td>
          <td class="left">aria-live will be set to "off"</td>
        </tr>
        <tr>
          <td class="left">
            <strong>[clrCloseButtonAriaLabel]</strong> <br />
            Type: String <br />
            Default: "Close alert"
          </td>
          <td class="left">"Close alert"</td>
          <td class="left">"Close alert"</td>
          <td class="left">Overwrite default aria-label for close alert button</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DocAlertSummaryOfOptions',
  props: {
    table: '',
  },
};
</script>

<style lang="scss" scoped>
.clr-row {
  margin: 0;

  table {
    tbody {
      tr {
        display: flex;
        &:first-child {
          th {
            border-top: 0;
          }
        }
        th {
          flex: 2;
          border-bottom: 0;
          border-top-style: solid;
          border-top-color: var(--clr-tablerow-bordercolor);
          border-top-width: var(--clr-table-borderwidth);
        }

        td {
          flex: 10;
          span {
            color: var(--clr-timeline-error-step-color);
          }
        }
      }
    }
  }
}
</style>
