<template>
  <transition name="slide-fade">
    <div class="side-nav-container" v-show="isOpen" @click="checkOutsideClick($event)">
      <nav aria-label="Sidebar navigation" class="clr-vertical-nav has-nav-groups side-nav" ref="nav">
        <div class="nav-content">
          <template v-for="(item, index) in items">
            <div class="nav-group" v-if="item.children" :key="index">
              <div class="nav-group-content" v-bind:class="{ active: !states[index] && childActive(item) }">
                <button :id="'sidenav_' + index" class="nav-group-trigger" type="button" @click="toggle(index)">
                  <span class="nav-group-text">{{ item.title }}</span>
                  <cds-icon
                    class="nav-group-trigger-icon"
                    shape="angle"
                    size="md"
                    :direction="states[index] ? 'down' : 'right'"
                  ></cds-icon>
                </button>
              </div>
              <div
                class="nav-group-children"
                v-bind:class="{ 'is-expanded': states[index] || activePage.path.startsWith(item.path) }"
                v-bind:style="{
                  height: states[index]
                    ? `${$options.filters.filterReleasedComponents(item.children).length * 36}px`
                    : '0',
                }"
              >
                <template v-for="(childItem, index) in $options.filters.filterReleasedComponents(item.children)">
                  <router-link
                    @focus.native="focusToggle(index, item.children)"
                    class="nav-link"
                    :to="childItem.path"
                    v-if="childItem.type !== 'external' && isBeta(childItem) === false"
                    :key="index"
                    v-bind:class="{
                      active: isItemActive(childItem),
                    }"
                  >
                    <span class="nav-text">
                      {{ childItem.title }}
                      <!-- <cds-icon
                        aria-label="beta"
                        status="info"
                        solid
                        v-if="isBeta(childItem) === true"
                        shape="beta"
                        size="md"
                        style="margin-left: -0.15rem; margin-top: -0.75rem;"
                      ></cds-icon> -->
                    </span>
                  </router-link>
                  <a
                    :key="index"
                    :href="childItem.path"
                    :target="childItem.target || '_blank'"
                    class="nav-link"
                    v-if="childItem.type === 'external' && isBeta(childItem) === false"
                  >
                    <span class="nav-text">{{ childItem.title }}</span></a
                  >
                </template>
              </div>
            </div>

            <router-link class="nav-link" v-if="!item.children" :to="item.path" :key="index">
              <span class="nav-text">{{ item.title }}</span>
            </router-link>
          </template>
          <a href="https://clarity.design" class="nav-link" cds-layout="m-t:md display@md:none">
            <span class="nav-text">Return to Current Site <cds-icon shape="pop-out"></cds-icon></span>
          </a>
        </div>
      </nav>
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

@media (min-width: 769px) {
  .side-nav-container {
    display: block !important;
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
    focusToggle: function (index, items) {
      if (this.states[index]) {
        // already open
        return;
      }

      // Fix of https://github.com/vmware/clarity/issues/6757
      if (this.states[index] !== items) {
        return;
      }

      // open when hidden item is focused
      this.$set(this.states, index, !this.states[index]);
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
      let path = this.$page.path;
      let itemPath = item.path;
      if (!itemPath) {
        return false;
      }
      if (path.endsWith('/')) {
        path = path.slice(0, -1);
      }
      if (itemPath.endsWith('/')) {
        itemPath = itemPath.slice(0, -1);
      }
      // This sets the parent to active if the children are collapsed
      return path === itemPath;
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
