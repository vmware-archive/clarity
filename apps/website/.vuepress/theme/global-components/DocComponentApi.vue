<template>
  <div>
    <table class="table" v-if="item === 'interface'">
      <tr>
        <th class="left">Property</th>
        <th class="left">Type</th>
        <th class="left">Description</th>
      </tr>

      <tr v-for="item in items">
        <td class="left">{{ item.property }}</td>
        <td class="left">{{ item.propertyType }}</td>
        <td class="left">{{ item.description }}</td>
      </tr>
    </table>

    <table class="table" v-if="item === 'bindings'">
      <tr>
        <th class="left">Binding</th>
        <th class="left">Type</th>
        <th class="left">Options</th>
        <th class="left">Default</th>
        <th class="left">Description</th>
      </tr>
      <tr v-for="item in items">
        <td class="left">{{ bindingName(item) }}</td>
        <td class="left">{{ item.type }}</td>
        <td class="left">{{ item.options }}</td>
        <td class="left">{{ item.default }}</td>
        <td class="left">{{ item.description }}</td>
      </tr>
    </table>

    <section v-if="item === 'methods'">
      <div class="card" v-for="item in items">
        <div class="card-block">
          <h4 class="card-title">{{ item.name }}({{ getParams(item.parameters) }}):{{ item.returns }}</h4>
          <p class="card-text">
            {{ item.description }}
          </p>
        </div>
        <ul class="list-group" v-if="item.parameters.length > 0">
          <li class="list-group-item">
            <table class="table table-noborder" style="margin-top: 0;">
              <tr>
                <th class="left">Name</th>
                <th class="left">Type</th>
                <th class="left">Description</th>
              </tr>
              <tr v-for="parameter in item.parameters">
                <td class="left">{{ parameter.name }}</td>
                <td class="left">{{ parameter.type }}</td>
                <td class="left">{{ parameter.description }}</td>
              </tr>
            </table>
          </li>
        </ul>
        <div class="card-footer"><strong>Returns</strong> {{ item.returns }}</div>
      </div>
    </section>

    <table class="table" v-if="item === 'css'">
      <tr>
        <th class="left">CSS Class</th>
        <th class="left">Host Element(s)</th>
        <th class="left">Type</th>
        <th class="left">Description</th>
        <th class="left">Required</th>
      </tr>
      <tr v-for="item in items">
        <td class="left">{{ item.name }}</td>
        <td class="left">{{ item.host }}</td>
        <td class="left">{{ item.type }}</td>
        <td class="left">{{ item.description }}</td>
        <td class="left">{{ item.required }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Api from '../../../data/angular-api.json';

export default {
  name: 'DocComponentApi',
  props: ['component', 'item'],
  computed: {
    items: function () {
      if (Api && Api[this.component] && Api[this.component][this.item]) {
        return Api[this.component][this.item];
      } else {
        return [];
      }
    },
  },
  methods: {
    typeName: function (item) {
      switch (item.type) {
        case 'input':
          return `Input`;
          break;
        case 'output':
          return `Output`;
          break;
        case 'two-way':
          return `Two-Way Binding`;
          break;
      }
    },
    bindingName: function (item) {
      switch (item.type) {
        case 'input':
          return `[${item.name}]`;
          break;
        case 'output':
          return `(${item.name})`;
          break;
        case 'two-way':
          return `[(${item.name})]`;
          break;
      }
    },

    getParams: function (params) {
      return params
        .map(function (param) {
          return `${param.name}: ${param.type}`;
        })
        .join('; ');
    },
  },
};
</script>
