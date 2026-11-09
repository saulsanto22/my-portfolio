'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : true

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
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/70 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-3.5 flex justify-between items-center">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            S
          </span>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Saul Santo<span className="text-blue-600 dark:text-cyan-400">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-1.5 items-center text-sm font-medium">
          <div className="flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-slate-900/90 border border-slate-200/70 dark:border-slate-800">
            {navItems.map(({ label, path }) => {
              const isActive = pathname === path
              return (
                <Link
                  key={path}
                  href={path}
                  className={`px-4 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-cyan-400 font-semibold shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="ml-3 p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400 dark:hover:border-cyan-500 transition"
          >
            {isDark ? <FaSun className="text-amber-400" /> : <FaMoon className="text-slate-600" />}
          </button>
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition"
          >
            {isDark ? <FaSun className="text-amber-400" /> : <FaMoon className="text-slate-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-800 dark:text-slate-200 text-xl font-bold"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl py-3 px-6 border-t border-slate-200 dark:border-slate-800">
          <nav className="flex flex-col gap-1.5 text-sm">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                href={path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-xl transition ${
                  pathname === path
                    ? 'bg-blue-50 dark:bg-slate-900 font-semibold text-blue-600 dark:text-cyan-400'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
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
