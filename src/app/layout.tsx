
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageWrapper } from "@/components/PageWrapper";

// Use system font stacks to avoid network timeouts during development
const inter = {
  variable: "--font-inter",
};

const jetbrains = {
  variable: "--font-jetbrains",
};

export const metadata: Metadata = {
  title: {
    default: "AskTiba-Engine | Anthony Tibamwenda",
    template: "%s | AskTiba-Engine",
  },
  description:
    "Full-stack engineer specializing in high-performance frontend systems, developer tooling, and real-time data orchestration. React 19, Next.js 15, TypeScript.",
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Developer Tools",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans flex flex-col min-h-screen bg-background text-text selection:bg-electric/30 selection:text-white`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow">
          <PageWrapper>{children}</PageWrapper>
        </main>
        <Footer />
        <Toaster position="bottom-right" toastOptions={{
          style: {
            background: 'rgba(10, 10, 15, 0.8)',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
          }
        }} />
      </body>
    </html>
  );
}
