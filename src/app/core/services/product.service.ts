import { Injectable, signal } from '@angular/core';
import { Product, ProductCategory } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly products = signal<Product[]>([
    {
      id: '1',
      name: 'Sakarias Armchair',
      price: 392,
      category: 'Chair',
      imageUrl: '/assets/images/chair-1.png',
      rating: 5,
      description: 'Comfortable and stylish armchair'
    },
    {
      id: '2',
      name: 'Baltsar Chair',
      price: 299,
      category: 'Chair',
      imageUrl: '/assets/images/chair-2.png',
      rating: 5,
      description: 'Modern dining chair'
    },
    {
      id: '3',
      name: 'Anjay Chair',
      price: 519,
      category: 'Chair',
      imageUrl: '/assets/images/chair-3.png',
      rating: 5,
      description: 'Elegant accent chair'
    },
    {
      id: '4',
      name: 'Nyantuy Chair',
      price: 921,
      category: 'Chair',
      imageUrl: '/assets/images/chair-4.png',
      rating: 4,
      description: 'Premium lounge chair'
    }
  ]);

  getProducts() {
    return this.products.asReadonly();
  }

  getProductsByCategory(category: ProductCategory | 'All') {
    if (category === 'All') {
      return this.products();
    }
    return this.products().filter(p => p.category === category);
  }

  getProductById(id: string) {
    return this.products().find(p => p.id === id);
  }
}
