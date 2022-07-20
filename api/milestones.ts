import { Milestone, NewMilestoneDTO } from '../types/milestones';
import { Repository } from './repository';

export default class MilestonesRepository extends Repository {
  create(payload: NewMilestoneDTO) {
    return this.api.$post<Milestone>('/api/v1/milestones', {
      body: {
        milestone: payload,
      },
    });
  }

  update(payload: NewMilestoneDTO) {
    return this.api.$put<Milestone>(`/api/v1/milestones/${payload.id}`, {
      body: {
        milestone: payload,
      },
    });
  }
}
