/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '../icon.service.js';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces.js';

import { cameraIcon, cameraIconName } from '../shapes/camera.js';
import { fastForwardIcon, fastForwardIconName } from '../shapes/fast-forward.js';
import { filmStripIcon, filmStripIconName } from '../shapes/film-strip.js';
import { headphonesIcon, headphonesIconName } from '../shapes/headphones.js';
import { imageGalleryIcon, imageGalleryIconName } from '../shapes/image-gallery.js';
import { microphoneMuteIcon, microphoneMuteIconName } from '../shapes/microphone-mute.js';
import { microphoneIcon, microphoneIconName } from '../shapes/microphone.js';
import { musicNoteIcon, musicNoteIconName } from '../shapes/music-note.js';
import { pauseIcon, pauseIconName } from '../shapes/pause.js';
import { playIcon, playIconName } from '../shapes/play.js';
import { powerIcon, powerIconName } from '../shapes/power.js';
import { replayAllIcon, replayAllIconName } from '../shapes/replay-all.js';
import { replayOneIcon, replayOneIconName } from '../shapes/replay-one.js';
import { rewindIcon, rewindIconName } from '../shapes/rewind.js';
import { shuffleIcon, shuffleIconName } from '../shapes/shuffle.js';
import { stepForwardIcon, stepForwardIconName } from '../shapes/step-forward.js';
import { stopIcon, stopIconName } from '../shapes/stop.js';
import { videoCameraIcon, videoCameraIconName } from '../shapes/video-camera.js';
import { videoGalleryIcon, videoGalleryIconName } from '../shapes/video-gallery.js';
import { volumeDownIcon, volumeDownIconName } from '../shapes/volume-down.js';
import { volumeMuteIcon, volumeMuteIconName } from '../shapes/volume-mute.js';
import { volumeUpIcon, volumeUpIconName } from '../shapes/volume-up.js';

export const mediaCollectionIcons: IconShapeTuple[] = [
  cameraIcon,
  fastForwardIcon,
  filmStripIcon,
  headphonesIcon,
  imageGalleryIcon,
  microphoneIcon,
  microphoneMuteIcon,
  musicNoteIcon,
  pauseIcon,
  playIcon,
  powerIcon,
  replayAllIcon,
  replayOneIcon,
  rewindIcon,
  shuffleIcon,
  stepForwardIcon,
  stopIcon,
  videoCameraIcon,
  videoGalleryIcon,
  volumeDownIcon,
  volumeMuteIcon,
  volumeUpIcon,
];

export const mediaCollectionAliases: IconAlias[] = [];

/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@cds/core/icon/register.js';
 * import { loadMediaIconSet } from '@cds/core/icon';
 *
 * loadMediaIconSet();
 * ```
 *
 */
export function loadMediaIconSet() {
  ClarityIcons.addIcons(...mediaCollectionIcons);
  ClarityIcons.addAliases(...mediaCollectionAliases);
}

declare module '@cds/core/internal' {
  interface IconRegistrySources {
    [cameraIconName]: string;
    [fastForwardIconName]: string;
    [filmStripIconName]: string;
    [headphonesIconName]: string;
    [imageGalleryIconName]: string;
    [microphoneIconName]: string;
    [microphoneMuteIconName]: string;
    [musicNoteIconName]: string;
    [pauseIconName]: string;
    [playIconName]: string;
    [powerIconName]: string;
    [replayAllIconName]: string;
    [replayOneIconName]: string;
    [rewindIconName]: string;
    [shuffleIconName]: string;
    [stepForwardIconName]: string;
    [stopIconName]: string;
    [videoCameraIconName]: string;
    [videoGalleryIconName]: string;
    [volumeDownIconName]: string;
    [volumeMuteIconName]: string;
    [volumeUpIconName]: string;
  }
}
