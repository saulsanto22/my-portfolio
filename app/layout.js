import { Inter } from "next/font/google";
import Navbar from "../components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saul Santo Anju | Laravel Backend Developer",
  description:
    "Portfolio of Saul Santo Anju — Laravel Backend Developer experienced in building scalable RESTful APIs, managing relational databases, and delivering national-scale systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} text-gray-900 dark:text-gray-100 transition-colors duration-300 bg-gradient-to-b from-cyan-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}
      >
        <Navbar />
        <main className="pt-20 px-6 max-w-5xl mx-auto min-h-screen">
          {children}
        </main>
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-800">
          © {new Date().getFullYear()} Saul Santo Anju. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
