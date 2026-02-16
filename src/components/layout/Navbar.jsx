import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/foundation", name: "Foundation" },
    { path: "/childhood", name: "Childhood" },
    { path: "/youth", name: "Youth" },
    { path: "/marriage", name: "Marriage" },
    { path: "/parenting", name: "Parenting" },
    { path: "/character", name: "Character" },
    { path: "/death", name: "Death" },
  ];
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="bg-primary text-soft shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌙</span>
            <span className="font-bold text-lg hidden sm:block">Sirat Al-Hayah</span>
            <span className="text-xs text-accent hidden md:block">From Cradle to Jannah</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300
                  ${isActive(link.path) 
                    ? 'bg-accent text-primary-dark' 
                    : 'hover:bg-primary-light hover:text-accent'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-primary-light focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300
                  ${isActive(link.path) 
                    ? 'bg-accent text-primary-dark' 
                    : 'hover:bg-primary-light hover:text-accent'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
