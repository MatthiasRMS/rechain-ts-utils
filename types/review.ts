import ReviewPhoto from '../types/review_photo';

export interface Review {
  name: string,
  orderId: number,
  createdAt: string,
  updatedAt: string,
  productId: number,
  milestoneId: number,
  userId: number,
  reviewPhotos: ReviewPhoto[],
}
