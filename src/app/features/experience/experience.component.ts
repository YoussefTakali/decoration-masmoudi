import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="experience">
      <div class="container">
        <div class="content-wrapper">
          <div class="image-side">
            <div class="image-container">
              <img src="/assets/images/xD.jpg" alt="Interior Experience" />
            </div>
          </div>
          <div class="text-side">
            <span class="label">EXPERIENCES</span>
            <h2 class="title">We Provide You The<br />Best Experience</h2>
            <p class="description">
              You don't have to worry about the result because all of these 
              interiors are made by people who are professionals in their fields 
              with an elegant and lucrative style and with premium quality materials
            </p>
            <a href="#" class="more-info">More Info</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience {
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

.image-container {
  border-radius: 20px;
  overflow: hidden;              /* ensures image follows radius */
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
  min-height: 350px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container img {
    border-radius: 20px;

  width: 100%;                   /* fill width */
  height: 100%;                  /* fill height */
  object-fit: cover;             /* crop nicely, fill full container */
  display: block;
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

    @media (max-width: 968px) {
      .content-wrapper {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .title {
        font-size: 2rem;
      }
    }
  `]
})
export class ExperienceComponent {}
