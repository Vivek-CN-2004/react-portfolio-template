# 🚀 Step-by-Step Beginner Setup Guide

Welcome to the **React Portfolio Template**! This guide will walk you step-by-step through setting up, customizing, and launching your personal portfolio website—even if you are new to React or web development.

---

## 📋 Prerequisites

Before starting, make sure you have installed:
1. **Node.js** (version 18 or higher) — [Download Node.js](https://nodejs.org/)
2. **Git** — [Download Git](https://git-scm.com/)
3. A code editor like **VS Code** — [Download VS Code](https://code.visualstudio.com/)

---

## 🛠️ Step 1: Clone or Use the GitHub Template

### Option A: Using GitHub Template Button (Recommended)
1. On the GitHub repository page, click the green **"Use this template"** button.
2. Select **"Create a new repository"**.
3. Give your new repository a name (e.g., `my-portfolio`).
4. Clone your new repository to your computer:
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

### Option B: Direct Clone
```bash
git clone https://github.com/yourusername/portfolio-template.git my-portfolio
cd my-portfolio
```

---

## 📦 Step 2: Install Dependencies

Run the following command in your terminal:

```bash
npm install
```

This will download all required libraries including React, Vite, Tailwind CSS, Framer Motion, and Lucide React.

---

## 🏃 Step 3: Run the Local Development Server

Start the local development server:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173
```
You will see your live portfolio! Any changes you make to the code will update instantly in your browser (Hot Module Replacement).

---

## ✏️ Step 4: Customize Your Portfolio Data

All portfolio data is separated into clean, modular configuration files inside `src/data/`:

| What to Customize | File Location | Description |
| :--- | :--- | :--- |
| **Profile & Bio** | `src/data/profile.js` | Name, role, bio, social links, typing animation phrases |
| **Projects** | `src/data/projects.js` | List of your projects, descriptions, tech stack, GitHub/demo links |
| **Skills** | `src/data/skills.js` | Categories of technical skills and tools |
| **Work Experience** | `src/data/experience.js` | Job titles, companies, dates, key accomplishments |
| **Certifications** | `src/data/certifications.js` | Certificates, issuing organizations, credentials links |
| **GitHub Stats** | `src/data/github.js` | Repository count, contributions, top programming languages |
| **Navigation** | `src/data/navigation.js` | Navbar links and section anchors |

---

## 📄 Step 5: Replace Your Resume PDF & Profile Photo

### 1. Resume
- Save your resume PDF file as `resume.pdf`.
- Place it directly into the `public/` directory:
  ```
  public/resume.pdf
  ```
- The "Download Resume" and "View Resume" buttons across the site will automatically open this file!

### 2. Profile Photo (Optional)
- If you want an image avatar instead of text initials, place your photo into `public/profile.jpg`.
- In `src/sections/Hero.jsx`, replace:
  ```jsx
  <span className="text-6xl font-bold text-gradient">{PROFILE.initials}</span>
  ```
  with:
  ```jsx
  <img src={PROFILE.avatar} alt={PROFILE.name} className="w-full h-full object-cover" />
  ```

---

## ✉️ Step 6: Set Up EmailJS for the Contact Form

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account.
2. In the EmailJS Dashboard:
   - **Email Services**: Add a service (e.g. Gmail) and copy your **Service ID**.
   - **Email Templates**: Create a contact form template and copy your **Template ID**.
   - **Account**: Go to Account > API Keys and copy your **Public Key**.
3. Create a `.env` file in the project root (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
4. Fill in your keys in `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

---

## 🌐 Step 7: Deploy Your Site

### Deploying on Vercel (Recommended)
1. Push your code to GitHub.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New" > "Project"** and import your repository.
4. Add your Environment Variables (`VITE_EMAILJS_SERVICE_ID`, etc.) if using EmailJS.
5. Click **"Deploy"**. Vercel will build and host your site automatically!

### Deploying on Netlify
1. Sign in to [Netlify](https://netlify.com).
2. Connect your GitHub repository for continuous deployment or drag-and-drop the built `dist/` directory.

---

## ❓ Need Help?

If you run into any issues, open an issue on the GitHub repository or check the main `README.md` for troubleshooting tips.
