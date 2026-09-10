export interface VacationSearchFilters {
  region: string;
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  hasPool?: boolean;
  hasSauna?: boolean;
  billiards?: boolean;
  maxPriceUZS?: number;
}
