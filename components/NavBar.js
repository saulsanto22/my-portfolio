"use client"
import Link from "next/link"

export default function Navbar() {
  const toggleDarkMode = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark")
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold text-blue-700 dark:text-blue-400 tracking-tight">Saul Santo Anju</h1>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700 dark:text-gray-200 relative">
            {['/', '/about', '/projects', '/contact'].map((path, idx) => {
              const label = ['Home', 'About', 'Projects', 'Contact'][idx]
              return (
                <Link key={path} href={path} className="group relative">
                  <span className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-200">{label}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            })}
          </nav>
          <button
            onClick={toggleDarkMode}
            className="text-sm border px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            🌓
          </button>
        </div>
      </div>
    </header>
  )
}
