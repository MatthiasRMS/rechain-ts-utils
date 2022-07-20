import { Repository } from './repository';

export default class ProductPhotosRepository extends Repository {
  create(payload: any) {
    return this.api.$post('/api/v1/product_photos', payload);
  }

  delete(id: number) {
    return this.api.$delete(`/api/v1/product_photos/${id}`);
  }
}
