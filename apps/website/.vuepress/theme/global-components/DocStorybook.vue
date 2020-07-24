<template>
  <div v-bind:class="{ spinner: loading }">
    <iframe v-bind:src="url" @load="stop()"></iframe>
  </div>
</template>

<script>
export default {
  name: 'DocStorybook',
  props: ['story'],
  data: function () {
    return {
      loading: true,
    };
  },
  computed: {
    url: function () {
      return '//localhost:6006/?path=/story/' + this.story;
    },
  },
  methods: {
    stop: function () {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
iframe,
.spinner {
  border: 0;
  height: calc(100vh - 320px);
  width: 100%;
}
.spinner {
  background-size: 2rem;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
