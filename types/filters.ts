export type EquipmentKey =
  | 'AC'
  | 'bathroom'
  | 'kitchen'
  | 'TV'
  | 'radio'
  | 'refrigerator'
  | 'microwave'
  | 'gas'
  | 'water';

export interface Filters {
  location?: string;
  form?: 'alcove' | 'fullyIntegrated' | 'panelTruck';
  equipment?: EquipmentKey[];
  page?: number;
  limit?: number;
}
export interface ApiFilters {
  location?: string;
  form?: 'alcove' | 'fullyIntegrated' | 'panelTruck';
  page?: number;
  limit?: number;
  equipment?: string;
}
