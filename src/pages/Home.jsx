import AiBenefits from "../components/AiBenefits";
import AiTypes from "../components/AiTypes";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AiTypes />
        <AiBenefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
