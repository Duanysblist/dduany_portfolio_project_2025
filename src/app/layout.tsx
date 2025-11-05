import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Duany - Software Engineer",
  description:
    "Full-stack developer specializing in React, Node.js, and cloud technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <GoogleAnalytics />
        {
          /* rest of your app */
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <NavBar />
              <main className="pt-16 grow container">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        }
      </body>
    </html>
  );
}
