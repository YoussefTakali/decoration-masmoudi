import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <div class="image-container">
        <img [src]="product().imageUrl" [alt]="product().name" />
      </div>
      <div class="content">
        <div class="category">{{ product().category }}</div>
        <h3 class="name">{{ product().name }}</h3>
        <div class="rating">
          @for (star of [1,2,3,4,5]; track star) {
            <span class="star" [class.filled]="star <= product().rating">★</span>
          }
        </div>
        <div class="footer">
          <span class="price">\${{ product().price }}</span>
          <button class="add-btn" (click)="addToCart.emit(product())">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="currentColor"/>
              <path d="M10 6v8M6 10h8" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }

    .product-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    }

    .image-container {
      width: 100%;
      aspect-ratio: 1;
      background: linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }

    .image-container::before {
      content: 'Product Image';
      color: #ccc;
      font-size: 1rem;
      font-weight: 600;
      position: absolute;
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      z-index: 1;
    }

    .content {
      padding: 1.5rem;
    }

    .category {
      font-size: 0.875rem;
      color: #999;
      margin-bottom: 0.5rem;
    }

    .name {
      font-size: 1.125rem;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 0.75rem 0;
    }

    .rating {
      display: flex;
      gap: 0.25rem;
      margin-bottom: 1rem;
    }

    .star {
      color: #ddd;
      font-size: 1rem;
    }

    .star.filled {
      color: #FFC107;
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .price {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1a1a1a;
    }

    .add-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background: transparent;
      color: #2C3E50;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .add-btn:hover {
      transform: scale(1.1);
      color: #E58411;
    }
  `]
})
export class ProductCardComponent {
  product = input.required<Product>();
  addToCart = output<Product>();
}
