import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-white/80 border-t border-brand-pink py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Built with ❤️ by BUPT Graduate</p>
      </footer>
    </div>
  );
};

export default Layout;
