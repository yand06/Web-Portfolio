import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed lg:relative top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col py-4">
          {/* Top Row: Name & Contact Info */}
          <div className="flex justify-between items-start mb-1">
            {/* Left: Name & Title */}
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="font-bold text-xl text-gray-900 tracking-tight">
                  Supriyandi La Awe
                </h1>
                <p className="text-sm text-slate-400 font-medium">
                  Fullstack Developer
                </p>
              </div>
            </div>

            {/* Right: Contact & Social */}
            <div className="flex items-center space-x-8">
              {/* Email */}
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Email
                </span>
                <a
                  href="mailto:supriyandilaawe@gmail.com"
                  className="text-sm text-gray-800 hover:text-slate-400 transition-colors"
                >
                  supriyandilaawe@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                  Phone
                </span>
                <a
                  href="tel:+6282198069466"
                  className="text-sm text-gray-800 hover:text-slate-400 transition-colors"
                >
                  +62 821-9806-9466
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-2">
                <a
                  href="https://github.com/yand06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-slate-400 hover:text-white text-gray-700 rounded-lg p-2 transition-all duration-300 transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/supriyandi-la-awe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-slate-400 hover:text-white text-gray-700 rounded-lg p-2 transition-all duration-300 transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://instagram.com/yand_la"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-slate-400 hover:text-white text-gray-700 rounded-lg p-2 transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Row: Navigation Menu */}
          <div className="flex justify-center items-center space-x-4 border-t border-gray-200 pt-3">
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-slate-400 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-slate-400 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-slate-400 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-slate-400 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden flex items-center justify-between py-4">
          {/* Left: Name & Logo */}
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="font-bold text-lg text-gray-900">
                Supriyandi La Awe
              </h1>
              <p className="text-xs text-slate-600 font-medium">
                Fullstack Developer
              </p>
            </div>
          </div>

          {/* Right: Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 space-y-2 border-t border-gray-200 pt-4">
            {/* Navigation Links */}
            <button
              onClick={() => scrollToSection("about")}
              className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
            >
              Contact
            </button>

            {/* Contact Info */}
            <div className="border-t border-gray-200 pt-4 mt-4 space-y-3">
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wide block mb-1">
                  Email
                </span>
                <a
                  href="mailto:supriyandilaawe@gmail.com"
                  className="text-sm text-gray-800 hover:text-slate-600 transition-colors block"
                >
                  supriyandilaawe@gmail.com
                </a>
              </div>
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wide block mb-1">
                  Phone
                </span>
                <a
                  href="tel:+6282198069466"
                  className="text-sm text-gray-800 hover:text-slate-600 transition-colors block"
                >
                  +62 821-9806-9466
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-4 justify-center">
              <a
                href="https://github.com/yand06"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-slate-600 hover:text-white text-gray-700 rounded-lg p-3 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/supriyandi-la-awe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-slate-600 hover:text-white text-gray-700 rounded-lg p-3 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://instagram.com/yand_la"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-slate-600 hover:text-white text-gray-700 rounded-lg p-3 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
