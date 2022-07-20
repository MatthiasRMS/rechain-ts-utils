export interface OrderUpdateEvent {
  id?: number;
  orderId?: number;
  from?: number;
  to?: number;
  updateDate?: string;
  comment?: string;
}
