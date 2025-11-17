import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="hero">
      <div class="container">
        <div class="content">
          <h1 class="title">
            Make Your Interior More<br />
            Minimalistic & Modern
          </h1>
          <p class="description">
            Turn your room with panto into a lot more minimalist<br />
            and modern with ease and speed
          </p>
          <div class="search-bar">
            <input 
              type="text" 
              placeholder="Search furniture" 
              [(ngModel)]="searchQuery"
              class="search-input"
            />
            <button class="search-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" 
                  stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 110vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #2C3E50 0%, #34495E 100%);
      padding-top: 80px;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-image: url('/assets/images/hero-bg.png');
      background-size: cover;
      background-position: center;
      opacity: 1;
    }

    .hero::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 10vh;
      background: linear-gradient(to top, 
        rgb(255, 255, 255) 0%, 
        rgba(255, 255, 255, 0.95) 15%,
        rgba(255, 255, 255, 0.85) 30%,
        rgba(255, 255, 255, 0.65) 50%,
        rgba(255, 255, 255, 0.4) 70%,
        rgba(255, 255, 255, 0.15) 85%,
        transparent 100%);
      z-index: 1;
      pointer-events: none;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      bottom: 20vh;
      z-index: 2;
    }

    .content {
      max-width: 800px;
    }

    .title {
      font-size: 3.5rem;
      font-weight: 700;
      color: white;
      line-height: 1.2;
      margin: 0 0 1.5rem 0;
    }

    .description {
      font-size: 1.125rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      margin: 0 0 2.5rem 0;
    }

    .search-bar {
      display: flex;
      background: white;
      border-radius: 50px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      max-width: 500px;
    }

    .search-input {
      flex: 1;
      border: none;
      padding: 1rem 1.5rem;
      font-size: 1rem;
      outline: none;
      font-family: inherit;
    }

    .search-input::placeholder {
      color: #999;
    }

    .search-btn {
      background: linear-gradient(135deg, #E58411 0%, #F39C12 100%);
      border: none;
      padding: 1rem 1.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .search-btn:hover {
      background: linear-gradient(135deg, #F39C12 0%, #E58411 100%);
    }

    @media (max-width: 768px) {
      .hero {
        min-height: 80vh;
      }

      .title {
        font-size: 2.5rem;
      }

      .description {
        font-size: 1rem;
      }

      .search-bar {
        max-width: 100%;
      }
    }
  `]
})
export class HeroComponent {
  protected searchQuery = signal('');
}
