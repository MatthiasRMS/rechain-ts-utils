import { Repository } from './repository';
import { Product } from '../types/product';

export default class ProductsRepository extends Repository {
  index(filters: Array<object>) {
    return this.api.$get<{ products: Product[] }>('/api/v1/products', {
      params: {
        filters,
      },
    }).then(data => data.products);
  }

  create(payload: any) {
    return this.api.$post('/api/v1/products', {
      body: {
        product: payload,
      },
    });
  }

  show(id: number) {
    return this.api.$get<Product>(`/api/v1/products/${id}`);
  }

  update(payload: any, id: number) {
    return this.api.$put(`/api/v1/products/${id}`, {
      body: {
        product: payload,
      },
    });
  }

  delete(id: number) {
    return this.api.$delete(`/api/v1/products/${id}`);
  }
}
