export default function Contact() {
  return (
    <div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="region"
    >
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p className="text-gray-700">Email: saulsanto@example.com</p>
      <p className="text-gray-700">WhatsApp: +62 812-3456-7890</p>
      <p className="text-gray-700">LinkedIn: <a href="https://linkedin.com/in/yourusername" className="text-blue-500 underline">yourusername</a></p>
    </div>
  )
}
