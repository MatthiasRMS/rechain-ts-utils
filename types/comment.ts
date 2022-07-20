import { User } from './user';

export enum ActivityType {
  Comment = 'comment',
  OrderUpdate = 'orderUpdateEvent',
  UploadEvent = 'attachment',
  Milestone = 'milestone',
}

export interface IActivity {
  itemType: ActivityType
  createdAt: string // as UTC String Date
  user: User
  id: number
}

export interface OrderUpdate extends IActivity {
  itemType: ActivityType.OrderUpdate
  newStatus: string
  comment: string
}

export interface UploadEvent extends IActivity {
  itemType: ActivityType.UploadEvent
  name: string
  category: string,
}

export interface Comment extends IActivity {
  itemType: ActivityType.Comment
  orderId?: number;
  productId?: number;
  content?: string;
}

export interface Milestone extends IActivity {
  itemType: ActivityType.Milestone
  orderId?: number;
  name: string;
  date: string; // as UTC String Date
  comment?: string;
}
