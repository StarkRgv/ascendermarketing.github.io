import React from "react";
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
  return (
    <>
      <Banner />
      <WhyAscender />
      <OurStats />
      <HowWeWork />
      <OurVision />
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
