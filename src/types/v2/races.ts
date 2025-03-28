import { Schema, SchemaTypes } from './schema';

export type Races<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Race<V>['id'][];
}>;

export type Race<V extends Schema> = SchemaTypes<{
  [Schema.V0]: Race.V0;
}>[V];

export namespace Race {
  export type V0 = {
    /**
     * The id (name) of the race.
     */
    id: Type;

    /**
     * The name of the race.
     */
    name: Type;

    /**
     * Race specific skills.
     */
    skills: number[];
  };

  export enum Type {
    HUMAN = 'Human',
    ASURA = 'Asura',
    SYLVARI = 'Sylvari',
    CHARR = 'Charr',
    NORN = 'Norn',
  }
}
