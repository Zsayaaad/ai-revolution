import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "AI Types", href: "#types" },
  { name: "Benefits", href: "#benefits" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 1. Scroll Detection: Watch the browser scroll bar
  useEffect(() => {
    const handleScroll = () => {
      // If we scroll down more than 20px, change the navbar style
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b
          ${
            isScrolled
              ? "bg-white/90 border-gray-200 shadow-md backdrop-blur-md py-0"
              : "bg-white/80 border-transparent py-0"
          }`}
      >
        <div className="app-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 2. Animated Logo with Icon */}
            <a href="#" className="group flex items-center gap-2">
              {/* The Icon Box */}
              <div
                className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center 
                              text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:bg-primary group-hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              </div>
              {/* The Text */}
              <span className="gradient-text text-2xl font-bold tracking-tight hidden sm:block">
                Ai Revolution
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="relative text-gray-600 hover:text-primary font-medium transition-colors group px-2 py-1"
                >
                  {link.name}
                  {/* Underline Slide Effect */}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}

              <a
                href="#"
                className="ml-4 bg-primary text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-primary/30 
                           hover:shadow-primary/50 hover:bg-primary/90 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none
                         ${mobileMenuOpen ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div
          className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out absolute w-full shadow-lg
                      ${mobileMenuOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}
        >
          <div className="space-y-1 px-4 py-4 flex flex-col">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <a
                href="#"
                onClick={handleLinkClick}
                className="block w-full text-center bg-primary text-white px-4 py-3 rounded-xl font-medium shadow-md hover:bg-primary/90 transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
