import Vue from 'vue';
import App from './App.vue';
import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
