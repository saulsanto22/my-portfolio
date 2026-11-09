'use client'

import {
  SiLaravel,
  SiLumen,
  SiMysql,
  SiPostgresql,
  SiMinio,
  SiPostman,
  SiGo,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiSpringboot,
  SiDocker
} from 'react-icons/si'
import {
  FaProjectDiagram,
  FaTimes,
  FaGithub,
  FaBuilding,
  FaCodeBranch,
  FaCheckCircle,
  FaJava
} from 'react-icons/fa'
import { useState } from 'react'
import classNames from 'classnames'

const enterpriseProjects = [
  {
    title: 'SISARPRAS — LRT Jakarta (IBM Maximo Integration)',
    organization: 'PT LRT Jakarta (via PT Adhivasindo)',
    role: 'Backend Developer',
    description:
      'Sistem Informasi Sarana dan Prasarana (SISARPRAS) for LRT Jakarta—an enterprise facility and railway infrastructure management system focused on seamless integration with IBM Maximo Enterprise Asset Management (EAM).',
    highlights: [
      'Developed core backend RESTful APIs for managing LRT Jakarta railway facilities and infrastructure assets (Sarana & Prasarana).',
      'Engineered seamless data synchronization and API integration pipelines with IBM Maximo EAM for asset tracking, maintenance, and work orders.',
      'Designed reliable relational database schemas and validation workflows for public transit operational accuracy.'
    ],
    tech: ['Laravel', 'MySQL', 'PostgreSQL', 'Postman'],
    status: 'Production'
  },
  {
    title: 'Lelang.go.id (Portal Lelang Indonesia)',
    organization: 'DJKN — Ministry of Finance RI (via Torche Indonesia)',
    role: 'Backend Web Developer',
    description:
      'Lelang.go.id is the official national online auction platform managed by the Directorate General of State Assets (DJKN - Ministry of Finance) enabling secure remote bidding across Indonesia.',
    highlights: [
      'Developed and maintained microservice backend modules using Laravel and Lumen.',
      'Managed relational data across MySQL and PostgreSQL databases for auction transactions.',
      'Integrated MinIO object storage for handling auction documents and digital assets.'
    ],
    tech: ['Laravel', 'Lumen', 'MySQL', 'PostgreSQL', 'MinIO'],
    status: 'Production'
  },
  {
    title: 'e-LHKPN',
    organization: 'Komisi Pemberantasan Korupsi / KPK (via Torche Indonesia)',
    role: 'Backend Web Developer',
    description:
      'e-LHKPN is the national digital wealth reporting system for state officials (Laporan Harta Kekayaan Penyelenggara Negara) managed by the Corruption Eradication Commission (KPK).',
    highlights: [
      'Built and maintained backend APIs in a microservice architecture using Laravel.',
      'Implemented document storage and retrieval workflows powered by MinIO.',
      'Optimized MySQL & PostgreSQL database queries for high-volume reporting periods.'
    ],
    tech: ['Laravel', 'Lumen', 'MySQL', 'PostgreSQL', 'MinIO'],
    status: 'Production'
  },
  {
    title: 'SDP — Sistem Database Pemasyarakatan',
    organization: 'Ditjen Pemasyarakatan Kemenkumham (via Torche Indonesia)',
    role: 'Backend Web Developer',
    description:
      'SDP is a national-level integrated database system for managing Correctional Inmate (WBP) administration across UPT, Regional Offices (Kanwil), and Ditjenpas.',
    highlights: [
      'Contributed to backend services using Lumen and Laravel for multi-regional data synchronization.',
      'Maintained core database schemas and reporting queries on MySQL and PostgreSQL.',
      'Integrated centralized file management using MinIO object storage.'
    ],
    tech: ['Laravel', 'Lumen', 'MySQL', 'PostgreSQL', 'MinIO'],
    status: 'Production'
  }
]

const personalProjects = [
  {
    title: 'SmartFactory Ecosystem — Polyglot Microservices (MES & Andon)',
    organization: 'Personal & Open Source Architecture Project',
    role: 'Backend & System Architect',
    description:
      'A Manufacturing Execution System (MES) Lite & Real-Time Andon Board built on a Polyglot Microservices architecture to digitize shop-floor warehouse inventory, machine OEE calculation, PDF audit reporting, and emergency incident alerts.',
    highlights: [
      'Architected 3 backend microservices: Warehouse Service (Golang + Gin), OEE Service (NestJS + TypeScript), and Incident Gateway (Express.js) with Stateless JWT RBAC.',
      'Implemented Goroutine-driven auto-webhooks when critical stock drops below minimum thresholds and automated OEE (Availability × Performance × Quality) alerts.',
      'Built single/multiple file upload pipelines, streaming PDF audit reports, Docker Compose orchestration, and GitHub Actions CI/CD.'
    ],
    tech: ['Go', 'NestJS', 'TypeScript', 'Express.js', 'MySQL', 'Docker'],
    status: 'Open Source',
    githubUrl: 'https://github.com/saulsanto22/smartfactory-ecosystem'
  },
  {
    title: 'SimplePay — Core Wallet & Transaction Engine',
    organization: 'Personal & Open Source Architecture Project',
    role: 'Backend Engineer',
    description:
      'A financial-grade digital wallet and transaction engine built with Java 21 & Spring Boot using Clean Layered Architecture, focusing on high-concurrency data integrity, idempotency, and race-condition prevention.',
    highlights: [
      'Prevented double-spending and deadlocks under high concurrency using Pessimistic Write Locking (SELECT ... FOR UPDATE) and a Lock Ordering Algorithm.',
      'Implemented UUID v4 Idempotency Key protection and a True Double-Entry Ledger Pattern (atomic DEBIT/CREDIT journal pairing) with BigDecimal precision.',
      'Equipped with multi-thread concurrency tests (JUnit 5), Docker multi-stage builds, and GitHub Actions CI pipeline.'
    ],
    tech: ['Java', 'Spring Boot', 'Docker', 'Postman'],
    status: 'Open Source',
    githubUrl: 'https://github.com/saulsanto22/simplepay-wallet-api'
  },
  {
    title: 'Payment Gateway API (Midtrans Integration)',
    organization: 'Personal & Open Source Project',
    role: 'Backend Developer',
    description:
      'A RESTful API built with Laravel integrated with Midtrans Payment Gateway to handle checkout transactions, payment snap tokens, and automated webhook status callbacks.',
    highlights: [
      'Integrated Midtrans payment creation and real-time webhook notification handling.',
      'Designed clean RESTful API endpoints with structured JSON responses and validation.',
      'Implemented transaction state management and database persistence in MySQL.'
    ],
    tech: ['Laravel', 'MySQL', 'Postman'],
    status: 'Open Source',
    githubUrl: 'https://github.com/saulsanto22/payment-gateway-simple-api-'
  },
  {
    title: 'Expense Approval System Backend',
    organization: 'Personal & Open Source Project',
    role: 'Backend Developer',
    description:
      'A backend service for managing corporate expense submissions and multi-stage approval workflows using Laravel and relational database modeling.',
    highlights: [
      'Built structured multi-level approval workflow logic and status tracking.',
      'Implemented role-based access control and authentication for requesters and approvers.',
      'Created comprehensive API endpoints tested via Postman.'
    ],
    tech: ['Laravel', 'MySQL', 'Postman'],
    status: 'Open Source',
    githubUrl: 'https://github.com/saulsanto22/expense-approval-system-backend'
  },
  {
    title: 'E-Commerce Backend REST API',
    organization: 'Personal & Open Source Project',
    role: 'Backend Developer',
    description:
      'A modular e-commerce backend API covering user authentication, product catalog management, shopping cart operations, and order processing.',
    highlights: [
      'Developed token-based authentication and protected customer/admin routes.',
      'Designed relational database tables for products, stock inventory, carts, and orders.',
      'Applied clean controller-service separation for maintainable backend code.'
    ],
    tech: ['Laravel', 'MySQL', 'Postman'],
    status: 'Open Source',
    githubUrl: 'https://github.com/saulsanto22/ecommerce-api-test'
  }
]

const techIcons = {
  Laravel: <SiLaravel className="text-red-600" title="Laravel" />,
  Lumen: <SiLumen className="text-orange-600" title="Lumen" />,
  MySQL: <SiMysql className="text-blue-600" title="MySQL" />,
  PostgreSQL: <SiPostgresql className="text-indigo-600" title="PostgreSQL" />,
  MinIO: <SiMinio className="text-yellow-500" title="MinIO" />,
  Postman: <SiPostman className="text-orange-500" title="Postman" />,
  Go: <SiGo className="text-cyan-600" title="Go" />,
  TypeScript: <SiTypescript className="text-blue-600" title="TypeScript" />,
  NestJS: <SiNestjs className="text-rose-600" title="NestJS" />,
  'Express.js': <SiExpress className="text-gray-800 dark:text-gray-100" title="Express.js" />,
  Java: <FaJava className="text-orange-600" title="Java 21" />,
  'Spring Boot': <SiSpringboot className="text-green-600" title="Spring Boot" />,
  Docker: <SiDocker className="text-sky-500" title="Docker" />
}

function ProjectCard({ project, onSelect }) {
  const isProduction = project.status === 'Production'

  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative overflow-hidden cursor-pointer p-6 rounded-2xl bg-white/80 dark:bg-slate-900/75 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/90 shadow-sm hover:shadow-xl hover:border-blue-500/40 dark:hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Gradient Accent Bar */}
      <div
        className={classNames(
          'absolute top-0 left-0 w-full h-1',
          isProduction
            ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500'
            : 'bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400'
        )}
      />

      <div>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2 pt-1">
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors break-words">
              {project.title}
            </h4>
            <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-cyan-400 mt-0.5">
              {project.organization}
            </p>
          </div>
          <span
            className={classNames(
              'self-start text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap border',
              isProduction
                ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20 dark:text-emerald-300'
                : 'bg-blue-500/10 text-blue-700 border-blue-500/20 dark:text-cyan-300'
            )}
          >
            {project.status}
          </span>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base line-clamp-2 mt-3 leading-relaxed">
          {project.description}
        </p>

        {project.highlights && (
          <ul className="mt-4 space-y-1.5">
            {project.highlights.slice(0, 2).map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-1"
              >
                <FaCheckCircle className="text-emerald-500 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                <span className="truncate">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60"
            >
              <span className="text-sm">{techIcons[tech]}</span>
              <span>{tech}</span>
            </span>
          ))}
        </div>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold hover:bg-blue-600 dark:hover:bg-cyan-600 transition whitespace-nowrap"
          >
            <FaGithub className="text-sm" />
            <span>GitHub</span>
          </a>
        ) : (
          <span className="text-xs font-semibold text-blue-600 dark:text-cyan-400 whitespace-nowrap group-hover:translate-x-0.5 transition-transform">
            Details →
          </span>
        )}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const filterTabs = [
    { id: 'all', label: 'All Projects (9)' },
    { id: 'enterprise', label: 'Enterprise & Gov (4)' },
    { id: 'personal', label: 'Architecture & Open Source (5)' }
  ]

  return (
    <section className="py-6">
      <div className="max-w-5xl mx-auto space-y-12 animate-fade-in">
        {/* Header & Filter Bar */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
            <FaProjectDiagram />
            <span>Portfolio &amp; Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-transparent bg-clip-text">
              Backend Projects
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            National-scale government systems developed professionally alongside self-initiated polyglot microservices and financial ledger engines.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="pt-2 flex flex-wrap justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={classNames(
                  'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all',
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-400'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section 1: Featured Enterprise Projects */}
        {(activeFilter === 'all' || activeFilter === 'enterprise') && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <FaBuilding className="text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Featured Enterprise Projects
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Public transit &amp; national-scale government platforms developed at PT Adhivasindo and Torche Indonesia
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {enterpriseProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Personal & Open Source Projects */}
        {(activeFilter === 'all' || activeFilter === 'personal') && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                <FaCodeBranch className="text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Personal &amp; Open Source Projects
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Polyglot microservices, high-concurrency wallet engines, and RESTful API integrations
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal Detail Project */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-xl w-full p-6 sm:p-8 relative border border-slate-200 dark:border-slate-800 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes />
            </button>

            <div className="mb-4 pr-6">
              <span
                className={classNames(
                  'inline-block text-xs px-3 py-1 rounded-full font-semibold mb-2',
                  selectedProject.status === 'Production'
                    ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                    : 'bg-blue-500/10 text-blue-700 dark:text-cyan-300'
                )}
              >
                {selectedProject.status}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-cyan-400 mt-1">
                {selectedProject.role} • {selectedProject.organization}
              </p>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mb-5 leading-relaxed">
              {selectedProject.description}
            </p>

            {selectedProject.highlights && (
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Contributions &amp; Architecture Highlights
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.highlights.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <FaCheckCircle className="text-emerald-500 dark:text-teal-400 mt-1 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                  >
                    <span className="text-base">{techIcons[tech]}</span>
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.githubUrl && (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm hover:opacity-95 transition shadow-md shadow-blue-500/20"
                >
                  <FaGithub className="text-lg" />
                  <span>View Repository on GitHub</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
