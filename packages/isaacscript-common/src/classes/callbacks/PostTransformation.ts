import { PlayerForm } from "isaac-typescript-definitions";
import { ModCallbackCustom2 } from "../../enums/ModCallbackCustom2";
import { getEnumValues } from "../../functions/enums";
import { defaultMapGetPlayer } from "../../functions/playerDataStructures";
import { PlayerIndex } from "../../types/PlayerIndex";
import { DefaultMap } from "../DefaultMap";
import {
  CustomCallback,
  FireArgs,
  OptionalArgs,
} from "../private/CustomCallback";

type T = ModCallbackCustom2.POST_TRANSFORMATION;

export class PostTransformation extends CustomCallback<T> {
  public override v = {
    run: {
      // We cannot use a nested `DefaultMap` here.
      playersTransformationsMap: new DefaultMap<
        PlayerIndex,
        Map<PlayerForm, boolean>
      >(() => new Map()),
    },
  };

  constructor() {
    super();

    this.customCallbacksUsed = [
      [
        ModCallbackCustom2.POST_PEFFECT_UPDATE_REORDERED,
        [this.postPEffectUpdateReordered],
      ],
    ];
  }

  // eslint-disable-next-line class-methods-use-this
  protected override shouldFire(
    fireArgs: FireArgs<T>,
    optionalArgs: OptionalArgs<T>,
  ): boolean {
    const [callbackPlayerForm] = optionalArgs;
    if (callbackPlayerForm === undefined) {
      return true;
    }

    const [_player, playerForm] = fireArgs;
    return playerForm === callbackPlayerForm;
  }

  // ModCallbackCustom.POST_PEFFECT_UPDATE_REORDERED
  private postPEffectUpdateReordered = (player: EntityPlayer) => {
    const playerTransformationsMap = defaultMapGetPlayer(
      this.v.run.playersTransformationsMap,
      player,
    );

    for (const playerForm of getEnumValues(PlayerForm)) {
      const hasForm = player.HasPlayerForm(playerForm);
      let storedForm = playerTransformationsMap.get(playerForm);
      if (storedForm === undefined) {
        storedForm = false;
      }

      if (hasForm !== storedForm) {
        playerTransformationsMap.set(playerForm, hasForm);
        this.fire(player, playerForm, hasForm);
      }
    }
  };
}
