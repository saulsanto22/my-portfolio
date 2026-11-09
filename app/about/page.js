import {
  FaDatabase,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaJava,
  FaServer,
  FaShieldAlt,
  FaCloudUploadAlt
} from 'react-icons/fa'
import {
  SiLaravel,
  SiLumen,
  SiMysql,
  SiPostgresql,
  SiMinio,
  SiPostman,
  SiGit,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiTypescript,
  SiGo,
  SiSpringboot,
  SiDocker
} from 'react-icons/si'
import Image from 'next/image'
import DevThinkingSVG from '@/public/code.svg'

const capabilities = [
  {
    title: 'API & Microservice Architecture',
    description:
      'Designing clean, scalable RESTful APIs and polyglot microservices using Laravel, Lumen, Go (Gin), and NestJS.',
    icon: <FaServer className="text-xl text-blue-600 dark:text-cyan-400" />
  },
  {
    title: 'Database & High Concurrency',
    description:
      'Managing MySQL & PostgreSQL schemas, query optimization, pessimistic locking, and ACID double-entry ledger systems.',
    icon: <FaDatabase className="text-xl text-teal-600 dark:text-teal-400" />
  },
  {
    title: 'Cloud Storage & Enterprise Integrations',
    description:
      'Integrating IBM Maximo (EAM), MinIO object storage, Midtrans payment webhooks, streaming PDF generators, and real-time external APIs.',
    icon: <FaCloudUploadAlt className="text-xl text-indigo-600 dark:text-indigo-400" />
  },
  {
    title: 'Security, Docker & CI/CD',
    description:
      'Implementing Stateless JWT RBAC, Sanctum/Passport auth, Docker multi-stage containers, and GitHub Actions pipelines.',
    icon: <FaShieldAlt className="text-xl text-emerald-600 dark:text-emerald-400" />
  }
]

const coreStack = [
  { name: 'Laravel (v5–v10)', icon: <SiLaravel className="text-red-500" /> },
  { name: 'Lumen', icon: <SiLumen className="text-orange-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-500" /> },
  { name: 'MinIO Storage', icon: <SiMinio className="text-amber-500" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'Git & CI/CD', icon: <SiGit className="text-red-500" /> },
]

const learningStack = [
  { name: 'Go (Gin)', icon: <SiGo className="text-cyan-500" /> },
  { name: 'Java 21', icon: <FaJava className="text-orange-500" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
  { name: 'NestJS', icon: <SiNestjs className="text-rose-500" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-slate-800 dark:text-slate-100" /> },
  { name: 'Docker', icon: <SiDocker className="text-sky-500" /> },
  { name: 'React / Next.js', icon: <SiReact className="text-sky-400" /> },
]

export default function AboutPage() {
  return (
    <section className="py-6 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Intro & Illustration */}
        <div className="flex flex-col md:flex-row items-center gap-10 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/90 shadow-sm">
          <div className="w-full md:w-2/3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-2">
              <span>Profile &amp; Background</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 text-slate-900 dark:text-white">
              Engineering Reliable{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-transparent bg-clip-text">
                Backend Systems
              </span>
            </h2>

            <div className="text-slate-600 dark:text-slate-300 space-y-4 text-base sm:text-lg leading-relaxed">
              <p>
                I’m a <strong>Backend Software Engineer</strong> with{' '}
                <strong>3+ years of professional experience</strong> building mission-critical web applications, enterprise integrations, and microservice-based systems using <strong>Laravel</strong> and <strong>Lumen</strong>.
              </p>
              <p>
                I hold a Bachelor’s degree in <strong>Informatics Engineering (Software Engineering)</strong> from <strong>Universitas Teknologi Bandung</strong>. Currently at <strong>PT Adhivasindo</strong>, I develop enterprise backend systems including <strong>SISARPRAS for LRT Jakarta</strong> integrated with <strong>IBM Maximo</strong>, following my tenure delivering national government platforms (<strong>Lelang.go.id</strong>, <strong>e-LHKPN</strong>, and <strong>SDP</strong>).
              </p>
              <p>
                Beyond PHP/Laravel, I actively build production-grade architectures using <strong>Go (Gin)</strong>, <strong>Java 21 (Spring Boot)</strong>, and <strong>TypeScript (NestJS)</strong>.
              </p>
            </div>
          </div>

          <div className="hidden md:flex w-full md:w-1/3 justify-center">
            <Image
              src={DevThinkingSVG}
              alt="Developer thinking illustration"
              className="w-full max-w-[260px] h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* What I Do / Capabilities */}
        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">
            Backend Engineering Focus
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/90 shadow-sm hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  {cap.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                  {cap.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/90 shadow-sm">
            <h3 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white mb-6">
              <FaBriefcase className="text-blue-600 dark:text-cyan-400" /> Work Experience
            </h3>
            <div className="space-y-8">
              {/* PT Adhivasindo */}
              <div className="relative border-l-2 border-emerald-500/40 dark:border-emerald-400/40 pl-5 space-y-2">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                <div className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Feb 2026 – Present</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Backend Developer
                </h4>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  PT Adhivasindo
                </div>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1.5 pt-1 list-disc list-inside leading-relaxed">
                  <li>
                    Developed <strong>SISARPRAS (Sistem Informasi Sarana dan Prasarana)</strong> for <strong>LRT Jakarta</strong>.
                  </li>
                  <li>
                    Engineered core backend services and enterprise asset management integration with <strong>IBM Maximo</strong>.
                  </li>
                </ul>
              </div>

              {/* Torche Indonesia */}
              <div className="relative border-l-2 border-blue-500/40 dark:border-cyan-400/40 pl-5 space-y-2">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-600 dark:bg-cyan-400 ring-4 ring-blue-500/20" />
                <div className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                  May 2023 – Apr 2025
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Backend Web Developer
                </h4>
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Torche Indonesia
                </div>
                <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1.5 pt-1 list-disc list-inside leading-relaxed">
                  <li>
                    Developed backend microservices for <strong>Portal Lelang Indonesia (DJKN)</strong>.
                  </li>
                  <li>
                    Built and maintained core APIs &amp; MinIO storage for <strong>e-LHKPN (KPK)</strong>.
                  </li>
                  <li>
                    Contributed to national correctional database services on <strong>SDP (Ditjenpas)</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/90 shadow-sm">
            <h3 className="flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white mb-6">
              <FaGraduationCap className="text-teal-600 dark:text-teal-400" /> Education
            </h3>
            <div className="relative border-l-2 border-teal-500/40 dark:border-teal-400/40 pl-5 space-y-2">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-teal-600 dark:bg-teal-400 ring-4 ring-teal-500/20" />
              <div className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400">
                2019 – 2023
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Bachelor of Engineering (Informatics / Software Engineering)
              </h4>
              <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                Universitas Teknologi Bandung
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 pt-2 leading-relaxed">
                Focused on software engineering principles, system architecture, relational database management, algorithm design, and object-oriented programming.
              </p>
            </div>
          </div>
        </div>

        {/* Core Stack & Polyglot Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/90 shadow-sm">
            <h3 className="flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-white mb-4">
              <FaDatabase className="text-blue-600 dark:text-cyan-400" /> Core Production Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {coreStack.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-500/50 transition-all"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/90 shadow-sm">
            <h3 className="flex items-center gap-2.5 text-lg font-bold text-slate-900 dark:text-white mb-4">
              <FaTools className="text-teal-600 dark:text-teal-400" /> Polyglot &amp; Ecosystem Stack
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {learningStack.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 hover:border-teal-500/50 transition-all"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
