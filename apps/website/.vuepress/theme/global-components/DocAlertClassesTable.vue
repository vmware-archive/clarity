<template>
  <section>
    <div class="clr-row" v-if="table == 'text-styles'">
      <table class="table">
        <tbody>
          <tr>
            <th class="left">
              .alert
            </th>
            <td class="left">
              This class is a wrapper around <span>.alert-items</span> and the <span>.close</span> button. Place the
              <span>.close</span> button before the alert items.
            </td>
          </tr>
          <tr>
            <th class="left">
              .alert-items
            </th>
            <td class="left">This class is a wrapper around one or more <span>.alert-items</span> elements.</td>
          </tr>
          <tr>
            <th class="left">
              .alert-item
            </th>
            <td class="left">
              This class is a wrapper around <span>.alert-text</span>, <span>.alert-icon-wrapper</span>, and
              <span>.alert-actions</span>.
            </td>
          </tr>
          <tr>
            <th class="left">
              .alert-icon-wrapper
            </th>
            <td class="left">
              <span>.alert-icon-wrapper</span> contains a <span>clr-icon</span> with the classname
              <span>.alert-icon</span> applied to it. The icons used for the different alert types of success, danger,
              warning, and info are, respectively: <span>check-circle</span>, <span>exclamation-circle</span>,
              <span>exclamation-triangle</span>, and <span>info-circle</span>.
            </td>
          </tr>
          <tr>
            <th class="left">
              .alert-actions
            </th>
            <td class="left">
              <span>.alert-actions</span> can consist of dropdowns or links. Each action should extend the
              <span>.alert-action</span> class.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DocAlertClassesTable',
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
          border-top-color: var(--clr-tablerow-bordercolor, #e8e8e8);
          border-top-width: var(--clr-table-borderwidth, 0.05rem);
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
