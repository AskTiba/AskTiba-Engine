
# Project Plan: High-Quality Developer Portfolio

This document contains the full project plan for building a personal portfolio website. It can be used as a self-contained prompt for an AI assistant like Gemini to execute the project from start to finish.

## Instructions for AI Assistant

Hello Gemini,

This is a self-contained prompt outlining a complete project plan. I want you to execute this entire plan from start to finish to build my developer portfolio website.

Please proceed through each phase automatically without asking for confirmation to continue to the next phase. You should only pause and ask for my input if you encounter an error or when you need sensitive information, such as an API key.

Acknowledge that you understand these instructions, and then begin with Phase 1.

---

## **[START OF PROJECT PLAN]**

**Project:** High-Quality Developer Portfolio

**Objective:** Build a complete, modern, and high-performance personal portfolio website. The final product will be a fully functional, polished, and easily maintainable application ready for deployment.

**Core Technologies:**
*   **Framework:** Next.js (App Router)
*   **Styling:** Tailwind CSS
*   **UI Components:** Shadcn/UI
*   **Content:** Velite (for type-safe MDX blog posts)
*   **Animations:** Framer Motion
*   **Form Notifications:** React Hot Toast

---

### **Phase 1: Project Initialization & Setup**

1.  **Initialize Next.js App:** Run `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`.
2.  **Set up Shadcn/UI:** Initialize Shadcn/UI in the project, configuring it to work with the `src` directory and alias.
3.  **Install Core Dependencies:** Install `framer-motion`, `react-hot-toast`, and `velite`.
4.  **Establish Folder Structure:** Create `src/components/`, `src/lib/`, `src/content/posts/`, and a `velite.config.ts` file in the root.
5.  **Configure Velite:** Populate `velite.config.ts` to define a `posts` collection with a schema for the blog post frontmatter (fields: `slug`, `title`, `date`, `description`, `published`).

### **Phase 2: Core UI, Layout & Pages**

1.  **Build Core Layout:** Create a responsive `Header` and `Footer` in `src/components/`. Integrate them into the root `src/app/layout.tsx`, which will also include a `Toaster` component from `react-hot-toast` for notifications.
2.  **Animate Page Transitions:** Wrap the main content in `layout.tsx` with a Framer Motion component to create a subtle fade-in effect on page navigation.
3.  **Build Home Page (`/`):** Design a compelling hero section with a headline, bio, and a call-to-action button.
4.  **Build About Page (`/about`):** Create a page with a detailed bio, skills, and professional experience.
5.  **Build Portfolio Page (`/portfolio`):**
    *   Create `src/lib/portfolio-data.ts` to hold project information (title, description, tech stack, links).
    *   Design a `ProjectCard` component.
    *   The page will fetch data from the lib file and render a grid of animated `ProjectCard` components.

### **Phase 3: Blog Implementation (with Velite)**

1.  **Create Placeholder Posts:** Create two example `.mdx` files in `src/content/posts/` with valid frontmatter.
2.  **Blog Listing Page (`/blog`):** This page will import the processed data from Velite (`import { posts } from '#velite'`) and display a sorted list of all published posts with their title, date, and description.
3.  **Individual Blog Post Page (`/blog/[slug]`):** Create a dynamic route that renders the content of each MDX post. The page should be cleanly styled for readability.

### **Phase 4: Contact Form & API**

1.  **Install Resend:** Add the `resend` package for sending emails.
2.  **Build Contact Page (`/contact`):** Create a page with a contact form (Name, Email, Message). Use Shadcn/UI's `Input`, `Textarea`, and `Button` components.
3.  **Implement Form Logic:** Manage form state with React hooks. On submission, call our API route and display toast notifications for sending, success, or error states using `react-hot-toast`.
4.  **Create API Route (`/api/contact`):** Create a serverless function that validates the form data and uses `Resend` to forward the message to a specified email address (to be stored in an environment variable).

### **Phase 5: Finalization**

1.  **SEO & Metadata:** Add dynamic page titles and meta descriptions to all pages.
2.  **Environment Variables:** Create a `.env.local.example` file to document the `RESEND_API_KEY`.
3.  **Final Review:** Polish all styling, ensure responsiveness, and confirm all interactive elements work perfectly.

## **[END OF PROJECT PLAN]**
