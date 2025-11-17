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
        <div class="logo">Masmoudi-Deco</div>
        
        <nav class="nav" [class.active]="mobileMenuOpen()">
          <a href="#furniture" class="nav-link">Furniture</a>
          <a href="#shop" class="nav-link">Shop</a>
          <a href="#about" class="nav-link">About Us</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <div class="actions">
          <button class="cart-btn" aria-label="Shopping cart">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.007 2.83325C20.8036 2.83325 23.9249 5.81662 24.0833 9.59688H24.0463C24.0508 9.70676 24.0296 9.81618 23.9846 9.91659H24.2058C25.9299 9.91659 27.7353 11.1116 28.4592 13.9963L28.5378 14.3367L29.6271 23.1125C30.411 28.7097 27.3487 31.0636 23.1713 31.1633L22.8912 31.1666H11.1471C6.90168 31.1666 3.63027 29.6196 4.34956 23.4933L4.39861 23.1125L5.50041 14.3367C6.0437 11.2301 7.86761 10.0048 9.625 9.92121L9.81993 9.91659H9.93067C9.912 9.81083 9.912 9.70263 9.93067 9.59688C10.0891 5.81662 13.2104 2.83325 17.007 2.83325ZM12.8874 14.6331C12.1959 14.6331 11.6354 15.21 11.6354 15.9217C11.6354 16.6334 12.1959 17.2104 12.8874 17.2104C13.5789 17.2104 14.1394 16.6334 14.1394 15.9217L14.1297 15.7601C14.0524 15.1247 13.5257 14.6331 12.8874 14.6331ZM21.0882 14.6331C20.3968 14.6331 19.8362 15.21 19.8362 15.9217C19.8362 16.6334 20.3968 17.2104 21.0882 17.2104C21.7797 17.2104 22.3403 16.6334 22.3403 15.9217C22.3403 15.21 21.7797 14.6331 21.0882 14.6331ZM16.9515 4.6783C14.2257 4.6783 12.0159 6.88042 12.0159 9.59688C12.0346 9.70263 12.0346 9.81083 12.0159 9.91659H21.9487C21.9093 9.81451 21.8884 9.70625 21.887 9.59688C21.887 6.88042 19.6773 4.6783 16.9515 4.6783Z" fill="currentColor"/>
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
