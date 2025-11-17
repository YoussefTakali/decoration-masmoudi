# Panto - Interior Design E-Commerce Website

A modern, minimalistic interior design and furniture e-commerce website built with Angular 20.

## 🏗️ Architecture

This project follows **Clean Architecture** principles with clear separation of concerns:

```
src/app/
├── core/                    # Core business logic
│   ├── models/              # Data models and interfaces
│   │   ├── product.model.ts
│   │   ├── feature.model.ts
│   │   └── testimonial.model.ts
│   └── services/            # Business logic services
│       ├── product.service.ts
│       └── testimonial.service.ts
│
├── features/                # Feature modules (presentational)
│   ├── header/
│   ├── hero/
│   ├── features-section/
│   ├── products/
│   ├── experience/
│   ├── materials/
│   ├── testimonials/
│   └── footer/
│
└── shared/                  # Shared/reusable components
    └── components/
        ├── button/
        ├── section-header/
        └── product-card/
```

## 🎨 Design System

### Color Palette
- **Primary:** `#E58411` (Orange)
- **Secondary:** `#2C3E50` (Dark Blue)
- **Text Primary:** `#1a1a1a`
- **Text Secondary:** `#666`
- **Background:** `#FAFAFA`

### Typography
- **Font Family:** Inter, sans-serif
- **Headings:** 700 weight
- **Body:** 400 weight

### Spacing Scale
- xs: 0.5rem
- sm: 1rem
- md: 1.5rem
- lg: 2rem
- xl: 3rem
- 2xl: 4rem
- 3xl: 6rem

## 🚀 Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Modern Angular** - Uses standalone components, signals, and latest features
- ✅ **Type-Safe** - Full TypeScript implementation
- ✅ **Clean Architecture** - Separated concerns and scalable structure
- ✅ **Performance Optimized** - Lazy loading and efficient change detection
- ✅ **Accessibility** - ARIA labels and semantic HTML

## 📦 Components

### Core Features
1. **Header** - Fixed navigation with mobile menu
2. **Hero** - Full-screen hero with search functionality
3. **Features** - "Why Choosing Us" section with 3 feature cards
4. **Products** - Product catalog with category filtering
5. **Experience** - Image + text informational section
6. **Materials** - Grid layout showcase section
7. **Testimonials** - Interactive carousel with client reviews
8. **Footer** - Multi-column footer with links and social media

### Shared Components
- **Button** - Reusable button with variants (primary, secondary, outline, ghost)
- **Section Header** - Consistent section titles with labels
- **Product Card** - Product display with image, rating, and price

## 🛠️ Development

### Prerequisites
- Node.js 18+
- Angular CLI 20+

### Installation
\`\`\`bash
npm install
\`\`\`

### Development Server
\`\`\`bash
npm start
# Navigate to http://localhost:4200/
\`\`\`

### Build
\`\`\`bash
npm run build
\`\`\`

## 📝 Code Quality

### Best Practices Implemented
- **Signals** for reactive state management
- **Standalone Components** for better tree-shaking
- **Input/Output signals** for component communication
- **Type-safe interfaces** for all data structures
- **Service injection** for business logic
- **Component isolation** for testability
- **CSS custom properties** for theming
- **Mobile-first responsive design**

### File Naming Convention
- Components: `*.component.ts`
- Services: `*.service.ts`
- Models: `*.model.ts`
- Styles: Component-scoped with `:host` selector

## 🎯 Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Implement product detail pages
- [ ] Add user authentication
- [ ] Connect to backend API
- [ ] Add product search
- [ ] Implement wishlist feature
- [ ] Add order management
- [ ] Integrate payment gateway

## 📄 License

Copyright © 2025 Decoration Masmoudi

---

**Built with ❤️ using Angular 20**
