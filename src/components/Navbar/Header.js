import React from "react";
import PropTypes from "prop-types";

const Header = ({ openNav, isOpen, closeNav }) => (
  <header
    style={{
      position: "sticky",
      top: 0,
      zIndex: 10,
      backgroundColor: "#111",
      padding: "10px 60px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "80px",
    }}
  >
    <img
      src={"/images/Ascender Logo_Black-01 2.png"}
      alt="Logo"
      style={{ height: "60px" }}
    />
    {!isOpen ? (
      <img
        src={"/images/Frame 2.png"}
        alt="Menu"
        style={{ height: "40px", cursor: "pointer" }}
        onClick={openNav}
      />
    ) : (
      <a
        href="javascript:void(0)"
        className="closebtn"
        style={{
          position: "absolute",
          // top: "20px",
          right: "50px",
          fontSize: "36px",
          cursor: "pointer",
          color: "#fff",
        }}
        onClick={closeNav}
      >
        &times;
      </a>
    )}
  </header>
);

Header.propTypes = {
  openNav: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default Header;
