import { ModCallback } from "isaac-typescript-definitions";
import { game } from "../cachedClasses";
import { getRoomVisitedCount } from "../functions/roomData";
import {
  postPickupInitFirstFire,
  postPickupInitFirstHasSubscriptions,
} from "./subscriptions/postPickupInitFirst";

/** @internal */
export function postPickupInitFirstInit(mod: Mod): void {
  mod.AddCallback(ModCallback.POST_PICKUP_INIT, postPickupInit); // 34
}

function hasSubscriptions() {
  return postPickupInitFirstHasSubscriptions();
}

// ModCallback.POST_PICKUP_INIT (34)
function postPickupInit(pickup: EntityPickup) {
  if (!hasSubscriptions()) {
    return;
  }

  const room = game.GetRoom();
  const roomFrameCount = room.GetFrameCount();

  if (roomFrameCount > 0) {
    postPickupInitFirstFire(pickup);
    return;
  }

  const roomVisitedCount = getRoomVisitedCount();
  if (roomVisitedCount > 0) {
    return;
  }

  // We are entering a brand-new room.
  postPickupInitFirstFire(pickup);
}
