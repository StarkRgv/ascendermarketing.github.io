import React, { useEffect, useState } from "react";
import { eventsData } from "../predefinedData";

const Banner = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setActiveEvent((prevIndex) => (prevIndex + 1) % eventsData.length);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [eventsData.length]);

  return (
    <section
      id="home"
      className="position-relative"
      style={{ backgroundColor: "#000" }}
    >
      {/* Banner Content */}
      <img
        className="d-none w-100 banner-image"
        src={"/images/Banner.png"}
        alt="Banner"
      />
      <video
        className="w-100"
        style={{ height: "700px", zIndex: 1, position: "relative" }}
        preload="auto"
        autoPlay={true}
        loop
        muted
      >
        <source src={"/images/vdo.mp4"} type="video/mp4" />
      </video>

      <div
        className="position-absolute w-100 d-flex align-items-center justify-content-center flex-column"
        style={{ zIndex: 4, bottom: "50px" }}
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

      {/* Event Rotator */}
      <div
        style={{ zIndex: 4, bottom: "10px" }}
        className="w-100 position-absolute d-flex align-items-center justify-content-center"
      >
        <table>
          <tr>
            <td className="text-center" width={310}>
              <h4 className="text-white">In Ascender we take care</h4>
            </td>
            <td className="text-center" width={250}>
              <h4 className="text-rotator">
                <span className="animated-text gradiant-blue text-bold">
                  {eventsData[activeEvent]}
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
