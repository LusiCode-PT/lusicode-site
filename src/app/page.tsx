import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Image
  src="/icon.png"
  alt="logo"
  width={32}
  height={32}
  className="drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]"
/>

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
      <section className="flex flex-col items-center justify-center text-center px-6 mt-24">

  <h1 className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
    Building modern apps
    <br />
    <span className="text-blue-500">that solve real problems</span>
  </h1>

  <p className="mt-6 text-lg text-gray-400 max-w-xl">
    Simple, fast and designed for everyday use.
  </p>

  <p className="mt-4 text-blue-400 font-medium">
    🚀 New products are coming soon
  </p>

  <div className="mt-10">
    <a
      href="mailto:hello@lusicode.com"
      className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition transform hover:scale-105 shadow-lg shadow-blue-600/20"
    >
      Get in touch
    </a>
  </div>

</section>

    </main>
  );
}