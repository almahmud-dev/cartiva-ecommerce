export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-7xl font-bold tracking-tight text-gray-900">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-gray-600">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-8 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
      >
        Back to Dashboard
      </a>
    </main>
  );
}
