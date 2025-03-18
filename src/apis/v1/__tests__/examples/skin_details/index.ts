import { Skin } from '@/types/v1';
import armor from './armor.json';
import weapon from './weapon.json';

export const skin_details = {
  [Skin.Type.ARMOR]: armor,
  [Skin.Type.WEAPON]: weapon,
};
