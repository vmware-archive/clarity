---
title: Usage
toc: true
---

The Clarity color system is based on a set of global colors that support Clarity’s default light and dark themes, charts, and may be used as spot color in your application, or to design your own custom theme. Clarity prefers HSL color definitions. Hex equivalents are provided for users who may need these values.

## Usage

Clarity uses a functional naming system to tie colors to their purpose. For example, info blue is **HSL: (198, 100%, 34%)** which is also referred to as `--cds-global-color-blue-700` and when used as the default info color by its alias --cds-alias-status-info. The system extends the status colors with a TINT and SHADE since these components often require more than one color to enable interactive changes and multicolor designs. A similar system is used for interaction styles for all non-status components. Typography also follows these conventions.

By using this system throughout your application, especially in cases where you design custom components, you can ensure consistency with the library while remaining accessible and themable. Doing so ensures future changes in Clarity will be automatically applied to your application. This greatly reduces the effort required to stay current with the latest version of Clarity.

We provide a detailed specification both here and in storybook, and suggest becoming familiar with the way it works in order to avail yourself of the benefits.

## Color System

### Status

Status is a method of visually coding a component to align with its intent or importance. Status colors are often referred to as stoplight or traffic light colors.

Clarity provides the following status types: Info, Success, Warning, and Danger. These are colors pulled from the Blue, Green, Ochre, and Red sets in the Clarity core globals

Status colors selected from the global palette when mapped to specific functions and meanings allowing their usage consistently throughout your application.

Each status color normally has 3 values. This provides a consistent primary color and accounts for that color shifts needed for dynamic states, and allows for a visual accent when a component needs more than a single shade. Warning has a 4th shade called DARK to account for accessibility needs particular to yellows.

Status also includes a neutral sate as well as disabled and an alt.

<DocColorStatusDemo />

## Interaction

Interaction styles define the look and feel of interactive elements within Clarity.

<DocColorInteractionDemo />

## Type

Headings are slightly lighter to balance their size and weight, copy is darker. Labels use full black for prominenence. Secondary and tertiary colors are for type that is less important such as helper and hint text. All type classes have default colors based on this guidance, but these may be over-ridden to suit the needs of your application.

<DocColorTypeDemo />

## Global Palette

### Basic Colors

The complete palette is comprised of 13 saturated colors, 5 muted colors, a set of cool grays for construction of containers and type, and black and white. Each is described by its hue and a common name which is then extended through a set of 11 values each. This set of 200 colors is defined by Clarity at the system level, meaning that when you refre to them in your application you can assumre consistency and trouble free upgrades.

<DocColorList :colors="['magenta', 'pink', 'violet', 'lavender', 'azure', 'blue', 'aqua', 'jade', 'green', 'lime', 'yellow', 'ochre', 'tangerine', 'red']" />

### Muted & Utility Colors

<DocColorList :colors="['warm-gray', 'cool-gray', 'slate', 'ice', 'tan', 'construction', 'black']" />
