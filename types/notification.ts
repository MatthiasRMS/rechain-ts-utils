import { Order } from './order';
import { User } from './user';

export interface Notification {
  id: number;
  user?: User;
  order?: Order;
}

export interface Notice {
  id: number;
  type: 'error' | 'success';
  title: string;
  subtitle?: string;
  timeout?: number;
}

export interface NewNotice {
  type: 'error' | 'success';
  title: string;
  subtitle?: string;
  timeout?: number;
}
