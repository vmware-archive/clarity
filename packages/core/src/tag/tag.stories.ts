/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/icon/register.js';
import '@cds/core/tag/register.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { infoStandardIcon } from '@cds/core/icon/shapes/info-standard.js';
import { userIcon } from '@cds/core/icon/shapes/user.js';
import { spreadProps, getElementStorybookArgs } from '@cds/core/internal';

import { html } from 'lit';

ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(infoStandardIcon);

export default {
  title: 'Stories/Tag',
  component: 'cds-tag',
  argTypes: {
    badgeValue: { control: { type: 'number' }, defaultValue: 0 },
  },
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A673',
    },
  },
};

export function API(args: any) {
  return html`
    <cds-tag ...="${spreadProps(getElementStorybookArgs(args))}" @click=${() => console.log('click')}>
      ${args.default}${args.badgeValue !== 0
        ? html`<cds-badge aria-label="notification ${args.badgeValue}">${args.badgeValue}</cds-badge>`
        : ''}
    </cds-tag>
  `;
}

/** @website */
export function status() {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-tag readonly status="info">Info</cds-tag>
      <cds-tag readonly status="success">Success</cds-tag>
      <cds-tag readonly status="warning">Warning</cds-tag>
      <cds-tag readonly status="danger">Danger</cds-tag>
    </div>
  `;
}

/** @website */
export function color() {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-tag readonly color="gray">Default</cds-tag>
      <cds-tag readonly color="purple">Purple</cds-tag>
      <cds-tag readonly color="blue">Blue</cds-tag>
      <cds-tag readonly color="orange">Orange</cds-tag>
      <cds-tag readonly color="light-blue">Light Blue</cds-tag>
    </div>
  `;
}

/** @website */
export function badgesStatus() {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-tag readonly status="info">Info <cds-badge aria-label="notification 1" status="info">1</cds-badge></cds-tag>
      <cds-tag readonly status="success"
        >Success <cds-badge aria-label="notification 2" status="success">2</cds-badge></cds-tag
      >
      <cds-tag readonly status="warning"
        >Warning <cds-badge aria-label="notification 3" status="warning">3</cds-badge>
      </cds-tag>
      <cds-tag readonly status="danger"
        >Danger <cds-badge aria-label="notification 12" status="danger">12</cds-badge></cds-tag
      >
    </div>
  `;
}

/** @website */
export function badgesColor() {
  return html`
    <cds-tag readonly>No Badge</cds-tag>
    <cds-tag readonly color="gray">Default <cds-badge aria-label="notification 1">1</cds-badge></cds-tag>
    <cds-tag readonly color="purple">Purple <cds-badge aria-label="notification 2">2</cds-badge></cds-tag>
    <cds-tag readonly color="blue">Blue <cds-badge aria-label="notification 3">3</cds-badge></cds-tag>
    <cds-tag readonly color="orange">Orange <cds-badge aria-label="notification 12">12</cds-badge></cds-tag>
    <cds-tag readonly color="light-blue">Light Blue <cds-badge aria-label="notification 15">15</cds-badge></cds-tag>
  `;
}

/** @website */
export function clickable() {
  return html`
    <div cds-layout="vertical gap:md">
      <div cds-layout="horizontal gap:sm">
        <cds-tag closable>Closable</cds-tag>
        <cds-tag status="info" disabled>Disabled</cds-tag>
        <cds-tag>Default</cds-tag>
        <cds-tag status="info">Info</cds-tag>
        <cds-tag status="success">Success</cds-tag>
        <cds-tag status="warning">Warning</cds-tag>
        <cds-tag status="danger">Danger</cds-tag>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-tag status="info" disabled>Disabled <cds-badge aria-label="notification 0">0</cds-badge></cds-tag>
        <cds-tag>Default <cds-badge aria-label="notification 0">0</cds-badge></cds-tag>
        <cds-tag status="info">Info <cds-badge aria-label="notification 1" status="info">1</cds-badge></cds-tag>
        <cds-tag status="success"
          >Success <cds-badge aria-label="notification 2" status="success">2</cds-badge></cds-tag
        >
        <cds-tag status="warning"
          >Warning <cds-badge aria-label="notification 3" status="warning">3</cds-badge></cds-tag
        >
        <cds-tag status="danger">Danger <cds-badge aria-label="notification 12" status="danger">12</cds-badge></cds-tag>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-tag status="info" disabled
          ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Disabled</cds-tag
        >
        <cds-tag><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Default</cds-tag>
        <cds-tag status="info"><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Info</cds-tag>
        <cds-tag status="success"><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Success</cds-tag>
        <cds-tag status="warning"><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Warning</cds-tag>
        <cds-tag status="danger"><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Danger</cds-tag>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-tag status="info" disabled
          ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Disabled
          <cds-badge aria-label="notification 0">0</cds-badge></cds-tag
        >
        <cds-tag
          ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Default
          <cds-badge aria-label="notification 0">0</cds-badge></cds-tag
        >
        <cds-tag status="info"
          ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Info
          <cds-badge aria-label="notification 1" status="info">1</cds-badge></cds-tag
        >
        <cds-tag status="success"
          ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Success
          <cds-badge aria-label="notification 2" status="success">2</cds-badge></cds-tag
        >
        <cds-tag status="warning"
          ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Warning
          <cds-badge aria-label="notification 3" status="warning">3</cds-badge></cds-tag
        >
        <cds-tag status="danger"
          ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Danger
          <cds-badge aria-label="notification 12" status="danger">12</cds-badge></cds-tag
        >
      </div>
      <br />
      <div cds-layout="horizontal gap:sm">
        <cds-tag color="purple">Purple</cds-tag>
        <cds-tag color="blue">Blue</cds-tag>
        <cds-tag color="orange">Orange</cds-tag>
        <cds-tag color="light-blue">Light Blue</cds-tag>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-tag color="purple">Purple <cds-badge aria-label="notification B">B</cds-badge></cds-tag>
        <cds-tag color="blue">Blue <cds-badge aria-label="notification C">C</cds-badge></cds-tag>
        <cds-tag color="orange">Orange <cds-badge aria-label="notification D">D</cds-badge></cds-tag>
        <cds-tag color="light-blue">Light Blue <cds-badge aria-label="notification E">E</cds-badge></cds-tag>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-tag color="purple"><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Purple</cds-tag>
        <cds-tag color="blue"><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Blue</cds-tag>
        <cds-tag color="orange"><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Orange</cds-tag>
        <cds-tag color="light-blue"
          ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Light Blue</cds-tag
        >
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-tag color="purple">
          <cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Purple
          <cds-badge aria-label="notification 1">1</cds-badge>
        </cds-tag>
        <cds-tag color="blue">
          <cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Blue
          <cds-badge aria-label="notification 1">1</cds-badge>
        </cds-tag>
        <cds-tag color="orange">
          <cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Orange
          <cds-badge aria-label="notification 1">1</cds-badge>
        </cds-tag>
        <cds-tag color="light-blue">
          <cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Light Blue
          <cds-badge aria-label="notification 1">1</cds-badge>
        </cds-tag>
      </div>
    </div>
  `;
}

/** @website */
export function links() {
  return html`
    <div cds-layout="horizontal gap:sm p-b:lg">
      <a href="javascript:void(0)">
        <cds-tag status="info">link</cds-tag>
      </a>

      <a href="javascript:void(0)">
        <cds-tag status="success">link <cds-badge aria-label="notification 1" status="info">1</cds-badge></cds-tag>
      </a>

      <a href="javascript:void(0)">
        <cds-tag status="warning"
          ><cds-icon shape="user" role="img" alt="user"></cds-icon> link
          <cds-badge aria-label="notification 1" status="info">1</cds-badge></cds-tag
        >
      </a>

      <a href="javascript:void(0)">
        <cds-tag status="danger">link</cds-tag>
      </a>
    </div>

    <a href="javascript:void(0)" cds-layout="horizontal gap:sm align:vertical-center">
      <span cds-text="link">example with text</span>
      <cds-tag>link</cds-tag>
    </a>
  `;
}

/** @website */
export function closable() {
  return html`
    <div>
      <cds-tag color="gray" closable>Default</cds-tag>
      <cds-tag color="purple" closable>Purple</cds-tag>
      <cds-tag color="blue" closable>Blue</cds-tag>
      <cds-tag color="orange" closable>Orange</cds-tag>
      <cds-tag color="light-blue" closable>Light Blue</cds-tag>
    </div>
    <div>
      <cds-tag color="gray" closable><cds-icon shape="user" role="img" alt="user"></cds-icon>Default</cds-tag>
      <cds-tag color="blue" closable><cds-icon shape="user" role="img" alt="user"></cds-icon>Blue</cds-tag>
      <cds-tag color="orange" closable><cds-icon shape="user" role="img" alt="user"></cds-icon>Orange</cds-tag>
    </div>
  `;
}

/** @website */
export function tagsAndIcons() {
  const solidIcon = false; // boolean('solid icons', false, propertiesGroup);

  return html`
    <div cds-layout="vertical gap:sm">
      <div cds-layout="horizontal gap:xs">
        <cds-tag readonly>No Icon</cds-tag>
        <cds-tag readonly><cds-icon shape="user" role="img" alt="user"></cds-icon>No Badge</cds-tag>
        <cds-tag readonly color="gray"
          ><cds-icon shape="user" role="img" alt="user" ?solid=${solidIcon}></cds-icon>Default
          <cds-badge aria-label="notification 1">1</cds-badge></cds-tag
        >
        <cds-tag readonly color="purple"
          ><cds-icon shape="user" role="img" alt="user" ?solid=${solidIcon}></cds-icon>Purple
          <cds-badge aria-label="notification 2">2</cds-badge></cds-tag
        >
        <cds-tag readonly color="blue"
          ><cds-icon shape="user" role="img" alt="user" ?solid=${solidIcon}></cds-icon>Blue
          <cds-badge aria-label="notification 3">3</cds-badge></cds-tag
        >
        <cds-tag readonly color="orange"
          ><cds-icon shape="user" role="img" alt="user" ?solid=${solidIcon}></cds-icon>Orange
          <cds-badge aria-label="notification 12">12</cds-badge></cds-tag
        >
        <cds-tag readonly color="light-blue"
          ><cds-icon shape="user" role="img" alt="user" ?solid=${solidIcon}></cds-icon>Light Blue
          <cds-badge aria-label="notification 15">15</cds-badge></cds-tag
        >
      </div>
      <div cds-layout="horizontal gap:xs">
        <cds-tag readonly status="info">No Icon</cds-tag>
        <cds-tag readonly status="info"
          ><cds-icon shape="info-standard" role="img" alt="info" ?solid=${solidIcon}></cds-icon>No Badge</cds-tag
        >
        <cds-tag readonly status="info"
          ><cds-icon shape="info-standard" role="img" alt="info" ?solid=${solidIcon}></cds-icon>Info<cds-badge
            aria-label="notification 1"
            status="info"
            >1</cds-badge
          ></cds-tag
        >
        <cds-tag readonly status="success"
          ><cds-icon shape="info-standard" role="img" alt="info" ?solid=${solidIcon}></cds-icon>Success<cds-badge
            aria-label="notification 2"
            status="success"
            >2</cds-badge
          ></cds-tag
        >
        <cds-tag readonly status="warning"
          ><cds-icon shape="info-standard" role="img" alt="info" ?solid=${solidIcon}></cds-icon>Warning<cds-badge
            aria-label="notification 3"
            status="warning"
            >3</cds-badge
          ></cds-tag
        >
        <cds-tag readonly status="danger"
          ><cds-icon shape="info-standard" role="img" alt="info" ?solid=${solidIcon}></cds-icon>Danger<cds-badge
            aria-label="notification 12"
            status="danger"
            >12</cds-badge
          ></cds-tag
        >
      </div>
    </div>
  `;
}

export function darkTheme() {
  return html`
    <div cds-layout="horizontal gap:sm" cds-theme="dark">
      <cds-tag status="info"
        ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Info
        <cds-badge aria-label="notification 10" status="info">10</cds-badge></cds-tag
      >
      <cds-tag status="success"
        ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Success
        <cds-badge aria-label="notification 20" status="success">20</cds-badge></cds-tag
      >
      <cds-tag status="warning"
        ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Warning
        <cds-badge aria-label="notification 30" status="warning">30</cds-badge></cds-tag
      >
      <cds-tag status="danger"
        ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Danger
        <cds-badge aria-label="notification 40" status="danger">40</cds-badge></cds-tag
      >
      <cds-tag
        ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Default
        <cds-badge aria-label="notification 50">50</cds-badge></cds-tag
      >
      <cds-tag disabled
        ><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Disabled
        <cds-badge aria-label="notification 60">60</cds-badge></cds-tag
      >
      <cds-tag closable><cds-icon shape="info-standard" role="img" alt="info"></cds-icon>Closable</cds-tag>
    </div>
  `;
}
