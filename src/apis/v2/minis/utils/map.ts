import { Mini, Minis, Schema } from '@/types/v2';

export namespace MiniUtils {
  export function correctAll<V extends Schema>(minis: Mini<V>[]): Mini<V>[] {
    return minis.map(correct);
  }

  export function correct<V extends Schema>(mini: Mini<V>): Mini<V> {
    const correction = CORRECTION_MAP[mini.id];

    if (mini.name === '((208738))' && correction) {
      return {
        ...mini,
        ...correction,
      };
    }

    return mini;
  }

  export function is<V extends Schema>(minis: Minis<V> | Mini<V>[]): minis is Mini<V>[] {
    return minis.length === 0 || typeof minis[0] !== 'number';
  }

  export const CORRECTION_MAP: Record<number, Pick<Mini<Schema.LATEST>, 'name' | 'item_id'>> = {
    747: {
      name: 'Mini Shrine Guardian',
      item_id: 90009,
    },
    717: {
      name: 'Mini Exo-Suit Springer',
      item_id: 88464,
    },
    715: {
      name: 'Mini Exo-Suit Raptor',
      item_id: 88402,
    },
    714: {
      name: 'Mini Exo-Suit Skimmer',
      item_id: 88437,
    },
    713: {
      name: 'Mini Exo-Suit Jackal',
      item_id: 88469,
    },
    709: {
      name: 'Mini Exo-Suit Griffon',
      item_id: 88389,
    },
    699: {
      name: 'Mini Awakened Raptor',
      item_id: 87778,
    },
    694: {
      name: 'Mini Awakened Skimmer',
      item_id: 87753,
    },
    693: {
      name: 'Mini Awakened Jackal',
      item_id: 87626,
    },
    691: {
      name: 'Mini Awakened Springer',
      item_id: 87760,
    },
    689: {
      name: 'Mini Awakened Griffon',
      item_id: 87934,
    },
    663: {
      name: 'Mini Branded Skimmer',
      item_id: 87203,
    },
    662: {
      name: 'Mini Branded Jackal',
      item_id: 87141,
    },
    661: {
      name: 'Mini Branded Springer',
      item_id: 87156,
    },
    660: {
      name: 'Mini Branded Raptor',
      item_id: 87236,
    },
    657: {
      name: 'Mini Branded Griffon',
      item_id: 87133,
    },
    655: {
      name: 'Mini Umbral Demon Skimmer',
      item_id: 86948,
    },
    654: {
      name: 'Mini Lucky Lantern Puppy',
      item_id: 86958,
    },
    653: {
      name: 'Mini Reforged Warhound Jackal',
      item_id: 86956,
    },
    652: {
      name: 'Mini Grand Lion Griffon',
      item_id: 86927,
    },
    649: {
      name: 'Mini Summit Wildhorn Springer',
      item_id: 86939,
    },
    648: {
      name: 'Mini Resplendent Avialan Raptor',
      item_id: 86950,
    },
    635: {
      name: 'Mini Cozy Wintersday Griffon',
      item_id: 86581,
    },
    633: {
      name: 'Mini Cozy Wintersday Jackal',
      item_id: 86692,
    },
    631: {
      name: 'Mini Cozy Wintersday Skimmer',
      item_id: 86609,
    },
    629: {
      name: 'Mini Cozy Wintersday Springer',
      item_id: 86644,
    },
    627: {
      name: 'Mini Cozy Wintersday Raptor',
      item_id: 86693,
    },
    611: {
      name: 'Mini Spooky Jackal',
      item_id: 85401,
    },
    610: {
      name: 'Mini Spooky Griffon',
      item_id: 85461,
    },
    609: {
      name: 'Mini Spooky Springer',
      item_id: 85458,
    },
    605: {
      name: 'Mini Spooky Raptor',
      item_id: 85435,
    },
    602: {
      name: 'Mini Kormeerkat',
      item_id: 85517,
    },
    599: {
      name: 'Mini Spooky Skimmer',
      item_id: 85467,
    },
  };
}
