# GitHub Pages Setup Instructions

## ⚠️ IMPORTANT: Enable GitHub Pages First!

Before the deployment workflow can run, you **MUST** enable GitHub Pages in your repository settings.

## Step-by-Step Instructions

### Step 1: Navigate to Repository Settings

1. Go to your repository: **https://github.com/nagarao-cloud/FrontEnd**
2. Click on the **"Settings"** tab (located in the top menu bar of your repository)

### Step 2: Enable GitHub Pages

1. In the left sidebar, scroll down and click on **"Pages"**
2. Under the **"Source"** section, you'll see a dropdown
3. Click on the dropdown and select **"GitHub Actions"** (NOT "Deploy from a branch")
4. Click **"Save"** button

### Step 3: Verify Pages is Enabled

After saving, you should see:
- A message saying "Your site is ready to be published"
- Or "Your site is published at..." (after first deployment)

### Step 4: Check Workflow Permissions

1. Still in Settings, click on **"Actions"** in the left sidebar
2. Click on **"General"** under Actions
3. Scroll down to **"Workflow permissions"**
4. Select **"Read and write permissions"**
5. Check the box: **"Allow GitHub Actions to create and approve pull requests"** (optional but recommended)
6. Click **"Save"**

### Step 5: Run the Workflow

After enabling GitHub Pages:

1. Go to the **"Actions"** tab in your repository
2. You should see "Deploy Angular Portfolio to GitHub Pages" workflow
3. Click on it, then click **"Run workflow"** button
4. Select branch: **main**
5. Click the green **"Run workflow"** button

### Step 6: Wait for Deployment

- The workflow will take 2-5 minutes to complete
- You can watch the progress in the Actions tab
- Once complete, you'll see a green checkmark

### Step 7: Access Your Portfolio

After successful deployment:
- Go to **Settings → Pages**
- You'll see your site URL: **https://nagarao-cloud.github.io/FrontEnd/Portfolio/**
- Click the link to view your portfolio!

## Troubleshooting

### Error: "Get Pages site failed"
**Solution**: Make sure you completed Step 2 above - GitHub Pages must be enabled with "GitHub Actions" as the source.

### Error: "Resource not accessible by integration"
**Solution**: Complete Step 4 above - ensure workflow permissions are set to "Read and write permissions".

### Workflow runs but site doesn't load
**Solution**: 
1. Check the workflow logs in the Actions tab
2. Verify the build completed successfully
3. Wait a few minutes for DNS propagation
4. Clear your browser cache and try again

### Still having issues?
1. Double-check all steps above
2. Make sure your repository is **public** (required for free GitHub Pages)
3. Check the Actions tab for detailed error messages
4. Verify Node.js version compatibility (should be 18+)

## Quick Checklist

- [ ] Repository Settings → Pages → Source set to "GitHub Actions"
- [ ] Settings → Actions → General → Workflow permissions set to "Read and write"
- [ ] Repository is public (for free GitHub Pages)
- [ ] Workflow has been triggered and completed successfully
- [ ] Site URL is accessible

## Your Portfolio URL

Once deployed, your portfolio will be available at:
**https://nagarao-cloud.github.io/FrontEnd/Portfolio/**

Note: The `/Portfolio/` path is because your Portfolio folder is inside the FrontEnd repository.

