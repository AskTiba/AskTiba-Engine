# 🚀 AskTiba-Engine: The Career Automation & Systems Portfolio

A high-performance, dark-mode-first portfolio and private **Career Automation Hub** designed for Systems & DX Engineers. This platform doesn't just showcase work—it automates the entire recruitment funnel through a custom-built tailoring engine.

![AskTiba-Engine Preview](https://via.placeholder.com/1200x600?text=AskTiba-Engine+Preview+Placeholder)

## 🌟 Key Features

### 🛠️ Systems & DX Showcase
- **9 High-Impact Projects:** Detailed case studies including "Senior Signals" and "Hard Problem" breakdowns.
- **Glassmorphic UI:** Modern aesthetic built with Next.js 15, Tailwind CSS v4, and Framer Motion.
- **Performance Optimized:** Custom system-font stack for zero-latency loading and high-fidelity rendering.

### 🤖 Career Automation Engine (Private Hub)
- **Application Tailoring:** A Node.js-powered backend that manages tailored CVs and Cover Letters.
- **Live Markdown Preview:** Professional side-by-side editor with real-time industry-standard document rendering.
- **PDF Export Engine:** Custom print-spec CSS for high-quality, A4-formatted professional document generation.
- **Lead Generation:** Integrated "Request CV" flow to secure personal data while maximizing recruiter engagement.

## 💻 Tech Stack

- **Core:** Next.js 15 (App Router), TypeScript, React 19.
- **Styling:** Tailwind CSS v4, Framer Motion, Radix UI.
- **Automation:** Node.js File System API, React Markdown, Tailwind Typography.
- **Verification:** Zod (Validation), React Hook Form, Sonner (Notifications).

## 📂 Architecture

```bash
├── src/
│   ├── app/
│   │   ├── admin/career/      # The Career Automation Hub
│   │   ├── api/applications/ # Filesystem Bridge API
│   │   └── portfolio/        # Project Showcase Engine
│   ├── components/           # High-Fidelity UI Library
│   └── lib/                  # Central Data Store (Project Metadata)
├── Career Strategy/          # Local-only Application Workspace (.gitignored)
└── public/static/            # Optimized Assets
```

## 🚀 Getting Started

1. **Clone the Repo:**
   ```bash
   git clone https://github.com/AskTiba/AskTiba-Engine.git
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run Locally:**
   ```bash
   npm run dev
   ```

## 🔒 Security & Privacy
The `Career Strategy/` directory is automatically excluded from version control via `.gitignore` to ensure your private application data remains local and secure.

---

**Built with 💙 by Anthony Tibamwenda**  
[Portfolio](http://localhost:3000) • [GitHub](https://github.com/AskTiba)
