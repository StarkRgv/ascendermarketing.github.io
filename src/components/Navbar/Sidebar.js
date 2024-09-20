import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({ isOpen, scrollToSection }) => {
  return (
    <div
      className="sidenav"
      style={{
        width: isOpen ? "25%" : "0",
        opacity: isOpen ? 1 : 0,
        transition: "width 0.3s, opacity 0.3s",
        overflowX: "hidden",
        position: "fixed",
        height: "100%",
        backgroundColor: "#111",
        zIndex: 5,
        pointerEvents: isOpen ? "all" : "none",
      }}
    >
      <a href="#" onClick={() => scrollToSection("homeSection")}>
        Home
      </a>
      <a href="#" onClick={() => scrollToSection("clientsSection")}>
        Our Clients
      </a>
      <a href="#" onClick={() => scrollToSection("serviveSection")}>
        Our Services
      </a>
      <a href="#" onClick={() => scrollToSection("workSection")}>
        Our Work
      </a>
      <a href="#" onClick={() => scrollToSection("testimonialSection")}>
        Testimonials
      </a>
      <a href="#" onClick={() => scrollToSection("contactSection")}>
        Contact Us
      </a>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default Sidebar;
