// return this.$api.fetch.$get(`/api/v1/reviews/${this.reviewId}`).then((response) => {
//   this.review = response;
//   this.selectedPhoto = this.review.reviewPhotos[0];
// });

import { Repository } from './repository';
import { Review } from '../types/review';

export default class ReviewsRepository extends Repository {
  // index(companyId: number) {
  //   return this.api.$get<Review[]>('/api/v1/reviews', {
  //     params: {
  //       companyId,
  //     },
  //   });
  // }

  show(id: number) {
    return this.api.$get<Review>(`/api/v1/reviews/${id}`);
  }
}
