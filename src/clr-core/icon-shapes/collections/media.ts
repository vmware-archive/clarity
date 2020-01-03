/*
* Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { ClarityIcons } from '../icon.service';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces';

import { cameraIcon, cameraIconName } from '../shapes/camera';
import { fastForwardIcon, fastForwardIconName } from '../shapes/fast-forward';
import { filmStripIcon, filmStripIconName } from '../shapes/film-strip';
import { headphonesIcon, headphonesIconName } from '../shapes/headphones';
import { imageGalleryIcon, imageGalleryIconName } from '../shapes/image-gallery';
import { microphoneIcon, microphoneIconName } from '../shapes/microphone';
import { microphoneMuteIcon, microphoneMuteIconName } from '../shapes/microphone-mute';
import { musicNoteIcon, musicNoteIconName } from '../shapes/music-note';
import { pauseIcon, pauseIconName } from '../shapes/pause';
import { playIcon, playIconName } from '../shapes/play';
import { powerIcon, powerIconName } from '../shapes/power';
import { replayAllIcon, replayAllIconName } from '../shapes/replay-all';
import { replayOneIcon, replayOneIconName } from '../shapes/replay-one';
import { rewindIcon, rewindIconName } from '../shapes/rewind';
import { shuffleIcon, shuffleIconName } from '../shapes/shuffle';
import { stepForwardIcon, stepForwardIconName } from '../shapes/step-forward';
import { stopIcon, stopIconName } from '../shapes/stop';
import { videoCameraIcon, videoCameraIconName } from '../shapes/video-camera';
import { videoGalleryIcon, videoGalleryIconName } from '../shapes/video-gallery';
import { volumeDownIcon, volumeDownIconName } from '../shapes/volume-down';
import { volumeMuteIcon, volumeMuteIconName } from '../shapes/volume-mute';
import { volumeUpIcon, volumeUpIconName } from '../shapes/volume-up';

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
 * import '@clr/core/icon';
 * import { loadMediaIconSet } from '@clr/core/icon-shapes';
 *
 * loadMediaIconSet();
 * ```
 *
 */
export function loadMediaIconSet() {
  ClarityIcons.addIcons(...mediaCollectionIcons);
  ClarityIcons.addAliases(...mediaCollectionAliases);
}

declare module '@clr/core/common' {
  interface IconRegistrySources {
    [cameraIconName]?: string;
    [fastForwardIconName]?: string;
    [filmStripIconName]?: string;
    [headphonesIconName]?: string;
    [imageGalleryIconName]?: string;
    [microphoneIconName]?: string;
    [microphoneMuteIconName]?: string;
    [musicNoteIconName]?: string;
    [pauseIconName]?: string;
    [playIconName]?: string;
    [powerIconName]?: string;
    [replayAllIconName]?: string;
    [replayOneIconName]?: string;
    [rewindIconName]?: string;
    [shuffleIconName]?: string;
    [stepForwardIconName]?: string;
    [stopIconName]?: string;
    [videoCameraIconName]?: string;
    [videoGalleryIconName]?: string;
    [volumeDownIconName]?: string;
    [volumeMuteIconName]?: string;
    [volumeUpIconName]?: string;
  }
}
