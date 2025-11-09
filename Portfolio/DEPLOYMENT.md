# Deployment Guide - GitHub Pages

This guide will help you deploy your Angular portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account: [https://github.com/nagarao-cloud](https://github.com/nagarao-cloud)
2. Git installed on your local machine
3. Node.js and npm installed

## Deployment Options

### Option 1: Deploy to a New Repository (Recommended for Portfolio)

1. **Create a new repository on GitHub:**
   - Go to [https://github.com/new](https://github.com/new)
   - Repository name: `portfolio` (or any name you prefer)
   - Make it public (required for free GitHub Pages)
   - Don't initialize with README

2. **Initialize Git in the Portfolio folder:**
   ```bash
   cd Portfolio
   git init
   git add .
   git commit -m "Initial commit: Angular portfolio"
   ```

3. **Connect to GitHub and push:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/nagarao-cloud/portfolio.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on every push to main

5. **Your site will be available at:**
   - `https://nagarao-cloud.github.io/portfolio/`

### Option 2: Deploy to nagarao-cloud.github.io (Root Domain)

If you want to deploy to `https://nagarao-cloud.github.io` (your main GitHub Pages site):

1. **Use the existing repository or create it:**
   ```bash
   # If the repository doesn't exist, create it first on GitHub
   # Repository name must be: nagarao-cloud.github.io
   ```

2. **Update the workflow:**
   - Rename `.github/workflows/deploy-root.yml` to `deploy.yml`
   - Delete the other `deploy.yml` file

3. **Initialize and push:**
   ```bash
   cd Portfolio
   git init
   git add .
   git commit -m "Initial commit: Angular portfolio"
   git branch -M main
   git remote add origin https://github.com/nagarao-cloud/nagarao-cloud.github.io.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to repository settings → Pages
   - Select "GitHub Actions" as the source

## Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Build the project:**
   ```bash
   cd Portfolio
   npm install
   npm run build -- --base-href /Portfolio/
   ```

2. **Deploy the dist folder:**
   - Copy contents of `dist/portfolio/browser` to your repository
   - Commit and push

## Troubleshooting

### Base Href Issues

- If deploying to a subdirectory (e.g., `/portfolio/`), use: `--base-href /portfolio/`
- If deploying to root domain, use: `--base-href /`

### GitHub Actions Not Running

1. Check repository settings → Actions → General
2. Ensure "Allow all actions and reusable workflows" is enabled
3. Verify the workflow file is in `.github/workflows/` directory

### 404 Errors on Refresh

This is normal for SPAs. GitHub Pages doesn't support SPA routing by default. Consider:
- Using a custom 404.html that redirects to index.html
- Or use a different hosting service that supports SPA routing

## Updating Your Portfolio

After making changes:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Actions will automatically rebuild and deploy your site.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in your repository root with your domain
2. Update DNS settings with your domain provider
3. Configure in GitHub Pages settings

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Angular Deployment Guide](https://angular.io/guide/deployment)

