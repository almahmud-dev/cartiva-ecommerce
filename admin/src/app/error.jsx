"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">
        Something went wrong!
      </h2>

      <p className="text-gray-600">
        {error?.message || "An unexpected error occurred."}
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-black px-5 py-2.5 text-white"
      >
        Try again
      </button>
    </div>
  );
}