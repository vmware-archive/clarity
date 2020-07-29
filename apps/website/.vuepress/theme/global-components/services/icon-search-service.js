export default new (class {
  executeOnFilterValueChange = [];

  setFilterValue(value) {
    this.executeOnFilterValueChange.forEach(f => f(value));
  }
})();
