#!/bin/bash
# Quick deployment script for GitHub Pages

echo "🚀 Building Angular portfolio for GitHub Pages..."

# Build the project
npm run build

echo "✅ Build complete!"
echo ""
echo "📦 Next steps:"
echo "1. The build output is in: dist/portfolio/browser"
echo "2. Commit and push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Deploy portfolio'"
echo "   git push origin main"
echo ""
echo "3. GitHub Actions will automatically deploy to GitHub Pages"
echo "   Your site will be available at: https://nagarao-cloud.github.io/Portfolio/"

