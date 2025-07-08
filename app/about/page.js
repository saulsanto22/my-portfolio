// File: app/about/page.js
'use client'
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaGraduationCap,
  FaTools
} from 'react-icons/fa'
import {
  SiLaravel,
  SiLumen,
  SiMysql,
  SiPostgresql,
  SiMinio,
  SiPostman,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiGo
} from 'react-icons/si'
import Image from 'next/image'
import DevThinkingSVG from '@/public/code.svg'

export default function AboutPage() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* About Text */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-extrabold mb-6 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-cyan-400 dark:to-blue-500">
            <FaGraduationCap className="text-purple-500 dark:text-cyan-400" /> About Me
          </h2>

          <div className="text-gray-700 dark:text-gray-300 space-y-4 text-lg leading-relaxed">
            <p>
              I’m a <strong>Laravel Backend Developer</strong> with over <strong>2 years of professional experience</strong> building robust systems using Laravel and Lumen.
            </p>
            <p>
              Since <strong>2021</strong>, I’ve crafted scalable <strong>RESTful APIs</strong>, integrated cloud services, and managed relational databases like MySQL and PostgreSQL.
            </p>
            <p>
              I believe in <strong>clean code</strong>, <strong>collaboration</strong>, and <strong>continuous learning</strong>.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 dark:from-teal-400 dark:to-blue-400 mb-4">
              <FaDatabase className='text-green-500 dark:text-blue-300' /> Core Stack
            </h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              <SiLaravel title="Laravel" className="text-red-600 hover:scale-110 transition-transform" />
              <SiLumen title="Lumen" className="text-orange-600 hover:scale-110 transition-transform" />
              <SiMysql title="MySQL" className="text-blue-600 hover:scale-110 transition-transform" />
              <SiPostgresql title="PostgreSQL" className="text-indigo-600 hover:scale-110 transition-transform" />
              <SiMinio title="MinIO" className="text-yellow-500 hover:scale-110 transition-transform" />
              <SiPostman title="Postman" className="text-orange-500 hover:scale-110 transition-transform" />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 dark:from-teal-400 dark:to-blue-400 mb-4">
              <FaTools className='text-green-500 dark:text-blue-300' /> Currently Learning
            </h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              <SiReact title="React.js" className="text-sky-500 hover:scale-110 transition-transform" />
              <SiNodedotjs title="Node.js" className="text-green-600 hover:scale-110 transition-transform" />
              <SiExpress title="Express.js" className="text-gray-800 dark:text-gray-100 hover:scale-110 transition-transform" />
              <SiGo title="Go" className="text-cyan-600 hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="hidden md:block w-full md:w-1/3">
          <Image
            src={DevThinkingSVG}
            alt="Developer thinking illustration"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  )
}
