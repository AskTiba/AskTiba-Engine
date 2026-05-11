
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
    default: "Anthony Tibamwenda | Systems & DX Engineer",
    template: "%s | Anthony Tibamwenda",
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans flex flex-col min-h-screen`}
      >
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1E293B",
              color: "#E2E8F0",
              border: "1px solid rgba(148, 163, 184, 0.12)",
            },
          }}
        />
        <Header />
        <PageWrapper>
          <main className="flex flex-col flex-grow">{children}</main>
        </PageWrapper>
        <Footer />
      </body>
    </html>
  );
}
