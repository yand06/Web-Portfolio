import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <nav
      className={`w-full z-50 bg-white border-b transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col pt-4 pb-2">
        {/* Baris 1: Kiri & Kanan */}
        <div className="flex justify-between items-start">
          {/* Logo & Nama */}
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-black text-lg text-gray-900 tracking-tight">
                Supriyandi La Awe
              </div>
              <div className="text-xs text-gray-500">Fullstack Developer</div>
            </div>
          </div>
          {/* Kontak & Sosmed */}
          <div className="flex flex-col items-end space-y-2">
            {/* EMAIL & TELP SAMPINGAN */}
            <div className="flex items-center space-x-8">
              {/* Email */}
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-400">Write Me</span>
                <span className="text-sm text-gray-800">
                  <a href="mailto:supriyandilaawe@gmail.com">
                    supriyandilaawe@gmail.com
                  </a>
                </span>
              </div>
              {/* Telp */}
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-400">Call Me</span>
                <span className="text-sm text-gray-800">+62 821-9806-9466</span>
              </div>
            </div>
            {/* Ikon Sosmed */}
            <div className="flex space-x-2 mt-2">
              <a
                href="https://github.com/yand06"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-indigo-100 rounded p-1"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/supriyandi-la-awe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-indigo-100 rounded p-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://instagram.com/yand_la"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 hover:bg-indigo-100 rounded p-1"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
        {/* Baris 2 : Menu Navigasi */}
        <div className="flex justify-center items-center space-x-8 border-t mt-4 pt-2">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-indigo-600 transition-colors text-sm"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-700 hover:text-indigo-600 transition-colors text-sm"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-700 hover:text-indigo-600 transition-colors text-sm"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-indigo-600 transition-colors text-sm"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
