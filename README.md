# 🚀 Saul Santo Anju — Developer Portfolio

Personal portfolio website built with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS**, showcasing my professional work in national-scale government systems and open-source backend architecture projects.

---

## ✨ Key Highlights

- **Responsive & Modern UI**: Sticky glassmorphism navigation, smooth fade-in transitions, and persistent Dark/Light mode (`localStorage` + system theme detection).
- **Enterprise & Open Source Showcase**:
  - **Featured Enterprise Projects**: *SISARPRAS — LRT Jakarta (IBM Maximo Integration)*, *Lelang.go.id (DJKN)*, *e-LHKPN (KPK)*, and *SDP — Sistem Database Pemasyarakatan (Ditjenpas)*.
  - **Personal & Architecture Projects**: *SmartFactory Ecosystem (Polyglot Microservices: Go, NestJS, Express)*, *SimplePay Core Wallet Engine (Java 21 & Spring Boot)*, *Midtrans Payment Gateway API (Laravel)*, *Expense Approval System*, and *E-Commerce REST API*.
- **Interactive Project Details**: Modal popups displaying role, organization, key technical contributions, tech stack badges, and direct GitHub repository links.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`fa` & `si`)

---

## 📂 Project Structure & Maintenance Guide

```text
my-portfolio/
├── app/
│   ├── layout.js          # Master Layout (Navbar, main container, Footer, SEO metadata)
│   ├── globals.css        # Global Tailwind directives & custom keyframe animations
│   ├── page.js            # Home Page (/): Hero section, status badge, quick highlights
│   ├── about/
│   │   └── page.js        # About Page (/about): Bio, Experience, Education, Tech Stack
│   ├── projects/
│   │   └── page.js        # Projects Page (/projects): Enterprise & Personal project cards + modal
│   └── contact/
│       └── page.js        # Contact Page (/contact): WhatsApp, Email, LinkedIn, GitHub cards
├── components/
│   └── NavBar.js          # Sticky responsive navigation bar + persistent Dark Mode toggle
└── public/                # Static assets (profile.jpg, code.svg, my-cv.docx)
```

### How to Update Content Easily:
1. **Add a New Project**: Open `app/projects/page.js` and add a new object to `enterpriseProjects` or `personalProjects`.
2. **Add a New Skill Badge**: Open `app/about/page.js` and add a new item `{ name: '...', icon: <... /> }` to `coreStack` or `learningStack`.
3. **Update Contact Details**: Open `app/contact/page.js` and edit the `contactChannels` array.

---

## 💻 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

