const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A clean, simple, and static React UI built with Tailwind CSS.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Home