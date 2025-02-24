import { ModCallbackCustom } from "../../enums/ModCallbackCustom";
import { getPickups } from "../../functions/entitiesSpecific";
import {
  defaultMapGetPlayer,
  mapSetPlayer,
} from "../../functions/playerDataStructures";
import { PlayerIndex } from "../../types/PlayerIndex";
import { DefaultMap } from "../DefaultMap";
import {
  CustomCallback,
  FireArgs,
  OptionalArgs,
} from "../private/CustomCallback";

type T = ModCallbackCustom.POST_PURCHASE;

const v = {
  room: {
    playersHoldingItemOnLastFrameMap: new DefaultMap<PlayerIndex, boolean>(
      false,
    ),
  },
};

export class PostPurchase extends CustomCallback<T> {
  public override v = v;

  constructor() {
    super();

    this.customCallbacksUsed = [
      [
        ModCallbackCustom.POST_PEFFECT_UPDATE_REORDERED,
        this.postPEffectUpdateReordered,
      ],
    ];
  }

  protected override shouldFire = (
    fireArgs: FireArgs<T>,
    optionalArgs: OptionalArgs<T>,
  ): boolean => {
    const [_player, pickup] = fireArgs;
    const [callbackPickupVariant, callbackPickupSubType] = optionalArgs;

    return (
      (callbackPickupVariant === undefined ||
        callbackPickupVariant === pickup.Variant) &&
      (callbackPickupSubType === undefined ||
        callbackPickupSubType === pickup.SubType)
    );
  };

  // ModCallbackCustom.POST_PEFFECT_UPDATE_REORDERED
  private postPEffectUpdateReordered = (player: EntityPlayer) => {
    const isHoldingItem = player.IsHoldingItem();
    const wasHoldingItemOnLastFrame = defaultMapGetPlayer(
      v.room.playersHoldingItemOnLastFrameMap,
      player,
    );
    mapSetPlayer(
      v.room.playersHoldingItemOnLastFrameMap,
      player,
      isHoldingItem,
    );

    if (!wasHoldingItemOnLastFrame && isHoldingItem) {
      this.playerPickedUpNewItem(player);
    }
  };

  private playerPickedUpNewItem(player: EntityPlayer) {
    const pickups = getPickups();
    const disappearingPickup = pickups.find(
      (pickup) => !pickup.Exists() && pickup.Price !== 0,
    );
    if (disappearingPickup !== undefined) {
      this.fire(player, disappearingPickup);
    }
  }
}
