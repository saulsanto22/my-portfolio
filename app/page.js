import Image from 'next/image'
import Link from 'next/link'
import avatar from '../public/profile.jpg'

const highlights = [
  { value: '2+ Years', label: 'Backend Experience' },
  { value: '3 National', label: 'Gov & Enterprise Apps' },
  { value: 'REST & Microservices', label: 'System Architecture' },
]

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-6rem)] py-12 animate-fade-in">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs sm:text-sm font-medium text-blue-700 dark:text-cyan-300 bg-blue-100/80 dark:bg-cyan-950/60 border border-blue-200 dark:border-cyan-800 rounded-full">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
        <span>Available for Backend Developer Opportunities</span>
      </div>

      {/* Hero Avatar */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mb-6">
        <Image
          src={avatar}
          alt="Saul Santo Anju"
          fill
          priority
          className="object-cover w-full h-full"
        />
      </div>

      {/* Nama dan Posisi */}
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-transparent bg-clip-text">
        Hi, I&apos;m Saul Santo Anju
      </h1>

      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8 leading-relaxed">
        <strong>Laravel Backend Developer</strong> experienced in building scalable{' '}
        <strong>RESTful APIs</strong>, microservice architectures, and relational databases for national-scale systems.
      </p>

      {/* Quick Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-10">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="px-4 py-3 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 shadow-sm"
          >
            <div className="text-xl font-bold text-blue-600 dark:text-cyan-400">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Aksi */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
        >
          🚀 View Projects
        </Link>
        <a
          href="/my-cv.docx"
          download
          className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 font-semibold rounded-full shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition"
        >
          📄 Download CV
        </a>
        <a
          href="https://github.com/saulsanto22"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/10 transition"
        >
          💻 GitHub
        </a>
        <a
          href="https://id.linkedin.com/in/saul-santo-anju-5269081a7"
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
