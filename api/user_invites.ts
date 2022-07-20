import { UserInvite } from '../types/user_invite';
import { Repository } from './repository';
export default class UserInvitesRepository extends Repository {
  index(companyId: number) {
    return this.api.$get<UserInvite[]>(`/api/v1/user_invites?companyId=${companyId}`);
  }
}
