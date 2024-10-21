import React, { useState } from "react";
import PropTypes from "prop-types";

const Sidebar = ({ isOpen, scrollToSection }) => {
  const [activeSection, setActiveSection] = useState("");

  const handleSectionClick = (event, section, urlHash) => {
    event.preventDefault();

    setActiveSection(section);
    scrollToSection(section);

    // Update the URL without reloading the page
    window.history.pushState(null, "", urlHash);
  };

  return (
    <div
      className="sidenav"
      style={{
        width: isOpen ? "250px" : "0",
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
      <a
        href="#home"
        className={activeSection === "home" ? "active" : ""}
        onClick={(e) => handleSectionClick(e, "home", "#home")}
      >
        Home
      </a>
      <a
        href="#our-services"
        className={activeSection === "our-services" ? "active" : ""}
        onClick={(e) => handleSectionClick(e, "our-services", "#our-services")}
      >
        Our Services
      </a>
      <a
        href="#our-work"
        className={activeSection === "our-work" ? "active" : ""}
        onClick={(e) => handleSectionClick(e, "our-work", "#our-work")}
      >
        Our Work
      </a>
      <a
        href="#happy-clients"
        className={activeSection === "happy-clients" ? "active" : ""}
        onClick={(e) =>
          handleSectionClick(e, "happy-clients", "#happy-clients")
        }
      >
        Our Clients
      </a>
      <a
        href="#testimonials"
        className={activeSection === "testimonials" ? "active" : ""}
        onClick={(e) => handleSectionClick(e, "testimonials", "#testimonials")}
      >
        Testimonials
      </a>
      <a
        href="#contact-us"
        className={activeSection === "contact-us" ? "active" : ""}
        onClick={(e) => handleSectionClick(e, "contact-us", "#contact-us")}
      >
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
