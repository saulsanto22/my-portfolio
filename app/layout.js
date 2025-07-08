import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from '../components/NavBar';
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({subsets:["latin"]})

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio By Saul Santo Anju",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-gray-900 dark:text-gray-100 transition-colors duration-300 
  bg-gradient-to-b from-cyan-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>
        <Navbar />
        <main className="p-6 max-w-4xl mx-auto min-h-screen">{children}</main>
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-6 border-t border-gray-200 dark:border-gray-700">
          © 2025 Saul Santo Anju
        </footer>
      </body>
    </html>
  );
}
