export default new (class {
  executeOnSolidChange = [];
  executeOnVariationChange = [];

  setSolid(value) {
    this.executeOnSolidChange.forEach(f => f(value));
  }

  setVariation(value) {
    this.executeOnVariationChange.forEach(f => f(value));
  }
})();
