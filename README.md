# NCVA Website

A modern Vue 3 website for the Northern Counties Volleyball Association (NCVA), built as a replica of www.ncva.org.uk.

## Features

- **Modern Vue 3** with TypeScript support
- **Responsive Design** that works on all devices
- **Vue Router** for single-page application navigation
- **Pinia** for state management
- **ESLint** for code quality
- **Vite** for fast development and building

## Pages

- **Home** - Hero section, latest news, league standings preview, and upcoming events
- **About** - Association information, mission, history, committee members, and values
- **Leagues** - Current league standings, recent results, and upcoming fixtures
- **News** - Latest news articles and updates
- **Contact** - Contact information, contact form, and committee contacts

## Project Structure

```
src/
├── components/
│   ├── HeaderNav.vue      # Main navigation header
│   └── FooterSection.vue  # Footer with links and contact info
├── views/
│   ├── HomeView.vue       # Homepage with hero and content sections
│   ├── AboutView.vue      # About page with association info
│   ├── LeaguesView.vue    # Leagues and results page
│   ├── NewsView.vue       # News and updates page
│   └── ContactView.vue    # Contact page with form
├── router/
│   └── index.ts           # Vue Router configuration
├── stores/
│   └── counter.ts         # Pinia store (example)
└── assets/
    ├── main.css           # Global styles and utilities
    └── base.css           # Base CSS reset
```

## Getting Started

### Prerequisites

- Node.js (version 20.19.0 or higher)
- npm

### Installation

1. Navigate to the project directory:
   ```bash
   cd ncva-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Design Features

- **Blue and White Color Scheme** - Professional and clean design
- **Responsive Grid Layouts** - Adapts to different screen sizes
- **Interactive Elements** - Hover effects and smooth transitions
- **Modern Typography** - Clean, readable fonts
- **Card-based Layout** - Organized content presentation
- **Mobile-first Design** - Optimized for mobile devices

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vue Router** - Client-side routing
- **Pinia** - State management
- **Vite** - Build tool and development server
- **ESLint** - Code linting
- **CSS3** - Styling with modern features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is created as a replica for educational purposes.

## Contact

For questions about this project, please contact the development team.