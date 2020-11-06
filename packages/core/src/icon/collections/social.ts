/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '../icon.service.js';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces.js';

import { bookmarkIcon, bookmarkIconName } from '../shapes/bookmark.js';
import { calendarIcon, calendarIconName } from '../shapes/calendar.js';
import { chatBubbleIcon, chatBubbleIconName } from '../shapes/chat-bubble.js';
import { crownIcon, crownIconName } from '../shapes/crown.js';
import { envelopeIcon, envelopeIconName } from '../shapes/envelope.js';
import { eventIcon, eventIconName } from '../shapes/event.js';
import { flagIcon, flagIconName } from '../shapes/flag.js';
import { halfStarIcon, halfStarIconName } from '../shapes/half-star.js';
import { happyFaceIcon, happyFaceIconName } from '../shapes/happy-face.js';
import { hashtagIcon, hashtagIconName } from '../shapes/hashtag.js';
import { heartBrokenIcon, heartBrokenIconName } from '../shapes/heart-broken.js';
import { heartIcon, heartIconName } from '../shapes/heart.js';
import { inboxIcon, inboxIconName } from '../shapes/inbox.js';
import { neutralFaceIcon, neutralFaceIconName } from '../shapes/neutral-face.js';
import { pictureIcon, pictureIconName } from '../shapes/picture.js';
import { sadFaceIcon, sadFaceIconName } from '../shapes/sad-face.js';
import { shareIcon, shareIconName } from '../shapes/share.js';
import { starIcon, starIconName } from '../shapes/star.js';
import { talkBubblesIcon, talkBubblesIconName } from '../shapes/talk-bubbles.js';
import { tasksIcon, tasksIconName } from '../shapes/tasks.js';
import { thumbsDownIcon, thumbsDownIconName } from '../shapes/thumbs-down.js';
import { thumbsUpIcon, thumbsUpIconName } from '../shapes/thumbs-up.js';

export const socialCollectionIcons: IconShapeTuple[] = [
  bookmarkIcon,
  calendarIcon,
  chatBubbleIcon,
  crownIcon,
  envelopeIcon,
  eventIcon,
  flagIcon,
  halfStarIcon,
  happyFaceIcon,
  hashtagIcon,
  heartIcon,
  heartBrokenIcon,
  inboxIcon,
  neutralFaceIcon,
  pictureIcon,
  sadFaceIcon,
  shareIcon,
  starIcon,
  talkBubblesIcon,
  tasksIcon,
  thumbsDownIcon,
  thumbsUpIcon,
];

export const socialCollectionAliases: IconAlias[] = [
  [starIconName, ['favorite']],
  [envelopeIconName, ['email']],
  [calendarIconName, ['date']],
];

/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@cds/core/icon/register.js';
 * import { loadSocialIconSet } from '@cds/core/icon';
 *
 * loadSocialIconSet();
 * ```
 *
 */
export function loadSocialIconSet() {
  ClarityIcons.addIcons(...socialCollectionIcons);
  ClarityIcons.addAliases(...socialCollectionAliases);
}

declare module '@cds/core/internal' {
  interface IconRegistrySources {
    [bookmarkIconName]: string;
    [calendarIconName]: string;
    [chatBubbleIconName]: string;
    [crownIconName]: string;
    [envelopeIconName]: string;
    [eventIconName]: string;
    [flagIconName]: string;
    [halfStarIconName]: string;
    [happyFaceIconName]: string;
    [hashtagIconName]: string;
    [heartIconName]: string;
    [heartBrokenIconName]: string;
    [inboxIconName]: string;
    [neutralFaceIconName]: string;
    [pictureIconName]: string;
    [sadFaceIconName]: string;
    [shareIconName]: string;
    [starIconName]: string;
    [talkBubblesIconName]: string;
    [tasksIconName]: string;
    [thumbsDownIconName]: string;
    [thumbsUpIconName]: string;
  }
}
