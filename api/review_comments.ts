import { Repository } from './repository';
import { ReviewComment } from '../types/review_comments';

export default class ReviewCommentsRepository extends Repository {
  index(reviewId: number) {
    console.log(this.api);
    return this.api.$get<ReviewComment[]>(`/api/v1/review_comments?reviewId=${reviewId}`);
  }

  create(reviewComment: ReviewComment) {
    return this.api.$post<ReviewComment>('/api/v1/review_comments', {
      body: {
        reviewComment,
      },
    });
  }
}
