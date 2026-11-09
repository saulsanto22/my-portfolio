import {
  FaDatabase,
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaJava
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

const coreStack = [
  { name: 'Laravel (v5–v10)', icon: <SiLaravel className="text-red-600" /> },
  { name: 'Lumen', icon: <SiLumen className="text-orange-600" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-600" /> },
  { name: 'MinIO Storage', icon: <SiMinio className="text-yellow-500" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
  { name: 'Git', icon: <SiGit className="text-red-500" /> },
]

const learningStack = [
  { name: 'Go (Gin)', icon: <SiGo className="text-cyan-600" /> },
  { name: 'Java 21', icon: <FaJava className="text-orange-600" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-600" /> },
  { name: 'NestJS', icon: <SiNestjs className="text-rose-600" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-gray-100" /> },
  { name: 'Docker', icon: <SiDocker className="text-sky-500" /> },
  { name: 'React / Next.js', icon: <SiReact className="text-sky-500" /> },
]

export default function AboutPage() {
  return (
    <section className="py-12 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Intro & Illustration */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-extrabold mb-6 flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 dark:from-cyan-400 dark:to-blue-500 drop-shadow-sm">
              <FaGraduationCap className="text-blue-600 dark:text-cyan-400" /> About Me
            </h2>

            <div className="text-gray-700 dark:text-gray-300 space-y-4 text-lg leading-relaxed">
              <p>
                I’m a <strong>Backend Web Developer</strong> with over{' '}
                <strong>2 years of professional experience</strong> building reliable web applications and microservice-based systems using <strong>Laravel</strong> and <strong>Lumen</strong>.
              </p>
              <p>
                I hold a Bachelor’s degree in <strong>Informatics Engineering (Software Engineering)</strong> from <strong>Universitas Teknologi Bandung</strong>. Throughout my career, I have contributed to high-impact national systems—crafting scalable <strong>RESTful APIs</strong>, managing <strong>MySQL &amp; PostgreSQL</strong> databases, and integrating object storage (<strong>MinIO</strong>) as well as third-party services like payment gateways.
              </p>
              <p>
                I thrive in <strong>Agile teams</strong> and focus on writing clean, secure, and maintainable backend architectures while continuously expanding my expertise into <strong>Go</strong>, <strong>Java (Spring Boot)</strong>, and <strong>TypeScript (NestJS)</strong>.
              </p>
            </div>
          </div>

          <div className="hidden md:block w-full md:w-1/3">
            <Image
              src={DevThinkingSVG}
              alt="Developer thinking illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Experience & Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
              <FaBriefcase className="text-blue-600 dark:text-cyan-400" /> Work Experience
            </h3>
            <div className="border-l-2 border-blue-500 dark:border-cyan-400 pl-4 space-y-1">
              <div className="text-sm font-semibold text-blue-600 dark:text-cyan-400">
                May 2023 – Apr 2025
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                Backend Web Developer
              </h4>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Torche Indonesia
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Developed and maintained backend microservices and RESTful APIs using Laravel, Lumen, MySQL, PostgreSQL, and MinIO for major government platforms including <strong>Lelang.go.id (DJKN)</strong>, <strong>e-LHKPN (KPK)</strong>, and <strong>SDP (Ditjenpas)</strong>.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white mb-4">
              <FaGraduationCap className="text-teal-600 dark:text-teal-400" /> Education
            </h3>
            <div className="border-l-2 border-teal-500 dark:border-teal-400 pl-4 space-y-1">
              <div className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                2019 – 2023
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                Bachelor of Engineering (Informatics / Software Engineering)
              </h4>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Universitas Teknologi Bandung
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Built a strong foundation in software engineering, system architecture, relational database design, and web application development.
              </p>
            </div>
          </div>
        </div>

        {/* Core Stack */}
        <div>
          <h3 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            <FaDatabase className="text-blue-600 dark:text-cyan-400" /> Core Backend Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {coreStack.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div>
          <h3 className="flex items-center gap-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
            <FaTools className="text-teal-600 dark:text-teal-400" /> Currently Exploring &amp; Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            {learningStack.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
