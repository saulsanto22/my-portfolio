// File: app/projects/page.js
'use client'

import {
  SiLaravel,
  SiLumen,
  SiMysql,
  SiPostgresql,
  SiMinio
} from 'react-icons/si'
import { FaProjectDiagram } from 'react-icons/fa'

const projects = [
  {
    title: 'Lelang Go Id',
    description:
      'Lelang.go.id is an online platform managed by the government (DJKN - Ministry of Finance) to facilitate online auctions. It enables participants to join the bidding process remotely.',
    tech: ['Laravel', 'Lumen', 'MySQL', 'PostgreSQL', 'MinIO'],
    status: 'Production'
  },
  {
    title: 'e-LHKPN',
    description:
      'e-LHKPN is a digital reporting system for state officials\' assets to the KPK. It simplifies and streamlines the process, making it more efficient and transparent.',
    tech: ['Laravel', 'Lumen', 'MySQL', 'PostgreSQL', 'MinIO'],
    status: 'Production'
  },
  {
    title: 'SDP - Sistem Database Pemasyarakatan',
    description:
      'SDP is a national-level system for managing Correctional Inmate (WBP) data, helping UPT, KANWIL, and DITJENPAS efficiently track and report inmate information.',
    tech: ['Laravel', 'Lumen', 'MySQL', 'PostgreSQL', 'MinIO'],
    status: 'Production'
  }
]

const techIcons = {
  Laravel: <SiLaravel className="text-red-600" title="Laravel" />,
  Lumen: <SiLumen className="text-orange-600" title="Lumen" />,
  MySQL: <SiMysql className="text-blue-600" title="MySQL" />,
  PostgreSQL: <SiPostgresql className="text-indigo-600" title="PostgreSQL" />,
  MinIO: <SiMinio className="text-yellow-500" title="MinIO" />
}

export default function ProjectsPage() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">

        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-8 text-center flex items-center justify-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 dark:from-cyan-400 dark:to-blue-400 drop-shadow-md">
          <FaProjectDiagram className="text-blue-600 dark:text-cyan-400" />
          My Projects
        </h2>

        {/* Project List */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 gap-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white break-words">
                {project.title}
              </h3>
              <span
                className={`text-sm px-3 py-1 rounded-full font-medium whitespace-nowrap ${project.status === 'Production'
                    ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100'
                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100'
                  }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-base mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 text-2xl">
              {project.tech.map((tech, idx) => (
                <div key={idx}>{techIcons[tech]}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
