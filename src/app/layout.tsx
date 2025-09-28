
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MotionDiv } from "@/components/Motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tony's Portfolio",
  description: "A modern developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
        <Header />
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <main>{children}</main>
        </MotionDiv>
        <Footer />
      </body>
    </html>
  );
}
