# Minimalist Portfolio - Alisson Luan Peloso

A clean, modern portfolio website showcasing my experience as a Full-Stack Developer and Tech Lead.

## 🚀 Features

- **Dark Mode Design**: Modern dark theme with cyan and emerald accents
- **Smooth Navigation**: Enhanced navigation with hover effects and smooth scrolling
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Hover animations, glow effects, and smooth transitions
- **GitHub Pages Ready**: Optimized for static deployment

## 🛠️ Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** for UI components
- **Lucide React** for icons

## 📦 Deployment to GitHub Pages

1. **Create a new repository** on GitHub named `minimalist-portfolio`

2. **Push your code** to the repository:
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/minimalist-portfolio.git
   git push -u origin main
   \`\`\`

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Set source to "GitHub Actions"

4. **Create GitHub Actions workflow** by adding `.github/workflows/deploy.yml`:
   \`\`\`yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
     workflow_dispatch:
   
   permissions:
     contents: read
     pages: write
     id-token: write
   
   concurrency:
     group: "pages"
     cancel-in-progress: false
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Setup Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '18'
             cache: 'npm'
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./out
   
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   \`\`\`

5. **Your site will be available** at: `https://YOUR_USERNAME.github.io/minimalist-portfolio/`

## 🎨 Customization

- Update personal information in `app/page.tsx`
- Modify colors in `app/globals.css`
- Add new sections or components as needed
- Update the repository name in `next.config.mjs` if different

## 📱 Local Development

\`\`\`bash
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
