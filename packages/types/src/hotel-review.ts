export interface HotelGuestReview {
  id: string;
  bookingId: string;
  guestId: string;
  cleanlinessRating: number;
  comfortRating: number;
  locationRating: number;
  comment: string;
  createdAt: string;
}
