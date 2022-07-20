// return this.$api.fetch.$get(`/api/v1/reviews/${this.reviewId}`).then((response) => {
//   this.review = response;
//   this.selectedPhoto = this.review.reviewPhotos[0];
// });

import { Repository } from './repository';
import { ReviewPin } from '../types/review_pin';

export default class ReviewPinsRepository extends Repository {
  index(reviewId: number) {
    return this.api.$get<ReviewPin[]>(`/api/v1/review_pins?reviewId=${reviewId}`);
  }

  create(reviewPin: ReviewPin) {
    return this.api.$post<ReviewPin>('/api/v1/review_pins', {
      body: {
        reviewPin,
      },
    });
  }

  update(reviewPinId: number, reviewPin: Partial<ReviewPin>) {
    return this.api.$put<ReviewPin>(`/api/v1/review_pins/${reviewPinId}`, {
      body: {
        reviewPin,
      },
    });
  }
}
