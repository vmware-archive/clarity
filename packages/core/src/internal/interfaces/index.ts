/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// SIZES
export type BasicTShirtSizes = 'sm' | 'md' | 'lg' | 'xl';

type ExtraTShirtSizes = 'xs' | 'xxl';

export type TShirtSizes = BasicTShirtSizes | ExtraTShirtSizes;

// STATUSES
export type StoplightStatusTypes = 'success' | 'warning' | 'danger';

export type StatusTypes = 'default' | 'info' | StoplightStatusTypes;

// MISC
export type AriaLivePolitenessSettings = 'off' | 'polite' | 'assertive';

export type Directions = 'up' | 'down' | 'left' | 'right';

export type Orientations = 'horizontal' | 'vertical';

// A11y

export type AriaRoles =
  | 'alert'
  | 'alertdialog'
  | 'button'
  | 'checkbox'
  | 'dialog'
  | 'gridcell'
  | 'link'
  | 'log'
  | 'marquee'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'option'
  | 'progressbar'
  | 'radio'
  | 'scrollbar'
  | 'searchbox'
  | 'slider'
  | 'spinbutton'
  | 'status'
  | 'switch'
  | 'tab'
  | 'tabpanel'
  | 'textbox'
  | 'timer'
  | 'tooltip'
  | 'treeitem'
  | 'combobox'
  | 'grid'
  | 'listbox'
  | 'menu'
  | 'menubar'
  | 'radiogroup'
  | 'tablist'
  | 'tree'
  | 'treegrid'
  | 'application'
  | 'article'
  | 'cell'
  | 'columnheader'
  | 'definition'
  | 'directory'
  | 'document'
  | 'feed'
  | 'figure'
  | 'group'
  | 'heading'
  | 'img'
  | 'list'
  | 'listitem'
  | 'math'
  | 'none'
  | 'note'
  | 'presentation'
  | 'region'
  | 'row'
  | 'rowgroup'
  | 'rowheader'
  | 'separator'
  | 'table'
  | 'term'
  | 'text'
  | 'toolbar'
  | 'banner'
  | 'complementary'
  | 'contentinfo'
  | 'form'
  | 'main'
  | 'navigation'
  | 'region'
  | 'search'
  | 'doc-abstract'
  | 'doc-acknowledgments'
  | 'doc-afterword'
  | 'doc-appendix'
  | 'doc-backlink'
  | 'doc-biblioentry'
  | 'doc-bibliography'
  | 'doc-biblioref'
  | 'doc-chapter'
  | 'doc-colophon'
  | 'doc-conclusion'
  | 'doc-cover'
  | 'doc-credit'
  | 'doc-credits'
  | 'doc-dedication'
  | 'doc-endnote'
  | 'doc-endnotes'
  | 'doc-epigraph'
  | 'doc-epilogue'
  | 'doc-errata'
  | 'doc-example'
  | 'doc-footnote'
  | 'doc-foreword'
  | 'doc-glossary'
  | 'doc-glossref'
  | 'doc-index'
  | 'doc-introduction'
  | 'doc-noteref'
  | 'doc-notice'
  | 'doc-pagebreak'
  | 'doc-pagelist'
  | 'doc-part'
  | 'doc-preface'
  | 'doc-prologue'
  | 'doc-pullquote'
  | 'doc-qna'
  | 'doc-subtitle'
  | 'doc-tip'
  | 'doc-toc';
