import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-header">
      @if (label()) {
        <span class="label">{{ label() }}</span>
      }
      <h2 class="title">{{ title() }}</h2>
      @if (description()) {
        <p class="description">{{ description() }}</p>
      }
    </div>
  `,
  styles: [`
    .section-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .label {
      display: inline-block;
      color: #E58411;
      font-weight: 700;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 0.5rem;
    }

    .title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0.5rem 0;
      line-height: 1.2;
    }

    .description {
      font-size: 1rem;
      color: #666;
      max-width: 600px;
      margin: 1rem auto 0;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .title {
        font-size: 2rem;
      }
    }
  `]
})
export class SectionHeaderComponent {
  label = input<string>();
  title = input.required<string>();
  description = input<string>();
}
