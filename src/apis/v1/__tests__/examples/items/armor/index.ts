import { ArmorType } from '@/types';
import boots from './boots.json';
import coat from './coat.json';
import gloves from './gloves.json';
import helm from './helm.json';
import helmAquatic from './helm-aquatic.json';
import leggings from './leggings.json';
import shoulders from './shoulders.json';

export default {
  [ArmorType.BOOTS]: boots,
  [ArmorType.COAT]: coat,
  [ArmorType.GLOVES]: gloves,
  [ArmorType.HELM]: helm,
  [ArmorType.HELM_AQUATIC]: helmAquatic,
  [ArmorType.LEGGINGS]: leggings,
  [ArmorType.SHOULDERS]: shoulders,
};
