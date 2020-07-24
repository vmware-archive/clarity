export default {
  debounce: function (cb, wait) {
    let timeout;
    return function (...args) {
      const self = this;
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        cb.apply(self, args);
      }, wait);
    };
  },
};
