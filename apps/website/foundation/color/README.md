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

**STATUS STYLE DEMO FROM STORYBOOK**

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

## GLobal Palette

### Basic Colors

The complete palette is comprised of 13 saturated colors, 5 muted colors, a set of cool grays for construction of containers and type, and black and white. Each is described by its hue and a common name which is then extended through a set of 11 values each. This set of 200 colors is defined by Clarity at the system level, meaning that when you refre to them in your application you can assumre consistency and trouble free upgrades.

<DocColorList :colors="['magenta', 'pink', 'violet', 'lavender', 'azure', 'blue', 'aqua', 'jade', 'green', 'lime', 'yellow', 'ochre', 'tangerine', 'red']" />

### Muted Colors

<DocColorList :colors="['warm-gray', 'cool-gray', 'slate', 'ice', 'tan']" />

### Utility Colors

<DocColorList :colors="['construction', 'black']" />

<!--
The Clarity color palette is aligned with color use in web applications and support for accessibility. The colors below constitute the expanded color palette for Clarity. Text colors displayed in light or dark tints represent Clarity's recommended accessible pairing with the color.

### Base, Primary and Secondary Colors

The bulleted color swatches indicate colors that are part of the Clarity base color palette. You will find these colors in use throughout Clarity's components and design recommendations.

The large color swatches represent Clarity primary colors, recommended for use as the main color for your design. The remaining colors are considered secondary. They may be used for charts, graphs, illustrations and other areas that call for color accent.

<ClrColorsPalette></ClrColorsPalette>

## Functional Colors

Clarity components use a set of colors to convey certain functions and meanings. These colors have been vetted and tested to meet the accessibility standard for low vision.

### Light Theme Functional Colors

<ClrColorsFunctional></ClrColorsFunctional>

### Dark Theme Functional Colors

<ClrColorsFunctional colorMode="dark"></ClrColorsFunctional>

## Color Usage

### Base Colors

Colors used in Clarity's components and design recommendations.

- Neutral colors are for text and backgrounds.
- Action colors are for clickable items, such as buttons and links. Action Blue is reserved for buttons and links.
- Stoplight colors are for indicating error conditions, warnings, and successes. Significant colors include: Stoplight Green for positive actions; Stoplight Red for warnings and errors.

### Choosing Colors

#### Text Contrast

Each color swatch in the palette is labeled with a black or white letter A to indicate its accessibility on the background color. Other text colors should be tested for contrast using an online contrast checker to make sure it passes the WCAG AA requirement for accessibility.

#### Charting Colors

The large secondary palette allows for distinguishable markers in charts and graphs. With charts, it’s important to choose colors that have clear contrast for easy readability. The more colors that are used, the harder it is to distinguish each marker. For this reason, we recommend a maximum of six colors per chart.

#### Colorblind Accessibility

It’s a good idea to test the color scheme you plan to use with a colorblind simulation app, such as Color Oracle. Alternatively, Adobe Photoshop and Illustrator come with a colorblind proofing view. You can use the simulation to adjust your color combinations to be accessible. In the example below, the image on right simulates how a person with colorblindness (Deuteranopia) would see the image on the left. -->
