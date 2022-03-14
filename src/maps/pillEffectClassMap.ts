import { PillEffectClass } from "../types/PillEffectClass";

export const DEFAULT_PILL_EFFECT_CLASS = PillEffectClass.MODDED;

export const PILL_EFFECT_CLASS_MAP: {
  readonly [key in PillEffect]: PillEffectClass;
} = {
  [PillEffect.PILLEFFECT_NULL]: PillEffectClass.NULL,
  [PillEffect.PILLEFFECT_BAD_GAS]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_BAD_TRIP]: PillEffectClass.MEDIUM,
  [PillEffect.PILLEFFECT_BALLS_OF_STEEL]: PillEffectClass.MEDIUM,
  [PillEffect.PILLEFFECT_BOMBS_ARE_KEYS]: PillEffectClass.MEDIUM,
  [PillEffect.PILLEFFECT_EXPLOSIVE_DIARRHEA]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_FULL_HEALTH]: PillEffectClass.MEDIUM,
  [PillEffect.PILLEFFECT_HEALTH_DOWN]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_HEALTH_UP]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_I_FOUND_PILLS]: PillEffectClass.JOKE,
  [PillEffect.PILLEFFECT_PUBERTY]: PillEffectClass.JOKE,
  [PillEffect.PILLEFFECT_PRETTY_FLY]: PillEffectClass.MEDIUM,
  [PillEffect.PILLEFFECT_RANGE_DOWN]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_RANGE_UP]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_SPEED_DOWN]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_SPEED_UP]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_TEARS_DOWN]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_TEARS_UP]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_LUCK_DOWN]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_LUCK_UP]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_TELEPILLS]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_48HOUR_ENERGY]: PillEffectClass.MEDIUM,
  [PillEffect.PILLEFFECT_HEMATEMESIS]: PillEffectClass.MEDIUM,
  [PillEffect.PILLEFFECT_PARALYSIS]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_SEE_FOREVER]: PillEffectClass.MEDIUM,
  [PillEffect.PILLEFFECT_PHEROMONES]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_AMNESIA]: PillEffectClass.MEDIUM,
  [PillEffect.PILLEFFECT_LEMON_PARTY]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_WIZARD]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_PERCS]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_ADDICTED]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_RELAX]: PillEffectClass.JOKE,
  [PillEffect.PILLEFFECT_QUESTIONMARK]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_LARGER]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_SMALLER]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_INFESTED_EXCLAMATION]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_INFESTED_QUESTION]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_POWER]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_RETRO_VISION]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_FRIENDS_TILL_THE_END]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_X_LAX]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_SOMETHINGS_WRONG]: PillEffectClass.JOKE,
  [PillEffect.PILLEFFECT_IM_DROWSY]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_IM_EXCITED]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_GULP]: PillEffectClass.MEDIUM,
  [PillEffect.PILLEFFECT_HORF]: PillEffectClass.JOKE,
  [PillEffect.PILLEFFECT_SUNSHINE]: PillEffectClass.MINOR,
  [PillEffect.PILLEFFECT_VURP]: PillEffectClass.MEDIUM,
  [PillEffect.PILLEFFECT_SHOT_SPEED_DOWN]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_SHOT_SPEED_UP]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_EXPERIMENTAL]: PillEffectClass.MAJOR,
  [PillEffect.PILLEFFECT_EXPERIMENTAL]: PillEffectClass.MAJOR,
  [PillEffect.NUM_PILL_EFFECTS]: DEFAULT_PILL_EFFECT_CLASS,
};
