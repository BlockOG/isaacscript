import { saveDataManager } from "../features/saveDataManager/main";
import { getPlayerIndex, PlayerIndex } from "../functions/player";
import * as postPlayerInitLate from "./subscriptions/postPlayerInitLate";

const v = {
  run: {
    firedMap: new Map<PlayerIndex, boolean>(),
  },
};

export function init(mod: Mod): void {
  saveDataManager("postPlayerInitLate", v, hasSubscriptions);

  mod.AddCallback(ModCallbacks.MC_POST_PLAYER_UPDATE, postPlayerUpdate); // 31
}

function hasSubscriptions() {
  return postPlayerInitLate.hasSubscriptions();
}

// ModCallbacks.MC_POST_PLAYER_UPDATE (31)
function postPlayerUpdate(player: EntityPlayer) {
  if (!hasSubscriptions()) {
    return;
  }

  const playerIndex = getPlayerIndex(player);
  Isaac.DebugString(`PLAYER INDEX IS: ${playerIndex}`);
  const fired = v.run.firedMap.get(playerIndex);
  if (fired === undefined) {
    v.run.firedMap.set(playerIndex, true);
    postPlayerInitLate.fire(player);
  }
}
