import { Repository } from './repository';
import { ManufacturerProduct } from '../types/manufacturer_product';

export default class ManufacturerProductsRepository extends Repository {
  index(supplierId: number) {
    console.log(supplierId);
    return this.api.$get<ManufacturerProduct[]>(`/api/v1/manufacturer_products?supplierId=${supplierId}`);
  }

  create(payload: any) {
    return this.api.$post<ManufacturerProduct>('/api/v1/manufacturer_products', {
      body: {
        manufacturerProduct: payload,
      },
    });
  }

  delete(id: number) {
    return this.api.$delete(`/api/v1/manufacturer_products/${id}`);
  }
}
