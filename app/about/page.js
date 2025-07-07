export default function About() {
  return (
    <div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="region"
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4 text-gray-700">
        Saya adalah backend developer Laravel yang berpengalaman membangun REST API, autentikasi, manajemen user,
        integrasi MinIO, dan sistem log aktivitas. Terbiasa bekerja dengan database MySQL, Redis, dan tools seperti
        Postman, Git, dan Docker.
      </p>
      <ul className="list-disc list-inside text-gray-600">
        <li>Laravel, Lumen, REST API</li>
        <li>MySQL, Redis</li>
        <li>MinIO, Postman, Git, Docker</li>
      </ul>
    </div>
  )
}
