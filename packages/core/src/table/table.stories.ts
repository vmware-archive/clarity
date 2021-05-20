/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// import { propertiesGroup } from '@cds/core/internal';
// import { select, boolean } from '@storybook/addon-knobs';
import { html } from 'lit';

export default {
  title: 'Stories/Table',
  parameters: {
    options: { showPanel: true },
    // a11y: { disable: true },
  },
};

// const tableOptions = {
//   default: '',
//   compact: 'compact',
//   vertical: 'vertical',
// };

// const alignmentOptions = {
//   'left (default)': 'left',
//   center: 'center',
//   right: 'right',
// };

// export function API() {
//   const tableStyle = select('Table Style', tableOptions, '', propertiesGroup);
//   const alignmentStyle = select('Alignment', alignmentOptions, '', propertiesGroup);
//   const rowBorder = boolean('Row Border', true, propertiesGroup);
//   const colBorder = boolean('Col Border', false, propertiesGroup);
//   const outsideBorder = boolean('Outside Border', true, propertiesGroup);
//   const zebraStyle = boolean('Zebra Row Highlights', false, propertiesGroup);

//   return html`
//     <div cds-layout="vertical gap:md">
//       <table
//         cds-table="${tableStyle} ${zebraStyle ? 'zebra' : ''} ${rowBorder ? 'border:row' : ''} ${outsideBorder
//           ? 'border:outside'
//           : ''} ${colBorder ? 'border:column' : ''}"
//         cds-text=${alignmentStyle}
//       >
//         <caption>
//           Nearest stars to Earth
//         </caption>
//         <thead>
//           <tr>
//             <th>Star</th>
//             <th>Distance (Light Years)</th>
//             <th>Solar Masses</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Sun (Sol)</td>
//             <td>0.0000158 ly</td>
//             <td>1 M☉</td>
//           </tr>
//           <tr>
//             <td>Proxima Centauri</td>
//             <td>4.24 ly</td>
//             <td>0.122 M☉</td>
//           </tr>
//           <tr>
//             <td>Alpha Centauri B</td>
//             <td>4.36 ly</td>
//             <td>0.907 M☉</td>
//           </tr>
//           <tr>
//             <td>Alpha Centauri A</td>
//             <td>4.36 ly</td>
//             <td>1.10 M☉</td>
//           </tr>
//           <tr>
//             <td>Barnard's Star</td>
//             <td>5.95 ly</td>
//             <td>1.44 M☉</td>
//           </tr>
//           <tr>
//             <td>Luhman 16B</td>
//             <td>6.50 ly</td>
//             <td>0.027 M☉</td>
//           </tr>
//           <tr>
//             <td>Luhman 16A</td>
//             <td>6.50 ly</td>
//             <td>0.032 M☉</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   `;
// }

/** @website */
export function basic() {
  return html`
    <table cds-table="border:row border:outside">
      <caption>
        List of nearby spiral galaxies
      </caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Constellation</th>
          <th>Number of stars</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Milky Way</td>
          <td>none</td>
          <td>200 billion</td>
          <td>Barred Spiral</td>
        </tr>
        <tr>
          <td>Andromeda</td>
          <td>Andromeda</td>
          <td>1 trillion</td>
          <td>Barred Spiral</td>
        </tr>
        <tr>
          <td>Pinwheel</td>
          <td>Ursa Major</td>
          <td>1 trillion</td>
          <td>Spiral</td>
        </tr>
        <tr>
          <td>Messier 63</td>
          <td>Canes Venatici</td>
          <td>400 billion</td>
          <td>Spiral</td>
        </tr>
        <tr>
          <td>Triangulum</td>
          <td>Triangulum</td>
          <td>40 billion</td>
          <td>Spiral</td>
        </tr>
        <tr>
          <td>Whirlpool</td>
          <td>Canes Venatici</td>
          <td>40 billion</td>
          <td>Spiral</td>
        </tr>
      </tbody>
    </table>
  `;
}

/** @website */
export function centerTable() {
  return html`
    <table cds-table="border:row border:outside" cds-text="center">
      <caption>
        List of nearby spiral galaxies
      </caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Constellation</th>
          <th>Number of stars</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Milky Way</td>
          <td>none</td>
          <td>200 billion</td>
          <td>Barred Spiral</td>
        </tr>
        <tr>
          <td>Andromeda</td>
          <td>Andromeda</td>
          <td>1 trillion</td>
          <td>Barred Spiral</td>
        </tr>
        <tr>
          <td>Pinwheel</td>
          <td>Ursa Major</td>
          <td>1 trillion</td>
          <td>Spiral</td>
        </tr>
        <tr>
          <td>Messier 63</td>
          <td>Canes Venatici</td>
          <td>400 billion</td>
          <td>Spiral</td>
        </tr>
        <tr>
          <td>Triangulum</td>
          <td>Triangulum</td>
          <td>40 billion</td>
          <td>Spiral</td>
        </tr>
        <tr>
          <td>Whirlpool</td>
          <td>Canes Venatici</td>
          <td>40 billion</td>
          <td>Spiral</td>
        </tr>
      </tbody>
    </table>
  `;
}

/** @website */
export function rightTable() {
  return html`
    <table cds-table="border:row border:outside" cds-text="right">
      <caption>
        Popular items in Messier catalog of stellar objects
      </caption>
      <thead>
        <tr>
          <th>Messier Number</th>
          <th>Name</th>
          <th>Type</th>
          <th>Constellation</th>
          <th>Apparent magnitude</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>M1</td>
          <td>Crab Nebula</td>
          <td>Supernova remnant</td>
          <td>Taurus</td>
          <td cds-text="monospace">8.4</td>
        </tr>
        <tr>
          <td>M27</td>
          <td>Dumbbell Nebula</td>
          <td>Planetary nebula</td>
          <td>vulpecula</td>
          <td cds-text="monospace">7.5</td>
        </tr>
        <tr>
          <td>M42</td>
          <td>Orion Nebula</td>
          <td>HII region nebula</td>
          <td>Orion</td>
          <td cds-text="monospace">4.0</td>
        </tr>
        <tr>
          <td>M81</td>
          <td>Bode's Galaxy</td>
          <td>Spiral galaxy</td>
          <td>Ursa Major</td>
          <td cds-text="monospace">6.9</td>
        </tr>
        <tr>
          <td>M104</td>
          <td>Sombrero Galaxy</td>
          <td>Spiral galaxy</td>
          <td>Virgo</td>
          <td cds-text="monospace">9.0</td>
        </tr>
      </tbody>
    </table>
  `;
}

/** @website */
export function modifierTable() {
  return html`
    <table cds-table="border:row border:outside">
      <caption>
        Solar system planets (and demonstrations of how to modify the alignment and typography)
      </caption>
      <thead cds-text="title">
        <tr>
          <th>Name</th>
          <th>Diameter (Earth masses)</th>
          <th>Orbital period (years)</th>
          <th>Known moons</th>
          <th>Rings</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td cds-text="left">Mercury</td>
          <td cds-text="right monospace">0.06 M</td>
          <td>0.24 yr</td>
          <td>0</td>
          <td>No</td>
        </tr>
        <tr>
          <td cds-text="left">Venus</td>
          <td cds-text="right monospace">0.81 M</td>
          <td>0.62 yr</td>
          <td>0</td>
          <td>No</td>
        </tr>
        <tr cds-text="section">
          <td cds-text="left">Earth</td>
          <td cds-text="right monospace">1.00 M</td>
          <td>1.0 yr</td>
          <td>1</td>
          <td>No</td>
        </tr>
        <tr>
          <td cds-text="left">Mars</td>
          <td cds-text="right monospace">0.11 M</td>
          <td>1.88 yr</td>
          <td>2</td>
          <td>No</td>
        </tr>
        <tr>
          <td cds-text="left">Jupiter</td>
          <td cds-text="right monospace">317.8 M</td>
          <td>11.86 yr</td>
          <td>79</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td cds-text="left">Saturn</td>
          <td cds-text="right monospace">95.16 M</td>
          <td>29.45 yr</td>
          <td>82</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td cds-text="left">Uranus</td>
          <td cds-text="right monospace">14.54 M</td>
          <td>84.02 yr</td>
          <td>27</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td cds-text="left">Neptune</td>
          <td cds-text="right monospace">15.15 M</td>
          <td>164.79 yr</td>
          <td>14</td>
          <td>Yes</td>
        </tr>
      </tbody>
    </table>
  `;
}

/** @website */
export function noborderTable() {
  return html`
    <table cds-table>
      <caption>
        List of numbered comets
      </caption>
      <thead>
        <tr>
          <th>Comet designation</th>
          <th>Orbital Period (years)</th>
          <th>Absolute magnitude</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1P Halley</td>
          <td>75.32</td>
          <td>5.5</td>
        </tr>
        <tr>
          <td>2P Encke</td>
          <td>3.30</td>
          <td>15.5</td>
        </tr>
        <tr>
          <td>3D Biela</td>
          <td>6.65</td>
          <td>7.1</td>
        </tr>
        <tr>
          <td>4P Faye</td>
          <td>7.52</td>
          <td>10.9</td>
        </tr>
        <tr>
          <td>5D Borsen</td>
          <td>5.46</td>
          <td>8.3</td>
        </tr>
      </tbody>
    </table>
  `;
}

/** @website */
export function compactTable() {
  return html`
    <table cds-table="border:row border:outside compact">
      <caption>
        Largest moons in the solar system
      </caption>
      <thead>
        <tr>
          <th>Moon Name</th>
          <th>Planet</th>
          <th>Year of discovery</th>
          <th>Diameter (kilometers)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ganymede</td>
          <td>Jupiter</td>
          <td>1610</td>
          <td>5,268 km</td>
        </tr>
        <tr>
          <td>Tital</td>
          <td>Saturn</td>
          <td>1655</td>
          <td>5,151 km</td>
        </tr>
        <tr>
          <td>Callisto</td>
          <td>Jupiter</td>
          <td>1610</td>
          <td>4,816 km</td>
        </tr>
        <tr>
          <td>Io</td>
          <td>Jupiter</td>
          <td>1610</td>
          <td>3,636 km</td>
        </tr>
        <tr>
          <td>The Moon</td>
          <td>Earth</td>
          <td>Prehistory</td>
          <td>3,474 km</td>
        </tr>
        <tr>
          <td>Europa</td>
          <td>Jupiter</td>
          <td>1610</td>
          <td>3,121 km</td>
        </tr>
        <tr>
          <td>Triton</td>
          <td>Neptune</td>
          <td>1846</td>
          <td>2,706 km</td>
        </tr>
        <tr>
          <td>Titania</td>
          <td>Uranus</td>
          <td>1787</td>
          <td>1,577 km</td>
        </tr>
        <tr>
          <td>Rhea</td>
          <td>Saturn</td>
          <td>1672</td>
          <td>1,529 km</td>
        </tr>
        <tr>
          <td>Oberon</td>
          <td>Uranus</td>
          <td>1787</td>
          <td>1,522 km</td>
        </tr>
      </tbody>
    </table>
  `;
}

/** @website */
export function verticalTable() {
  return html`
    <table cds-table="border:row border:outside vertical">
      <caption>
        Dwarf planets in the solar system
      </caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Region</th>
          <th>Orbital period (years)</th>
          <th>Diameter (kilometers)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Ceres</th>
          <td>Astroid belt</td>
          <td>4.6 yr</td>
          <td>939 km</td>
        </tr>
        <tr>
          <th scope="row">Orcus</th>
          <td>Kuiper belt</td>
          <td>247.3 yr</td>
          <td>910 km</td>
        </tr>
        <tr>
          <th scope="row">Pluto</th>
          <td>Kuiper belt</td>
          <td>247.9 yr</td>
          <td>2377 km</td>
        </tr>
        <tr>
          <th scope="row">Haumea</th>
          <td>Kuiper belt</td>
          <td>284.1 yr</td>
          <td>1560 km</td>
        </tr>
        <tr>
          <th scope="row">Quaoar</th>
          <td>Kuiper belt</td>
          <td>288.8 yr</td>
          <td>1110 km</td>
        </tr>
      </tbody>
    </table>
  `;
}

/** @website */
export function borderTable() {
  return html`
    <table cds-table="border:all">
      <caption>
        Active space telescopes
      </caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Space Agency</th>
          <th>Launch Date</th>
          <th>Telescope type</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fermi Gamma-ray Space Telescope</td>
          <td>NASA</td>
          <td>June 11, 2008</td>
          <td>Gamma</td>
        </tr>
        <tr>
          <td>Swift Gamma Ray Burst Explorer</td>
          <td>NASA</td>
          <td>November 20, 2004</td>
          <td>Gamma, X-ray, Ultraviolet</td>
        </tr>
        <tr>
          <td>Astrosat</td>
          <td>ISRO</td>
          <td>September 28, 2015</td>
          <td>X-ray</td>
        </tr>
        <tr>
          <td>Nisaki</td>
          <td>JAXA</td>
          <td>September 14, 2013</td>
          <td>X-ray, Ultraviolet</td>
        </tr>
        <tr>
          <td>Hubble Space Telescope</td>
          <td>NASA</td>
          <td>April 24, 1990</td>
          <td>Visible light</td>
        </tr>
        <tr>
          <td>IBEX</td>
          <td>NASA</td>
          <td>October 19, 2008</td>
          <td>Particle detection</td>
        </tr>
      </tbody>
    </table>
  `;
}

/** @website */
export function quirksMode() {
  return html`
    <div cds-layout="vertical gap:md">
      <p cds-text="message" cds-layout="m-border:md">
        Sample tables of different construction to verify display, testing purposes only
      </p>
      <table cds-table="border:all">
        <caption>
          Table without thead, tbody, tfoot
        </caption>
        <tr>
          <th>Wizard</th>
          <th>Allegiance</th>
          <th>Triwizard Champion?</th>
          <th>Can Cast Fireball</th>
        </tr>
        <tr>
          <td>Harry</td>
          <td>Gryffindor</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Gandalf</td>
          <td>Hobbits</td>
          <td>Maybe?</td>
          <td>I don&apos;t think so...</td>
        </tr>
        <tr>
          <td>Obi-Wan Kenobi</td>
          <td>Republic/Rebellion</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Merlin</td>
          <td>King Arthur</td>
          <td>Probably invented the tournament</td>
          <td>Solid maybe</td>
        </tr>
      </table>

      <table cds-table="border:all">
        <caption>
          Table with two theads
        </caption>
        <thead>
          <tr>
            <th>Wizard</th>
            <th>Allegiance</th>
            <th>Triwizard Champion?</th>
            <th>Can Cast Fireball</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Harry</td>
            <td>Gryffindor</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Gandalf</td>
            <td>Hobbits</td>
            <td>Maybe?</td>
            <td>I don&apos;t think so...</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Wizard</th>
            <th>Allegiance</th>
            <th>Triwizard Champion?</th>
            <th>Can Cast Fireball</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Obi-Wan Kenobi</td>
            <td>Republic/Rebellion</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Merlin</td>
            <td>King Arthur</td>
            <td>Probably invented the tournament</td>
            <td>Solid maybe</td>
          </tr>
        </tbody>
      </table>

      <table cds-table="border:all">
        <caption>
          Table with only thead
        </caption>
        <thead>
          <tr>
            <th>Wizard</th>
            <th>Allegiance</th>
            <th>Triwizard Champion?</th>
            <th>Can Cast Fireball</th>
          </tr>
        </thead>
        <tr>
          <td>Harry</td>
          <td>Gryffindor</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Gandalf</td>
          <td>Hobbits</td>
          <td>Maybe?</td>
          <td>I don&apos;t think so...</td>
        </tr>
        <tr>
          <td>Obi-Wan Kenobi</td>
          <td>Republic/Rebellion</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Merlin</td>
          <td>King Arthur</td>
          <td>Probably invented the tournament</td>
          <td>Solid maybe</td>
        </tr>
      </table>

      <table cds-table="border:all">
        <caption>
          Table with only tbody
        </caption>
        <tr>
          <th>Wizard</th>
          <th>Allegiance</th>
          <th>Triwizard Champion?</th>
          <th>Can Cast Fireball</th>
        </tr>
        <tbody>
          <tr>
            <td>Harry</td>
            <td>Gryffindor</td>
            <td>Yes</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Gandalf</td>
            <td>Hobbits</td>
            <td>Maybe?</td>
            <td>I don&apos;t think so...</td>
          </tr>
          <tr>
            <td>Obi-Wan Kenobi</td>
            <td>Republic/Rebellion</td>
            <td>No</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Merlin</td>
            <td>King Arthur</td>
            <td>Probably invented the tournament</td>
            <td>Solid maybe</td>
          </tr>
        </tbody>
      </table>

      <p cds-text="center">No caption</p>
      <table cds-table="border:all">
        <tr>
          <th>Wizard</th>
          <th>Allegiance</th>
          <th>Triwizard Champion?</th>
          <th>Can Cast Fireball</th>
        </tr>
        <tr>
          <td>Harry</td>
          <td>Gryffindor</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Gandalf</td>
          <td>Hobbits</td>
          <td>Maybe?</td>
          <td>I don&apos;t think so...</td>
        </tr>
        <tr>
          <td>Obi-Wan Kenobi</td>
          <td>Republic/Rebellion</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Merlin</td>
          <td>King Arthur</td>
          <td>Probably invented the tournament</td>
          <td>Solid maybe</td>
        </tr>
      </table>

      <p cds-text="center">No caption or header row</p>
      <table cds-table="border:all">
        <tr>
          <td>Harry</td>
          <td>Gryffindor</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Gandalf</td>
          <td>Hobbits</td>
          <td>Maybe?</td>
          <td>I don&apos;t think so...</td>
        </tr>
        <tr>
          <td>Obi-Wan Kenobi</td>
          <td>Republic/Rebellion</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Merlin</td>
          <td>King Arthur</td>
          <td>Probably invented the tournament</td>
          <td>Solid maybe</td>
        </tr>
      </table>

      <table cds-table="border:all">
        <caption>
          Table with only tfoot
        </caption>
        <tr>
          <th>Wizard</th>
          <th>Allegiance</th>
          <th>Triwizard Champion?</th>
          <th>Can Cast Fireball</th>
        </tr>
        <tr>
          <td>Harry</td>
          <td>Gryffindor</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Gandalf</td>
          <td>Hobbits</td>
          <td>Maybe?</td>
          <td>I don&apos;t think so...</td>
        </tr>
        <tr>
          <td>Obi-Wan Kenobi</td>
          <td>Republic/Rebellion</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Merlin</td>
          <td>King Arthur</td>
          <td>Probably invented the tournament</td>
          <td>Solid maybe</td>
        </tr>
        <tfoot>
          <td>Wizard</td>
          <td>Allegiance</td>
          <td>Triwizard Champion?</td>
          <td>Can Cast Fireball</td>
        </tfoot>
      </table>

      <table cds-table="border:all">
        <caption>
          Table with col and row spans, have to provide modifier classes to set correct border and radius
        </caption>
        <tr>
          <th colspan="2">Wizard / Allegiance</th>
          <th colspan="2">Triwizard Champion? / Can Cast Fireball</th>
        </tr>
        <tr>
          <td>Harry</td>
          <td>Gryffindor</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Gandalf</td>
          <td>Hobbits</td>
          <td>Maybe?</td>
          <td>I don&apos;t think so...</td>
        </tr>
        <tr>
          <td>Obi-Wan Kenobi</td>
          <td>Republic/Rebellion</td>
          <td>No</td>
          <td
            rowspan="2"
            style="border-bottom-right-radius: var(--border-radius); border-bottom: var(--border); border-right: var(--border);"
          >
            No<br />No<br />No<br />No
          </td>
        </tr>
        <tr>
          <td>Merlin</td>
          <td>King Arthur</td>
          <td style="border-radius: 0; border-right: var(--cell-border)">Probably invented the tournament</td>
        </tr>
      </table>
    </div>
  `;
}
