'use client'
import Image from 'next/image'
import avatar from '../public/avatar.jpg'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen">
      {/* Hero Avatar */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg mb-6">
        <Image
          src={avatar}
          alt="Saul Santo Anju"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Nama dan Posisi */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-transparent bg-clip-text">
        Hi, I&apos;m Saul Santo Anju
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-8">
        Laravel Backend Developer. I build APIs, manage databases, and write clean & scalable code to bring digital ideas to life.
      </p>

      {/* Tombol Aksi */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/my-cv.docx"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
        >
          📄 Download CV
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/10 transition"
        >
          💻 GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/10 transition"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  )
}
