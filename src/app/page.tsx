import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Image src="/icon.png" alt="logo" width={32} height={32} />

          <span className="text-lg font-semibold">
            Lusi<span className="text-blue-500">Code</span>
          </span>
        </div>

        <a
          href="mailto:support@lusicode.com"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          Contact
        </a>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 mt-20">

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl">
          Building modern apps that solve real problems
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-xl">
          Simple, powerful and focused on real-world use.
        </p>

        <p className="mt-4 text-blue-500 font-medium">
          🚀 New products are coming soon
        </p>

        <div className="mt-10">
          <a
            href="mailto:support@lusicode.com"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition transform hover:scale-105"
          >
            Get in touch
          </a>
        </div>

      </section>

    </main>
  );
}