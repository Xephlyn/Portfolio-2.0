"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ThankYouPage() {
  const router = useRouter();

  // Optional: Auto-redirect after a certain time period
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000); // Redirect after 10 seconds

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black text-gray-900 dark:text-gray-200 flex items-center justify-center pt-20">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="mb-8 flex justify-center">
          <div className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Thank You!
        </h1>

        <p className="text-xl mb-8 dark:text-gray-300">
          Your message has been received. I'll get back to you as soon as
          possible.
        </p>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
          <p className="text-lg mb-6 dark:text-gray-300">
            While you're waiting, feel free to explore more of my work or
            connect with me on social media.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:from-blue-600 hover:to-purple-700 transition-colors shadow-md"
            >
              Return to Home
            </Link>

            <Link
              href="/technical"
              className="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
            >
              View Projects
            </Link>
          </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          You'll be automatically redirected to the homepage in a few seconds.
        </p>
      </div>
    </div>
  );
}
