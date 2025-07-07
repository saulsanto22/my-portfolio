import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

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
    <html lang="en">
     <body className={`${inter.className} bg-gray-50 text-gray-900`}>
      <header className="p-4 bg-gray-900 text-white flex justify-between shadow">
          <h1 className="font-bold text-lg">Saul Santo Anju</h1>
          <nav className="space-x-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className="p-6 max-w-4xl mx-auto min-h-screen">{children}</main>
        <footer className="text-center text-sm text-gray-500 py-6 border-t">© 2025 Saul Santo Anju</footer>
      </body>
    </html>
  );
}
