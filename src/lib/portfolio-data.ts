
export interface Project {
  title: string;
  description: string;
  techStack: string[];
  seniorSignal: string;
  hardProblem: string;
  category: "DX/Tooling" | "Full-Stack" | "Real-time" | "Mobile";
  links: {
    github: string;
    live: string;
  };
  image?: string;
}

export const portfolioData: Project[] = [
  {
    title: "Tailwind-Studio",
    description: "A comprehensive educational platform and developer playground for mastering Tailwind CSS through interactive 3D UI visualizers.",
    techStack: ["Next.js", "TypeScript", "Tailwind v4", "Three.js", "Framer Motion"],
    seniorSignal: "Meta-Programming & DX Architecture",
    hardProblem: "Engineered a custom CSS-to-Tailwind mapping engine and real-time 3D UI visualizer for atomic CSS properties.",
    category: "DX/Tooling",
    links: {
      github: "https://github.com/AskTiba/Tailwind-Studio",
      live: "https://github.com/AskTiba/Tailwind-Studio",
    },
  },
  {
    title: "ChessFed-Ug",
    description: "The official national tournament and ranking platform for the Uganda Chess Federation, managing thousands of active players.",
    techStack: ["Next.js 15", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    seniorSignal: "Complex Domain Modeling & Logic",
    hardProblem: "Implemented the 'Grand Prix Engine'—a high-performance mathematical utility for calculating real-time ELO rankings and standings.",
    category: "Full-Stack",
    links: {
      github: "https://github.com/AskTiba/ChessFed-Ug",
      live: "https://github.com/AskTiba/ChessFed-Ug",
    },
  },
  {
    title: "Live-Orbit",
    description: "A mission-critical medical domain dashboard for real-time surgical status tracking and server-side document orchestration.",
    techStack: ["React", "Node.js", "Socket.io", "PDFKit", "Zustand"],
    seniorSignal: "Real-time & Mission-Critical Systems",
    hardProblem: "Achieved zero-latency state synchronization across distributed surgical boards and automated complex PDF report generation.",
    category: "Real-time",
    links: {
      github: "https://github.com/AskTiba/Live-Orbit",
      live: "https://github.com/AskTiba/Live-Orbit",
    },
  },
  {
    title: "Steward",
    description: "A multi-platform property management ecosystem sharing core business logic across web and mobile via a unified architecture.",
    techStack: ["React Native", "Expo", "React", "TypeScript Monorepo", "Node.js"],
    seniorSignal: "Monorepo Orchestration & Mobile Scaling",
    hardProblem: "Orchestrated a complex TypeScript monorepo to share 90% of business logic across Web and React Native mobile platforms.",
    category: "Mobile",
    links: {
      github: "https://github.com/AskTiba/Steward",
      live: "https://github.com/AskTiba/Steward",
    },
  },
  {
    title: "Applytics",
    description: "An advanced data visualization platform for tracking job application conversion funnels and career growth metrics.",
    techStack: ["React", "Recharts", "Framer Motion", "Tailwind CSS"],
    seniorSignal: "Data Visualization & Complex State",
    hardProblem: "Transformed high-dimensional raw API data into intuitive, interactive visual conversion funnels with complex state management.",
    category: "Full-Stack",
    links: {
      github: "https://github.com/AskTiba/Applytics",
      live: "https://github.com/AskTiba/Applytics",
    },
  },
  {
    title: "Worksy",
    description: "A collaborative workspace management platform for high-growth teams, built during the Chingu Engineering Residency.",
    techStack: ["React", "Express", "PostgreSQL", "Socket.io", "Agile"],
    seniorSignal: "Collaborative Full-Stack Engineering",
    hardProblem: "Coordinated real-time API integrations and complex state updates in a cross-functional team environment under tight deadlines.",
    category: "Full-Stack",
    links: {
      github: "https://github.com/AskTiba/Worksy",
      live: "https://github.com/AskTiba/Worksy",
    },
  },
  {
    title: "PullBoard",
    description: "A developer productivity tool for monitoring and managing GitHub pull requests across multiple enterprise repositories.",
    techStack: ["React", "GitHub API", "TypeScript", "Tailwind CSS"],
    seniorSignal: "Developer Tooling & API Integration",
    hardProblem: "Aggregated and normalized high-volume data from the GitHub API into a performant, real-time developer dashboard.",
    category: "DX/Tooling",
    links: {
      github: "https://github.com/AskTiba/PullBoard",
      live: "https://github.com/AskTiba/PullBoard",
    },
  },
  {
    title: "Type-Speed-Lab",
    description: "A modern, high-performance typing speed test application featuring real-time WPM tracking and persistent personal bests.",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    seniorSignal: "Performance Optimization & Real-time State",
    hardProblem: "Engineered a precise WPM calculation engine with zero-latency visual feedback for rapid keystroke events.",
    category: "Full-Stack",
    links: {
      github: "https://github.com/AskTiba/type-speed-lab",
      live: "https://github.com/AskTiba/type-speed-lab",
    },
  },
  {
    title: "Weather-Now",
    description: "A high-fidelity weather application featuring geolocation-aware data fetching and dynamic, context-aware UI themes.",
    techStack: ["React", "OpenWeather API", "Framer Motion", "Tailwind CSS"],
    seniorSignal: "External Service Integration & Dynamic UI",
    hardProblem: "Implemented a robust geolocation-based data fetching layer with adaptive UI components that respond to real-time weather conditions.",
    category: "Full-Stack",
    links: {
      github: "https://github.com/AskTiba/Weather-Now",
      live: "https://github.com/AskTiba/Weather-Now",
    },
  },
];
