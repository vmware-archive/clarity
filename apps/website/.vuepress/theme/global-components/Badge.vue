<script>
export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: 'tip',
    },
    text: String,
    vertical: {
      type: String,
      default: 'top',
    },
  },
  render(h, { props, slots }) {
    return h(
      'span',
      {
        class: ['badge', props.type],
        style: {
          verticalAlign: props.vertical,
        },
      },
      props.text || slots().default
    );
  },
};
</script>

<style lang="scss" scoped>
.badge {
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border-radius: 3px;
  padding: 0 6px;
  color: #fff;
  background-color: #42b983;

  &.tip,
  &.green {
    background-color: var(--cds-global-status-success);
  }
  &.error {
    background-color: var(--cds-global-status-danger);
  }
  &.warning,
  &.warn,
  &.yellow {
    background-color: var(--cds-global-status-warning);
  }
}

.badge + .badge {
  margin-left: 5px;
}
</style>
