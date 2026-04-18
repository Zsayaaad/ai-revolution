const aiTypes = [
  {
    title: "Machine Learning",
    description:
      "Systems that learn and improve from experience without being explicitly programmed.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-primary" // Added text-primary
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    tags: [
      { text: "Predictive", color: "primary" },
      { text: "Adaptive", color: "secondary" },
    ],
  },
  {
    title: "Neural Networks",
    description:
      "Biologically inspired networks that simulate human brain functions for pattern recognition.",
    image:
      "https://images.unsplash.com/photo-1645839057098-5ea8761a6b09?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    tags: [
      { text: "Deep Learning", color: "primary" },
      { text: "Complex Data", color: "accent" },
    ],
  },
  {
    title: "Natural Language Processing",
    description:
      "Enabling machines to understand, interpret, and generate human language naturally.",
    image:
      "https://plus.unsplash.com/premium_photo-1733317429945-a3688f50430b?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    tags: [
      { text: "Chatbot", color: "secondary" },
      { text: "Translation", color: "accent" },
    ],
  },
];

const tagColors = {
  primary: "bg-primary/10 text-primary border-primary/20", // Added subtle border
  secondary: "bg-secondary/10 text-secondary border-secondary/20",
  accent: "bg-accent/10 text-accent border-accent/20",
};

// const AiTypes = () => {
//   return <section id="types" className="app-container "></section>;
// };

// export default AiTypes;

const AiTypes = () => {
  return (
    <section id="types" className="app-container">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">AI Technologies</h2>
          <p className="text-gray-400">
            Explore the different types of artificial intelligence shaping the
            future.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTypes.map((type, index) => (
            <div
              key={index}
              // 1. Added 'group' for hover context
              // 2. Added 'mt-auto' strategy via flex-col later
              // 3. Added hover scale and shadow lift
              className="group flex flex-col bg-white/5 p-6 rounded-2xl border border-white/10 
                         hover:border-primary/50 hover:bg-white/[0.07] 
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image Area */}
              <div className="overflow-hidden rounded-xl relative">
                <img
                  src={type.image}
                  alt={type.title}
                  // Subtle zoom effect on hover
                  className="w-full h-48 object-cover rounded-xl transition-all duration-500 group-hover:scale-105"
                />
                {/* Optional: Gradient overlay at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>

              {/* Content Area - Used flex-col and mt-auto to push tags down */}
              <div className="flex flex-col grow py-5">
                <div className="flex items-center gap-4 mb-4">
                  {/* Icon & Title Box */}
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-semibold m-0 leading-tight">
                    {type.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 ">
                  {type.description}
                </p>

                {/* Tags - Pushed to bottom */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {type.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${tagColors[tag.color]} opacity-90 group-hover:opacity-100 transition-opacity`}
                    >
                      {tag.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiTypes;
