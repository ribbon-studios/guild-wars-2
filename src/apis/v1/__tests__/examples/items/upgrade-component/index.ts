import { UpgradeComponentType } from '@/types/v1';
import defaultComponent from './default.json';

export default {
  [UpgradeComponentType.DEFAULT]: defaultComponent,
  [UpgradeComponentType.GEM]: undefined,
  [UpgradeComponentType.RUNE]: undefined,
  [UpgradeComponentType.SIGIL]: undefined,
};
