import React, { useEffect } from "react";
import { testimonialData, marque1, marque2 } from "../predefinedData";

const Testimonial = () => {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("next").click();
    }, 5000);
  }, []);

  return (
    <section className="p-5">
      <h4 className="text-center">
        Words from our <span className="text-bold">Happy Clients</span>
      </h4>
      <p className="text-center">
        We take pride in ensuring that our clients have a good working
        experience.
      </p>

      <div>
        <marquee scrollamount="20" direction="right">
          {marque1.map((el) => (
            <h2
              key={el.label}
              className="d-inline text-bold me-3 text-uppercase"
              style={{ color: el.color }}
            >
              {el.label}
            </h2>
          ))}
        </marquee>
        <marquee scrollamount="20" direction="left">
          {marque2.map((el) => (
            <h2
              key={el.label}
              className="d-inline text-bold me-3 text-uppercase"
              style={{ color: el.color }}
            >
              {el.label}
            </h2>
          ))}
        </marquee>
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel carousel-dark slide py-5"
        data-bs-ride="true"
      >
        <div className="d-none carousel-indicators">
          {testimonialData.map((testimonial, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></button>
          ))}
        </div>
        <div className="carousel-inner w-75 m-auto">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="d-flex align-items-center">
                <img
                  style={{ borderRadius: "50%" }}
                  height="72"
                  width="72"
                  src={`/images/${testimonial.image}.jpeg`}
                />

                <div className="ms-3">
                  <h5 className="text-bold my-2">{testimonial.name}</h5>
                  <p className="mb-1">{testimonial.designation}</p>
                  <p className="mb-1 text-bold">{testimonial.company}</p>
                </div>
              </div>

              <div
                className="mt-3"
                style={{
                  backgroundColor: "#F4F5FB",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <img
                  style={{ filter: "grayscale(1)" }}
                  className="mb-3"
                  width="16"
                  src={"/images/semicolon.png"}
                />
                <p className="font14">{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          id="next"
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
