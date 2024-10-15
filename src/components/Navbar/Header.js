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
      width: "100%",
    }}
    className="header-container"
  >
    <img
      src={"/images/Ascender Logo_Black-01 2.png"}
      alt="Logo"
      style={{
        width: "150px",
        height: "auto",
      }}
    />
    <div style={{ height: "40px", cursor: "pointer" }}>
      {!isOpen ? (
        <img
          src={"/images/Frame 2.png"}
          alt="Menu"
          onClick={openNav}
          style={{ width: "50px", height: "50px" }} // Smaller menu icon for responsiveness
        />
      ) : (
        <a
          href="javascript:void(0)"
          className="closebtn"
          style={{
            position: "absolute",
            top: "10px",
            right: "65px", // Adjust position for mobile screens
            fontSize: "36px",
            cursor: "pointer",
            color: "#fff",
          }}
          onClick={closeNav}
        >
          &times;
        </a>
      )}
    </div>
  </header>
);

Header.propTypes = {
  openNav: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default Header;
