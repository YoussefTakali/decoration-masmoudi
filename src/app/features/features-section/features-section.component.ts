import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature } from '../../core/models';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="features">
      <div class="container">
        <div class="features-row">
          <h2 class="section-title">Why<br />Choosing Us</h2>
          
          <div class="features-grid">
            @for (feature of features; track feature.title) {
              <div class="feature-card">
                <h3 class="title">{{ feature.title }}</h3>
                <p class="description">{{ feature.description }}</p>
                @if (feature.link) {
                  <a [href]="feature.link.url" class="link">
                    {{ feature.link.text }}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </a>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features {
      padding: 6rem 0;
      background: white;
    }

    .container {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .features-row {
      display: flex;
      align-items: flex-start;
      gap: 6rem;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      line-height: 1.2;
      margin: 0;
      flex-shrink: 0;
      min-width: 250px;
      margin-right: 3rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 7rem;
      flex: 1;
    }

    .feature-card {
      padding: 0;
      max-width: 450px;
    }

    .feature-card .title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0 0 1rem 0;
    }

    .feature-card .description {
      font-size: 1rem;
      color: #666;
      line-height: 1.8;
      margin: 0 0 1rem 0;
    }

    .feature-card .link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #E58411;
      text-decoration: none;
      font-weight: 600;
      transition: gap 0.3s ease;
    }

    .feature-card .link:hover {
      gap: 0.75rem;
    }

    @media (max-width: 768px) {
      .features {
        padding: 4rem 0;
      }

      .features-row {
        flex-direction: column;
        gap: 2rem;
      }

      .section-title {
        font-size: 2rem;
      }

      .features-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
  `]
})
export class FeaturesComponent {
  protected features: Feature[] = [
    {
      title: 'Luxury facilities',
      description: 'The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.',
      link: {
        text: 'More Info',
        url: '#'
      }
    },
    {
      title: 'Affordable Price',
      description: 'You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are only here.',
      link: {
        text: 'More Info',
        url: '#'
      }
    },
    {
      title: 'Many Choices',
      description: 'We provide many unique work space choices so that you can choose the workspace to your liking.',
      link: {
        text: 'More Info',
        url: '#'
      }
    }
  ];
}
