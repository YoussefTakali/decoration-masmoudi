import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialService } from '../../core/services';
import { Testimonial } from '../../core/models';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent],
  template: `
    <section class="testimonials">
      <div class="container">
        <app-section-header 
          label="TESTIMONIALS"
          title="Our Client Reviews"
        />
        
        <div class="testimonials-wrapper">
          <button class="nav-btn prev" (click)="previousSlide()" aria-label="Previous testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

          <div class="testimonials-container">
            @for (testimonial of testimonials(); track testimonial.id; let i = $index) {
              <div class="testimonial-card" 
                   [class.active]="i === currentIndex()"
                   [style.transform]="'translateX(' + ((i - currentIndex()) * 110) + '%)'">
                <div class="image-container">
                  <img [src]="testimonial.imageUrl" [alt]="testimonial.name" />
                </div>
                <div class="content">
                  <h3 class="name">{{ testimonial.name }}</h3>
                  <p class="title">{{ testimonial.title }}</p>
                  <p class="review">{{ testimonial.content }}</p>
                  <div class="rating">
                    @for (star of [1,2,3,4,5]; track star) {
                      <span class="star" [class.filled]="star <= testimonial.rating">★</span>
                    }
                  </div>
                </div>
              </div>
            }
          </div>

          <button class="nav-btn next" (click)="nextSlide()" aria-label="Next testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <div class="dots">
          @for (testimonial of testimonials(); track testimonial.id; let i = $index) {
            <button 
              class="dot"
              [class.active]="i === currentIndex()"
              (click)="goToSlide(i)"
              [attr.aria-label]="'Go to testimonial ' + (i + 1)">
            </button>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
      padding: 6rem 0;
      background: #FAFAFA;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .testimonials-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .testimonials-container {
      position: relative;
      width: 100%;
      height: 500px;
      overflow: hidden;
    }

    .testimonial-card {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-width: 380px;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      border-radius: 20px;
      padding: 2rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0.5;
      transform-origin: center;
    }

    .testimonial-card.active {
      opacity: 1;
      z-index: 2;
    }

    .image-container {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 1.5rem;
      background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .image-container::before {
      content: 'Avatar';
      color: #ccc;
      font-size: 1.25rem;
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
      text-align: center;
    }

    .name {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 0.5rem 0;
    }

    .title {
      font-size: 0.875rem;
      color: #999;
      margin: 0 0 1rem 0;
    }

    .review {
      font-size: 0.95rem;
      color: #666;
      line-height: 1.6;
      margin: 0 0 1.5rem 0;
    }

    .rating {
      display: flex;
      gap: 0.25rem;
      justify-content: center;
    }

    .star {
      color: #ddd;
      font-size: 1.25rem;
    }

    .star.filled {
      color: #FFC107;
    }

    .nav-btn {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: none;
      background: white;
      color: #2C3E50;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      z-index: 3;
    }

    .nav-btn:hover {
      background: #E58411;
      color: white;
      transform: scale(1.1);
    }

    .dots {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
    }

    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: #ddd;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .dot.active {
      background: #E58411;
      width: 32px;
      border-radius: 6px;
    }

    @media (max-width: 768px) {
      .testimonials {
        padding: 4rem 0;
      }

      .testimonials-container {
        height: 550px;
      }

      .nav-btn {
        display: none;
      }

      .testimonial-card {
        max-width: 100%;
      }
    }
  `]
})
export class TestimonialsComponent {
  private testimonialService = new TestimonialService();
  protected testimonials = this.testimonialService.getTestimonials();
  protected currentIndex = signal(0);

  nextSlide() {
    const total = this.testimonials().length;
    this.currentIndex.update(index => (index + 1) % total);
  }

  previousSlide() {
    const total = this.testimonials().length;
    this.currentIndex.update(index => (index - 1 + total) % total);
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }
}
