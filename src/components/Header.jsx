import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-gray-900">
          StocAI
        </a>
        <div className="flex gap-6">
          <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;