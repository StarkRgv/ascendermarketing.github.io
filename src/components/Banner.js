import React from "react";

const Banner = () => {
  return (
    <section className="position-relative" style={{ backgroundColor: "#000" }}>
      <div id="mySidenav" className="sidenav d-none">
        <a
          href="javascript:void(0)"
          className="closebtn"
          // onClick={() => closeNav()}
        >
          &times;
        </a>
        <a href="#">Home</a>
        <a href="#">Our Clients</a>
        <a href="#">Our Services</a>
        <a href="#">Our Work</a>
        <a href="#">Testimonials</a>
        <a href="#">Contact Us</a>
      </div>

      <img
        className="position-absolute"
        style={{ left: "60px", top: "10px" }}
        src={"/images/Ascender Logo_Black-01 2.png"}
      />
      <img
        // onClick={() => openNav()}
        className="position-absolute"
        style={{ right: "60px", top: "10px" }}
        src={"/images/Frame 2.png"}
      />

      <img
        className="d-none w-100"
        style={{ height: "800px" }}
        src={"/images/Banner.png"}
      />
      <video
        className="w-100"
        style={{ height: "800px" }}
        preload="auto"
        autoPlay={true}
        loop="loop"
        muted="muted"
      >
        <source src={"/images/vdo.mp4"} type="video/mp4" />
      </video>

      <div
        className="position-absolute w-100 d-flex align-items-center justify-content-center flex-column"
        style={{ zIndex: 1, bottom: "50px" }}
      >
        <p className="font14 text-white m-0">Know more</p>
        <div
          style={{ height: "60px", width: "1px", backgroundColor: "white" }}
        ></div>
        <div
          style={{
            height: "10px",
            width: "10px",
            border: "1px solid #fff",
            borderRadius: "5px",
          }}
        ></div>
      </div>

      <div
        style={{ zIndex: 1, bottom: "10px" }}
        className="w-100 position-absolute d-flex align-items-center justify-content-center"
      >
        <div className="d-none flex-row">
          <h4 className="text-white">In Ascender we take care</h4>
          <h4 className="w-50">
            <span className="gradiant-blue text-bold">
              {/* {events[activeEvent]} */}
            </span>
          </h4>
        </div>

        <table>
          <tr>
            <td width={310}>
              <h4 className="text-white">In Ascender we take care</h4>
            </td>
            <td width={250}>
              {" "}
              <h4 className="text-rotator">
                <span className="animated-text gradiant-blue text-bold">
                  {/* {events[activeEvent]} */}
                </span>
              </h4>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Banner;
