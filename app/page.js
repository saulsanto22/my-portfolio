import Image from 'next/image'
import Link from 'next/link'
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaServer,
  FaDatabase,
  FaCubes
} from 'react-icons/fa'
import {
  SiLaravel,
  SiGo,
  SiSpringboot,
  SiNestjs,
  SiPostgresql,
  SiDocker
} from 'react-icons/si'
import avatar from '../public/profile.jpg'

const highlights = [
  {
    value: '3+ Years',
    label: 'Production Backend Experience',
    icon: <FaServer className="text-blue-600 dark:text-cyan-400 text-lg" />
  },
  {
    value: '4 Enterprise',
    label: 'Gov & Public Transit Systems',
    icon: <FaDatabase className="text-teal-600 dark:text-teal-400 text-lg" />
  },
  {
    value: 'Polyglot API',
    label: 'Laravel • Go • Spring Boot • NestJS',
    icon: <FaCubes className="text-indigo-600 dark:text-indigo-400 text-lg" />
  },
]

const featuredTech = [
  { name: 'Laravel', icon: <SiLaravel className="text-red-500" /> },
  { name: 'Golang', icon: <SiGo className="text-cyan-500" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
  { name: 'NestJS', icon: <SiNestjs className="text-rose-500" /> },
  { name: 'PostgreSQL & MySQL', icon: <SiPostgresql className="text-blue-500" /> },
  { name: 'Docker & CI/CD', icon: <SiDocker className="text-sky-500" /> },
]

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-9rem)] py-8 animate-fade-in">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-8 text-xs sm:text-sm font-medium text-blue-700 dark:text-cyan-300 bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-400/20 rounded-full backdrop-blur-md">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span>Available for Backend Software Engineer Opportunities</span>
      </div>

      {/* Hero Avatar with Glowing Gradient Ring */}
      <div className="relative mb-8 group">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-teal-400 opacity-70 blur-md group-hover:opacity-100 transition duration-500" />
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-cyan-400 to-teal-400 shadow-2xl">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
            <Image
              src={avatar}
              alt="Saul Santo Anju"
              fill
              priority
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Nama dan Headline */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
        Hi, I&apos;m{' '}
        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-transparent bg-clip-text">
          Saul Santo Anju
        </span>
      </h1>

      <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
        <strong>Backend Software Engineer</strong> specializing in{' '}
        <span className="text-slate-900 dark:text-white font-semibold">
          Laravel, Go, Java Spring Boot, and NestJS
        </span>
        . Experienced in architecting high-concurrency APIs, polyglot microservices, and national-scale enterprise platforms.
      </p>

      {/* Tech Stack Pill Strip */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-2xl">
        {featuredTech.map((tech) => (
          <span
            key={tech.name}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm"
          >
            <span className="text-base">{tech.icon}</span>
            <span>{tech.name}</span>
          </span>
        ))}
      </div>

      {/* Tombol Aksi */}
      <div className="flex flex-wrap justify-center gap-3.5 mb-14">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
        >
          <span>Explore Projects</span>
          <FaArrowRight className="text-sm" />
        </Link>
        <a
          href="/Saul Santo Anju Lumban Raja.pdf"
          download="Saul_Santo_Anju_CV.pdf"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-300 dark:border-slate-700 font-semibold rounded-full shadow-sm hover:border-blue-500 dark:hover:border-cyan-400 hover:-translate-y-0.5 transition-all"
        >
          <FaDownload className="text-sm text-blue-600 dark:text-cyan-400" />
          <span>Download CV</span>
        </a>
        <a
          href="https://github.com/saulsanto22"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-semibold rounded-full hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-400 dark:hover:border-cyan-500 transition-all"
        >
          <FaGithub className="text-lg" />
          <span>GitHub</span>
        </a>
        <a
          href="https://id.linkedin.com/in/saul-santo-anju-5269081a7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 font-semibold rounded-full hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-400 dark:hover:border-cyan-500 transition-all"
        >
          <FaLinkedin className="text-lg text-blue-600 dark:text-cyan-400" />
          <span>LinkedIn</span>
        </a>
      </div>

      {/* Quick Highlights Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
        {highlights.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center p-5 rounded-2xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/90 shadow-sm hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all"
          >
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 mb-3">
              {item.icon}
            </div>
            <div className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {item.value}
            </div>
            <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
