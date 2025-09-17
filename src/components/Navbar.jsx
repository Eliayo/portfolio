import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <li className="list-none">
            <a
              href="/Oluwatosin-Elijah-Aduragbemi-Resume.pdf"
              download="Oluwatosin-Elijah-Aduragbemi-Resume.pdf"
              className="hover:text-blue-600 transition bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold"
            >
              Resume
            </a>
          </li>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block hover:text-blue-600 ${
                  isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <li className="list-none">
            <a
              href="/Oluwatosin-Elijah-Aduragbemi-Resume.pdf"
              download="Oluwatosin-Elijah-Aduragbemi-Resume.pdf"
              className="hover:text-blue-600 transition bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold"
            >
              Resume
            </a>
          </li>
        </div>
      )}
    </header>
  );
}
