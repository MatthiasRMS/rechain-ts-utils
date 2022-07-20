import { User } from './user';

export interface UserSubscription {
  id?: number;
  user?: User;
  orderId?: number;
}
