const projects = [
  {
    name: 'Sistem Registrasi Klien',
    desc: 'CRUD registrasi klien dengan role management dan file upload',
    tech: 'Laravel, MySQL, MinIO',
    link: 'https://github.com/yourusername/registrasi-klien',
  },
  {
    name: 'REST API Surat Izin',
    desc: 'Manajemen izin luar negeri dengan validasi dan lampiran dokumen',
    tech: 'Laravel, Lumen, Redis',
    link: 'https://github.com/yourusername/surat-izin-api',
  },
  {
    name: 'Sistem Wajib Lapor',
    desc: 'Melayani pemanggilan dan kehadiran klien dengan surat panggilan dan integrasi MinIO',
    tech: 'Laravel, Redis, MinIO',
    link: 'https://github.com/yourusername/wajib-lapor',
  },
]

export default function Projects() {
  return (
    <div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="region"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
             animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-4 border rounded-lg shadow hover:shadow-md transition bg-white"
          >
            <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
            <p className="text-sm mb-2 text-gray-700">{project.desc}</p>
            <p className="text-xs text-gray-500 mb-2">Stack: {project.tech}</p>
            <a href={project.link} target="_blank" className="text-blue-600 underline">Lihat GitHub →</a>
          </div>
        ))}
      </div>
    </div>
  )
}