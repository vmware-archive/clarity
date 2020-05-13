/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Experimental/Typography/Stories',
  decorators: [withDesign],
  parameters: {
    options: { showPanel: true },
    a11y: { disable: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A2677',
    },
  },
};

export const headings = () => {
  return html`
    <cds-demo cds-layout="vertical gap:lg">
      <p cds-text="display">The five boxing wizards jump quickly (display)</p>
      <p cds-text="heading">The five boxing wizards jump quickly (heading)</p>
      <p cds-text="title">The five boxing wizards jump quickly (title)</p>
      <p cds-text="section">The five boxing wizards jump quickly (section)</p>
      <p cds-text="subsection">The five boxing wizards jump quickly (subsection)</p>
    </cds-demo>
  `;
};

export const content = () => {
  return html`
    <cds-demo cds-layout="vertical gap:lg">
      <p cds-text="body">The quick brown fox jumps over the lazy dog. (body)</p>
      <p cds-text="message">The quick brown fox jumps over the lazy dog. (message)</p>
      <p cds-text="secondary">The quick brown fox jumps over the lazy dog. (secondary)</p>
      <p cds-text="caption">The quick brown fox jumps over the lazy dog. (caption)</p>
      <p cds-text="smallcaption">The quick brown fox jumps over the lazy dog. (smallcaption)</p>
    </cds-demo>
  `;
};

export const links = () => {
  return html`
    <p cds-text="body">The <a href="#" cds-text="link">quick brown fox</a> jumps over the lazy dog. (link)</p>
  `;
};

export const code = () => {
  return html`
    <p cds-text="body">The <code cds-text="code">quick brown fox</code> jumps over the lazy dog. (code)</p>
  `;
};

export const weights = () => {
  return html`
    <cds-demo cds-layout="vertical gap:lg">
      <p cds-text="body light">The <em>200</em> quick brown foxes <em>lightly</em> jump over the lazy dog. (light)</p>
      <p cds-text="body regular">
        The <em>400</em> quick brown foxes <em>regularly</em> jump over the lazy dog. (regular)
      </p>
      <p cds-text="body medium">
        The <em>500</em> quick brown foxes <em>mediumly</em> jump over the lazy dog. (medium)
      </p>
      <p cds-text="body semibold">
        The <em>500</em> quick brown foxes <em>semi-boldly</em> jump over the lazy dog. (semibold)
      </p>
      <p cds-text="body bold">The <em>600</em> quick brown foxes <em>boldly</em> jump over the lazy dog. (bold)</p>
      <p cds-text="body extrabold">
        The <em>600</em> quick brown foxes <em>extra-boldly</em> jump over the lazy dog. (extrabold)
      </p>
    </cds-demo>
  `;
};

export const inline = () => {
  return html`
    <cds-demo>
      <span cds-text="display inline">We</span>
      <span cds-text="body inline"> should </span>
      <span cds-text="title inline"> all </span>
      <span cds-text="caption inline"> be </span>
      <span cds-text="section inline"> inline!</span>
    </cds-demo>
  `;
};

export const position = () => {
  return html`
    <cds-demo cds-layout="vertical gap:lg">
      <p cds-text="body left">Text Left (left)</p>
      <p cds-text="body right">Text Right (right)</p>
      <p cds-text="body center">Text Center (center)</p>
      <p cds-text="body justify" style="width: 200px; background: lightgreen">
        Text Justify: (justify) – The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy
        dog.
      </p>
    </cds-demo>
  `;
};

export const transforms = () => {
  return html`
    <cds-demo cds-layout="vertical gap:lg">
      <p cds-text="body capitalize">text title case (capitalize)</p>
      <p cds-text="body uppercase">Text uppercase (uppercase)</p>
      <p cds-text="body lowercase">Text lowercase (lowercase)</p>
      <p cds-text="body truncate">Text Truncation (truncate): The quick brown fox jumps over the lazy dog.</p>
    </cds-demo>
  `;
};

export const legacyHeaders = () => {
  return html`
    <cds-demo cds-layout="vertical gap:lg">
      <p cds-text="h0">The five boxing wizards jump quickly (h0)</p>
      <p cds-text="h1">The five boxing wizards jump quickly (h1)</p>
      <p cds-text="h2">The five boxing wizards jump quickly (h2)</p>
      <p cds-text="h3">The five boxing wizards jump quickly (h3)</p>
      <p cds-text="h4">The five boxing wizards jump quickly (h4)</p>
      <p cds-text="h5">The five boxing wizards jump quickly (h5)</p>
      <p cds-text="h6">The five boxing wizards jump quickly (h6)</p>
    </cds-demo>
  `;
};

export const legacyParagraphs = () => {
  return html`
    <cds-demo cds-layout="vertical gap:lg">
      <p cds-text="p0">The quick brown fox jumps over the lazy dog. (p0)</p>
      <p cds-text="p1">The quick brown fox jumps over the lazy dog. (p1)</p>
      <p cds-text="p2">The quick brown fox jumps over the lazy dog. (p2)</p>
      <p cds-text="p3">The quick brown fox jumps over the lazy dog. (p3)</p>
      <p cds-text="p4">The quick brown fox jumps over the lazy dog. (p4)</p>
      <p cds-text="p5">The quick brown fox jumps over the lazy dog. (p5)</p>
      <p cds-text="p6">The quick brown fox jumps over the lazy dog. (p6)</p>
      <p cds-text="p7">The quick brown fox jumps over the lazy dog. (p7)</p>
      <p cds-text="p8">The quick brown fox jumps over the lazy dog. (p8)</p>
    </cds-demo>
  `;
};

export const disableLineHightRemover = () => {
  return html`
    <style>
      cds-card[show-padding] {
        box-shadow: inset 0 0 0 1rem hsl(93, 52%, 88%);
      }
    </style>
    <cds-demo cds-layout="vertical gap:lg">
      <cds-card show-padding>
        <p cds-text="body disable-lhe">The quick brown fox jumps over the lazy dog. (body)</p>
        <p cds-text="message disable-lhe">The quick brown fox jumps over the lazy dog. (message)</p>
        <p cds-text="secondary disable-lhe">The quick brown fox jumps over the lazy dog. (secondary)</p>
        <p cds-text="caption disable-lhe">The quick brown fox jumps over the lazy dog. (caption)</p>
        <p cds-text="smallcaption disable-lhe">The quick brown fox jumps over the lazy dog. (smallcaption)</p>
      </cds-card>

      <cds-card show-padding>
        <p cds-text="body">The quick brown fox jumps over the lazy dog. (body)</p>
        <p cds-text="message">The quick brown fox jumps over the lazy dog. (message)</p>
        <p cds-text="secondary">The quick brown fox jumps over the lazy dog. (secondary)</p>
        <p cds-text="caption">The quick brown fox jumps over the lazy dog. (caption)</p>
        <p cds-text="smallcaption">The quick brown fox jumps over the lazy dog. (smallcaption)</p>
      </cds-card>

      <cds-card show-padding>
        <p cds-text="display disable-lhe">The five boxing wizards jump quickly (display)</p>
        <p cds-text="heading disable-lhe">The five boxing wizards jump quickly (heading)</p>
        <p cds-text="title disable-lhe">The five boxing wizards jump quickly (title)</p>
        <p cds-text="section disable-lhe">The five boxing wizards jump quickly (section)</p>
        <p cds-text="subsection disable-lhe">The five boxing wizards jump quickly (subsection)</p>
      </cds-card>

      <cds-card show-padding>
        <p cds-text="display">The five boxing wizards jump quickly (display)</p>
        <p cds-text="heading">The five boxing wizards jump quickly (heading)</p>
        <p cds-text="title">The five boxing wizards jump quickly (title)</p>
        <p cds-text="section">The five boxing wizards jump quickly (section)</p>
        <p cds-text="subsection">The five boxing wizards jump quickly (subsection)</p>
      </cds-card>
    </cds-demo>
  `;
};
