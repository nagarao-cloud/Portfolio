# Quick deployment script for GitHub Pages (PowerShell)

Write-Host "🚀 Building Angular portfolio for GitHub Pages..." -ForegroundColor Cyan

# Build the project
npm run build

Write-Host "✅ Build complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📦 Next steps:" -ForegroundColor Yellow
Write-Host "1. The build output is in: dist/portfolio/browser"
Write-Host "2. Commit and push to GitHub:"
Write-Host "   git add ."
Write-Host "   git commit -m 'Deploy portfolio'"
Write-Host "   git push origin main"
Write-Host ""
Write-Host "3. GitHub Actions will automatically deploy to GitHub Pages"
Write-Host "   Your site will be available at: https://nagarao-cloud.github.io/Portfolio/" -ForegroundColor Green

