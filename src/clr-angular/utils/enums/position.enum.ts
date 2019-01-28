/*
 *  Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

/**
 * A (clockwise) enumeration for positions around an element.
 *
 *     A    B    C
 *  L  ----------- D
 *     |         |
 *     |         |
 *  K  |         | E
 *     |         |
 *     |         |
 *  J  ----------- F
 *    I    H    G
 *
 * TOP_LEFT      = A
 * TOP_CENTER    = B
 * TOP_RIGHT     = C
 * RIGHT_TOP     = D
 * RIGHT_CENTER  = E
 * RIGHT_BOTTOM  = F
 * BOTTOM_RIGHT  = G
 * BOTTOM_CENTER = H
 * BOTTOM_LEFT   = I
 * LEFT_BOTTOM   = J
 * LEFT_CENTER   = K
 * LEFT_TOP      = L
 *
 *
 * Consumers tell us that they want something to display on the TOP_LEFT of the trigger and that they want the
 * _content_ container to anchor/orient AT the bottom left.
 * In order to calculate the position for the content I need to match up the anchor/toggle ClrPosition with the
 * content ClrPosition.
 *
 * Anchor TOP_LEFT **AT** Content BOTTOM_LEFT.
 *     -----------
 *     |         |
 *     |         |
 *     | content |
 *     |         |
 *     |         |
 *     -----------
 *     |/
 *      -----------
 *     |         |
 *     |         |
 *     | trigger |
 *     |         |
 *     |         |
 *     -----------
 *
 */

export enum ClrPosition {
  TOP_LEFT,
  TOP_CENTER,
  TOP_RIGHT,
  RIGHT_TOP,
  RIGHT_CENTER,
  RIGHT_BOTTOM,
  BOTTOM_RIGHT,
  BOTTOM_CENTER,
  BOTTOM_LEFT,
  LEFT_BOTTOM,
  LEFT_CENTER,
  LEFT_TOP,
}
