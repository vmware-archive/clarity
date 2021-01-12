<template>
  <table class="table">
    <tr>
      <th class="left">Component</th>
      <th class="left">Angular Component</th>
      <th class="left">Core Component</th>
    </tr>
    <tr v-for="(record, title) in components">
      <td class="left">{{ title }}</td>
      <td class="left">
        <template v-if="canLink(record.angular)">
          <!-- If Angular -->
          <router-link :to="record.angularPath"
            ><cds-icon :shape="getIcon(record.angular)"></cds-icon> {{ record.angular }}</router-link
          >
        </template>
        <template v-if="!canLink(record.angular)">
          <!-- If Not Angular -->
          <cds-icon :shape="getIcon(record.angular)"></cds-icon> {{ record.angular }}
        </template>
      </td>
      <td class="left">
        <template v-if="canLink(record.core)">
          <!-- If Core -->
          <router-link :to="record.corePath"
            ><cds-icon :shape="getIcon(record.core)"></cds-icon> {{ record.core }}</router-link
          >
        </template>
        <template v-if="!canLink(record.core)">
          <!-- If Not Core -->
          <cds-icon :shape="getIcon(record.core)"></cds-icon> {{ record.core }}
        </template>
      </td>
    </tr>
  </table>
</template>

<script>
// This is not to be considered pretty, just functional enough
const Status = {
  AVAILABLE: 'Available',
  NOT_PLANNED: 'Not Planned',
  PLANNED: 'Planned',
};

export default {
  name: 'ComponentsComparison',
  methods: {
    getIcon: function (record) {
      switch (record) {
        case Status.AVAILABLE:
          return 'check';
        case Status.NOT_PLANNED:
          return 'times';
        case Status.PLANNED:
          return 'clock';
        default:
          return 'clock';
      }
    },
    canLink: function (record) {
      return Status.AVAILABLE === record;
    },
  },
  computed: {
    components: function () {
      if (this.$site && this.$site.themeConfig && this.$site.themeConfig.sidebar) {
        const angular = this.$site.themeConfig.sidebar
          .find(x => x.title === 'Angular Components')
          .children.filter(item => item.overview !== false);
        const core = this.$site.themeConfig.sidebar
          .find(x => x.title === 'Core Components')
          .children.filter(item => item.overview !== false);

        const components = {};

        // Some Core components are renamed or broken out, so they are mapped here as necessary
        const remap = {
          Tag: '/angular-components/badge/',
          'Icon Button': '/angular-components/button/',
          'Inline Button': '/angular-components/button/',
        };

        // Some Core components are not planned, defined here
        const notplanned = ['Login', 'Sidenav'];

        // Add all Angular components and assume Core status is planned
        angular.forEach(item => {
          components[item.title] = {
            angularPath: item.path,
            angular: Status.AVAILABLE,
            core: Status.PLANNED,
            corePath: '',
          };
        });

        core.forEach(item => {
          if (!components[item.title]) {
            // Check for Core components that Angular doesn't have, or possibly renamed items
            components[item.title] = {
              angularPath: remap[item.title] || '',
              angular: remap[item.title] ? Status.AVAILABLE : Status.NOT_PLANNED,
              core: Status.AVAILABLE,
              corePath: item.path,
            };
          } else {
            // Found an existing, matching item, mark it as available
            components[item.title].core = Status.AVAILABLE;
            components[item.title].corePath = item.path;
          }
        });

        // Final check for unplanned items in Core
        for (let title in components) {
          if (notplanned.indexOf(title) > -1) {
            components[title].core = Status.NOT_PLANNED;
          }
        }

        return Object.keys(components)
          .sort()
          .reduce((component, key) => {
            component[key] = components[key];
            return component;
          }, {});
      }

      return [];
    },
  },
};
</script>
