import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">My App</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/posts" className="hover:underline">Posts</Link>
          <Link href="/users" className="hover:underline">Users</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
