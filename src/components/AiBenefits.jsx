const AiBenefits = () => {
  return (
    // 1. Main Container: Transparent to blend with site bg, relative for positioning children
    <section
      id="benefits"
      className=" mt-16 app-container py-24 relative overflow-hidden  bg-linear-to-br from-dark to-gray-900 rounded-3xl"
    >
      {/* 2. The "Gentle" Background (Mesh Gradients) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Right Blob */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse-slow"></div>

        {/* Bottom Left Blob */}
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px]"></div>

        {/* Center Overlay to ensure readability */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-950/50 to-transparent"></div>
      </div>

      {/* 3. Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs tracking-wide uppercase transition-colors hover:bg-primary/20">
            Why AI Matters
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Built for <span className="gradient-text">Performance</span>,<br />
            Designed for Growth.
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed">
            Experience the gentle power of intelligent automation. Our solutions
            adapt to your business needs seamlessly.
          </p>
        </div>

        {/* 4. The Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              // Card Styling: Glass-like, matches other sections
              className="group p-8 rounded-2xl bg-white/3 border border-white/10 
                         backdrop-blur-sm hover:bg-white/6 
                         transition-all duration-500 ease-out hover:-translate-y-1"
            >
              {/* Icon: Minimalist, uses primary color */}
              <div
                className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary 
                              group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-500"
              >
                {benefit.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Data Configuration ---
const benefits = [
  {
    title: "Automated Workflows",
    description:
      "Seamlessly automate repetitive tasks to free up your team's time for creative and strategic work.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Predictive Analytics",
    description:
      "Gain foresight into market trends and customer behavior with precision data modeling.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Enhanced Security",
    description:
      "Advanced threat detection that adapts to new risks, keeping your data safe around the clock.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Hyper-Personalization",
    description:
      "Deliver customized experiences to every user, increasing loyalty and satisfaction scores.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Instant Decisions",
    description:
      "Remove latency from critical decisions by processing millions of data points instantly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description:
      "Intelligent agents that understand context and provide helpful answers immediately.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

export default AiBenefits;
