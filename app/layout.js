import { Inter } from "next/font/google";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/NavBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saul Santo Anju | Backend Software Engineer",
  description:
    "Portfolio of Saul Santo Anju — Backend Software Engineer experienced in Laravel, Go, Java Spring Boot, NestJS, and national-scale microservice architectures.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.className} relative min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 bg-grid-pattern transition-colors duration-300`}
      >
        {/* Ambient Background Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 overflow-hidden -z-10"
        >
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-500/15 via-cyan-400/10 to-teal-400/15 dark:from-blue-600/20 dark:via-cyan-500/10 dark:to-teal-500/15 blur-3xl rounded-full" />
        </div>

        <Navbar />

        <main className="flex-1 pt-24 pb-16 px-6 max-w-5xl w-full mx-auto">
          {children}
        </main>

        <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="font-bold text-slate-800 dark:text-slate-200">
                Saul Santo Anju
              </span>
              <span className="hidden sm:inline">•</span>
              <span>© {new Date().getFullYear()} All rights reserved.</span>
            </div>

            <div className="flex items-center gap-5 text-lg">
              <a
                href="https://github.com/saulsanto22"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://id.linkedin.com/in/saul-santo-anju-5269081a7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:saul.santoa@gmail.com"
                aria-label="Email"
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
