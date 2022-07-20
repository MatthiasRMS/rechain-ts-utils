import { Repository } from './repository';
import { Order } from '../types/order';

export default class OrdersRepository extends Repository {
  index(payload: any, currentPage: number, itemsPerPage: number, all: boolean, productCategories: any) {
    return this.api.$get<{orders: Order[], count: number}>(`/api/v1/orders?${all ? '?all=true' : ''}`, {
      params: {
        filters: payload,
        currentPage,
        itemsPerPage,
        productCategories,
      },
    });
  }

  count(buyerId: number) {
    return this.api.$get<number>(`/api/v1/orders/count?buyerId=${buyerId}`);
  }

  create(payload: any) {
    return this.api.$post('/api/v1/orders', {
      body: {
        order: payload,
      },
    });
  }

  show(id: number): Promise<Order> {
    return this.api.$get<Order>(`/api/v1/orders/${id}`);
  }

  getMultiple(ids: number[]): Promise<Order[]> {
    return this.api.$get<Order[]>('/api/v1/orders/', {
      params: {
        filters: [{
          ids,
        }],
      },
    });
  }

  getAllFromCompany(companyId: number): Promise<Order[]> {
    return this.api.$get<Order[]>('/api/v1/orders/', {
      params: {
        filters: [{
          companyId,
        }],
      },
    });
  }

  update(payload: any, id: number) {
    return this.api.$put(`/api/v1/orders/${id}`, payload);
  }

  delete(id: number) {
    return this.api.$delete(`/api/v1/orders/${id}`);
  }
}
