# 🚀 BogiTech Solutions — Official Portfolio Website

[![CI Pipeline](https://github.com/YOUR_GITHUB_USERNAME/bogitech-website/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_GITHUB_USERNAME/bogitech-website/actions)
![Next.js](https://img.shields.io/badge/Next.js-14%2B-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-[#3178C6]?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4%2B-[#38BDF8]?style=flat-square&logo=tailwindcss&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-1.0%2B-black?style=flat-square&logo=bun&logoColor=white)

Modern, high-performance portfolio website built for **BogiTech Solutions**. Designed to showcase enterprise software development services, cloud infrastructure engineering, and technical case studies.

---

## 🛠️ Tech Stack & Tooling

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager & Runtime:** [Bun](https://bun.sh/)
- **CI/CD:** GitHub Actions

---

## ⚡ Quick Start

### Prerequisites

Ensure you have [Bun](https://bun.sh/) installed locally on your machine:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation & Local Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/bogitech-website.git
   cd bogitech-website
   ```

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Run the development server:**

   ```bash
   bun run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000` to see the site running.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `bun run dev` | Starts the local development server with hot-reloading |
| `bun run build` | Compiles and builds the production app |
| `bun run start` | Starts the production server |
| `bun run lint` | Runs ESLint checks across the codebase |
| `bun run typecheck` | Executes TypeScript type-checking without emitting files |

---

## ⚙️ Continuous Integration (CI/CD)

This project uses **GitHub Actions** for continuous integration. Every push or pull request to the `main` or `develop` branches automatically executes:

1. **Dependency Verification:** `bun install --frozen-lockfile`
2. **Code Linting:** `bun run lint`
3. **Type Checking:** `bun run typecheck`
4. **Production Build Verification:** `bun run build`

The pipeline ensures zero breaking code hits production.

---

## 📂 Project Structure

```text
bogitech-website/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI configuration (Bun)
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Global styles & Tailwind directives
│   ├── layout.tsx          # Root layout with custom metadata
│   └── page.tsx            # Main landing page component
├── public/                 # Static assets (logos, graphics, icons)
├── bun.lock                # Bun lockfile
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Custom theme colors (Teal #00E6CC)
└── tsconfig.json           # TypeScript configuration
```

---

## 🎨 Branding & Theme Tokens

- **Background:** `#050810` (Deep Dark Blue/Near-Black)
- **Primary Glow / Accent:** `#00E6CC` (Electric Cyan/Teal)
- **Secondary Accent:** `#0F766E` (Muted Dark Teal)
- **Typography:** Sans-Serif (`Inter` / `Geist`) & Monospace (`Fira Code`)

---

## 📬 Contact & Inquiries

**BogiTech Solutions** — *Building Scalable Software & Robust IT Infrastructure.*

- **Telegram:** [@bogitechsolution](https://t.me/bogitechsolution)
- **Website:** [https://bogi-tech-solutions.vercel.app/](https://bogi-tech-solutions.vercel.app/)
