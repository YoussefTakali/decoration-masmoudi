import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section brand">
            <h3 class="logo">Panto</h3>
            <p class="description">
              The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="white"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" stroke-width="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div class="footer-section">
            <h4 class="section-title">Product</h4>
            <ul class="links">
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Selling</a></li>
              <li><a href="#">Home Decor</a></li>
              <li><a href="#">Kitchen Set</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="section-title">Services</h4>
            <ul class="links">
              <li><a href="#">Shipping & Return</a></li>
              <li><a href="#">Secure Shopping</a></li>
              <li><a href="#">International Shipping</a></li>
              <li><a href="#">Affiliates</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h4 class="section-title">Follow Us</h4>
            <ul class="links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="copyright">Copyright © 2021</p>
          <div class="legal-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: white;
      padding: 4rem 0 2rem;
      border-top: 1px solid #eee;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }

    .footer-section.brand {
      max-width: 350px;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 1rem 0;
    }

    .description {
      font-size: 0.95rem;
      color: #666;
      line-height: 1.6;
      margin: 0 0 1.5rem 0;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #f5f5f5;
      color: #666;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.3s ease;
    }

    .social-link:hover {
      background: #E58411;
      color: white;
      transform: translateY(-3px);
    }

    .section-title {
      font-size: 1rem;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 1.5rem 0;
    }

    .links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .links li {
      margin-bottom: 0.75rem;
    }

    .links a {
      color: #666;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.3s ease;
    }

    .links a:hover {
      color: #E58411;
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      border-top: 1px solid #eee;
    }

    .copyright {
      color: #999;
      font-size: 0.875rem;
      margin: 0;
    }

    .legal-links {
      display: flex;
      gap: 2rem;
    }

    .legal-links a {
      color: #999;
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.3s ease;
    }

    .legal-links a:hover {
      color: #E58411;
    }

    @media (max-width: 968px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }

      .footer-section.brand {
        grid-column: span 2;
        max-width: 100%;
      }
    }

    @media (max-width: 640px) {
      .footer-content {
        grid-template-columns: 1fr;
      }

      .footer-section.brand {
        grid-column: span 1;
      }

      .footer-bottom {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class FooterComponent {}
