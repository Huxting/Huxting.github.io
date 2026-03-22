import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookText, Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: "主页", path: "/", icon: Home },
    { name: "博客", path: "/blog", icon: BookText },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-pink">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-2xl font-bold text-brand-pink-dark"
            >
              <img
                src={`${import.meta.env.BASE_URL}image.png`}
                alt="Logo"
                className="w-8 h-8 rounded-full object-cover border border-brand-pink/50"
              />
              <span>胡欣婷</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "text-brand-pink-dark border-b-2 border-brand-pink-dark"
                    : "text-gray-600 hover:text-brand-pink-dark",
                )}
              >
                <item.icon className="w-4 h-4 mr-1" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand-pink-dark hover:bg-brand-pink-light focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-brand-pink">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === item.path
                    ? "text-brand-pink-dark bg-brand-pink-light"
                    : "text-gray-600 hover:text-brand-pink-dark hover:bg-brand-pink-light",
                )}
              >
                <item.icon className="w-5 h-5 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
