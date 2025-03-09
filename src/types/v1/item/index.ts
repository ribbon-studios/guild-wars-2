import { ArmorItem } from './armor';
import { BackItem } from './back';
import { BagItem } from './bag';
import { ConsumableItem } from './consumable';
import { ContainerItem } from './container';
import { CraftingMaterialItem } from './crafting-material';
import { GatheringItem } from './gathering';
import { GizmoItem } from './gizmo';
import { MiniPetItem } from './mini-pet';
import { ToolItem } from './tool';
import { TrinketItem } from './trinket';
import { TrophyItem } from './trophy';
import { UpgradeComponentItem } from './upgrade-component';
import { WeaponItem } from './weapon';

export type Item =
  | ArmorItem
  | BackItem
  | BagItem
  | ConsumableItem
  | ContainerItem
  | CraftingMaterialItem
  | GatheringItem
  | GizmoItem
  | MiniPetItem
  | ToolItem
  | TrinketItem
  | TrophyItem
  | UpgradeComponentItem
  | WeaponItem;

export * from './base';
export * from './armor';
export * from './back';
export * from './bag';
export * from './consumable';
export * from './container';
export * from './crafting-material';
export * from './gathering';
export * from './gizmo';
export * from './mini-pet';
export * from './tool';
export * from './trinket';
export * from './trophy';
export * from './upgrade-component';
export * from './weapon';
