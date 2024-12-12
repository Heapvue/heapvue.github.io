"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import CookieBanner from "./components/cookieConsent";
import NProgress from "nprogress";

const metadata = {
  title: "Heapvue - Consulting | IT Services | Digital Transformation",
  description:
    "Heapvue is a leading IT services company providing consulting, digital transformation, and technology services.",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname, searchParams]);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />
        <CookieBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
