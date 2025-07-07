import Image from 'next/image'
import avatar from '../public/avatar.jpg'

export default function Home() {


  return (
    <div
      className="flex flex-col items-center justify-center py-20 text-center animate-fade-in"
      role="region"
    >
      <div className="relative">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
          <Image src={avatar} alt="Avatar" width={160} height={160} className="object-cover w-full h-full" />
        </div>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
        Hi, I'm Saul Santo Anju 👋
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-xl mb-8">
        Laravel Backend Developer. I build APIs, manage systems, and bring backend ideas to life with clean, efficient code.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="/cv.pdf"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
        >
          📄 Download CV
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition"
        >
          💻 GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition"
        >
          🔗 LinkedIn
        </a>
      </div>
    </div>
  );
}
