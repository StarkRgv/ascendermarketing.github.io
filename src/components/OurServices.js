import React, { useState } from "react";
import { serviceData } from "../predefinedData";

const OurServices = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-5 my-5 ascender-light">
      <div className="w-50 m-auto text-center">
        <h2 className="text-bold">Our Services</h2>
        <p>
          We turn events into unforgettable experiences. Our comprehensive suite
          of services is designed to elevate your occasions, be it corporate
          events, promotions, audits, retail experiences, rural engagements, or
          trade fairs. At Ascender Marketing, we blend creativity with
          precision, offering strategic event planning, seamless execution, and
          meticulous evaluation.
        </p>
      </div>
      <div
        id="carouselExampleIndicators0"
        className="carousel carousel-dark slide my-5"
      >
        <div className="row">
          {serviceData.map((service, index) => (
            <h3
              key={index}
              onClick={() => setActive(index)}
              data-bs-target="#carouselExampleIndicators0"
              data-bs-slide-to={index}
              className={`col-2 text-center text-nowrap pointer service-heading ${
                active === index ? "active" : ""
              }`}
            >
              {service.name}
            </h3>
          ))}
        </div>
        <div className="carousel-inner row mt-3">
          <div className="col-3 position-relative">
            <hr
              style={{
                borderTop: "2px solid #C5D1E8",
                color: "#C5D1E8",
              }}
            />
            <div
              className="position-absolute"
              style={{
                height: "10px",
                width: "10px",
                border: "1px solid #C5D1E8",
                borderRadius: "5px",
                right: "3px",
                top: "11.5px",
              }}
            ></div>
          </div>

          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "active" : ""
              } col-9 pe-3 carousel-item`}
            >
              <div className="pe-3">
                <p>{service.descrition}</p>
                <div
                  style={{ overflowX: "auto", paddingRight: "25%" }}
                  className="d-flex"
                >
                  {service.images.map((image, imageIndex) => (
                    <img
                      style={{ height: "169px", width: "269px" }}
                      key={imageIndex}
                      className="mx-2 rounded"
                      src={`/images/${image}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
