export interface ProductCategory {
  id: number;
  en: string;
  fr: string;
  children?: ProductCategory[];
  ancestry?: number;
}

export interface ProductCategoryStore extends ProductCategory {
  selected: boolean;
}
