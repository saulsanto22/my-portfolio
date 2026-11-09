'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : prefersDark

    document.documentElement.classList.toggle('dark', shouldBeDark)
    setIsDark(shouldBeDark)
  }, [])

  const toggleDarkMode = () => {
    const nextDark = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', nextDark)
    localStorage.setItem('theme', nextDark ? 'dark' : 'light')
    setIsDark(nextDark)
  }

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/75 dark:bg-gray-900/75 border-b border-gray-200/60 dark:border-gray-800/60 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
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
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="ml-4 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
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
