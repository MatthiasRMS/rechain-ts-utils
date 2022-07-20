import { CustomizationOption } from './customization_option';
import { ProductPhoto } from './product_photo';

export interface Product {
  id?: number;
  companyId?: number;
  buyerId?: number;
  photos?: string[];
  parentProductCategoryId?: number;
  productCategoryId?: number;
  name?: string;
  productPhotos?: ProductPhoto[];
  customizationOptions?: CustomizationOption[];
  description: string;
}
