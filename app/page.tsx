export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-6xl font-bold text-black dark:text-white sm:text-5xl">
          Welcome to BogiTech Solutions!
        </h1>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 sm:text-base">
          We are a leading technology solutions provider, dedicated to delivering innovative and reliable services to our clients. Our team of experts specializes in software development, IT consulting, and digital transformation strategies.
        </p>
        <div className="mt-8 flex space-x-4">
          <a
            href="/services"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Explore Our Services
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          >
            Contact Us
          </a>
        </div>
      </main>
    </div>
  );
}
