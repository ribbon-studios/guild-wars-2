import { BaseItem, ItemType } from './base';

export enum GizmoTypes {
  DEFAULT = 'Default',
  CONTAINER_KEY = 'ContainerKey',
  RENTABLE_CONTRACT_NPC = 'RentableContractNpc',
  UNLIMITED_CONSUMABLE = 'UnlimitedConsumable',
}

export type GizmoItem = BaseItem & {
  type: ItemType.GIZMO;

  /**
   * Gizmo specific properties.
   */
  gizmo: {
    /**
     * The gizmo type.
     */
    type: GizmoTypes;
  };
};
