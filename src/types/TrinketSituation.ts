import { TrinketType } from "isaac-typescript-definitions";

export interface TrinketSituation {
  trinketTypeRemoved: TrinketType | int;
  trinketType1: TrinketType | int;
  trinketType2: TrinketType | int;
  numSmeltedTrinkets: int;
}
