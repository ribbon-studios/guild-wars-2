import { GatheringType } from '@/types/v1';
import foraging from './foraging.json';
import logging from './logging.json';
import mining from './mining.json';

export default {
  [GatheringType.FORAGING]: foraging,
  [GatheringType.LOGGING]: logging,
  [GatheringType.MINING]: mining,
};
