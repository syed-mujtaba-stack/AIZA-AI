import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4 border-b border-gray-700 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">AIZA AI Platform</Link>
      <nav>
        <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
        <Link href="/agents" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Agents</Link>
        <Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Marketplace</Link>
        <Link href="/api-access" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">API Access</Link>
      </nav>
    </header>
  );
};

export default Header;
