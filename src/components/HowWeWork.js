import React, { useState } from "react";
import { workData } from "../predefinedData";

const HowWeWork = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="p-5">
      <h2 className="text-bold">How we work</h2>

      <div
        id="carouselExampleIndicators1"
        className="carousel carousel-dark slide my-5"
      >
        <div className="row">
          {workData.map((work, index) => (
            <h5
              key={index}
              onClick={() => setActive(index)}
              data-bs-target="#carouselExampleIndicators1"
              data-bs-slide-to={index}
              className={`col-2 text-center text-nowrap pointer works-heading ${
                active === index ? "active" : ""
              }`}
            >
              {work.title}
            </h5>
          ))}
        </div>
        <div className="carousel-inner row mt-3">
          {workData.map((work, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "active" : ""
              } col-9 pe-3 carousel-item`}
            >
              <div
                style={{ backgroundColor: work.bg }}
                className="p-3 rounded-4 d-flex"
              >
                <img src={`/images/howwework/${work.img}`} />
                <div className="text-white w-50 m-auto p-3">
                  <h5 className="text-left">{work.title}</h5>
                  <p>{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
