'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
          Saul Santo Anju
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-800 dark:text-gray-100">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={`relative hover:text-blue-600 dark:hover:text-cyan-400 transition ${pathname === path ? 'text-blue-600 dark:text-cyan-400 font-semibold' : ''
                }`}
            >
              {label}
              {pathname === path && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 dark:bg-cyan-400 rounded-full"></span>
              )}
            </Link>
          ))}
          <button
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="ml-4 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm"
          >
            🌓
          </button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            🌓
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xl font-bold"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-2 px-4 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col gap-3 text-sm">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${pathname === path ? 'bg-gray-100 dark:bg-gray-800 font-semibold text-blue-600 dark:text-cyan-400' : ''
                  }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
