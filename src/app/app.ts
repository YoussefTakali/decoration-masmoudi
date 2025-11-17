import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './features/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { FeaturesComponent } from './features/features-section/features-section.component';
import { ProductsComponent } from './features/products/products.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { MaterialsComponent } from './features/materials/materials.component';
import { TestimonialsComponent } from './features/testimonials/testimonials.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    ProductsComponent,
    ExperienceComponent,
    MaterialsComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor() {
    console.log('App component loaded successfully! 🎉');
  }
}
