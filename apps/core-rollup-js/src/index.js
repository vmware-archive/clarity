import './index.css';
import '@cds/core/icon/register.js';
import '@cds/core/badge/register.js';
import { ClarityIcons, searchIcon, pencilIcon } from '@cds/core/icon';

ClarityIcons.addIcons(searchIcon, pencilIcon);
document.querySelector('cds-badge').innerText = window.CDS.getDetails().versions[0];
