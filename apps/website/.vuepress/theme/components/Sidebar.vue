<template>
  <transition name="slide-fade">
    <div class="side-nav-container" v-show="isOpen" @click="checkOutsideClick($event)">
      <nav class="clr-vertical-nav has-nav-groups side-nav" ref="nav">
        <div class="nav-content">
          <template v-for="(item, index) in items">
            <div class="nav-group" v-if="item.children">
              <div class="nav-group-content" v-bind:class="{ active: !states[index] && childActive(item) }">
                <button class="nav-group-trigger" type="button" @click="toggle(index)">
                  <span class="nav-group-text">{{ item.title }}</span>
                  <cds-icon
                    class="nav-group-trigger-icon"
                    shape="angle"
                    :dir="states[index] ? 'down' : 'right'"
                  ></cds-icon>
                </button>
              </div>
              <div
                class="nav-group-children"
                v-bind:class="{ 'is-expanded': states[index] || activePage.path.startsWith(item.path) }"
                v-bind:style="{ height: states[index] ? `${item.children.length * 36}px` : '0' }"
              >
                <template v-for="childItem in item.children">
                  <router-link
                    class="nav-link"
                    :to="childItem.path"
                    v-if="childItem.type !== 'external'"
                    v-bind:class="{ active: childItem.path === activePage.path || childActive(childItem) }"
                  >
                    <span class="nav-text">{{ childItem.title }}</span>
                  </router-link>
                  <a
                    v-else-if="childItem.type === 'external'"
                    :href="childItem.path"
                    :target="childItem.target"
                    class="nav-link"
                  >
                    <span class="nav-text"
                      >{{ childItem.title }} <cds-icon class="external-link" size="12" shape="pop-out"></cds-icon
                    ></span>
                  </a>
                </template>
              </div>
            </div>

            <router-link class="nav-link" v-if="!item.children" :to="item.path">
              <span class="nav-text">{{ item.title }}</span>
            </router-link>
          </template>
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
  padding: var(--cds-token-space-size-8) 0;
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
    };
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
