export * from './audio.service.js';
export { doneSound, doneSoundName } from './sounds/done';
export { noSound, noSoundName } from './sounds/no';
export { yesSound, yesSoundName } from './sounds/yes';
export { eventSound, eventSoundName } from './sounds/event';
// commented sounds are importing mp3 files; rollup needs to be configured to deal with them
// export { slideSound, slideSoundName } from './sounds/slide';
// export { activeSound, activeSoundName } from './sounds/active';
// export { alertSound, alertSoundName } from './sounds/alert';
export { questionSound, questionSoundName } from './sounds/question';
export { successSound, successSoundName } from './sounds/success';
export { errorSound, errorSoundName } from './sounds/error';
// export { warningSound, warningSoundName } from './sounds/warning';
export { expandSound, expandSoundName } from './sounds/expand';
export { collapseSound, collapseSoundName } from './sounds/collapse';
