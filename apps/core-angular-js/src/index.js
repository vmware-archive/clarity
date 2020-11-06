import angular from 'angular';
import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';

angular.module('app', []);
angular.element(document).ready(() => angular.bootstrap(document, ['app']));

angular.module('app').component('appRoot', {
  template: `
    <cds-button status="primary" ng-click="$ctrl.showAlert = true">hello there</cds-button>

    <cds-alert-group ng-if="$ctrl.showAlert" ng-prop-status="$ctrl.status">
      <cds-alert ng-on-close_change="$ctrl.showAlert = false" closable>
        General Kenobi. You are a bold one.
      </cds-alert>
    </cds-alert-group>
  `,
  controller: function () {
    this.status = 'danger';
    this.showAlert = false;
  },
});
