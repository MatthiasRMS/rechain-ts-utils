import { Product } from './product';

export interface OrderProduct {
  id?: number;
  productId: number;
  product?: Product;
  supplierCompanyId: number;
  pricePerUnit: number;
  quantity?: number;
  orderId?: number;
}
