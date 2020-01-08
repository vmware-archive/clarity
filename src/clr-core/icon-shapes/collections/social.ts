/*
* Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { ClarityIcons } from '../icon.service';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces';

import { bookmarkIcon, bookmarkIconName } from '../shapes/bookmark';
import { calendarIcon, calendarIconName } from '../shapes/calendar';
import { chatBubbleIcon, chatBubbleIconName } from '../shapes/chat-bubble';
import { crownIcon, crownIconName } from '../shapes/crown';
import { envelopeIcon, envelopeIconName } from '../shapes/envelope';
import { eventIcon, eventIconName } from '../shapes/event';
import { flagIcon, flagIconName } from '../shapes/flag';
import { halfStarIcon, halfStarIconName } from '../shapes/half-star';
import { happyFaceIcon, happyFaceIconName } from '../shapes/happy-face';
import { hashtagIcon, hashtagIconName } from '../shapes/hashtag';
import { heartIcon, heartIconName } from '../shapes/heart';
import { heartBrokenIcon, heartBrokenIconName } from '../shapes/heart-broken';
import { inboxIcon, inboxIconName } from '../shapes/inbox';
import { neutralFaceIcon, neutralFaceIconName } from '../shapes/neutral-face';
import { pictureIcon, pictureIconName } from '../shapes/picture';
import { sadFaceIcon, sadFaceIconName } from '../shapes/sad-face';
import { shareIcon, shareIconName } from '../shapes/share';
import { starIcon, starIconName } from '../shapes/star';
import { talkBubblesIcon, talkBubblesIconName } from '../shapes/talk-bubbles';
import { tasksIcon, tasksIconName } from '../shapes/tasks';
import { thumbsDownIcon, thumbsDownIconName } from '../shapes/thumbs-down';
import { thumbsUpIcon, thumbsUpIconName } from '../shapes/thumbs-up';

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
 * import '@clr/core/icon';
 * import { loadSocialIconSet } from '@clr/core/icon-shapes';
 *
 * loadSocialIconSet();
 * ```
 *
 */
export function loadSocialIconSet() {
  ClarityIcons.addIcons(...socialCollectionIcons);
  ClarityIcons.addAliases(...socialCollectionAliases);
}

declare module '@clr/core/common' {
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
