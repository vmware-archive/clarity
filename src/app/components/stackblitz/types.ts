/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export interface StackblitzProject {
  title: string;
  description: string;
  template: 'angular-cli' | 'create-react-app' | 'typescript' | 'javascript' | 'node';
  files: { [path: string]: string };
  tags?: string[];
  dependencies?: { [name: string]: string };
  settings?: {
    compile?: {
      trigger?: 'auto' | 'keystroke' | 'save';
      action?: 'hmr' | 'refresh';
      clearConsole?: boolean;
    };
  };
}

export interface StackblitzOpenOptions {
  openFile?: string; // Show a specific file on page load
  newWindow?: true; // Open in new window or in current window
  hideDevTools?: boolean; // Hide the debugging console
  devToolsHeight?: number; // Set the height of the debugging console
  initialPath?: string; // The initial URL path the preview should open
  origin?: string; // Set the origin URL of your StackBlitz EE server
}

export interface StackblitzEmbedOptions {
  openFile?: string; // Show a specific file on embed load
  clickToLoad?: boolean; // Load editor only when clicked ("click to load")
  view?: 'preview' | 'editor';
  height?: number | string;
  width?: number | string;
  hideExplorer?: boolean;
  hideNavigation?: boolean;
  forceEmbedLayout?: boolean; // Disables the full stackblitz UI on larger screen sizes
  initialPath?: string; // The initial URL path the preview should open
  origin?: string; // Set the origin URL of your StackBlitz EE server
}
