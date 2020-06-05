import Vue from 'vue';
import App from './App.vue';
import '@clr/core/alert/register.js';
import '@clr/core/button/register.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
