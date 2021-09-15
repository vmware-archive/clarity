export type ComponentInformation = {
  name: string;
  version: string;
  link: string;
  figma: string;
  storybook?: string;
  eslint?: boolean;
};

export type ComponentInformationResult = {
  description: string;
  angular?: ComponentInformation;
  core?: ComponentInformation;
};

export type ComponentInformationData = {
  [key: string]: ComponentInformationResult;
};

/**
 * List of Angular components that we support
 */
const angularComponents: string[] = [
  'accordion',
  'alert',
  'badge',
  'button',
  'button-group',
  'card',
  'checkbox',
  'combobox',
  'datagrid',
  'datalist',
  'date-picker',
  'dropdown',
  'form',
  'grid',
  'header',
  'input',
  'label',
  'modal',
  'password',
  'progress-bar',
  'radio',
  'range',
  'select',
  'sidenav',
  'signpost',
  'spinner',
  'stack-view',
  'stepper',
  'tab',
  'table',
  'textarea',
  'timeline',
  'toggle',
  'tooltip',
  'tree-view',
  'vertical-nav',
  'wizard',
];

/**
 * List of Core components that we support
 */
const coreComponents: string[] = [
  'accordion',
  'alert',
  'badge',
  'button',
  'checkbox',
  'control',
  'datalist',
  'form',
  'form-group',
  'icon-button',
  'inline-button',
  'input',
  'input-group',
  'list',
  'modal',
  'password',
  'radio',
  'range',
  'select',
  'tag',
  'textarea',
  'toggle',
];

/**
 * Components that have eslint rule.
 */
const eslintRules = [
  'accordion',
  'alert',
  'badge',
  'button',
  'card',
  'checkbox',
  'datalist',
  'form',
  'icon',
  'input',
  'label',
  'list',
  'modal',
  'password',
  'radio',
  'range',
  'select',
  'textarea',
  'toggle',
];

/**
 * From what version given component was added to Angular or Core project.
 *
 * @NOTE the mapping work by splitting the key `<angular | core>-<component> : <version>`
 */
const versionMap: { [key: string]: string } = {
  'angular-combobox': '4.0.0',
};

/**
 * Component description is the same for Angular and Core components with the same name.
 */
const descriptions: { [key: string]: string } = {
  accordion: 'An accordion allows generic content to be collapsed and allows users to expand to show more detail.',
  alert:
    "Alerts are banners that draw the user's attention to an important message.Elements of an alert, such as icons and color, indicate the type and urgency of the message's information.",
  badge:
    'Badges are status modifiers to other elements which display the numerical value within an element either next to it or inside the element itself.',
  button: 'Buttons allow an application to communicate action and direct user intent.',
  card:
    'Cards are a flexible and extensible content container that can be used to display content in a variety of ways.',
  checkbox:
    'A checkbox is a form element comprising a series of items that make a list of options that allow the user to select any number of choices. Those choices can range from zero, one or several. The selections are not mutually exclusive.',
  combobox:
    'A combobox is a complex element, which can be considered as a combination of two elements - a dropdown list and a text input. The text input is used for quick search and filtering of the predefined options from the dropdown list.',
  details:
    'The datalist element offers a flexible input when users need to filter and select from a large list of pre-defined options. Or, they need to input a custom value (not provided in the pre-defined list) for the input.',
  dropdown:
    'A dropdown menu is a contextual list that allows the user to choose an option that take an immediate action or navigate the user to another view. The source of the dropdown is usually a button.',
  form: 'Forms are a grouping of input controls that allow a user to submit information to your application.',
  header:
    'Headers provide branding, navigation, search, and access to global application actions such as settings and notifications.',
  icon: 'The icon system gives you complete control over icon color, orientation, and size.',
  input: 'Inputs enable the user to input text information.',
  label: 'Labels show concise metadata in a compact format.',
  list: 'Lists are for showing a set of items in sequence, and can be nested to show some hierarchy.',
  modal:
    'Modals are dialogues which provide information or help a user complete a task. They require the user to take an action to dismiss them.',
  password:
    'Password fields are a specialized input field with the ability to toggle between the masked field or to view the password in plain text.',
  progressbar: 'A progress bar is a linear indicator for providing feedback about an ongoing, user-initiated process.',
  radio: 'Using radio buttons, users can select one option from a group of options.',
  range:
    'The HTML5 range input element is used when a user can choose between a min and a max value but the precise value chosen is not considered important.',
  select:
    'With a select box, users can select one item from a list of values. The selected item is visible when the select box is closed.',
  signpost:
    'The signpost is a convenient, lightweight way to show contextual help of information without taking the user out of the current context.',
  spinner: 'A spinner is visual indicator of an ongoing, user-initiated process.',
  stackview: 'A stack view displays key/value pairs, which users can expand to show more detail.',
  stepper: 'A stepper structures multi-step processes into 2 or more expanding panels that break up complex workflows.',
  tab: 'Tabs divide content into separate views which users navigate between.',
  table:
    'A table displays information in a grid of rows and columns providing a method of organizing information in way that facilitates comparisons to discover patterns and insights.',
  textarea:
    'Textareas are a popular form control for long form text input, and Clarity supports both a CSS only and Angular component. You may wish to review the general forms documentation about form controls.',
  timeline:
    'A timeline displays a series of events which can guide the user through processes or pre-defined steps while also showing current progress.',
  toggle: 'Toggle switches allow the selection of on or off state.',
  tooltip:
    'A tooltip is a momentary dialogue which surfaces from an info icon and provides additional information pertaining to the corresponding UI element.',
  treeview:
    'A tree is a hierarchical component that gives users access to a hierarchical set of objects displayed in a the parent-child relationship.',
  wizard:
    'A wizard provides an interface for a user to proceed through a sequence of steps required to complete a task.',
};

/**
 * Reformat and build tree structure for every component with all the fields that we need to be used.
 */
const DATA: ComponentInformationData = [...new Set([...angularComponents, ...coreComponents])].reduce(
  (endResult: ComponentInformationData, componentName: string): ComponentInformationData => {
    endResult[componentName] = {
      description: descriptions[componentName] || '',
      angular: {
        name: componentName,
        version: versionMap[`angular-${componentName}`] || '1.0.0',
        link: `https://angular.clarity.design/documentation/${componentName}`,
        eslint: eslintRules.includes(componentName),
        // @TODO link to specific Figma locations for each component
        figma: 'https://www.figma.com/file/ZvaQGGktjGoW6gz9DqwvrLtz/?node-id=1007%3A0',
      },
      core: {
        name: componentName,
        version: versionMap[`core-${componentName}`] || '4.0.0',
        link: `https://clarity.design/core-components/${componentName}`,
        /**
         * the reason for not adding this at the moment is that the URLS for core components into the storybook
         * are really complex and hard to auto-generate maybe another object with data could be used here similar to
         * version or description block.
         */
        storybook: '', // not sure how to auto-generate it for the moment?!
        // @TODO link to specific Figma locations for each component
        figma: 'https://www.figma.com/file/cjen2ts5Vz0W37NacV1eBE/Clarity-Core-Library-BETA?node-id=1169%3A3267',
      },
    };
    return endResult;
  },
  {} as ComponentInformationData
);

/**
 * This service is private and it's only design to be use into internal components.
 * @WARNING - DON'T EXPORT IT AND USE IT IN YOUR PROJECT!
 */
export default class ComponentInformationService {
  /**
   *
   * @param component - The component name to fetch information
   * @returns {ComponentInformationResult}
   */
  static fetch(component: string): ComponentInformationResult {
    return DATA[component] || { description: '', angular: {}, core: {} };
  }
}
