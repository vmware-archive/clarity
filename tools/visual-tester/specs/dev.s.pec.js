setup({

});
specOptions({
  selector: 'main.content-area',
  removeFromDom: ['cds-icon[shape=\'vm-bug\']', 'cds-icon[shape=\'cog\']']
});

it('accordion');
group({
  name: 'alerts',
  tests: [
    {url: 'alert/static/styles'},
    {url: 'alert/static/sizes'},
    {url: 'alert/static/cards'},
    {url: 'alert/static/modals'},
    {url: 'alert/static/content-area'},
    {url: 'alert/static/app-level'},
    {url: 'alert/angular/not-closable'},
    {url: 'alert/angular/small'},
    {url: 'alert/angular/close-events'},
    {url: 'alert/angular/success'},
    {url: 'alert/angular/app-level'},
    {url: 'alert/angular/app-level-alerts'}
    ],
  options: {}
})

group({
  name: 'badges',
  tests: [
    {url: 'badges/color-options'},
    {url: 'badges/status'}
  ],
  options: {}
})

group({
  name: 'button-group',
  tests: [
    {url: 'button-group/static/basic-structure'},
    {url: 'button-group/static/types'},
    {url: 'button-group/static/directions'},
    {url: 'button-group/static/icons'},
    {url: 'button-group/static/icon-button-group'},
    {url: 'button-group/static/icons-with-text'},
    {url: 'button-group/static/checkboxes'},
    {url: 'button-group/static/radios'},
    {url: 'button-group/static/cards'},
    {url: 'button-group/angular/basic-structure'},
    {url: 'button-group/angular/directions'},
    {url: 'button-group/angular/icon-button'},
    {url: 'button-group/angular/loading-button'},
    {url: 'button-group/angular/hide-overflow'},
    {url: 'button-group/angular/mixed-buttons'},
    {url: 'button-group/angular/move-button-in-menu'},
    {url: 'button-group/angular/move-multiple-buttons-in-menu'}
  ],
  options: {}
})

group({
  name: 'buttons',
  tests: [
    {url: 'buttons/real-button'},
    {url: 'buttons/primary-button'},
    {url: 'buttons/secondary-button'},
    {url: 'buttons/tertiary-button'},
    {url: 'buttons/inverse-button'},
    {url: 'buttons/button-states'},
    {url: 'buttons/button-loading', options: {exclude: true}},
    {url: 'buttons/button-sizes'},
    {url: 'buttons/icons'},
    {url: 'buttons/icon-buttons'},
    {url: 'buttons/buttons-test'}
  ],
  options: {}
})

group({
  name: 'card',
  tests: [
    {url: 'card/grid'},
    {url: 'card/clickable', options: {hoverOver: 'a.card.clickable'}},
    {url: 'card/dropdown'},
    {url: 'card/images'},
    {url: 'card/layout'},
    {url: 'card/masonry'},
    {url: 'card/media-block'},
    {url: 'card/list-group'},
    {url: 'card/old'}
  ],
  options: {}
})

it('checkboxes');

it('color/color-palette');

it('combobox');

it('custom-props');

group({
  name: 'datagrid',
  tests: [
    {url: 'datagrid/structure'},
    {url: 'datagrid/kitchen-sicken'},
    {url: 'datagrid/custom-rendering'},
    {url: 'datagrid/smart-iterator'},
    {url: 'datagrid/binding-properties'},
    {url: 'datagrid/sorting'},
    {url: 'datagrid/filtering'},
    {url: 'datagrid/string-filtering'},
    {url: 'datagrid/pagination'},
    {url: 'datagrid/pagination-scrolling'},
    {url: 'datagrid/pagination-conditional'},
    {url: 'datagrid/selection'},
    {url: 'datagrid/selection-single'},
    {url: 'datagrid/selection-row-mode'},
    {url: 'datagrid/preserve-selection'},
    {url: 'datagrid/server-driven', options: { ignoreCSSAnimations: true }},
    {url: 'datagrid/placeholder'},
    {url: 'datagrid/scrolling'},
    {url: 'datagrid/column-sizing'},
    {url: 'datagrid/compact'},
    {url: 'datagrid/detail'},
    {url: 'datagrid/expandable-rows'},
    {url: 'datagrid/full'},
    {url: 'datagrid/test-cases'},
    {url: 'datagrid/test-cases-async'},
    {url: 'datagrid/hide-show'},
    {url: 'datagrid/responsive-footer'},
    {url: 'datagrid/conditional-selection'},
  ],
  options: {}
})

it('datalist');

group({
  name: 'drag-and-drop',
  tests: [
    {url: 'drag-and-drop/draggable'},
    {url: 'drag-and-drop/draggable-handle'},
    {url: 'drag-and-drop/custom-ghost'},
    {url: 'drag-and-drop/custom-ghost-and-handle'},
    {url: 'drag-and-drop/droppable'},
    {url: 'drag-and-drop/drop-tolerance'},
    {url: 'drag-and-drop/groupng'}
  ],
  options: {}
})

group({
  name: 'datepicker',
  tests: [
    {url: 'datepicker/ng-model-auto-wrapped'},
    {url: 'datepicker/ng-model-wrapper-present'},
    {url: 'datepicker/datepicker-date-input'},
    {url: 'datepicker/datepicker-date-input-wrapper-presentit', options: { ignoreCSSAnimations: true }},
    {url: 'datepicker/disabled'},
    {url: 'datepicker/datepicker-min-max'},
  ],
  options: {}
})

group({
  name: 'dropdown',
  tests: [
    {url: 'dropdown/default'},
    {url: 'dropdown/positioning'},
    {url: 'dropdown/icon-toggle'},
    {url: 'dropdown/buttonlink-toggle'},
    {url: 'dropdown/angular-positioning'},
    {url: 'dropdown/angular-nested'},
    {url: 'dropdown/multi-click'},
    {url: 'dropdown/dropdown-header'}
  ],
  options: {}
})

group({
  name: 'forms',
  tests: [
    {url: 'forms/layout-vertical'},
    {url: 'forms/layout-horizontal'},
    {url: 'forms/layout-compact'},
    {url: 'forms/layout-vertical-grid'},
    {url: 'forms/layout-horizontal-grid'},
    {url: 'forms/layout-compact-grid'},
    {url: 'forms/layout-vertical-angular'},
    {url: 'forms/layout-horizontal-angular'},
    {url: 'forms/layout-compact-angular'},
    {url: 'forms/layout-horizontal-angular-grid'},
    {url: 'forms/layout-compact-angular-grid'},
    {url: 'forms/input-group'},
    {url: 'forms/layout-modal'},
    {url: 'forms/text'},
    {url: 'forms/checkbox'},
    {url: 'forms/radio'},
    {url: 'forms/file'},
    {url: 'forms/textarea'},
    {url: 'forms/select'},
    {url: 'forms/template-driven'},
    {url: 'forms/reactive'},
    {url: 'forms/reset'},
    {url: 'forms/a11y'},
    {url: 'forms/generic-container'},
    {url: 'forms/validation'}
  ],
  options: {}
})

group({
  name: 'grid',
  tests: [
    {url: 'grid/grid-columns'},
    {url: 'grid/grid-columns-stacking'},
    {url: 'grid/grid-columns-offsetting'},
    {url: 'grid/grid-column-wrapping'},
    {url: 'grid/grid-equal-widths'},
    {url: 'grid/grid-one-col-width'},
    {url: 'grid/grid-variable-width-content'},
    {url: 'grid/grid-equal-width-multi-row'}
  ],
  options: {}
})

group({
  name: 'iconography',
  tests: [
    {url: 'iconography/selection'},
    {url: 'iconography/color-options'},
    {url: 'iconography/inverse-color'},
    {url: 'iconography/size'},
    {url: 'iconography/orientation'},
    {url: 'iconography/variants'},
    {url: 'iconography/view-box-test'}
  ],
  options: {}
})

it('images');

it('input');

it('🇫🇷♿');

group({
  name: 'labels',
  tests: [
    {url: 'labels/default'},
    {url: 'labels/color-options'},
    {url: 'labels/clickable'},
    {url: 'labels/status'},
    {url: 'labels/with-badges'}
  ],
  options: {}
})

group({
  name: 'layout',
  tests: [
    {url: 'layout/layout-all'},
    {url: 'layout/layout-no-subnav'},
    {url: 'layout/layout-no-sidenav'},
    {url: 'layout/layout-only-header'},
    {url: 'layout/layout-subnav-primary'},
    {url: 'layout/layout-sidenav-primary'},
    {url: 'layout/layout-additional-sections'}
  ],
  options: {}
})

group({
  name: 'lists',
  tests: [
    {url: 'lists/lists-ul'},
    {url: 'lists/lists-unstyled'},
    {url: 'lists/lists-ol'},
    {url: 'lists/lists-mixed'},
    {url: 'lists/lists-compact'},
    {url: 'lists/lists-in-cards'}
  ],
  options: {}
})

it('login');

group({
  name: 'modal',
  tests: [
    {url: 'modal/static'},
    {url: 'modal/old-close-button'},
    {url: 'modal/sizes'},
    {url: 'modal/max-height'},
    {url: 'modal/backdrop'},
    {url: 'modal/animation'},
    {url: 'modal/dynamic-show'},
    {url: 'modal/dynamic-sizing'},
    {url: 'modal/static-backdrop'},
    {url: 'modal/not-closable'},
    {url: 'modal/focus-trap'},
    {url: 'modal/modal-form'}
  ],
  options: {}
})

group({
  name: 'navigation',
  tests: [
    {url: 'navigation/headers'},
    {url: 'navigation/nav-tabs'},
    {url: 'navigation/sidenav'},
    {url: 'navigation/subnav'},
    {url: 'navigation/responsive-nav1'},
    {url: 'navigation/responsive-nav2'},
    {url: 'navigation/headers/header-types'},
    {url: 'navigation/headers/header-colors'},
    {url: 'navigation/headers/header-types-old'}
  ],
  options: {}
})

it('password');

xit('popovers');

group({
  name: 'progress-bars',
  tests: [
    {url: 'progress-bars/progress-bar-examples'},
    {url: 'progress-bars/progress-bar-colors'},
    {url: 'progress-bars/progress-bar-animations'},
    {url: 'progress-bars/progress-bar-cards'},
    {url: 'progress-bars/progress-bar-sidenav'},
    {url: 'progress-bars/progress-bar-loop'},
    {url: 'progress-bars/progress-bar-static'},
    {url: 'progress-bars/progress-bar-static-cards'},
    {url: 'progress-bars/progress-bar-inline'},
    {url: 'progress-bars/progress-bar-inline-cards'},
    {url: 'progress-bars/progress-bar-component'}
  ],
  options: {}
})

it('radios');

it('ranges');

it('selects');

it('signposts');

it('spinners', { ignoreCSSAnimations: true });

group({
  name: 'stack-view',
  tests: [
    {url: 'stack-view/static'},
    {url: 'stack-view/angular-basic'},
    {url: 'stack-view/angular-modal-edit'},
    {url: 'stack-view/angular-lazyload'}
  ],
  options: {}
})

it('stepper');

group({
  name: 'tables',
  tests: [
    {url: 'tables/tables-basic'},
    {url: 'tables/tables-leftcell'},
    {url: 'tables/tables-multiline'},
    {url: 'tables/tables-noborder'},
    {url: 'tables/tables-compact'},
    {url: 'tables/tables-compact-noborder'},
    {url: 'tables/tables-vertical'},
    {url: 'tables/tables-vertical-noborder-compact'},
    {url: 'tables/tables-width'}
  ],
  options: {}
})

group({
  name: 'tabs',
  tests: [
    {url: 'tabs/static'},
    {url: 'tabs/angular'}
  ],
  options: {}
})

it('textarea');

group({
  name: 'tree-view',
  tests: [
    {url: 'tree-view/eager-declarative'},
    {url: 'tree-view/eager-recursive'},
    {url: 'tree-view/lazy-declarative'},
    {url: 'tree-view/lazy-recursive', options: { ignoreCSSAnimations: true }},
    {url: 'tree-view/nodes-with-icons'},
    {url: 'tree-view/routing'},
    {url: 'tree-view/pre-selection'}
  ],
  options: {}
})

group({
  name: 'timeline',
  tests: [
    {url: 'timeline/static', options: { ignoreCSSAnimations: true }},
    {url: 'timeline/angular', options: { ignoreCSSAnimations: true }}
],
  options: {}
})

it('toggles');

group({
  name: 'tooltips',
  tests: [
    {url: 'tooltips/sizes'},
    {url: 'tooltips/directions'},
    {url: 'tooltips/angular'}
  ],
  options: {}
})

group({
  name: 'typography',
  tests: [
    {url: 'typography/typography-font-weight'},
    {url: 'typography/typography-headers'},
    {url: 'typography/typography-text'},
    {url: 'typography/typography-links'},
    {url: 'typography/typography-font-char-test'},
    {url: 'typography/typography-line-height'},
    {url: 'typography/typography-font-autopsy'}
  ],
  options: {}
})

group({
  name: 'vertical-nav',
  tests: [
    {url: 'vertical-nav/static'},
    {url: 'vertical-nav/basic'},
    {url: 'vertical-nav/header-and-divider'},
    {url: 'vertical-nav/collapsible'},
    {url: 'vertical-nav/icons'},
    {url: 'vertical-nav/nested-menus'},
    {url: 'vertical-nav/nested-icon-menus'},
    {url: 'vertical-nav/partial-nested-menus'},
    {url: 'vertical-nav/partial-nested-icon-menus'},
    {url: 'vertical-nav/routing'},
    {url: 'vertical-nav/accessibility'},
    {url: 'vertical-nav/without-expanded-directive'},
    {url: 'vertical-nav/unstructured-routes'},
    {url: 'vertical-nav/highlights'},
    {url: 'vertical-nav/all'}
  ],
  options: {}
})

group({
  name: 'wizard',
  tests: [
    {url: 'wizard/basic'},
    {url: 'wizard/skip-page'},
    {url: 'wizard/form-validation'},
    {url: 'wizard/async-validation'},
    {url: 'wizard/not-closable'},
    {url: 'wizard/custom-buttons'},
    {url: 'wizard/jump-to'},
    {url: 'wizard/step-error'},
    {url: 'wizard/reset'},
    {url: 'wizard/header-actions'},
    {url: 'wizard/alt-cancel'},
    {url: 'wizard/alt-next'},
    {url: 'wizard/force-forward'},
    {url: 'wizard/stop-navigation'}
  ],
  options: {}
})
