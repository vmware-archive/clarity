import { ClarityIcons, searchIcon, pencilIcon } from '@clr/core/icon';
import '@clr/core/badge/register.js';
import '@clr/core/icon/register.js';
import './index.css';

ClarityIcons.addIcons(searchIcon, pencilIcon);
document.querySelector('cds-badge').innerText = window.CDS.getVersion().versions[0];
