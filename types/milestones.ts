export interface Milestone {
  id: number;
  name: string;
  dueDate: Date;
  calendarActionId: number;
  comment?: string;
  planned: boolean;
  orderId: number;
  userId: number;
}

export interface NewMilestoneDTO {
  id?: number,
  name: string;
  dueDate: Date;
  calendarActionId: number;
  comment?: string;
  planned?: boolean;
  orderId: number;
  userId: number;
  linkedMilestone?: NewMilestoneDTO;
}

export const DEFAULT_MILESTONE_NAMES: string[] = [
  'Sample ordered',
  'Sample estimated delivery date',
];
