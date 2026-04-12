import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">

      {/* LOGO */}
      <div className="mb-6">
        <Image src="/logo.svg" alt="LusiCode logo" width={180} height={50} />
      </div>

      {/* TITLE */}
      <h1 className="text-5xl font-bold tracking-tight">
        Building modern digital tools
      </h1>

      {/* SUBTITLE */}
      <p className="mt-6 text-lg text-gray-400 max-w-xl">
        We create simple and powerful apps that solve everyday problems.
      </p>

      {/* STATUS */}
      <p className="mt-4 text-blue-500 font-medium">
        🚀 New products are coming soon
      </p>

      {/* CTA */}
      <div className="mt-10">
        <a
          href="mailto:support@lusicode.com"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition transform hover:scale-105"
        >
          Get in touch
        </a>
      </div>

    </main>
  );
}