# Portfolio - Angular Application

A modern, professional portfolio website built with Angular showcasing technical expertise, leadership experience, and thought leadership.

## Features

- 🎨 **Modern UI/UX** - Beautiful, responsive design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🚀 **Performance Optimized** - Fast loading and smooth interactions
- 🎯 **SEO Friendly** - Optimized for search engines

## Sections

1. **Hero Section** - Executive snapshot with professional photo and headline
2. **Technical Portfolio** - Innovation Playground showcasing GitHub projects
3. **Leadership & Impact** - Leadership philosophy and impact stories
4. **Thought Leadership Blog** - Strategic insights and articles
5. **Professional Timeline** - Career highlights, certifications, and awards
6. **Contact & Connect** - Social links and collaboration CTA

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/portfolio` directory.

## Customization

### Update Personal Information

1. **Hero Section**: Edit `src/app/components/hero-section/hero-section.component.ts`
2. **Projects**: Update `src/app/components/technical-portfolio/technical-portfolio.component.ts`
3. **Contact Info**: Modify `src/app/components/contact-connect/contact-connect.component.ts`
4. **Timeline**: Edit `src/app/components/professional-timeline/professional-timeline.component.ts`

### Add Profile Photo

Place your professional photo at `src/assets/profile-photo.jpg` or update the image path in the hero section component.

### Update Colors

Modify the color scheme in individual component CSS files. The primary gradient uses:
- Primary: `#667eea`
- Secondary: `#764ba2`

## Technologies Used

- Angular 17+
- TypeScript
- CSS3 (with modern features)
- HTML5

## Deployment to GitHub Pages

### Quick Start

1. **Create a new GitHub repository** (or use existing)
2. **Initialize git and push:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Angular portfolio"
   git branch -M main
   git remote add origin https://github.com/nagarao-cloud/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository → Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on every push

4. **Your site will be live at:**
   - `https://nagarao-cloud.github.io/portfolio/` (if repo name is `portfolio`)
   - Or `https://nagarao-cloud.github.io/Portfolio/` (if repo name is `Portfolio`)

### Manual Build

```bash
npm run build
# Output: dist/portfolio/browser
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## License

MIT License

