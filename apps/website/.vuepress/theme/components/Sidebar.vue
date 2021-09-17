<template>
  <transition name="slide-fade">
    <div class="side-nav-container" v-show="isOpen" @click="checkOutsideClick($event)">
      <div class="side-nav-inner">
        <cds-navigation expanded ref="nav">
          <template v-for="(item, index) in items">
            <!-- Top level link only -->
            <router-link :to="item.path" cds-layout="horizontal align:vertical-center gap:md" v-if="!item.children">
              <cds-navigation-item>
                {{ item.title }}
              </cds-navigation-item>
            </router-link>

            <!-- Link with children -->
            <cds-navigation-group
              :key="index"
              :expanded="states[index]"
              @expandedChange="!states[index]"
              :active="!states[index] && childActive(item)"
            >
              <cds-navigation-start @click="toggle(index)" cds-layout="p-l:xs">
                {{ item.title }}
              </cds-navigation-start>
              <template v-for="child in item.children">
                <router-link :to="child.path">
                  <cds-navigation-item :active="isItemActive(child)" cds-layout="p-l:lg">
                    {{ child.title }}
                  </cds-navigation-item>
                </router-link>
              </template>
            </cds-navigation-group>
          </template>
        </cds-navigation>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@media (max-width: 768px) {
  .side-nav-container {
    position: fixed;
    top: 3rem;
    left: 0;
    width: 100%;
    z-index: 100000;
    height: calc(100vh - 3rem);
    background-color: rgba(0, 0, 0, 0.6);
    will-change: background-color;
  }

  .side-nav {
    will-change: transform;
    transform: translateX(0);
  }

  .slide-fade-enter-active {
    transition: background-color 0.2s ease;
    .side-nav {
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }
  .slide-fade-leave-active {
    transition: background-color 0.2s ease;
    .side-nav {
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    .side-nav {
      transform: translateX(-100%);
    }
    background-color: rgba(0, 0, 0, 0);
  }
}

.side-nav-inner {
  height: calc(100vh - 3rem);
  overflow-y: scroll;
}

@media (min-width: 769px) {
  .side-nav-container {
    display: block !important;
    width: 12rem;
  }
}

.nav-content {
  padding: var(--cds-global-space-8) 0;
}
.nav-group-children {
  overflow-y: hidden;
  transition: height 0.2s ease-in-out;
}
.nav-group-trigger-icon {
  padding-top: 10px;
}
</style>

<script>
import { removePathExt } from '../util/remove-path-ext';

export default {
  name: 'Sidebar',
  props: {
    isSidebarOpen: Boolean,
    items: Array,
  },
  data: function () {
    return {
      states: new Array(this.$props.items.length).fill(false),
      isOpen: false,
      betaComponents: [],
    };
  },
  filters: {
    filterReleasedComponents: function (items) {
      return items.filter(item => {
        // keep items without the children array
        if (!item.children) {
          return item;
        } else {
          // flag for detecting beta frontmatter
          let hasBeta = false;
          // iterate over all children
          item.children.forEach(child => {
            // set the hasBeta flag if the child is beta marked
            if (child.frontmatter.beta === true) {
              hasBeta = true;
            }
          });
          // return items that are not beta marked
          if (!hasBeta) {
            return item;
          }
        }
      });
    },
  },
  mounted() {
    if (this.childActive(this.$page)) {
      const parts = this.$page.path.split('/');
      const index = this.$props.items.findIndex(page => page.path.includes(parts[1]));
      this.toggle(index);
    }
  },
  computed: {
    activePage: function () {
      return this.$page;
    },
  },
  watch: {
    isSidebarOpen: function (value) {
      if (this.isOpen !== value) {
        this.isOpen = value;
      }
    },
  },
  methods: {
    toggle: function (index) {
      // This is because Vue can't detect changes mutated on an array, so this alerts it of changes
      this.$set(this.states, index, !this.states[index]);
    },
    focusToggle: function (index) {
      if (this.states[index]) {
        // already open
        return;
      } else {
        // open when hidden item is focused
        this.$set(this.states, index, !this.states[index]);
      }
    },
    isItemActive: function (childItem) {
      const childItemPath = removePathExt(childItem.path);
      return childItemPath === this.activePage.path || this.activePage.path.startsWith(childItem.path + '/');
    },
    isBeta: function (item) {
      const found = this.betaComponents.find(x => {
        return x.regularPath.includes(item.path);
      });

      if (found) {
        return true;
      }

      return false;
    },
    childActive: function (item) {
      let path = this.$page.path.split('/');
      let itemPath = item.path.split('/');
      return path[1] === itemPath[1];
    },
    checkOutsideClick: function (event) {
      if (this.isOpen && !this.$refs.nav.contains(event.target)) {
        this.isOpen = false;
        this.$emit('isSidebarOpenChange', false);
      }
    },
  },
};
</script>
