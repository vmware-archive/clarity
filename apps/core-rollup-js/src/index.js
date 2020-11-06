import { ClarityIcons, searchIcon, pencilIcon } from '@cds/core/icon';
import '@cds/core/badge/register.js';
import '@cds/core/icon/register.js';
import './index.css';

ClarityIcons.addIcons(searchIcon, pencilIcon);
document.querySelector('cds-badge').innerText = window.CDS.getVersion().versions[0];
