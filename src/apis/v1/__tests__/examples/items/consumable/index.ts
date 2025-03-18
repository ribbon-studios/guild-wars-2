import { ConsumableType } from '@/types/v1';
import appearanceChange from './appearance-change.json';
import booze from './booze.json';
import contractNPC from './contract-npc.json';
import food from './food.json';
import generic from './generic.json';
import halloween from './halloween.json';
import immediate from './immediate.json';
import transmutation from './transmutation.json';
import unlock from './unlock';
import unTransmutation from './un-transmutation.json';
import upgradeRemoval from './upgrade-removal.json';
import utility from './utility.json';

export default {
  [ConsumableType.APPEARANCE_CHANGE]: appearanceChange,
  [ConsumableType.BOOZE]: booze,
  [ConsumableType.CONTRACT_NPC]: contractNPC,
  [ConsumableType.FOOD]: food,
  [ConsumableType.GENERIC]: generic,
  [ConsumableType.HALLOWEEN]: halloween,
  [ConsumableType.IMMEDIATE]: immediate,
  [ConsumableType.TRANSMUTATION]: transmutation,
  [ConsumableType.UNLOCK]: unlock,
  [ConsumableType.UN_TRANSMUTATION]: unTransmutation,
  [ConsumableType.UPGRADE_REMOVAL]: upgradeRemoval,
  [ConsumableType.UTILITY]: utility,
};
