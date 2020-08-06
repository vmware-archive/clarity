import '@clr/core/alert/register.js';
import '@clr/core/badge/register.js';
import '@clr/core/button/register.js';
import '@clr/core/checkbox/register.js';
import '@clr/core/datalist/register.js';
import '@clr/core/date/register.js';
import '@clr/core/file/register.js';
import '@clr/core/forms/register.js';
import '@clr/core/icon/register.js';
import '@clr/core/input/register.js';
import '@clr/core/modal/register.js';
import '@clr/core/password/register.js';
import '@clr/core/radio/register.js';
import '@clr/core/range/register.js';
import '@clr/core/search/register.js';
import '@clr/core/select/register.js';
import '@clr/core/tag/register.js';
import '@clr/core/textarea/register.js';
import '@clr/core/time/register.js';
import '@clr/core/toggle/register.js';

import {
  CdsIcon,
  ClarityIcons,
  linkIcon,
  fileIcon,
  popOutIcon,
  downloadIcon,
  copyIcon,
  pencilIcon,
  folderOpenIcon,
  bookmarkIcon,
  imageGalleryIcon,
  videoGalleryIcon,
  cloudIcon,
  loadCoreIconSet,
} from '@clr/core/icon';

ClarityIcons.addIcons(
  linkIcon,
  fileIcon,
  pencilIcon,
  folderOpenIcon,
  cloudIcon,
  bookmarkIcon,
  popOutIcon,
  imageGalleryIcon,
  videoGalleryIcon,
  downloadIcon,
  copyIcon
);
loadCoreIconSet();

class LegacyIcon extends CdsIcon {}
customElements.define('clr-icon', LegacyIcon);
