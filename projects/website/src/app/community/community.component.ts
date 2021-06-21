/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import CLARITYTEAM from '../../community/team.json';
import CONTRIBUTORS from '../../community/contributors.json';

@Component({
  selector: 'community',
  templateUrl: 'community.component.html',
  styleUrls: ['./community.component.scss'],
  host: {
    '[class.content-container]': 'true',
  },
})
export class CommunityComponent {
  team: any[] = CLARITYTEAM.members;
  contributors: string[] = CONTRIBUTORS.contributors;
  teamImgUrl: string = 'assets/images/team/';
}
