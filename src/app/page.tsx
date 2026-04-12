export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          Lusi<span className="text-blue-500">Code</span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-xl">
          Building modern apps and tools that simplify everyday problems.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="mailto:hello@lusicode.com"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
          >
            Contact
          </a>

          <button className="px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 transition">
            Our Apps
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 text-sm text-gray-600">
        © {new Date().getFullYear()} LusiCode
      </div>
    </main>
  );
}