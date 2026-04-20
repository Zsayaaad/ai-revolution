const Footer = () => {
  return (
    // 1. Full dark background
    <footer className="relative bg-zinc-950 border-t border-white/5 overflow-hidden">
      {/* Background Glow Decoration */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="app-container relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
          {/* Column 1: Brand (Takes full width on mobile, partial on desktop) */}
          <div className="md:col-span-5 space-y-6">
            <a href="#" className="inline-block">
              <span className="gradient-text text-3xl font-bold tracking-tight">
                Ai Revolution
              </span>
            </a>
            <p className="text-gray-400 max-w-xs leading-relaxed text-sm md:text-base">
              Empowering humanity through intelligent automation. Building a
              smarter future, one algorithm at a time.
            </p>

            {/* Desktop Only Newsletter/Socials Area (Optional) */}
            <div className="hidden md:block pt-4">
              {/* You could put a newsletter input here if you want on desktop only */}
            </div>
          </div>

          {/* Columns 2 & 3: Combined Links & Connect (Side by side on Desktop, Stacked on Mobile) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Sitemap */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                Explore
              </h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                {["Home", "AI Types", "Benefits", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item === "AI Types" ? "types" : item.toLowerCase().replace(" ", "")}`}
                      className="group relative text-gray-400 hover:text-white transition-all duration-300 inline-block"
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect / Contact */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                Connect
              </h4>

              {/* Simple Text Link */}
              <a
                href="mailto:hello@airevolution.com"
                className="block text-gray-400 text-sm hover:text-white transition-colors duration-300"
              >
                hello@airevolution.com
              </a>

              {/* Social Icons - Compact Row */}
              <div className="flex gap-3 pt-2">
                {/* Defined specific icon paths for each platform */}
                {[
                  {
                    name: "Facebook",
                    icon: (
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    ),
                  },
                  {
                    name: "Twitter",
                    icon: (
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    ),
                  },
                  {
                    name: "Instagram",
                    icon: (
                      <>
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" />
                      </>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    icon: (
                      <>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 rounded-xl bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white border border-white/10 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-1 active:scale-95 group"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line with Gradient Effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          {/* Decorative gradient dot in center of divider */}
          <div className="relative flex justify-center">
            <div className="h-px w-16 bg-linear-to-r from-transparent via-primary to-transparent"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Ai Revolution. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
