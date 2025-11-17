import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      [class]="buttonClasses()"
      [type]="type()">
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: inherit;
    }

    button:hover {
      transform: translateY(-2px);
    }

    button:active {
      transform: translateY(0);
    }

    .btn-primary {
      background: linear-gradient(135deg, #E58411 0%, #F39C12 100%);
      color: white;
      box-shadow: 0 4px 12px rgba(229, 132, 17, 0.3);
    }

    .btn-primary:hover {
      box-shadow: 0 6px 20px rgba(229, 132, 17, 0.4);
    }

    .btn-secondary {
      background: #2C3E50;
      color: white;
    }

    .btn-outline {
      background: transparent;
      border: 2px solid #E58411;
      color: #E58411;
    }

    .btn-ghost {
      background: transparent;
      color: #2C3E50;
    }

    .btn-small {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }

    .btn-medium {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }

    .btn-large {
      padding: 1rem 2rem;
      font-size: 1.125rem;
    }
  `]
})
export class ButtonComponent {
  variant = input<ButtonVariant>('primary');
  size = input<ButtonSize>('medium');
  type = input<'button' | 'submit' | 'reset'>('button');

  buttonClasses() {
    return `btn-${this.variant()} btn-${this.size()}`;
  }
}
