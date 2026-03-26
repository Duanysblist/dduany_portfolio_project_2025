import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dduany-portfolio-project-2025.vercel.app"),
  title: {
    default: "Daniel Duany - Software Engineer",
    template: "%s | Daniel Duany",
  },
  description:
    "Full-stack developer specializing in React, Node.js, and cloud technologies. Explore my projects, blog, and more.",
  keywords: [
    "Daniel Duany",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Cloud",
    "Portfolio",
  ],
  authors: [{ name: "Daniel Duany" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dduany-portfolio-project-2025.vercel.app",
    siteName: "Daniel Duany",
    title: "Daniel Duany - Software Engineer",
    description:
      "Full-stack developer specializing in React, Node.js, and cloud technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Duany - Software Engineer",
    description:
      "Full-stack developer specializing in React, Node.js, and cloud technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
