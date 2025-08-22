import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Dream Team Solutions</h1>
        <p className="text-lg text-gray-700">Empowering your business with cutting-edge technology solutions</p>
      </header>
      <section className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Services</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="inline-block w-8 h-8 mr-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 17v-6a4 4 0 014-4h10a4 4 0 014 4v6"></path>
                <path d="M16 21v-4a4 4 0 00-8 0v4"></path>
              </svg>
            </span>
            <span className="text-lg font-medium text-gray-700">Cloud Solutions</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-8 h-8 mr-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 3v18h18"></path>
                <path d="M9 9h6v6H9z"></path>
              </svg>
            </span>
            <span className="text-lg font-medium text-gray-700">Data Engineering</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-8 h-8 mr-4 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </span>
            <span className="text-lg font-medium text-gray-700">App/Web Applications</span>
          </li>
          <li className="flex items-center">
            <span className="inline-block w-8 h-8 mr-4 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v4l3 3"></path>
              </svg>
            </span>
            <span className="text-lg font-medium text-gray-700">And much more...</span>
          </li>
        </ul>
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
      <footer className="mt-10 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Dream Team Solutions. All rights reserved.
      </footer>
    </div>
  );
}
