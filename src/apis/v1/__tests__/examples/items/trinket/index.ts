import { TrinketType } from '@/types/v1';
import accessory from './accessory.json';
import amulet from './amulet.json';
import ring from './ring.json';

export default {
  [TrinketType.ACCESSORY]: accessory,
  [TrinketType.AMULET]: amulet,
  [TrinketType.RING]: ring,
};
