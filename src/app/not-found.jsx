
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-darkgray">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mt-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-orange-600 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}
