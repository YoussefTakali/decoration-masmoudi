import { Injectable, signal } from '@angular/core';
import { Testimonial } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private readonly testimonials = signal<Testimonial[]>([
    {
      id: '1',
      name: 'Bang Upin',
      title: 'Pedagang Asongan',
      content: 'Vivamus scelerisque ex eu nisi tincidunt porttitor. Sed molestie, est eget feugiat.',
      imageUrl: '/assets/images/testimonial-1.jpg',
      rating: 5
    },
    {
      id: '2',
      name: 'Ibuk Sukarni',
      title: 'Ibu Rumah Tangga',
      content: 'Vivamus scelerisque ex eu nisi tincidunt porttitor. Sed molestie, est eget feugiat.',
      imageUrl: '/assets/images/testimonial-2.jpg',
      rating: 5
    },
    {
      id: '3',
      name: 'Mpok Ina',
      title: 'Karyawan Swasta',
      content: 'Vivamus scelerisque ex eu nisi tincidunt porttitor. Sed molestie, est eget feugiat.',
      imageUrl: '/assets/images/testimonial-3.jpg',
      rating: 5
    }
  ]);

  getTestimonials() {
    return this.testimonials.asReadonly();
  }
}
