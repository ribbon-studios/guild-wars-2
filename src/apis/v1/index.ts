import { GuildWars2 } from '@/index';

import * as wvw from './wvw';
import { build } from './build';
import { colors } from './colors';
import { continents } from './continents';
import { eventDetails } from './eventDetails';
import { files } from './files';
import { guildDetails } from './guildDetails';
import { itemDetails } from './itemDetails';
import { items } from './items';
import { mapFloor } from './mapFloor';
import { mapNames } from './mapNames';
import { maps } from './maps';
import { skinDetails } from './skinDetails';
import { skins } from './skins';
import { worldNames } from './worldNames';
import { bind } from '@/utils';
import { rfetch, RibbonFetchBasicOptions } from '@ribbon-studios/js-utils';

export class V1 implements V1.API {
  constructor(protected config: GuildWars2.Config.V1) {}

  async fetch<T>(endpoint: string, options: RibbonFetchBasicOptions = {}): Promise<T> {
    const url = new URL(endpoint, 'https://api.guildwars2.com');

    // If we're running in a browser then bypass the OPTIONS call
    if (typeof process !== 'object') {
      options.mode = 'cors';
    }

    if (Object.keys(options).length > 0) {
      return rfetch.get<T>(url.toString(), options);
    }

    return rfetch.get<T>(url.toString());
  }

  wvw = bind(wvw, this as V1.API);

  build = build;
  colors = colors;
  continents = continents;
  eventDetails = eventDetails;
  files = files;
  guildDetails = guildDetails;
  itemDetails = itemDetails;
  items = items;
  mapFloor = mapFloor;
  mapNames = mapNames;
  maps = maps;
  skinDetails = skinDetails;
  skins = skins;
  worldNames = worldNames;
}

export namespace V1 {
  export interface API {
    fetch<T>(endpoint: string, options?: RibbonFetchBasicOptions): Promise<T>;
  }
}
