export enum Schema {
  /**
   * ### Changes
   * Add `last_modified` field to account and character records.
   */
  V0 = '2019-02-21T00:00:00.000Z',

  /**
   * ### Changes
   * Change `/v2/account/home/cats` to just list cat ids
   */
  V1 = '2019-03-22T00:00:00.000Z',

  /**
   * ### Changes
   * Change the `access_required` field in `v2/achievements/daily` to show product conditions
   */
  V2 = '2019-05-16T00:00:00.000Z',

  /**
   * ### Changes
   * Add `schema_versions` to `/v2.json`
   */
  V3 = '2019-05-21T23:00:00.000Z',

  /**
   * ### Changes
   * Change `/v2/tokeninfo` to show subtoken information when one is provided.
   */
  V4 = '2019-05-22T00:00:00.000Z',

  /**
   * ### Changes
   * - Add `code` and `skills_by_palette` to `/v2/professions`.
   * - Add `code` to `/v2/legends`.
   * - Add `build_storage_slots` to `/v2/account`.
   * - Add `build_tabs_unlocked`, `active_build_tab`, `build_tabs`, `equipment_tabs_unlocked`, `active_equipment_tab` and `equipment_tabs` to `/v2/characters/:id`.
   * - Add `equipment[i].location` and `equipment[i].tabs` to `/v2/characters/:id`. Remove `skills` and `specializations` from `/v2/characters/:id`.
   */
  V5 = '2019-12-19T00:00:00.000Z',

  /**
   * ### Changes
   * - Change the type of `details.secondary_suffix_item_id` from `/v2/items` to be an optional int.
   */
  V6 = '2020-11-17T00:30:00.000Z',

  /**
   * ### Changes
   * - Move `equipment_pvp` under `equipment_tabs` in `/v2/characters/:id`
   */
  V7 = '2021-04-06T21:00:00.000Z',

  /**
   * ### Changes
   * - Add `EquippedFromLegendaryArmory` and `LegendaryArmory` values to `equipment[i].location` field
   */
  V8 = '2021-07-15T13:00:00.000Z',

  /**
   * ### Changes
   * - Change `ingredients` to `item_ingredients` and add `currency_ingredients` to `/v2/recipes`.
   */
  V9 = '2022-03-09T02:00:00.000Z',

  /**
   * ### Changes
   * - Change `/v2/achievements/categories` to show tomorrow's dailies and show access requirements for relevant achievements.
   */
  V10 = '2022-03-23T19:00:00.000Z',

  /**
   * ### Changes
   * - Add wvw `team_id` to `/v2/account` to show world restructuring team id and move wvw fields into `wvw`
   */
  V11 = '2024-07-20T01:00:00.000Z',

  LATEST = V11,
}

type PreviousSchemaMap = {
  [Schema.V1]: Schema.V0;
  [Schema.V2]: Schema.V1;
  [Schema.V3]: Schema.V2;
  [Schema.V4]: Schema.V3;
  [Schema.V5]: Schema.V4;
  [Schema.V6]: Schema.V5;
  [Schema.V7]: Schema.V6;
  [Schema.V8]: Schema.V7;
  [Schema.V9]: Schema.V8;
  [Schema.V10]: Schema.V9;
  [Schema.V11]: Schema.V10;
};

export type PreviousSchema<T extends Schema> = T extends keyof PreviousSchemaMap ? PreviousSchemaMap[T] : never;

export type SchemaResponseValue<T, K extends Schema> = K extends keyof T
  ? T[K]
  : SchemaResponseValue<T, PreviousSchema<K>>;

export type SchemaResponse<T> = {
  [K in Schema]: SchemaResponseValue<T, K>;
};
