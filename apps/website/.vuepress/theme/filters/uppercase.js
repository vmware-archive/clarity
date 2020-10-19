import Vue from 'vue';

Vue.filter('uppercase', function (value) {
  if (!value) {
    return '';
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
});
