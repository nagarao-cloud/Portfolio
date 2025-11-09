# 🚨 CRITICAL: Enable GitHub Pages - Step by Step

## The Error You're Seeing

```
Error: Get Pages site failed. Please verify that the repository has Pages enabled 
and configured to build using GitHub Actions
```

This error means **GitHub Pages is NOT enabled** in your repository settings.

## ✅ SOLUTION: Follow These Exact Steps

### Step 1: Open Your Repository Settings

1. Go to: **https://github.com/nagarao-cloud/FrontEnd**
2. Click on the **"Settings"** tab (it's in the top menu, next to "Code", "Issues", etc.)

### Step 2: Navigate to Pages Settings

1. In the **left sidebar**, scroll down
2. Click on **"Pages"** (it's near the bottom of the settings menu)

### Step 3: Enable GitHub Pages

1. You'll see a section called **"Source"**
2. There's a dropdown that probably says **"None"** or **"Deploy from a branch"**
3. **Click the dropdown** and select **"GitHub Actions"** ⚠️ (NOT "Deploy from a branch")
4. Click the **"Save"** button

### Step 4: Verify Repository is Public

GitHub Pages (free tier) requires a **public repository**:

1. Still in Settings, look at the top of the page
2. Scroll down to **"Danger Zone"** section
3. Check if it says "This repository is private" or "This repository is public"
4. If it's **private**, you need to make it public:
   - Click **"Change visibility"**
   - Select **"Make public"**
   - Type the repository name to confirm
   - Click **"I understand, change repository visibility"**

### Step 5: Set Workflow Permissions

1. In Settings, click **"Actions"** in the left sidebar
2. Click **"General"** under Actions
3. Scroll to **"Workflow permissions"**
4. Select **"Read and write permissions"**
5. ✅ Check: **"Allow GitHub Actions to create and approve pull requests"**
6. Click **"Save"**

### Step 6: Verify Pages is Enabled

1. Go back to **Settings → Pages**
2. You should now see:
   - ✅ "Your site is ready to be published at..."
   - OR "Your site is published at..."
   - Source should show: **"GitHub Actions"**

### Step 7: Re-run the Workflow

1. Go to the **"Actions"** tab in your repository
2. Click on **"Deploy Angular Portfolio to GitHub Pages"**
3. Click **"Run workflow"** button (top right)
4. Select branch: **main**
5. Click the green **"Run workflow"** button

## 📸 Visual Guide

```
Repository → Settings → Pages → Source: [GitHub Actions] → Save
```

## ✅ Checklist

Before running the workflow, verify:

- [ ] Repository Settings → Pages → Source is set to **"GitHub Actions"**
- [ ] Repository is **PUBLIC** (not private)
- [ ] Settings → Actions → General → Workflow permissions = **"Read and write"**
- [ ] You clicked **"Save"** after making changes

## 🔍 How to Verify Pages is Enabled

After Step 3, go to:
**https://github.com/nagarao-cloud/FrontEnd/settings/pages**

You should see:
- ✅ Source: **GitHub Actions** (not "None" or "Deploy from a branch")
- ✅ A message about your site being ready/published

## 🚫 Common Mistakes

1. ❌ Selecting "Deploy from a branch" instead of "GitHub Actions"
2. ❌ Forgetting to click "Save"
3. ❌ Repository is private (must be public for free GitHub Pages)
4. ❌ Not setting workflow permissions to "Read and write"

## 📞 Still Not Working?

If you've completed all steps and still get the error:

1. **Double-check Step 3** - Make absolutely sure you selected "GitHub Actions" (not "Deploy from a branch")
2. **Verify repository is public** - Free GitHub Pages requires public repos
3. **Wait 1-2 minutes** after enabling Pages before running the workflow
4. **Check the Actions tab** for more detailed error messages

## 🎯 Your Portfolio URL (After Deployment)

Once everything is set up correctly, your portfolio will be at:
**https://nagarao-cloud.github.io/FrontEnd/Portfolio/**

---

**Remember**: GitHub Pages MUST be enabled manually in Settings before the workflow can run. The workflow cannot enable it automatically.

