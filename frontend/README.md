# Sheger City Website

A modern, citizen-centered digital government portal built with React, TypeScript, and Tailwind CSS v4.

## Features

### 🏛️ Complete Website Structure
- **Home**: Hero section, quick services, announcements, city highlights
- **About**: City overview, vision & mission, achievements
- **Sub Cities**: 11 sub-city pages with local information
- **Administration Sectors**: Land, Health, Transport, Education, Finance, Business
- **Leadership**: City leadership profiles
- **News**: Latest announcements and updates
- **Explore Sheger**: Tourism and investment opportunities
- **Contact**: Contact form and information
- **Transparency**: Public data, budgets, and reports

### 🎨 Design Features
- Responsive mega-menu navigation (like Liyana Healthcare example)
- Tailwind CSS v4 with modern styling
- Mobile-friendly responsive design
- Smooth hover effects and transitions
- Fixed AI chatbot button

### 🚀 Tech Stack
- React 19
- TypeScript 6
- Vite 8
- React Router DOM
- Tailwind CSS v4
- PostCSS & Autoprefixer

## Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Header.tsx      # Navigation with mega menu
│   │       ├── Footer.tsx      # Footer with links
│   │       └── Layout.tsx      # Main layout wrapper
│   ├── pages/
│   │   ├── Home.tsx           # Landing page
│   │   ├── About.tsx          # About page
│   │   ├── Contact.tsx        # Contact page
│   │   ├── Leadership.tsx     # Leadership profiles
│   │   ├── News.tsx           # News & updates
│   │   ├── Explore.tsx        # Tourism section
│   │   ├── Transparency.tsx   # Public data
│   │   ├── SubCity.tsx        # Sub city pages
│   │   └── Sector.tsx         # Administration sectors
│   ├── routes/
│   │   └── AppRoutes.tsx      # Route configuration
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css              # Tailwind imports
└── package.json
```

## Navigation Structure

### Main Menu
- Home
- About
- Sub City (dropdown with 11 sub-cities)
- Administration Sector (mega menu with all sectors)
- Leadership
- News
- Explore Sheger
- Contact
- Transparency

### Administration Sectors
- 🏗️ Land & Property
- 🏥 Health
- 🚗 Transport
- 📚 Education
- 💰 Finance
- 💼 Business

## Customization

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/routes/AppRoutes.tsx`
3. Add navigation link in `src/components/layout/Header.tsx`

### Styling
- Tailwind CSS v4 is configured in `src/index.css`
- Use utility classes directly in components
- Custom CSS variables are defined in `:root`

### Language Support
Language selector buttons are in the header (EN, አማ, ORO) - ready for i18n integration.

## Next Steps

1. **AI Chatbot**: Integrate chatbot functionality
2. **E-Service Integration**: Connect to backend services
3. **Authentication**: Add user login/registration
4. **Multi-language**: Implement i18n for Amharic and Afan Oromo
5. **Search**: Add site-wide search functionality
6. **Maps**: Integrate Google Maps for office locations
7. **Forms**: Connect contact forms to backend
8. **CMS**: Add content management system

## License

Government of Sheger City - All rights reserved
