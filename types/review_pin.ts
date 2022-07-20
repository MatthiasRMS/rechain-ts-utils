export interface ReviewPin {
  id?: number,
  x: number,
  y: number,
  reviewPhotoId: number,
  createdAt: string,
  updatedAt: string,
  source: string,
  resolved: boolean
}
