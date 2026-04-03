import chairs from '@/assets/plastic-furniture/chairs.jpg';
import diningSets from '@/assets/plastic-furniture/dining-sets.jpg';
import centerTables from '@/assets/plastic-furniture/center-tables.jpg';
import stools from '@/assets/plastic-furniture/stools.jpg';
import storages from '@/assets/plastic-furniture/storages.jpg';
import kidsFurnitures from '@/assets/plastic-furniture/kids-furnitures.jpg';
import multipurposeStorages from '@/assets/plastic-furniture/multipurpose-storages.jpg';
import beds from '@/assets/plastic-furniture/Beds.jpg';

import steelAlmirahs from '@/assets/home-furnitures/steel-almirahs.jpg';
import tvUnits from '@/assets/home-furnitures/tv-units.webp';
import homeBeds from '@/assets/home-furnitures/beds.jpg';
import wardrobes from '@/assets/home-furnitures/wardrobes.webp';
import dressingTables from '@/assets/home-furnitures/dressing-tables.webp';

/** Maps item index within each category to an image. Key: "categoryId-index" */
export const PRODUCT_IMAGES: Record<string, string> = {
  'plastic-0': chairs.src,
  'plastic-1': diningSets.src,
  'plastic-2': centerTables.src,
  'plastic-3': stools.src,
  'plastic-4': storages.src,
  'plastic-5': kidsFurnitures.src,
  'plastic-6': multipurposeStorages.src,
  'plastic-7': beds.src,
  'home-0': steelAlmirahs.src,
  'home-1': tvUnits.src,
  'home-2': homeBeds.src,
  'home-3': wardrobes.src,
  'home-4': dressingTables.src,
};
