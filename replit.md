# Overview

This is a comprehensive SEO-first barbershop website built for Lord's Barbershop in San Antonio, TX. The application is designed as a modern single-page application with multiple routes optimized for local search rankings, particularly targeting keywords like "barber shop san antonio", "fades san antonio", and "beard shaping". The architecture prioritizes search engine optimization, user experience, and mobile responsiveness while maintaining clean, professional aesthetics.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Built using React 18 with TypeScript for type safety and modern development practices
- **Single Page Application (SPA)**: Uses Wouter for client-side routing with multiple pages including home, services, gallery, team, reviews, and contact
- **Component-Based Design**: Modular architecture with reusable UI components using shadcn/ui component library
- **Responsive Design**: Mobile-first approach using Tailwind CSS for styling with custom barbershop color scheme
- **SEO Optimization**: Comprehensive SEO implementation with structured data, meta tags, canonical URLs, and analytics tracking

## Backend Architecture
- **Express.js Server**: Node.js backend using Express for server-side functionality
- **In-Memory Storage**: Currently uses MemStorage class for user management with interface for easy database migration
- **Development Tools**: Vite for development server and build process with hot module replacement
- **Production Build**: ESBuild for optimized production bundling

## Styling and UI Framework
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens for barbershop branding
- **Radix UI Primitives**: Accessible, unstyled UI components for complex interactions
- **Custom Design System**: Consistent color palette, typography, and spacing using CSS custom properties
- **Font Integration**: Google Fonts (Inter) and Font Awesome icons for professional appearance

## Form Handling and User Interactions
- **React Hook Form**: Form validation and management with Zod schemas
- **Serverless Forms**: Designed to work with Netlify Forms or similar services for contact form submissions
- **Analytics Tracking**: Google Analytics integration with custom event tracking for user interactions
- **Toast Notifications**: User feedback system using shadcn/ui toast components

## SEO and Performance Optimization
- **Structured Data**: JSON-LD schema markup for local business, services, and FAQ pages
- **Meta Tag Management**: Dynamic SEO component for title, description, and Open Graph tags
- **Image Optimization**: WebP format support with descriptive alt text and proper file naming
- **Local SEO**: Comprehensive NAP (Name, Address, Phone) consistency and location-based content
- **Internal Linking**: Strategic internal link structure for topical authority building

## Database Integration
- **Drizzle ORM**: Type-safe database ORM configured for PostgreSQL
- **Schema Definition**: User management schema with UUID primary keys and validation
- **Migration System**: Database migration support using Drizzle Kit
- **Connection Management**: Neon Database serverless PostgreSQL integration ready

## Development and Build Tools
- **TypeScript Configuration**: Strict type checking with path mapping for clean imports
- **Vite Configuration**: Optimized development and build process with plugin ecosystem
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **Environment Management**: Proper environment variable handling for different deployment stages

# External Dependencies

## Third-Party Services
- **Booksy Integration**: External booking system for appointment scheduling with UTM tracking
- **Google Analytics**: Web analytics and user behavior tracking
- **Google Maps**: Embedded map integration for location display and directions
- **Font Services**: Google Fonts for typography and Font Awesome for icons

## Social Media Platforms
- **Instagram**: Social media integration for gallery and customer engagement
- **Facebook**: Business page integration for reviews and social proof
- **Yelp**: Review platform integration for reputation management

## Development and Hosting Services
- **Netlify Forms**: Contact form handling without backend processing
- **Neon Database**: Serverless PostgreSQL database for production deployment
- **Replit**: Development environment with specialized plugins for runtime error handling

## UI Component Libraries
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives including dialogs, accordions, navigation menus, and form controls
- **Lucide React**: Modern icon library for consistent iconography throughout the application
- **Embla Carousel**: Touch-friendly carousel component for image galleries

## Utility Libraries
- **TanStack Query**: Data fetching, caching, and synchronization for API interactions
- **date-fns**: Date manipulation and formatting utilities
- **clsx and tailwind-merge**: Conditional CSS class name utilities for dynamic styling
- **Wouter**: Lightweight client-side routing library optimized for modern React applications