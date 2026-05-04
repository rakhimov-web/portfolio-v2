import Navbar from "../components/layout/navbar/Navbar";
import Hero from "../components/home/hero/Hero";
import Partner from "../components/home/partners/Partner";
import Services from "../components/home/services/Services";
import Portfolio from "../components/home/portfolio/Portfolio";
import Testimonials from "../components/home/testimonials/Testimonials";
import Accordion from "../components/home/accordion/Accordion";
import Experience from "../components/home/experience/Experience";
import Footer from "../components/layout/footer/Footer";
import Contact from "../components/home/contact/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partner />
      <Services />
      <Portfolio />
      <Testimonials />
      <Accordion />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
