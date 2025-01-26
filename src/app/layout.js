"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import CookieBanner from "./components/cookieConsent";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const metadata = {
  title: "Heapvue - Enterprise IT Consulting & Digital Transformation Services",
  description: "Heapvue delivers enterprise-grade IT consulting, digital transformation, and technology services. We help businesses modernize their technology stack and drive innovation.",
  keywords: "IT consulting, digital transformation, enterprise IT services, technology consulting, software development, cloud solutions",
  author: "Heapvue",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {

  const pathname = usePathname();
  const baseUrl = "https://heapvue.com"; 
  const canonicalUrl = `${baseUrl}${pathname}`; 

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="viewport" content={metadata.viewport} />
        <link rel="canonical" href={canonicalUrl} />
      </head>
      <body>
        <ProgressBar
          height="3px"
          color="#2469bc"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />
        <CookieBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
