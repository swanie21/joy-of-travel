export interface Trip {
  checkInDate: string;
  heroImage: string;
  locationName: string; // used for hero image alt attribute
  unitName: string;
  unitStyleName: string;
}

export type UnitStyleType = 'all' | 'beach' | 'lifestyle' | 'metropolitan' | 'mountain'