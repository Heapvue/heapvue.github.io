"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";

const metadata = {
  title: "Heapvue - IT Services | Consulting | Software Solutions",
  description: "Heapvue is a software development company that provides IT services, consulting, and software solutions to businesses.",
};

export default function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
