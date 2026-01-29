import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { SCHOOL_INFO } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', path: '/' },
    { label: 'Profil', path: '/profil' },
    { label: 'Jurusan', path: '/jurusan' },
    { label: 'Galeri', path: '/galeri' },
    { label: 'Kontak', path: '/kontak' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-muhammadiyah-primary text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="bg-white p-2 rounded-full text-muhammadiyah-primary">
                <GraduationCap size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-wide">SMK MUHAMMADIYAH 3</span>
              <span className="text-sm font-light tracking-widest text-yellow-300">GIRIWOYO</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-muhammadiyah-dark text-white shadow-inner'
                        : 'text-gray-100 hover:bg-muhammadiyah-dark hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-muhammadiyah-dark inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-emerald-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-emerald-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-muhammadiyah-dark text-white'
                      : 'text-gray-300 hover:bg-emerald-700 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;