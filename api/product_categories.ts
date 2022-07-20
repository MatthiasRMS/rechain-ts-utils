import { ProductCategory } from '../types/product_category';
import { Repository } from './repository';

export default class ProductCategoriesRepository extends Repository {
  index() {
    return this.api.$get<ProductCategory[]>('/api/v1/product_categories');
  }
}
