/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/navigation/register.js';
import customElements from '../../dist/core/custom-elements.json';
import { html } from 'lit';
import { CdsNavigation } from '@cds/core/navigation';
import { CdsNavigationGroup } from '@cds/core/navigation';

import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { CdsIcon } from '@cds/core/icon/icon.element.js';
import { applicationsIcon } from '@cds/core/icon/shapes/applications.js';
import { cogIcon } from '@cds/core/icon/shapes/cog.js';
import { dashboardIcon } from '@cds/core/icon/shapes/dashboard.js';
import { dollarIcon } from '@cds/core/icon/shapes/dollar.js';
import { eyeIcon } from '@cds/core/icon/shapes/eye.js';
import { eyeHideIcon } from '@cds/core/icon/shapes/eye-hide.js';
import { fileIcon } from '@cds/core/icon/shapes/file.js';
import { helpInfoIcon } from '@cds/core/icon/shapes/help-info.js';
import { lineChartIcon } from '@cds/core/icon/shapes/line-chart.js';
import { userIcon } from '@cds/core/icon/shapes/user.js';
import { imageIcon } from '@cds/core/icon/shapes/image.js';
import { homeIcon } from '@cds/core/icon/shapes/home.js';

import '@cds/core/icon/register.js';

ClarityIcons.addIcons(
  applicationsIcon,
  cogIcon,
  dashboardIcon,
  dollarIcon,
  eyeIcon,
  eyeHideIcon,
  fileIcon,
  helpInfoIcon,
  lineChartIcon,
  imageIcon,
  homeIcon,
  userIcon
);

export default {
  title: 'Stories/Navigation',
  component: 'cds-navigation',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=22%3A0',
    },
  },
};

// export function API(args: any) {
//   return html`
//     <div style="height: 375px" cds-layout="horizontal gap:md align:vertical-stretch wrap:none">
//       <cds-navigation expanded ...="${spreadProps(getElementStorybookArgs(args))}">
//         <cds-navigation-start>Navigation toggle button</cds-navigation-start>
//         <cds-navigation-item><a>Root item one</a></cds-navigation-item>
//         <cds-navigation-item><a>Root item two</a></cds-navigation-item>
//         <cds-navigation-item><a>Root item three</a></cds-navigation-item>
//         <cds-navigation-item><a>Root item four</a></cds-navigation-item>
//         <cds-navigation-group expanded>
//           <cds-navigation-start>Group toggle button</cds-navigation-start>
//           <cds-navigation-item><a>Group item one</a></cds-navigation-item>
//           <cds-navigation-item><a>Group item two</a></cds-navigation-item>
//           <cds-navigation-item><a>Group item three</a></cds-navigation-item>
//           <cds-navigation-item><a>Group item four</a></cds-navigation-item>
//         </cds-navigation-group>
//       </cds-navigation>
//       <cds-demo layout style="height: 100%; width:  100%;">
//         <a href="#">I'm tabbable content</a>
//       </cds-demo>
//     </div>
//   `;
// }

export function verticalBasic() {
  return html`
    <div style="height: 500px" cds-layout="vertical gap:md">
      <a href="#">
        <cds-icon shape="image" solid size="xl"></cds-icon>
        Application Inc.
      </a>
      <div cds-layout="horizontal wrap:none" style="height: 100%">
        <cds-navigation expanded cds-layout="">
          <cds-navigation-item>
            <a href="#">
              Home
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              Account
            </a>
          </cds-navigation-item>
          <cds-navigation-item active>
            <a href="#">
              People
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              Help
            </a>
          </cds-navigation-item>
          <cds-navigation-item disabled>
            <a href="#">
              Service
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              Documentation
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-demo layout style="height: 100%; width:  100%;">
          <a href="#">Application content link</a>
        </cds-demo>
      </div>
    </div>
  `;
}

export function verticalIconLink() {
  return html`
    <div style="height: 500px" cds-layout="vertical gap:md">
      <a href="#">
        <cds-icon shape="image" solid size="xl"></cds-icon>
        Application Inc.
      </a>
      <div cds-layout="horizontal wrap:none" style="height: 100%">
        <cds-navigation expanded cds-layout="">
          <cds-navigation-item active>
            <a href="#" cds-layout="horizontal align:vertical-center gap:md">
              <cds-icon cds-layout="m-y:md" shape="home" size="sm"></cds-icon>
              Home
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#" cds-layout="horizontal align:vertical-center gap:md">
              <cds-icon cds-layout="m-y:md" shape="applications" size="sm"></cds-icon>
              Account
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#" cds-layout="horizontal align:vertical-center gap:md">
              <cds-icon cds-layout="m-y:md" shape="user" size="sm"></cds-icon>
              People
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#" cds-layout="horizontal align:vertical-center gap:md">
              <cds-icon cds-layout="m-y:md" shape="help-info" size="sm"></cds-icon>
              Help
            </a>
          </cds-navigation-item>
          <cds-navigation-item disabled>
            <a href="#" cds-layout="horizontal align:vertical-center gap:md">
              <cds-icon cds-layout="m-y:md" shape="cog" size="sm"></cds-icon>
              Service
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#" cds-layout="horizontal align:vertical-center gap:md">
              <cds-icon cds-layout="m-y:md" shape="file" size="sm"></cds-icon>
              Documentation
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-demo layout style="height: 100%; width:  100%;">
          <a href="#">Application content link</a>
        </cds-demo>
      </div>
    </div>
  `;
}

export function collapsibleVerticalNavigation() {
  const onExpandChange = {
    handleEvent(e: Event) {
      const navigation = e.target as CdsNavigation;
      navigation.expanded = !navigation.expanded;
      const customIcon = document.getElementById('custom-icon') as CdsIcon;
      navigation.expanded ? (customIcon.shape = 'eye-hide') : (customIcon.shape = 'eye');
    },
  };

  return html`
    <div cds-layout="horizontal gap:lg wrap:none">
      <cds-navigation expanded @expandedChange="${onExpandChange}">
        <cds-navigation-start></cds-navigation-start>
        <cds-navigation-item active>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="home" size="sm"></cds-icon>
            Home
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="applications" size="sm"></cds-icon>
            Account
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="user" size="sm"></cds-icon>
            People
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="help-info" size="sm"></cds-icon>
            Help
          </a>
        </cds-navigation-item>
        <cds-navigation-item disabled>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="cog" size="sm"></cds-icon>
            Service
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="file" size="sm"></cds-icon>
            Documentation
          </a>
        </cds-navigation-item>
      </cds-navigation>
      <cds-navigation expanded @expandedChange="${onExpandChange}">
        <cds-navigation-start>
          Navigation toggle
        </cds-navigation-start>
        <cds-navigation-item active>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="home" size="sm"></cds-icon>
            Home
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="applications" size="sm"></cds-icon>
            Account
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="user" size="sm"></cds-icon>
            People
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="help-info" size="sm"></cds-icon>
            Help
          </a>
        </cds-navigation-item>
        <cds-navigation-item disabled>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="cog" size="sm"></cds-icon>
            Service
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="file" size="sm"></cds-icon>
            Documentation
          </a>
        </cds-navigation-item>
      </cds-navigation>
      <cds-navigation expanded @expandedChange="${onExpandChange}">
        <cds-navigation-start>
          Custom toggle
          <cds-icon id="custom-icon" cds-navigation-start-icon shape="eye-hide"></cds-icon>
        </cds-navigation-start>
        <cds-navigation-item active>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="home" size="sm"></cds-icon>
            Home
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="applications" size="sm"></cds-icon>
            Account
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="user" size="sm"></cds-icon>
            People
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="help-info" size="sm"></cds-icon>
            Help
          </a>
        </cds-navigation-item>
        <cds-navigation-item disabled>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="cog" size="sm"></cds-icon>
            Service
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#" cds-layout="horizontal align:vertical-center gap:md">
            <cds-icon cds-layout="m-y:md" shape="file" size="sm"></cds-icon>
            Documentation
          </a>
        </cds-navigation-item>
      </cds-navigation>
    </div>
  `;
}

export function verticalBasicSubStart() {
  return html`
    <div style="height: 500px" cds-layout="vertical gap:md">
      <a href="#">
        <cds-icon shape="image" solid size="xl"></cds-icon>
        Application Inc.
      </a>
      <div cds-layout="horizontal wrap:none" style="height: 100%">
        <cds-navigation expanded cds-layout="">
          <div slot="cds-navigation-substart">
            <div>
              <p>Sub-start slot</p>
            </div>
            <cds-divider cds-layout="m-y:md"></cds-divider>
          </div>
          <cds-navigation-item>
            <a href="#">
              Home
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              Account
            </a>
          </cds-navigation-item>
          <cds-navigation-item active>
            <a href="#">
              People
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              Help
            </a>
          </cds-navigation-item>
          <cds-navigation-item disabled>
            <a href="#">
              Service
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              Documentation
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-demo layout style="height: 100%; width:  100%;">
          <a href="#">Application content link</a>
        </cds-demo>
      </div>
    </div>
  `;
}

export function verticalAlignBottom() {
  return html`
    <div style="height: 500px" cds-layout="vertical gap:md">
      <a href="#">
        <cds-icon shape="image" solid size="xl"></cds-icon>
        Application Inc.
      </a>
      <div cds-layout="horizontal wrap:none" style="height: 100%">
        <cds-navigation expanded cds-layout="">
          <cds-navigation-item active>
            <a href="#">
              Home
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              Account
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              People
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              Help
            </a>
          </cds-navigation-item>
          <cds-navigation-item disabled>
            <a href="#">
              Service
            </a>
          </cds-navigation-item>
          <cds-navigation-item cds-layout="align:bottom">
            <a href="#">
              Documentation
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-demo layout style="height: 100%; width:  100%;">
          <a href="#">Application content link</a>
        </cds-demo>
      </div>
    </div>
  `;
}

export function verticalEnd() {
  return html`
    <div style="height: 500px" cds-layout="vertical gap:md">
      <a href="#">
        <cds-icon shape="image" solid size="xl"></cds-icon>
        Application Inc.
      </a>
      <div cds-layout="horizontal wrap:none" style="height: 100%">
        <cds-navigation expanded cds-layout="">
          <cds-navigation-item active>
            <a href="#">
              Home
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              Account
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              People
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#">
              Help
            </a>
          </cds-navigation-item>
          <cds-navigation-item disabled>
            <a href="#">
              Service
            </a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-end">
            <a href="#">
              Documentation
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-demo layout style="height: 100%; width:  100%;">
          <a href="#">Application content link</a>
        </cds-demo>
      </div>
    </div>
  `;
}

export function navigationGroups() {
  const onExpandChange = {
    handleEvent(e: Event) {
      const navigation = e.target as CdsNavigation;
      navigation.expanded = !navigation.expanded;
    },
  };
  const onExpandGroupChange = {
    handleEvent(e: Event) {
      const group = e.target as CdsNavigationGroup;
      group.expanded = !group.expanded;
    },
  };
  const demo = html`
    <div style="height: 500px" cds-layout="vertical gap:md">
      <a href="#">
        <cds-icon shape="image" solid size="xl"></cds-icon>
        Application Inc.
      </a>
      <div cds-layout="horizontal wrap:none" style="height: 100%">
        <cds-navigation expanded @expandedChange="${onExpandChange}">
          <cds-navigation-start></cds-navigation-start>
          <cds-navigation-item active>
            <a href="#" cds-layout="horizontal align:vertical-center gap:md">
              <cds-icon cds-layout="m-y:md" shape="home" size="sm"></cds-icon>
              Home
            </a>
          </cds-navigation-item>
          <cds-navigation-group @expandedChange="${onExpandGroupChange}">
            <cds-navigation-start>
              <cds-icon cds-layout="m-y:md m-r:md" shape="applications" size="sm"></cds-icon>
              Account
            </cds-navigation-start>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="dashboard" size="sm"></cds-icon>
                Dashboard
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="line-chart" size="sm"></cds-icon>
                Analytics
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="dollar" size="sm"></cds-icon>
                Billing
              </a>
            </cds-navigation-item>
          </cds-navigation-group>
          <cds-navigation-group @expandedChange="${onExpandGroupChange}">
            <cds-navigation-start>
              <cds-icon cds-layout="m-y:md m-r:md" shape="user" size="sm"></cds-icon>
              People
            </cds-navigation-start>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="user" size="sm"></cds-icon>
                Matthew
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="user" size="sm"></cds-icon>
                Melissa
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="user" size="sm"></cds-icon>
                Harry
              </a>
            </cds-navigation-item>
            <cds-navigation-item>
              <a href="#">
                <cds-icon shape="user" size="sm"></cds-icon>
                Hermione
              </a>
            </cds-navigation-item>
          </cds-navigation-group>
          <cds-navigation-item>
            <a href="#" cds-layout="horizontal align:vertical-center gap:md">
              <cds-icon cds-layout="m-y:md" shape="help-info" size="sm"></cds-icon>
              Help
            </a>
          </cds-navigation-item>
          <cds-navigation-item>
            <a href="#" cds-layout="horizontal align:vertical-center gap:md">
              <cds-icon cds-layout="m-y:md" shape="file" size="sm"></cds-icon>
              Documentation
            </a>
          </cds-navigation-item>
          <cds-navigation-item slot="cds-navigation-end">
            <a href="#" cds-layout="horizontal align:vertical-center gap:md">
              <cds-icon cds-layout="m-y:md" shape="cog" size="sm"></cds-icon>
              Configuration
            </a>
          </cds-navigation-item>
        </cds-navigation>
        <cds-demo layout style="height: 100%; width:  100%;">
          <a href="#">Application content link</a>
        </cds-demo>
      </div>
    </div>
  `;
  return demo;
}

/** @website */
export function darkTheme() {
  return html`
    <div cds-theme="dark" style="height: 250px" cds-layout="horizontal gap:md align:vertical-stretch wrap:none">
      <cds-navigation expanded cds-layout="">
        <cds-navigation-item>
          <a href="#">
            Navigation One
          </a>
        </cds-navigation-item>
        <cds-navigation-item>
          <a href="#">
            Navigation Two
          </a>
        </cds-navigation-item>
        <cds-navigation-item active>
          <a href="#">
            Navigation Active
          </a>
        </cds-navigation-item>
        <cds-navigation-item selected>
          <a href="#">
            Navigation Selected
          </a>
        </cds-navigation-item>
        <cds-navigation-item disabled>
          <a href="#">
            Navigation Disabled
          </a>
        </cds-navigation-item>
        <cds-divider></cds-divider>
        <cds-navigation-item>
          <a href="#">
            Navigation Six
          </a>
        </cds-navigation-item>
      </cds-navigation>
      <cds-demo layout style="height: 100%; width:  100%;">
        <a href="#">I'm tabbable content</a>
      </cds-demo>
    </div>
  `;
}
