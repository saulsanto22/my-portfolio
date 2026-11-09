import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaPaperPlane
} from 'react-icons/fa'

const contactChannels = [
  {
    name: 'WhatsApp',
    value: '+62 882-0009-78708',
    description: 'Fastest way to reach me for quick discussions',
    href: 'https://wa.me/62882000978708',
    icon: <FaWhatsapp className="text-3xl text-green-600 dark:text-green-400" />,
    badgeClass: 'hover:border-green-400 dark:hover:border-green-500'
  },
  {
    name: 'Email',
    value: 'saul.santoa@gmail.com',
    description: 'Send me job offers, project briefs, or inquiries',
    href: 'mailto:saul.santoa@gmail.com',
    icon: <FaEnvelope className="text-3xl text-red-500 dark:text-red-400" />,
    badgeClass: 'hover:border-red-400 dark:hover:border-red-500'
  },
  {
    name: 'LinkedIn',
    value: 'Saul Santo Anju',
    description: 'Connect with my professional network & career updates',
    href: 'https://id.linkedin.com/in/saul-santo-anju-5269081a7',
    icon: <FaLinkedin className="text-3xl text-blue-600 dark:text-blue-400" />,
    badgeClass: 'hover:border-blue-400 dark:hover:border-blue-500'
  },
  {
    name: 'GitHub',
    value: 'github.com/saulsanto22',
    description: 'Explore my open-source backend APIs and learning repos',
    href: 'https://github.com/saulsanto22',
    icon: <FaGithub className="text-3xl text-gray-800 dark:text-gray-100" />,
    badgeClass: 'hover:border-gray-400 dark:hover:border-gray-500'
  }
]

export default function ContactPage() {
  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl font-extrabold mb-4 flex items-center justify-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 dark:from-cyan-400 dark:to-blue-400 drop-shadow-sm">
          <FaPaperPlane className="text-blue-600 dark:text-cyan-400" /> Contact Me
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
          Let&apos;s connect! Whether you have a backend engineering opportunity, a project collaboration, or just want to say hi—feel free to reach out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
          {contactChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ${channel.badgeClass}`}
            >
              <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-700/60 group-hover:scale-110 transition-transform">
                {channel.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {channel.name}
                </h3>
                <div className="text-sm font-medium text-blue-600 dark:text-cyan-400 mb-1">
                  {channel.value}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  {channel.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
