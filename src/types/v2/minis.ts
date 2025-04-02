import { Schema, SchemaTypes } from './schema';

export type Minis<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Mini<V>['id'][];
}>[V];

export type Mini<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Mini.V0;
}>[V];

export namespace Mini {
  export type V0 = {
    /**
     * The mini id.
     */
    id: number;

    /**
     * The mini name.
     */
    name: string;

    /**
     * A description of how to unlock the mini.
     */
    unlock?: string;

    /**
     * The mini icon.
     */
    icon: string;

    /**
     * The sort order that is used for displaying the mini in-game.
     */
    order: number;

    /**
     * The item which unlocks the mini.
     */
    item_id: number;
  };
}
