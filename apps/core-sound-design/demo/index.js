import '@cds/core/button/register';
import '@cds/core/navigation/register.js';
import '@cds/core/toggle/register.js';
import '@cds/core/alert/register.js';
import '@cds/core/password/register.js';
import '@cds/core/input/register.js';
import '@cds/core/forms/register.js';
import { ClarityIcons, userIcon, headphonesIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, headphonesIcon);

import { ClarityAudio } from '@cds/core/audio/audio.service.js';
import { yesSound } from '@cds/core/audio/sounds/yes.js';
import { noSound } from '@cds/core/audio/sounds/no.js';
import { doneSound } from '@cds/core/audio/sounds/done.js';
import { successSound } from '@cds/core/audio/sounds/success.js';
import { errorSound } from '@cds/core/audio/sounds/error.js';
import { eventSound } from '@cds/core/audio/sounds/event.js';
import { questionSound } from '@cds/core/audio/sounds/question.js';
import { expandSound } from '@cds/core/audio/sounds/expand.js';
import { collapseSound } from '@cds/core/audio/sounds/collapse.js';

ClarityAudio.add(...yesSound);
ClarityAudio.add(...noSound);
ClarityAudio.add(...doneSound);
ClarityAudio.add(...successSound);
ClarityAudio.add(...errorSound);
ClarityAudio.add(...eventSound);
ClarityAudio.add(...questionSound);
ClarityAudio.add(...expandSound);
ClarityAudio.add(...collapseSound);

const cdsDone = document.querySelector('#cds-done');
const cdsNo = document.querySelector('#cds-no');
const cdsYes = document.querySelector('#cds-yes');
const cdsSuccess = document.querySelector('#cds-success');
const cdsError = document.querySelector('#cds-error');
const cdsEvent = document.querySelector('#cds-event');
const cdsQuestion = document.querySelector('#cds-question');
const cdsExpand = document.querySelector('#cds-expand');
const cdsCollapse = document.querySelector('#cds-collapse');

cdsDone?.addEventListener('click', () => {
  ClarityAudio.play('done');
});
cdsNo?.addEventListener('click', () => {
  ClarityAudio.play('no');
});
cdsYes?.addEventListener('click', () => {
  ClarityAudio.play('yes');
});
cdsSuccess?.addEventListener('click', () => {
  ClarityAudio.play('success');
});
cdsError?.addEventListener('click', () => {
  ClarityAudio.play('error');
});
cdsEvent?.addEventListener('click', () => {
  ClarityAudio.play('event');
});
cdsQuestion?.addEventListener('click', () => {
  ClarityAudio.play('question');
});
cdsExpand?.addEventListener('click', () => {
  ClarityAudio.play('expand');
});
cdsCollapse?.addEventListener('click', () => {
  ClarityAudio.play('collapse');
});

function toggleTheme() {
  if (document.body.getAttribute('cds-theme') === 'dark') {
    document.body.setAttribute('cds-theme', '');
    themeToggle.checked = false;
    ClarityAudio.play('no');
  } else {
    document.body.setAttribute('cds-theme', 'dark');
    themeToggle.checked = true;
    ClarityAudio.play('yes');
  }
}

// theme
const themeToggle = document.querySelector('#dark-theme-toggle');
themeToggle.addEventListener('change', () => toggleTheme());

// nav
const nav = document.querySelector('cds-navigation');
const main = document.querySelector('main');
setNavSize();

nav.addEventListener('expandedChange', () => {
  nav.expanded = !nav.expanded;
  nav.expanded && document.documentElement.clientWidth > 1024
    ? main.setAttribute('expanded', '')
    : main.removeAttribute('expanded');
  if (nav.expanded) {
    ClarityAudio.play('expand');
  } else {
    ClarityAudio.play('collapse');
  }
});

window.addEventListener('resize', () => setNavSize());

function setNavSize() {
  if (document.documentElement.clientWidth > 1024) {
    main.setAttribute('expanded', '');
    nav.expanded = true;
  } else {
    main.removeAttribute('expanded');
    nav.expanded = false;
  }
}

const navItems = document.querySelectorAll('cds-navigation-item');
navItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    ClarityAudio.play('event');
  });
});

const contentNodes = document.querySelectorAll('#sound, #table, #form');
const content = Array.from(contentNodes);
showSound();

function showSound() {
  content
    .filter(node => node.id !== 'sound')
    .forEach(c => {
      c.style.display = 'none';
    });
  content
    .filter(node => node.id === 'sound')
    .forEach(c => {
      c.style.display = 'block';
    });
}

function showTable() {
  content
    .filter(node => node.id !== 'table')
    .forEach(c => {
      c.style.display = 'none';
    });
  content
    .filter(node => node.id === 'table')
    .forEach(c => {
      c.style.display = 'block';
    });
}

function showForm() {
  content
    .filter(node => node.id !== 'form')
    .forEach(c => {
      c.style.display = 'none';
    });
  content
    .filter(node => node.id === 'form')
    .forEach(c => {
      c.style.display = 'block';
    });
}

const rootRoute = document.querySelector('a[href="/"]');
rootRoute.addEventListener('click', e => {
  e.preventDefault();
  showSound();
});

const tableRoute = document.querySelector('a[href="table/"]');
tableRoute.addEventListener('click', e => {
  e.preventDefault();
  showTable();
});

const formRoute = document.querySelector('a[href="form/"]');
formRoute.addEventListener('click', e => {
  e.preventDefault();
  showForm();
});

const rows = document.querySelectorAll('tr');
rows.forEach(r => {
  r.addEventListener('mouseover', () => {
    ClarityAudio.play('event');
  });
});

// Form
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');
const form = document.querySelector('form');
email.addEventListener('invalid', () => ClarityAudio.play('error'));
password.addEventListener('invalid', () => ClarityAudio.play('error'));
form.addEventListener('submit', e => {
  e.preventDefault();
  ClarityAudio.play('success');
  console.log(email.value);
  password.value = '';
  email.value = '';
});
