import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../core/services';
import { Product, ProductCategory, PRODUCT_CATEGORIES } from '../../core/models';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, SectionHeaderComponent],
  template: `
    <section class="products">
      <div class="container">
        <app-section-header 
          title="Best Selling Product"
        />
        
        <div class="category-filters">
          <button 
            class="filter-btn"
            [class.active]="selectedCategory() === 'All'"
            (click)="selectCategory('All')">
            All
          </button>
          @for (category of categories; track category) {
            <button 
              class="filter-btn"
              [class.active]="selectedCategory() === category"
              (click)="selectCategory(category)">
              {{ category }}
            </button>
          }
        </div>

        <div class="products-grid">
          @for (product of filteredProducts(); track product.id) {
            <app-product-card 
              [product]="product"
              (addToCart)="onAddToCart($event)"
            />
          }
        </div>

        <div class="view-all">
          <a href="#" class="view-all-link">
            View All
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .products {
      padding: 6rem 0;
      background: #FAFAFA;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .category-filters {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }

    .filter-btn {
      padding: 0.75rem 2rem;
      border: none;
      background: white;
      color: #666;
      border-radius: 50px;
      cursor: pointer;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      font-family: inherit;
    }

    .filter-btn:hover {
      background: #f0f0f0;
    }

    .filter-btn.active {
      background: #2C3E50;
      color: white;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .view-all {
      text-align: center;
    }

    .view-all-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #E58411;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.125rem;
      transition: gap 0.3s ease;
    }

    .view-all-link:hover {
      gap: 0.75rem;
    }

    @media (max-width: 768px) {
      .products {
        padding: 4rem 0;
      }

      .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1.5rem;
      }

      .category-filters {
        gap: 0.5rem;
      }

      .filter-btn {
        padding: 0.5rem 1.5rem;
        font-size: 0.9rem;
      }
    }
  `]
})
export class ProductsComponent {
  private productService = new ProductService();

  protected categories = PRODUCT_CATEGORIES;
  protected selectedCategory = signal<ProductCategory | 'All'>('All');
  protected products = this.productService.getProducts();
  
  protected filteredProducts = computed(() => {
    if (this.selectedCategory() === 'All') {
      return this.products();
    }
    return this.products().filter(p => p.category === this.selectedCategory());
  });

  selectCategory(category: ProductCategory | 'All') {
    this.selectedCategory.set(category);
  }

  onAddToCart(product: Product) {
    console.log('Added to cart:', product);
    // Implement cart logic here
  }
}
