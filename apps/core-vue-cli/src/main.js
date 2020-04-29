import Vue from 'vue';
import App from './App.vue';
import '@clr/core/alert';
import '@clr/core/button';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
