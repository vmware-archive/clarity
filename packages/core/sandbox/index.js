import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';

document
  .querySelector('cds-button')
  .addEventListener('click', () => document.querySelector('cds-alert-group').removeAttribute('hidden'));
document
  .querySelector('cds-alert-group cds-alert')
  .addEventListener('closeChange', () => document.querySelector('cds-alert-group').setAttribute('hidden', ''));
