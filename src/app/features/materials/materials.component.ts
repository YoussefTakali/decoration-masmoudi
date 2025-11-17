import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="materials">
      <div class="container">
        <div class="content-wrapper">
          <div class="text-side">
            <span class="label">MATERIALS</span>
            <h2 class="title">Very Serious<br />Materials For Making<br />Furniture</h2>
            <p class="description">
              Because panto was very serious about designing furniture for our 
              environment, using a very expensive and famous capital but at a 
              relatively low price
            </p>
            <a href="#" class="more-info">More Info</a>
          </div>
          <div class="image-side">
            <div class="image-grid">
              <div class="image-item large">
                <img src="/assets/images/material-1.svg" alt="Material showcase 1" />
              </div>
              <div class="image-item">
                <img src="/assets/images/material-2.svg" alt="Material showcase 2" />
              </div>
              <div class="image-item">
                <img src="/assets/images/material-3.svg" alt="Material showcase 3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .materials {
      padding: 6rem 0;
      background: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .content-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .label {
      display: inline-block;
      color: #E58411;
      font-weight: 700;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 1rem;
    }

    .title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      line-height: 1.2;
      margin: 0 0 1.5rem 0;
    }

    .description {
      font-size: 1rem;
      color: #666;
      line-height: 1.8;
      margin: 0 0 2rem 0;
    }

    .more-info {
      display: inline-block;
      color: #E58411;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: transform 0.3s ease;
    }

    .more-info:hover {
      transform: translateX(5px);
    }

    .image-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .image-item {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      min-height: 250px;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-item.large {
      grid-row: span 2;
      min-height: 520px;
    }

    .image-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    @media (max-width: 968px) {
      .content-wrapper {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .title {
        font-size: 2rem;
      }

      .image-grid {
        grid-template-columns: 1fr;
      }

      .image-item.large {
        grid-row: span 1;
      }
    }
  `]
})
export class MaterialsComponent {}
