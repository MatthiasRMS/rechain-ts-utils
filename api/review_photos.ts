import { Repository } from './repository';
import ReviewPhoto from '../types/review_photo';

export default class ReviewPhotosRepository extends Repository {
  create(baseUrl: string, jwt: string, reviewId: number, photos: any) {
    const formData = new FormData();
    photos.forEach((photo: any, i: number) => {
      if (photo.id) {
        return;
      }
      formData.append(`photo ${i}`, photo.file);
    });
    return fetch(`${baseUrl}/api/v1/review_photos?review_id=${reviewId}`, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
  }

  delete(reviewPhotoId: number) {
    return this.api.$delete(`/api/v1/review_photos/${reviewPhotoId}`);
  }
}
