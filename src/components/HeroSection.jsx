const images = [
  "https://plus.unsplash.com/premium_photo-1775832798595-9b037d7e6352?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1773853430943-5826d01813ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1774962262698-67b8062f3c09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="app-container pt-24 pb-12 overflow-hidden sm:overflow-visible"
    >
      {/* Optional: Add a subtle radial gradient to the whole section for atmosphere */}
      {/* <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full mix-blend-multiply animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/20 blur-3xl rounded-full mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div> */}

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        {/* left content */}
        <div className="space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wide uppercase border border-primary/20">
            Next Gen Technology
          </div>

          {/* <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="gradient-text">Artificial Intelligence</span>
            <br />
            for a Smarter Future
          </h1> */}

          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.15]">
            <span className="gradient-text">Artificial Intelligence</span>
            <br />
            for a Smarter Future
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Discover how AI is transforming industries and improving lives
            worldwide. Our cutting-edge solutions harness the power of machine
            learning to solve complex problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <a
              href="#"
              className="btn-primary group flex items-center justify-center gap-2 transition-all"
            >
              Explore AI Solutions
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            <a href="#" className="btn-outline">
              Learn More
            </a>
          </div>

          {/* Social Proof (Trusted By) */}
          <div className="pt-6 flex items-center lg:justify-start gap-4 border-t border-gray-200/60 mt-8">
            <div className="flex -space-x-3">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`User ${i + 1}`}
                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">10k+ Users</p>
              <div className="flex text-yellow-400 text-xs">★★★★★</div>
            </div>
            {/* <p className="text-sm font-medium text-gray-600">
              Trusted by <span className="text-primary font-bold">10,000+</span>
              worldwide
            </p> */}
          </div>
        </div>

        {/* right image */}
        {/* <div className=" h-80 md:h-[600px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1682464708085-95b4486e2c32?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero section"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div> */}

        {/* --- RIGHT IMAGE (Enhanced Modern Layout) --- */}
        <div className="relative w-full order-1 lg:order-2 h-full min-h-[300px] md:min-h-[500px] lg:min-h-[600px]">
          {/* 1. Rotated Decorative Blob behind the image */}
          <div className="absolute top-0 right-0 -z-10 w-full h-full bg-primary/10 rotate-6 rounded-3xl transform translate-x-6 translate-y-6"></div>

          {/* 2. Main Image Container */}
          <div className="relative h-full w-full bg-white shadow-2xl rounded-2xl overflow-hidden border border-white/50">
            <img
              src="https://plus.unsplash.com/premium_photo-1682464708085-95b4486e2c32?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="hero section"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* 3. Glassmorphism Overlay (Bottom Left) */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    AI Analysis Complete
                  </p>
                  <p className="text-white/70 text-xs">
                    Processed 1,200 data points in 0.4ms
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Floating Stats Card (Top Right) */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float">
              <img
                src={images[0]}
                className="w-8 h-8 rounded-full object-cover"
                alt="Icon"
              />
              <div>
                <p className="text-xs font-bold text-gray-800">New Update</p>
                <p className="text-[10px] text-gray-500">Just now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
