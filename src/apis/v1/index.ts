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

export class V1 {
  constructor(protected config: GuildWars2.Config.V1) {}

  wvw = wvw;
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
