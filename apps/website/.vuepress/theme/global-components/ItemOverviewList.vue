<template>
  <section class="item-overview-list">
    <ItemOverview v-for="item in items" :title="item.title" :path="item.path" :target="item.target" :isNew="item.isNew">
    </ItemOverview>
  </section>
</template>

<script>
export default {
  name: 'ItemOverviewList',
  props: ['items'],
};
</script>

<style lang="scss" scoped>
.item-overview-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > * {
    margin: 0.5rem 0;
  }
}
</style>
