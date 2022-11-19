import * as cc from "./callbackClasses";
import { ModCallbackCustom } from "./enums/ModCallbackCustom";
import { getEnumValues } from "./functions/enums";
import { HasAllEnumKeys } from "./types/HasAllEnumKeys";

const MOD_CALLBACK_CUSTOM_TO_CLASS = {
  [ModCallbackCustom.ENTITY_TAKE_DMG_FILTER]: cc.EntityTakeDmgFilter,
  [ModCallbackCustom.POST_AMBUSH_FINISHED]: cc.PostAmbushFinished,
  [ModCallbackCustom.POST_AMBUSH_STARTED]: cc.PostAmbushStarted,
  [ModCallbackCustom.POST_BOMB_EXPLODED]: cc.PostBombExploded,
  [ModCallbackCustom.POST_BOMB_INIT_LATE]: cc.PostBombInitLate,
  [ModCallbackCustom.POST_BONE_SWING]: cc.PostBoneSwing,
  [ModCallbackCustom.POST_COLLECTIBLE_EMPTY]: cc.PostCollectibleEmpty,
  [ModCallbackCustom.POST_COLLECTIBLE_INIT_FIRST]: cc.PostCollectibleInitFirst,
  [ModCallbackCustom.POST_CURSED_TELEPORT]: cc.PostCursedTeleport,
  [ModCallbackCustom.POST_CUSTOM_REVIVE]: cc.PostCustomRevive,
  [ModCallbackCustom.POST_DICE_ROOM_ACTIVATED]: cc.PostDiceRoomActivated,
  [ModCallbackCustom.POST_DOOR_RENDER]: cc.PostDoorRender,
  [ModCallbackCustom.POST_DOOR_UPDATE]: cc.PostDoorUpdate,
  [ModCallbackCustom.POST_EFFECT_INIT_LATE]: cc.PostEffectInitLate,
  [ModCallbackCustom.POST_EFFECT_STATE_CHANGED]: cc.PostEffectStateChanged,
  [ModCallbackCustom.POST_ESAU_JR]: cc.PostEsauJr,
  [ModCallbackCustom.POST_FAMILIAR_INIT_LATE]: cc.PostFamiliarInitLate,
  [ModCallbackCustom.POST_FAMILIAR_STATE_CHANGED]: cc.PostFamiliarStateChanged,
  [ModCallbackCustom.POST_FIRST_FLIP]: cc.PostFirstFlip,
  [ModCallbackCustom.POST_FIRST_ESAU_JR]: cc.PostFirstEsauJr,
  [ModCallbackCustom.POST_FLIP]: cc.PostFlip,
  [ModCallbackCustom.POST_GAME_STARTED_REORDERED]: cc.PostGameStartedReordered,
  [ModCallbackCustom.POST_GAME_STARTED_REORDERED_LAST]:
    cc.PostGameStartedReorderedLast,
  [ModCallbackCustom.POST_GREED_MODE_WAVE]: cc.PostGreedModeWave,
  [ModCallbackCustom.POST_GRID_ENTITY_BROKEN]: cc.PostGridEntityBroken,
  [ModCallbackCustom.POST_GRID_ENTITY_COLLISION]: cc.PostGridEntityCollision,
  [ModCallbackCustom.POST_GRID_ENTITY_CUSTOM_BROKEN]:
    cc.PostGridEntityCustomBroken,
  [ModCallbackCustom.POST_GRID_ENTITY_CUSTOM_COLLISION]:
    cc.PostGridEntityCustomCollision,
  [ModCallbackCustom.POST_GRID_ENTITY_CUSTOM_INIT]: cc.PostGridEntityCustomInit,
  [ModCallbackCustom.POST_GRID_ENTITY_CUSTOM_REMOVE]:
    cc.PostGridEntityCustomRemove,
  [ModCallbackCustom.POST_GRID_ENTITY_CUSTOM_RENDER]:
    cc.PostGridEntityCustomRender,
  [ModCallbackCustom.POST_GRID_ENTITY_CUSTOM_STATE_CHANGED]:
    cc.PostGridEntityCustomStateChanged,
  [ModCallbackCustom.POST_GRID_ENTITY_CUSTOM_UPDATE]:
    cc.PostGridEntityCustomUpdate,
  [ModCallbackCustom.POST_GRID_ENTITY_INIT]: cc.PostGridEntityInit,
  [ModCallbackCustom.POST_GRID_ENTITY_REMOVE]: cc.PostGridEntityRemove,
  [ModCallbackCustom.POST_GRID_ENTITY_RENDER]: cc.PostGridEntityRender,
  [ModCallbackCustom.POST_GRID_ENTITY_STATE_CHANGED]:
    cc.PostGridEntityStateChanged,
  [ModCallbackCustom.POST_GRID_ENTITY_UPDATE]: cc.PostGridEntityUpdate,
  [ModCallbackCustom.POST_HOLY_MANTLE_REMOVED]: cc.PostHolyMantleRemoved,
  [ModCallbackCustom.POST_ITEM_DISCHARGE]: cc.PostItemDischarge,
  [ModCallbackCustom.POST_ITEM_PICKUP]: cc.PostItemPickup,
  [ModCallbackCustom.POST_KNIFE_INIT_LATE]: cc.PostKnifeInitLate,
  [ModCallbackCustom.POST_LASER_INIT_LATE]: cc.PostLaserInitLate,
  [ModCallbackCustom.POST_NEW_LEVEL_REORDERED]: cc.PostNewLevelReordered,
  [ModCallbackCustom.POST_NEW_ROOM_EARLY]: cc.PostNewRoomEarly,
  [ModCallbackCustom.POST_NEW_ROOM_REORDERED]: cc.PostNewRoomReordered,
  [ModCallbackCustom.POST_NPC_DEATH_FILTER]: cc.PostNPCDeathFilter,
  [ModCallbackCustom.POST_NPC_INIT_FILTER]: cc.PostNPCInitFilter,
  [ModCallbackCustom.POST_NPC_INIT_LATE]: cc.PostNPCInitLate,
  [ModCallbackCustom.POST_NPC_RENDER_FILTER]: cc.PostNPCRenderFilter,
  [ModCallbackCustom.POST_NPC_STATE_CHANGED]: cc.PostNPCStateChanged,
  [ModCallbackCustom.POST_NPC_UPDATE_FILTER]: cc.PostNPCUpdateFilter,
  [ModCallbackCustom.POST_PEFFECT_UPDATE_REORDERED]:
    cc.PostPEffectUpdateReordered,
  [ModCallbackCustom.POST_PICKUP_COLLECT]: cc.PostPickupCollect,
  [ModCallbackCustom.POST_PICKUP_INIT_FIRST]: cc.PostPickupInitFirst,
  [ModCallbackCustom.POST_PICKUP_INIT_LATE]: cc.PostPickupInitLate,
  [ModCallbackCustom.POST_PICKUP_STATE_CHANGED]: cc.PostPickupStateChanged,
  [ModCallbackCustom.POST_PIT_RENDER]: cc.PostPitRender,
  [ModCallbackCustom.POST_PIT_UPDATE]: cc.PostPitUpdate,
  [ModCallbackCustom.POST_PLAYER_CHANGE_HEALTH]: cc.PostPlayerChangeHealth,
  [ModCallbackCustom.POST_PLAYER_CHANGE_STAT]: cc.PostPlayerChangeStat,
  [ModCallbackCustom.POST_PLAYER_CHANGE_TYPE]: cc.PostPlayerChangeType,
  [ModCallbackCustom.POST_PLAYER_COLLECTIBLE_ADDED]:
    cc.PostPlayerCollectibleAdded,
  [ModCallbackCustom.POST_PLAYER_COLLECTIBLE_REMOVED]:
    cc.PostPlayerCollectibleRemoved,
  [ModCallbackCustom.POST_PLAYER_FATAL_DAMAGE]: cc.PostPlayerFatalDamage,
  [ModCallbackCustom.POST_PLAYER_INIT_FIRST]: cc.PostPlayerInitFirst,
  [ModCallbackCustom.POST_PLAYER_INIT_LATE]: cc.PostPlayerInitLate,
  [ModCallbackCustom.POST_PLAYER_RENDER_REORDERED]:
    cc.PostPlayerRenderReordered,
  [ModCallbackCustom.POST_PLAYER_UPDATE_REORDERED]:
    cc.PostPlayerUpdateReordered,
  [ModCallbackCustom.POST_POOP_RENDER]: cc.PostPoopRender,
  [ModCallbackCustom.POST_POOP_UPDATE]: cc.PostPoopUpdate,
  [ModCallbackCustom.POST_PRESSURE_PLATE_RENDER]: cc.PostPressurePlateRender,
  [ModCallbackCustom.POST_PRESSURE_PLATE_UPDATE]: cc.PostPressurePlateUpdate,
  [ModCallbackCustom.POST_PROJECTILE_INIT_LATE]: cc.PostProjectileInitLate,
  [ModCallbackCustom.POST_PURCHASE]: cc.PostPurchase,
  [ModCallbackCustom.POST_ROCK_RENDER]: cc.PostRockRender,
  [ModCallbackCustom.POST_ROCK_UPDATE]: cc.PostRockUpdate,
  [ModCallbackCustom.POST_ROOM_CLEAR_CHANGED]: cc.PostRoomClearChanged,
  [ModCallbackCustom.POST_SACRIFICE]: cc.PostSacrifice,
  [ModCallbackCustom.POST_SLOT_ANIMATION_CHANGED]: cc.PostSlotAnimationChanged,
  [ModCallbackCustom.POST_SLOT_COLLISION]: cc.PostSlotCollision,
  [ModCallbackCustom.POST_SLOT_DESTROYED]: cc.PostSlotDestroyed,
  [ModCallbackCustom.POST_SLOT_INIT]: cc.PostSlotInit,
  [ModCallbackCustom.POST_SLOT_RENDER]: cc.PostSlotRender,
  [ModCallbackCustom.POST_SLOT_UPDATE]: cc.PostSlotUpdate,
  [ModCallbackCustom.POST_SPIKES_RENDER]: cc.PostSpikesRender,
  [ModCallbackCustom.POST_SPIKES_UPDATE]: cc.PostSpikesUpdate,
  [ModCallbackCustom.POST_TEAR_INIT_LATE]: cc.PostTearInitLate,
  [ModCallbackCustom.POST_TEAR_INIT_VERY_LATE]: cc.PostTearInitVeryLate,
  [ModCallbackCustom.POST_TNT_RENDER]: cc.PostTNTRender,
  [ModCallbackCustom.POST_TNT_UPDATE]: cc.PostTNTUpdate,
  [ModCallbackCustom.POST_TRANSFORMATION]: cc.PostTransformation,
  [ModCallbackCustom.POST_TRINKET_BREAK]: cc.PostTrinketBreak,
  [ModCallbackCustom.PRE_BERSERK_DEATH]: cc.PreBerserkDeath,
  [ModCallbackCustom.PRE_CUSTOM_REVIVE]: cc.PreCustomRevive,
  [ModCallbackCustom.PRE_GET_PEDESTAL]: cc.PreGetPedestal,
  [ModCallbackCustom.PRE_ITEM_PICKUP]: cc.PreItemPickup,
  [ModCallbackCustom.PRE_NEW_LEVEL]: cc.PreNewLevel,
  [ModCallbackCustom.PRE_NPC_COLLISION_FILTER]: cc.PreNPCCollisionFilter,
  [ModCallbackCustom.PRE_NPC_UPDATE_FILTER]: cc.PreNPCUpdateFilter,
} as const satisfies HasAllEnumKeys<ModCallbackCustom, unknown>

export type ModCallbackCustomToClass = {
  readonly [key in keyof typeof MOD_CALLBACK_CUSTOM_TO_CLASS]: InstanceType<
    typeof MOD_CALLBACK_CUSTOM_TO_CLASS[key]
  >;
};

export function getCallbacks(): ModCallbackCustomToClass {
  const instantiatedClasses: Record<number, unknown> = {};

  for (const modCallbackCustom of getEnumValues(ModCallbackCustom)) {
    const constructor = MOD_CALLBACK_CUSTOM_TO_CLASS[modCallbackCustom];
    instantiatedClasses[modCallbackCustom] = new constructor();
  }

  return instantiatedClasses as unknown as ModCallbackCustomToClass;
}
