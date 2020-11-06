import '@cds/core/button/register.js';
import '@cds/core/alert/register.js';

const button = document.querySelector('cds-button');
const alertGroup = document.querySelector('cds-alert-group');
const alert = document.querySelector('cds-alert');

button.addEventListener('click', () => alertGroup.removeAttribute('hidden'));
alert.addEventListener('closeChange', () => alertGroup.setAttribute('hidden', ''));
