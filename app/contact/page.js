'use client'

import { 
  FaWhatsapp, 
  FaLinkedin, 
  FaEnvelope, 
  FaPaperPlane 
} from 'react-icons/fa'

export default function ContactPage() {
  return (
    <section className="min-h-screen py-20 px-6 ">
      <div className="max-w-2xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl font-extrabold mb-6 flex items-center justify-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 dark:from-cyan-400 dark:to-blue-400 drop-shadow-md">
          <FaPaperPlane className="text-blue-600 dark:text-cyan-400 animate-bounce" /> Contact Me
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
          Let&apos;s connect! I&apos;d love to hear from you — whether it&apos;s about a project, opportunity, or just to say hi.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
          {/* WhatsApp */}
          <a
            href="https://wa.me/62882000978708"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <FaWhatsapp className="text-3xl group-hover:animate-bounce" />
            <span className="font-semibold"></span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://id.linkedin.com/in/saul-santo-anju-5269081a7"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <FaLinkedin className="text-3xl group-hover:animate-bounce" />
            <span className="font-semibold"></span>
          </a>

          {/* Email */}
          <a
            href="mailto:saul.santoa@gmail.com"
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <FaEnvelope className="text-3xl group-hover:animate-ping" />
            <span className="font-semibold"></span>
          </a>
        </div>
      </div>
    </section>
  )
}
