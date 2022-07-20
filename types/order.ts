import { Company } from './company';
import { OrderProduct } from './order_product';
import { OrderUpdateEvent } from './order_update_event';
import { Milestone } from './milestones';
export interface Order {
  id?: number;
  buyer?: {
    id: number,
    name: string,
  }
  otherPartyCompany?: {
    name: string,
    country: string,
  }
  supplierCompanyId?: number;
  companyId?: number;
  supplierCompany?: Company;
  orderProducts?: OrderProduct[];
  shippingDate?: string;
  estimatedDateOfDelivery?: string;
  templateId?: number;
  templateStepId?: number;
  orderUpdateEvents?: OrderUpdateEvent[]
  quantity?: number;
  unitsProduced?: number;
  milestones?: Milestone[]
}
