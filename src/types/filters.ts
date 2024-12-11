export interface SearchFilters {
  location: string;
  propertyType: string;
  priceRange: string;
}

export interface PriceRange {
  min: number;
  max: number | null;
}

export const getPriceRangeValues = (range: string): PriceRange => {
  switch (range) {
    case '0-1000':
      return { min: 0, max: 1000 };
    case '1000-2000':
      return { min: 1000, max: 2000 };
    case '2000-3000':
      return { min: 2000, max: 3000 };
    case '3000+':
      return { min: 3000, max: null };
    default:
      return { min: 0, max: null };
  }
};