"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import CookieBanner from "./components/cookieConsent";

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
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
