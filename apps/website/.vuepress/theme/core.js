import '@cds/core/accordion/register.js';
import '@cds/core/alert/register.js';
import '@cds/core/badge/register.js';
import '@cds/core/button/register.js';
import '@cds/core/checkbox/register.js';
import '@cds/core/datalist/register.js';
import '@cds/core/date/register.js';
import '@cds/core/divider/register.js';
import '@cds/core/file/register.js';
import '@cds/core/forms/register.js';
import '@cds/core/icon/register.js';
import '@cds/core/input/register.js';
import '@cds/core/modal/register.js';
import '@cds/core/password/register.js';
import '@cds/core/progress-circle/register.js';
import '@cds/core/radio/register.js';
import '@cds/core/range/register.js';
import '@cds/core/search/register.js';
import '@cds/core/select/register.js';
import '@cds/core/tag/register.js';
import '@cds/core/textarea/register.js';
import '@cds/core/time/register.js';
import '@cds/core/toggle/register.js';

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
  dotCircleIcon,
  circleIcon,
  successStandardIcon,
  errorStandardIcon,
  copyToClipboardIcon,
  pinIcon,
  envelopeIcon,
  uploadIcon,
  blockIcon,
  animationIcon,
  clockIcon,
  betaIcon,
} from '@cds/core/icon';

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
  copyIcon,
  dotCircleIcon,
  circleIcon,
  successStandardIcon,
  errorStandardIcon,
  pinIcon,
  envelopeIcon,
  uploadIcon,
  blockIcon,
  animationIcon,
  clockIcon,
  betaIcon,
  copyToClipboardIcon
);
loadCoreIconSet();

class LegacyIcon extends CdsIcon {}
customElements.define('clr-icon', LegacyIcon);
