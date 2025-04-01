import { Schema, SchemaTypes } from './schema';

export type Titles<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Title<V>['id'][];
}>;

export type Title<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Title.V0;
}>[V];

export namespace Title {
  export type V0 = {
    /**
     * The ID of the title.
     */
    id: number;

    /**
     * The name of the title.
     */
    name: string;

    /**
     * The id of the achievement that grants this title.
     * @deprecated Use {@link achievements} instead.
     */
    achievement: number;

    /**
     * The id of the achievements that grants this title.
     */
    achievements: number[];

    /**
     * The amount of AP required to get the title.
     */
    ap_required?: number;
  };
}
