export enum RoomShape {
  /**
   * A "normal" room.
   *
   * The "SHAPE_" prefix is necessary because enums cannot start with a number.
   */
  SHAPE_1x1 = 1,

  /** Narrow 1x1 horizontal. */
  IH = 2,

  /** Narrow 1x1 vertical. */
  IV = 3,

  /**
   * 2x1 vertical.
   *
   * The "SHAPE_" prefix is necessary because enums cannot start with a number.
   */
  SHAPE_1x2 = 4,

  /** Narrow 2x1 vertical. */
  IIV = 5,

  /**
   * 2x1 horizontal.
   *
   * The "SHAPE_" prefix is necessary because enums cannot start with a number.
   */
  SHAPE_2x1 = 6,

  /** Narrow 2x1 horizontal. */
  IIH = 7,

  /**
   * The biggest room type.
   *
   * The "SHAPE_" prefix is necessary because enums cannot start with a number.
   */
  SHAPE_2x2 = 8,

  /** Looks like a "⅃" with a gap in the top-left-hand corner. */
  LTL = 9,

  /** Looks like an "L" with a gap in the top-right-hand corner. */
  LTR = 10,

  /** Looks like a "⅂" with a gap in the bottom-left-hand corner. */
  LBL = 11,

  /** Looks like a "Г" with a gap in the bottom-right-hand corner. */
  LBR = 12,
}
