# 🗺️ Project Journey: Building AskTiba-Engine

This document serves as a comprehensive case study and architectural log of the transformation from a static portfolio to a high-performance **Career Automation Engine**.

---

## 🎯 The Original Objective
> "Automate the professional career strategy by creating high-conversion, ATS-optimized materials and implementing a scalable Application Tailoring Engine."

## 🚀 Phase-by-Phase Development

### Phase 1: Foundation & Design System
- **Action:** Established a dark-mode-first aesthetic using a curated palette of Navy, Electric Blue, and Amber.
- **Outcome:** A unified UI library with glassmorphic cards and smooth Framer Motion transitions.

### Phase 2: The Project Showcase Engine
- **Challenge:** Presenting 9 complex projects without overwhelming the user.
- **Solution:** Engineered a metadata-driven filtering system and "Hard Problem" highlights to signal seniority to recruiters.

### Phase 3: The Career Hub API
- **Hard Problem:** Creating a secure, local-only bridge between the web UI and personal career documents.
- **Solution:** Developed a Next.js 15 API route that interacts with the `Career Strategy/` directory on the local machine while ensuring it remains `.gitignored` for privacy.

### Phase 4: Markdown-to-Professional-PDF
- **Challenge:** Markdown looks like a blog, but employers need a paper-standard CV.
- **Solution:** Built a "Focus Mode" renderer with a professional letterhead and custom `@media print` CSS. This ensures that a single click produces a perfectly formatted A4 document.

### Phase 5: Privacy & Lead Generation
- **Strategy:** Transitioned from "Public PDF Hosting" to a "Request CV" flow.
- **Outcome:** Increased recruiter engagement by forcing a contact-first interaction, while securing personal data (phone/address) from public scrapers.

## 🛠️ Key Technical Challenges Overcome
- **Build-Time Timeouts:** Resolved font-fetching failures in restricted environments by switching to a system-optimized font stack.
- **UI Performance:** Orchestrated 1,700+ modules in Next.js 15 to maintain a fast developer experience.
- **State Synchronization:** Implemented real-time markdown editing with a side-by-side preview for rapid application tailoring.

## 🤖 The "Automation" Workflow
1. **JD Scrape:** A job URL is analyzed for key requirements.
2. **Tailoring:** The AI-driven engine maps the user's "Senior Signals" to the job requirements.
3. **Review:** The user uses the **AskTiba Dashboard** to verify formatting in "Focus Mode."
4. **Export:** High-fidelity PDF is generated via the custom Print Engine.

---

### 🔑 Core "Prompt Command" (The Driver)
*"Transform the portfolio redesign into a production-ready, Dark-Mode-First career automation platform. Prioritize senior signals, secure personal documents via a 'Request CV' flow, and build a private dashboard for rapid job application tailoring."*

---

**Project Completed: May 2026**  
**Engineering Lead: Anthony Tibamwenda**  
**Project Name: AskTiba-Engine**
