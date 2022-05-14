import {
  ItemConfigPillEffectType,
  PillEffect,
} from "isaac-typescript-definitions";

export const DEFAULT_PILL_EFFECT_TYPE = ItemConfigPillEffectType.MODDED;

export const PILL_EFFECT_TYPES: {
  readonly [key in PillEffect]: ItemConfigPillEffectType;
} = {
  [PillEffect.BAD_GAS]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.BAD_TRIP]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.BALLS_OF_STEEL]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.BOMBS_ARE_KEYS]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.EXPLOSIVE_DIARRHEA]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.FULL_HEALTH]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.HEALTH_DOWN]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.HEALTH_UP]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.I_FOUND_PILLS]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.PUBERTY]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.PRETTY_FLY]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.RANGE_DOWN]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.RANGE_UP]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.SPEED_DOWN]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.SPEED_UP]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.TEARS_DOWN]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.TEARS_UP]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.LUCK_DOWN]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.LUCK_UP]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.TELEPILLS]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.FORTY_EIGHT_HOUR_ENERGY]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.HEMATEMESIS]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.PARALYSIS]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.I_CAN_SEE_FOREVER]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.PHEROMONES]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.AMNESIA]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.LEMON_PARTY]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.R_U_A_WIZARD]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.PERCS]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.ADDICTED]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.RELAX]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.QUESTION_MARKS]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.ONE_MAKES_YOU_LARGER]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.ONE_MAKES_YOU_SMALL]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.INFESTED_EXCLAMATION]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.INFESTED_QUESTION]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.POWER]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.RETRO_VISION]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.FRIENDS_TILL_THE_END]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.X_LAX]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.SOMETHINGS_WRONG]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.IM_DROWSY]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.IM_EXCITED]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.GULP]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.HORF]: ItemConfigPillEffectType.NEUTRAL,
  [PillEffect.FEELS_LIKE_IM_WALKING_ON_SUNSHINE]:
    ItemConfigPillEffectType.POSITIVE,
  [PillEffect.VURP]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.SHOT_SPEED_DOWN]: ItemConfigPillEffectType.NEGATIVE,
  [PillEffect.SHOT_SPEED_UP]: ItemConfigPillEffectType.POSITIVE,
  [PillEffect.EXPERIMENTAL]: ItemConfigPillEffectType.NEUTRAL,
};
