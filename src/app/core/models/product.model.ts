export interface Product {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  imageUrl: string;
  rating: number;
  description?: string;
}

export type ProductCategory = 'Chair' | 'Table' | 'Sofa' | 'Lamp';

export const PRODUCT_CATEGORIES: ProductCategory[] = ['Chair', 'Table', 'Sofa', 'Lamp'];
