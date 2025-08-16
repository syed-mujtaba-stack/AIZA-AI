import React from 'react';
import Header from '@/components/Header';

const MarketplacePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">AI Agent Marketplace</h1>
        <p className="text-lg text-gray-400">Coming Soon! A place to discover, share, and sell AI agents.</p>
      </main>
    </div>
  );
};

export default MarketplacePage;
