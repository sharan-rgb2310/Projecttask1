"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0a0a0f]/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md shadow-indigo-200 dark:shadow-indigo-900">
              <span className="text-white font-bold text-sm font-display">P</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white font-display tracking-tight">
              Pixora <span className="text-primary">Studio</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-indigo-400 font-medium transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700 transition-colors"
            >
              {dark ? (
                <Sun className="w-4 h-4" strokeWidth={2} />
              ) : (
                <Moon className="w-4 h-4" strokeWidth={2} />
              )}
            </button>

            <Link
              href="#contact"
              className="bg-primary hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200 dark:hover:shadow-indigo-900"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile right side */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {dark ? (
                <Sun className="w-4 h-4" strokeWidth={2} />
              ) : (
                <Moon className="w-4 h-4" strokeWidth={2} />
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-primary"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0d0d1a] border-t border-gray-100 dark:border-gray-800 px-4 pb-4">
          <ul className="flex flex-col gap-2 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary font-medium py-2 text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm mt-1"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
