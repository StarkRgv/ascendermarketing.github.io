import React from "react";
import PropTypes from "prop-types";

const Header = ({ openNav, isOpen, closeNav }) => (
  <header
    style={{
      position: "sticky",
      top: 0,
      zIndex: 10,
      backgroundColor: "#111",
      padding: "10px 15px",
      display: "flex",
      justifyContent: "space-between", // Adjust alignment for large screens
      alignItems: "center",
      height: "80px",
      width: "100%",
    }}
    className="header-container"
  >
    <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
      <div
        className="menu-icon"
        style={{
          height: "50px",
          cursor: "pointer",
          marginRight: "15px",
        }}
      >
        {!isOpen ? (
          <img
            src={"/images/Frame 2.png"}
            alt="Menu"
            onClick={openNav}
            style={{
              width: "50px",
              height: "50px",
            }}
          />
        ) : (
          <a
            href="javascript:void(0)"
            className="closebtn"
            style={{
              position: "relative",
              fontSize: "36px",
              cursor: "pointer",
              color: "#fff",
              bottom: "10px",
            }}
            onClick={closeNav}
          >
            &times;
          </a>
        )}
      </div>
      <img
        src={"/images/Ascender Logo_Black-01 2.png"}
        alt="Logo"
        className="logo-large"
        style={{
          width: "150px",
          height: "auto",
        }}
      />
    </div>
  </header>
);

Header.propTypes = {
  openNav: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeNav: PropTypes.func.isRequired,
};

export default Header;
