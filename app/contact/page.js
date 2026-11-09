'use client'

import { useState } from 'react'
import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaPaperPlane,
  FaCopy,
  FaCheck
} from 'react-icons/fa'

const contactChannels = [
  {
    name: 'WhatsApp',
    value: '+62 882 1054 5885',
    description: 'Fastest way to reach me for quick discussions & interviews',
    href: 'https://wa.me/6288210545885',
    icon: <FaWhatsapp className="text-3xl text-emerald-500" />,
    badgeClass: 'hover:border-emerald-500/50'
  },
  {
    name: 'Email',
    value: 'saul.santoa@gmail.com',
    description: 'Send me job offers, project briefs, or technical inquiries',
    href: 'mailto:saul.santoa@gmail.com',
    icon: <FaEnvelope className="text-3xl text-rose-500" />,
    badgeClass: 'hover:border-rose-500/50'
  },
  {
    name: 'LinkedIn',
    value: 'Saul Santo Anju',
    description: 'Connect with my professional network & career updates',
    href: 'https://id.linkedin.com/in/saul-santo-anju-5269081a7',
    icon: <FaLinkedin className="text-3xl text-blue-600 dark:text-blue-400" />,
    badgeClass: 'hover:border-blue-500/50'
  },
  {
    name: 'GitHub',
    value: 'github.com/saulsanto22',
    description: 'Explore my open-source microservices and backend repositories',
    href: 'https://github.com/saulsanto22',
    icon: <FaGithub className="text-3xl text-slate-800 dark:text-slate-100" />,
    badgeClass: 'hover:border-cyan-500/50'
  }
]

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const email = 'saul.santoa@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in space-y-10">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
            <FaPaperPlane />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-transparent bg-clip-text">
              Great Together
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Whether you have a backend engineering opportunity, a project collaboration, or just want to say hi—my inbox is always open.
          </p>
        </div>

        {/* Quick Copy Email Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-teal-500/10 border border-blue-500/20 dark:border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 mb-1">
              Direct Email Address
            </div>
            <div className="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white break-all">
              {email}
            </div>
          </div>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 transition shadow-md shrink-0"
          >
            {copied ? (
              <>
                <FaCheck className="text-emerald-400 dark:text-emerald-600" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <FaCopy />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
          {contactChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group flex items-start gap-4 p-6 rounded-2xl bg-white/80 dark:bg-slate-900/75 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${channel.badgeClass}`}
            >
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform">
                {channel.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {channel.name}
                </h3>
                <div className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-1">
                  {channel.value}
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
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
