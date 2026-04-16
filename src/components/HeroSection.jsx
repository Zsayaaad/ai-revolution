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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        {/* left content */}
        <div className="space-y-6">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="gradient-text">Artificial Intelligence</span>
            <br />
            for a Smarter Future
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Discover how AI is transforming industries and improving lives
            worldwide. Our cutting-edge solutions harness the power of machine
            learning to solve complex problems.
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <a href="#" className="btn-primary">
              Explore AI Solutions
            </a>
            <a href="#" className="btn-outline">
              Learn More
            </a>
          </div>

          <div className="pt-4 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`User ${i + 1}`}
                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-600">
              Trusted by <span className="text-primary font-bold">10,000+</span>
              worldwide
            </p>
          </div>
        </div>

        {/* right image */}
        <div className=" h-80 md:h-[600px]">
          <img
            src="https://plus.unsplash.com/premium_photo-1682464708085-95b4486e2c32?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero section"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
