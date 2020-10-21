<template>
  <tr>
    <td class="left">
      <b>{{ item.scope }}</b>
    </td>
    <td class="left">
      {{ item.project }}
    </td>
    <td class="left">
      {{ item.title }} <a href="javascript://" @click="more = !more" v-if="hasMore"><b>Show More</b></a>
      <div class="more-block" v-if="item.more">
        <slot></slot>
      </div>
    </td>
    <td class="breaking"><span class="label label-danger" v-if="item.breaking">Breaking Change</span></td>
    <td class="left">
      <a v-if="item.issue" :href="issueLink" target="_blank"
        >#{{ item.issue }} <cds-icon class="external-link" size="12" shape="pop-out"></cds-icon
      ></a>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'ReleaseItem',
  props: ['item'],
  data: function () {
    return {
      more: false,
    };
  },
  computed: {
    hasMore: function () {
      return this.item && this.item.more;
    },
    issueLink: function () {
      return `https://github.com/vmware/clarity/issues/${this.item.issue}`;
    },
  },
};
</script>

<style scoped>
.external-link {
  margin-top: -0.5rem;
}
.breaking {
  padding: 0.4rem;
}
</style>
