/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { propertiesGroup } from '@cds/core/internal';
import { select } from '@storybook/addon-knobs';
import { html } from 'lit-html';

export default {
  title: 'Stories/List',
  parameters: {
    options: { showPanel: true },
    a11y: { disable: true },
  },
};

const unorderedListOptions = {
  'none (default disc)': '',
  disc: 'disc',
  circle: 'circle',
  square: 'square',
};

const orderedListOptions = {
  'none (default decimal)': '',
  decimal: 'decimal',
  'decimal-leading-zero': 'decimal-leading-zero',
  'lower-alpha': 'lower-alpha',
  'lower-latin': 'lower-latin',
  'lower-roman': 'lower-roman',
  'upper-alpha': 'upper-alpha',
  'upper-latin': 'upper-latin',
  'upper-roman': 'upper-roman',
};

export const API = () => {
  const orderedListStyle = select('Ordered List Style', orderedListOptions, '', propertiesGroup);

  const orderedListChildStyle = select('Ordered List Style (Child)', orderedListOptions, '', propertiesGroup);

  const unorderedListStyle = select('Unordered List Style', unorderedListOptions, '', propertiesGroup);

  const unorderedListChildStyle = select('Unordered List Style (Child)', unorderedListOptions, '', propertiesGroup);

  return html`
    <div cds-layout="vertical gap:md">
      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Unstyled List</h2>
          <ul cds-list="unstyled">
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
          </ul>
        </div>
      </cds-card>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Ordered List</h2>
          <ol cds-list=${orderedListStyle}>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
          </ol>
        </div>
      </cds-card>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Unordered List</h2>
          <ul cds-list=${unorderedListStyle}>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
            <li>The five boxing wizards jump quickly</li>
          </ul>
        </div>
      </cds-card>

      <h2 cds-text="title">Mixed and Nested Lists</h2>

      <p cds-text="p1">
        Lists can be nested and the varieties can be mixed within nested groupings.
      </p>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Nested Ordered Lists</h2>
          <ol cds-list=${orderedListStyle}>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>
              The quick brown fox jumps over the lazy dog
              <ol cds-list=${orderedListChildStyle}>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
              </ol>
            </li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ol>
        </div>
      </cds-card>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Nested Ordered + Unstyled Lists</h2>
          <ol cds-list=${orderedListStyle}>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>
              The quick brown fox jumps over the lazy dog
              <ul cds-list="unstyled">
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
              </ul>
            </li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ol>
        </div>
      </cds-card>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Nested Ordered + Unordered Lists</h2>
          <ol cds-list=${orderedListStyle}>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>
              The quick brown fox jumps over the lazy dog
              <ul cds-list=${unorderedListChildStyle}>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
              </ul>
            </li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ol>
        </div>
      </cds-card>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Nested Unordered Lists</h2>
          <ul cds-list=${unorderedListStyle}>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>
              The quick brown fox jumps over the lazy dog
              <ul cds-list=${unorderedListChildStyle}>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
              </ul>
            </li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ul>
        </div>
      </cds-card>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Nested Unordered + Ordered Lists</h2>
          <ul cds-list=${unorderedListStyle}>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>
              The quick brown fox jumps over the lazy dog
              <ol cds-list=${orderedListChildStyle}>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
              </ol>
            </li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ul>
        </div>
      </cds-card>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Nested Unordered + Unstyled Lists</h2>
          <ul cds-list=${unorderedListStyle}>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>
              The quick brown fox jumps over the lazy dog
              <ul cds-list="unstyled">
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
              </ul>
            </li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ul>
        </div>
      </cds-card>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Nested Unstyled Lists</h2>
          <ul cds-list="unstyled">
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>
              The quick brown fox jumps over the lazy dog
              <ul cds-list="unstyled">
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
              </ul>
            </li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ul>
        </div>
      </cds-card>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Nested Unstyled + Ordered Lists</h2>
          <ul cds-list="unstyled">
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>
              The quick brown fox jumps over the lazy dog
              <ol cds-list=${orderedListChildStyle}>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
              </ol>
            </li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ul>
        </div>
      </cds-card>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Nested Unstyled + Unordered Lists</h2>
          <ul cds-list="unstyled">
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>
              The quick brown fox jumps over the lazy dog
              <ul cds-list=${unorderedListChildStyle}>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
                <li>The five boxing wizards jump quickly</li>
              </ul>
            </li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ul>
        </div>
      </cds-card>

      <cds-card>
        <div cds-layout="vertical gap:sm">
          <h2 cds-text="title">Custom/Regional Ordered Lists</h2>
          <ol cds-list class="mongolian">
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ol>
        </div>
      </cds-card>

      <style>
        ol.mongolian {
          list-style-type: 'mongolian';
        }
      </style>

      <cds-card>
        <div cds-layout="vertical gap:md">
          <h2 cds-text="title">Lists + Layouts</h2>
          <h3 cds-text="section">Vertical</h3>
          <ul cds-list cds-layout="vertical gap:md">
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ul>
          <h3 cds-text="section">Horizontal</h3>
          <ol cds-list="upper-roman" cds-layout="horizontal gap:sm">
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
            <li>The quick brown fox jumps over the lazy dog</li>
          </ol>
        </div>
      </cds-card>

      <style>
        ol.mongolian {
          list-style-type: mongolian;
        }
      </style>
    </div>
  `;
};

export const orderedList = () => {
  return html`
    <ol cds-list>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
    </ol>
  `;
};

export const unorderedList = () => {
  return html`
    <ul cds-list>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
    </ul>
  `;
};

export const unstyledList = () => {
  return html`
    <ol cds-list="unstyled">
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
    </ol>

    <br />

    <ul cds-list="unstyled">
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
    </ul>
  `;
};

export const nestedList = () => {
  return html`
    <ol cds-list>
      <li>The quick brown fox jumps over the lazy dog</li>
      <li>The quick brown fox jumps over the lazy dog</li>
      <li>The quick brown fox jumps over the lazy dog</li>
      <li>The quick brown fox jumps over the lazy dog</li>
      <li>
        The quick brown fox jumps over the lazy dog
        <ul cds-list>
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
          <li>The five boxing wizards jump quickly</li>
        </ul>
      </li>
      <li>The quick brown fox jumps over the lazy dog</li>
      <li>The quick brown fox jumps over the lazy dog</li>
    </ol>
  `;
};

export const customSpaceList = () => {
  return html`
    <ol cds-list cds-layout="vertical gap:md">
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
      <li>The five boxing wizards jump quickly</li>
    </ol>
  `;
};

export const darkTheme = () => {
  return html`
    <div cds-layout="vertical gap:md" cds-theme="dark">
      <ol cds-list>
        <li>The five boxing wizards jump quickly</li>
        <li>The five boxing wizards jump quickly</li>
        <li>The five boxing wizards jump quickly</li>
        <li>The five boxing wizards jump quickly</li>
      </ol>

      <ul cds-list>
        <li>The five boxing wizards jump quickly</li>
        <li>The five boxing wizards jump quickly</li>
        <li>The five boxing wizards jump quickly</li>
        <li>The five boxing wizards jump quickly</li>
      </ul>
    </div>
  `;
};
