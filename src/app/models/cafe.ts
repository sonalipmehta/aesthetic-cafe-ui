export interface Cafe{
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  description?: string;
  tags?: string[];
}