import { ItemType } from '@/types/v1';
import armor from './armor';
import back from './back.json';
import bag from './bag.json';
import consumable from './consumable';
import container from './container.json';
import craftingMaterial from './crafting-material.json';
import gathering from './gathering';
import gizmo from './gizmo.json';
import miniPet from './mini-pet.json';
import tool from './tool.json';
import trinket from './trinket';
import trophy from './trophy.json';
import upgradeComponent from './upgrade-component';
import weapon from './weapon.json';

export default {
  [ItemType.ARMOR]: armor,
  [ItemType.BACK]: back,
  [ItemType.BAG]: bag,
  [ItemType.CONSUMABLE]: consumable,
  [ItemType.CONTAINER]: container,
  [ItemType.CRAFTING_MATERIAL]: craftingMaterial,
  [ItemType.GATHERING]: gathering,
  [ItemType.GIZMO]: gizmo,
  [ItemType.MINI_PET]: miniPet,
  [ItemType.TOOL]: tool,
  [ItemType.TRINKET]: trinket,
  [ItemType.TROPHY]: trophy,
  [ItemType.UPGRADE_COMPONENT]: upgradeComponent,
  [ItemType.WEAPON]: weapon,
};
