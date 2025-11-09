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

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Navigate to the Portfolio folder:**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This will install all required packages including Angular CLI. Wait for the installation to complete.

3. **Verify installation:**
   ```bash
   node --version
   npm --version
   ```

## Running the Application

### Development Mode (Recommended for Development)

1. **Start the development server:**
   ```bash
   npm start
   ```
   Or:
   ```bash
   ng serve
   ```

2. **Open your browser:**
   - Navigate to `http://localhost:4200`
   - The app will automatically reload if you change any source files

3. **Stop the server:**
   - Press `Ctrl+C` in the terminal

### Development Server Options

```bash
# Run on a different port
ng serve --port 4201

# Open browser automatically
ng serve --open

# Run with custom host
ng serve --host 0.0.0.0
```

## Building for Production

### Standard Production Build

1. **Build the project:**
   ```bash
   npm run build
   ```
   Or:
   ```bash
   ng build
   ```

2. **Build output location:**
   ```
   dist/portfolio/browser/
   ```

3. **What's included:**
   - `index.html` - Main HTML file
   - JavaScript bundles (minified and optimized)
   - CSS files (minified)
   - Assets folder (images, fonts, etc.)

### Build Configurations

```bash
# Production build (default - optimized and minified)
npm run build

# Development build (faster, with source maps)
ng build --configuration development

# Production build with custom base href (for GitHub Pages)
ng build --base-href /Portfolio/

# Build with watch mode (rebuilds on changes)
ng build --watch
```

## Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero-section/
│   │   │   ├── technical-portfolio/
│   │   │   ├── leadership-impact/
│   │   │   ├── thought-leadership/
│   │   │   ├── professional-timeline/
│   │   │   └── contact-connect/
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── dist/
│   └── portfolio/
│       └── browser/          # Production build output
├── .github/
│   └── workflows/            # GitHub Actions deployment workflows
├── angular.json
├── package.json
└── tsconfig.json
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `src/app/components/hero-section/hero-section.component.ts`
   - Update headline and summary
   - Update GitHub and LinkedIn URLs

2. **Projects**: Update `src/app/components/technical-portfolio/technical-portfolio.component.ts`
   - Modify project list, tech stacks, and GitHub URLs

3. **Contact Info**: Modify `src/app/components/contact-connect/contact-connect.component.ts`
   - Update email, GitHub URL, and LinkedIn URL

4. **Timeline**: Edit `src/app/components/professional-timeline/professional-timeline.component.ts`
   - Add or modify career highlights, certifications, and awards

5. **Leadership & Impact**: Edit `src/app/components/leadership-impact/leadership-impact.component.ts`
   - Update philosophy, impact stories, and process stories

6. **Blog Posts**: Edit `src/app/components/thought-leadership/thought-leadership.component.ts`
   - Add or modify blog post entries

### Add Profile Photo

1. Place your professional photo at:
   ```
   src/assets/profile-photo.jpg
   ```

2. Or update the image path in:
   ```
   src/app/components/hero-section/hero-section.component.html
   ```

### Update Colors

Modify the color scheme in individual component CSS files. The primary gradient uses:
- Primary: `#667eea`
- Secondary: `#764ba2`

To change colors, edit the CSS files in each component's folder.

## Troubleshooting

### Common Issues

#### npm/ng command not found
- **Solution**: Make sure you've run `npm install` first
- Verify Node.js is installed: `node --version`
- Restart your terminal/IDE after installing Node.js

#### Port 4200 already in use
- **Solution**: Use a different port:
  ```bash
  ng serve --port 4201
  ```

#### Build errors
- **Solution**: 
  1. Clear npm cache: `npm cache clean --force`
  2. Delete `node_modules` folder: `rm -rf node_modules` (or delete manually)
  3. Reinstall: `npm install`
  4. Try building again: `npm run build`

#### Module not found errors
- **Solution**: Run `npm install` to ensure all dependencies are installed

#### Angular CLI not found
- **Solution**: The CLI is installed locally. Use `npm run` commands or `npx ng` instead of just `ng`

## Deployment to GitHub Pages

### Quick Start

1. **Create a new GitHub repository** (or use existing)
   - Repository name: `portfolio` (or any name you prefer)
   - Make it public (required for free GitHub Pages)

2. **Initialize git and push:**
   ```bash
   cd Portfolio
   git init
   git add .
   git commit -m "Initial commit: Angular portfolio"
   git branch -M main
   git remote add origin https://github.com/nagarao-cloud/portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository → **Settings** → **Pages**
   - Under "Source", select **"GitHub Actions"**
   - The workflow will automatically deploy on every push to `main`

4. **Your site will be live at:**
   - `https://nagarao-cloud.github.io/portfolio/` (if repo name is `portfolio`)
   - Or `https://nagarao-cloud.github.io/Portfolio/` (if repo name is `Portfolio`)

### Deployment Workflows

The project includes three GitHub Actions workflows:

- **`deploy.yml`** - For Portfolio as a subdirectory in a repository
- **`deploy-standalone.yml`** - For Portfolio as its own repository (rename to `deploy.yml`)
- **`deploy-root.yml`** - For deploying to `nagarao-cloud.github.io` root domain

### Manual Build for Deployment

```bash
# Build with base href for GitHub Pages
npm run build -- --base-href /Portfolio/

# Output will be in: dist/portfolio/browser/
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm start` | Start development server (port 4200) |
| `npm run build` | Build for production |
| `npm run watch` | Build and watch for changes |
| `ng serve` | Same as `npm start` |
| `ng build` | Same as `npm run build` |
| `ng build --watch` | Build with watch mode |
| `ng serve --open` | Start server and open browser |

## Technologies Used

- **Angular 17+** - Frontend framework
- **TypeScript** - Programming language
- **CSS3** - Styling with modern features
- **HTML5** - Markup language
- **RxJS** - Reactive programming
- **Angular Router** - Client-side routing

## Development Workflow

1. **Make changes** to component files in `src/app/components/`
2. **Save files** - Development server auto-reloads
3. **Test locally** at `http://localhost:4200`
4. **Build for production** when ready: `npm run build`
5. **Deploy** by pushing to GitHub (if GitHub Actions is set up)

## License

MIT License

## Support

For issues or questions:
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- Review Angular documentation: https://angular.io/docs
- Check GitHub repository: https://github.com/nagarao-cloud
