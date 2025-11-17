import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled()">
      <div class="container">
        <div class="logo">Panto</div>
        
        <nav class="nav" [class.active]="mobileMenuOpen()">
          <a href="#furniture" class="nav-link">Furniture</a>
          <a href="#shop" class="nav-link">Shop</a>
          <a href="#about" class="nav-link">About Us</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <div class="actions">
          <button class="cart-btn" aria-label="Shopping cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 2L7.17 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V6C23 4.9 22.1 4 21 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" fill="currentColor"/>
            </svg>
            <span class="cart-badge">0</span>
          </button>
          
          <button class="mobile-toggle" (click)="toggleMobileMenu()" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: transparent;
      backdrop-filter: none;
      z-index: 1000;
      padding: 1rem 0;
      transition: all 0.3s ease;
    }

    .header.scrolled {
      background: rgba(44, 62, 80, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      cursor: pointer;
    }

    .nav {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: color 0.3s ease;
      position: relative;
    }

    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: #E58411;
      transition: width 0.3s ease;
    }

    .nav-link:hover {
      color: #E58411;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .cart-btn {
      position: relative;
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 0.3s ease;
    }

    .cart-btn:hover {
      color: #E58411;
    }

    .cart-badge {
      position: absolute;
      top: 0;
      right: 0;
      background: #E58411;
      color: white;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .mobile-toggle {
      display: none;
      flex-direction: column;
      gap: 4px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
    }

    .mobile-toggle span {
      width: 24px;
      height: 2px;
      background: white;
      transition: all 0.3s ease;
    }

    @media (max-width: 768px) {
      .nav {
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(44, 62, 80, 0.98);
        flex-direction: column;
        padding: 2rem;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
      }

      .nav.active {
        transform: translateX(0);
      }

      .mobile-toggle {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  protected mobileMenuOpen = signal(false);
  protected isScrolled = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled.set(window.scrollY > 50);
      });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }
}
