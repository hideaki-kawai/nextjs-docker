import Link from 'next/link';

export const NavBar = async () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <nav className="space-x-4">
          <Link
            href="/"
            className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
          >
            Nested Layout with Blogs
          </Link>
          <Link
            href="/streaming-sr"
            className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
          >
            Streaming SR
          </Link>
          <Link
            href="/auth"
            className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
          >
            Authorization
          </Link>
        </nav>
        <button className="rounded bg-blue-500 px-3 py-2 text-white hover:bg-blue-400">
          Login
        </button>
      </div>
    </header>
  );
};
