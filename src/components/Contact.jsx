import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // Mock Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a demo)");
  };

  return (
    <section id="contact" className="app-container py-24">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let's Build the Future{" "}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Have a project in mind? Need more information about our AI
            capabilities? Drop us a line and we will get back to you within 24
            hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* LEFT COLUMN: Contact Info Cards */}
          <div className="lg:col-span-2 flex flex-col mt-8 space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 group p-6 rounded-2xl bg-white/5 border-white/10 backdrop-blur-sm 
                                             
               hover:bg-white/10         /* Increased visibility */
               hover:border-white/20     /* Subtle border brighten */
               hover:-translate-y-1      /* Physical movement (Lift) */
               hover:shadow-lg           /* Adds depth */
               hover:shadow-primary/10   /* Colored shadow for vibe */
               transition-all duration-300 ease-out"
              >
                {/* Icon Box */}
                <div className="form-icon group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>

                <div className="flex flex-col justify-center">
                  <h4 className="text-lg font-semibold contact-title text-dark group-hover:text-primary transition-colors">
                    {info.title}
                  </h4>
                  <p className="text-gray-400 contact-text leading-relaxed mt-1">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-3xl bg-white/3 border border-white/10 shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-400 ml-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-dark placeholder-gray-500 
                               focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-400 ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-dark placeholder-gray-500 
                               focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2 mb-8">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-400 ml-1"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3.5 rounded-xl bg-black/20 border border-white/10 text-dark placeholder-gray-500 
                             focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl 
                           hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 transition-all active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Data Configuration ---
const contactInfo = [
  {
    title: "Email Support",
    content: "support@airevolution.com",
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
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Office Address",
    content: "Silicon Valley, CA 94025",
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
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Call Us",
    content: "+1 (555) 123-4567 Mon-Fri, 9am - 6pm EST",
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
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
];

export default Contact;
