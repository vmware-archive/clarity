export default new (class {
  executeOnSolidChange = []; // solid change listener callbacks
  executeOnBadgeChange = []; // badge change listener callbacks

  setSolid(value) {
    // publish solid changes to listener callbacks
    this.executeOnSolidChange.forEach(f => f(value));
  }

  setBadge(value) {
    // publish variation changes to listener callbacks
    this.executeOnBadgeChange.forEach(f => f(value));
  }
})();
