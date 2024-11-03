import React, { useState } from "react";
import Header from "./components/Navbar/Header";
import Sidebar from "./components/Navbar/Sidebar";
import Banner from "./components/Banner";
import WhyAscender from "./components/WhyAscender";
import OurStats from "./components/OurStats";
import HowWeWork from "./components/HowWeWork";
import OurServices from "./components/OurServices";
import OurWork from "./components/OurWork";
import OurBrand from "./components/OurBrands";
import Testimonial from "./components/Testimonial";
import OurPresence from "./components/OurPresence";
import Footer from "./components/Footer";
import OurVision from "./components/OurVision";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeNav(); // Close nav after scroll
    }
  };

  return (
    <>
      <Header openNav={openNav} isOpen={isNavOpen} closeNav={closeNav} />
      <Sidebar isOpen={isNavOpen} scrollToSection={scrollToSection} />
      <Banner />
      <WhyAscender />
      <OurVision />
      <HowWeWork />
      <OurStats />
      <OurServices />
      <OurWork />
      <OurBrand />
      <Testimonial />
      <OurPresence />
      <Footer />
    </>
  );
}

export default App;
