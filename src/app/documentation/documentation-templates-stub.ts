/*
 * This is a sad hack until we figure out a way to do dynamic requires with angular-cli.
 * It works fine with webpack, but angular-cli breaks them. See https://github.com/angular/angular-cli/issues/3306
 */
//noinspection TsLint
export const TEMPLATES = {
  "app-layout": require("../../pages/documentation/app-layout.html"),
  "alerts": require("../../pages/documentation/alerts.html"),
  "badges": require("../../pages/documentation/badges.html"),
  "buttons": require("../../pages/documentation/buttons.html"),
  "button-group": require("../../pages/documentation/button-group.html"),
  "cards": require("../../pages/documentation/cards.html"),
  "checkboxes": require("../../pages/documentation/checkboxes.html"),
  "code-highlight": require("../../pages/documentation/code-highlight.html"),
  "color": require("../../pages/documentation/color.html"),
  "datagrid": require("../../pages/documentation/datagrid.html"),
  "dropdowns": require("../../pages/documentation/dropdowns.html"),
  "forms": require("../../pages/documentation/forms.html"),
  "grid": require("../../pages/documentation/grid.html"),
  "header": require("../../pages/documentation/header.html"),
  "iconography": require("../../pages/documentation/iconography.html"),
  "input-fields": require("../../pages/documentation/input-fields.html"),
  "labels": require("../../pages/documentation/labels.html"),
  "lists": require("../../pages/documentation/lists.html"),
  "login": require("../../pages/documentation/login.html"),
  "modals": require("../../pages/documentation/modals.html"),
  "navigation": require("../../pages/documentation/navigation.html"),
  "progress": require("../../pages/documentation/progress.html"),
  "radios": require("../../pages/documentation/radios.html"),
  "select-boxes": require("../../pages/documentation/select-boxes.html"),
  "sidenav": require("../../pages/documentation/sidenav.html"),
  "spinners": require("../../pages/documentation/spinners.html"),
  "stack-view": require("../../pages/documentation/stack-view.html"),
  "tables": require("../../pages/documentation/tables.html"),
  "tabs": require("../../pages/documentation/tabs.html"),
  "tree-view": require("../../pages/documentation/tree-view.html"),
  "toggle-switches": require("../../pages/documentation/toggle-switches.html"),
  "tooltips": require("../../pages/documentation/tooltips.html"),
  "typography": require("../../pages/documentation/typography.html"),
  "wizards": require("../../pages/documentation/wizards.html")
};
