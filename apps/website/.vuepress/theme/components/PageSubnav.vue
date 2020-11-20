<template>
  <div v-if="subnav && subnav.children" class="sticky">
    <h1>{{ subnav.title }}</h1>
    <ul class="nav page-subnav" role="nav" v-if="subnav.children.length > 1">
      <li role="presentation" class="nav-item" v-for="item of subnav.children">
        <router-link
          :to="item.path"
          class="btn btn-link nav-link"
          v-bind:aria-selected="isActive(activePagePath, item.path)"
          v-bind:class="{ active: isActive(activePagePath, item.path) }"
          >{{ item.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.sticky {
  position: sticky;
  top: 0;
  background-color: var(--clr-global-app-background);
  z-index: 5000;
}

h1 {
  margin: 0rem;
}
.nav .btn.btn-link.nav-link {
  color: var(--cds-global-color-gray-700, #666);
}

.nav .btn.nav-link.active {
  color: var(--cds-global-color-gray-1000, #000);
}
</style>

<script>
import { removePathExt } from '../util/remove-path-ext';
// This whole system is just setup to assume a 3 level navigation pattern, anything else might break this
export default {
  name: 'PageSubnav',

  props: ['sidebarItems'],

  computed: {
    subnav() {
      return resolveSubnav(this.$page, this.sidebarItems);
    },
    activePagePath() {
      return this.$page.path;
    },
  },
  methods: {
    isActive: function (activePath, itemPath) {
      return activePath === removePathExt(itemPath);
    },
  },
};

function resolveSubnav(page, items) {
  // Find the current page paths
  const parts = page.path.split('/').filter(path => path);
  // Find the top level parent
  const topGroup = items.find(item => item.path.startsWith(`/${parts[0]}`));
  // Check if it has children
  if (topGroup && topGroup.children) {
    return topGroup.children.find(item => item.path.startsWith(`/${parts[0]}/${parts[1]}`));
  } else {
    return [];
  }
}
</script>
