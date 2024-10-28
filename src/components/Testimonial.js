import React, { useState, useEffect } from "react";
import { marque1, marque2 } from "../predefinedData";
import { fetchData } from "../api/api";
import { API } from "../constants";
import ErrorMessage from "./ErrorMessage";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      document.getElementById("next")?.click();
    }, 5000);
  }, []);

  useEffect(() => {
    const getTestimonialData = async () => {
      try {
        const result = await fetchData(API.TESTIMONIAL);
        setTestimonialData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getTestimonialData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message="Failed to fetch Testimonial data" />;
  }

  return (
    <section id="testimonials" className="p-5">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}
      {error && <ErrorMessage message="Failed to fetch Work data" />}
      {!loading && !error && (
        <>
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
          <div className="d-flex justify-content-center py-3">
            <h2 className="text-bold outlined-dark">
              Words from our Happy Clients
            </h2>
          </div>
          <p className="text-center">
            We take pride in ensuring that our clients have a good working
            experience.
          </p>

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
                      src={
                        testimonial.featured_image
                          ? testimonial.featured_image.url
                          : "/images/Default_Testimonial.png"
                      }
                    />

                    <div className="ms-3">
                      <h5
                        style={{ color: "#e56039", fontsize: "24px" }}
                        className="my-2"
                      >
                        {testimonial.acf.name}
                      </h5>
                      <p className="mb-1">{testimonial.acf.designation}</p>
                      <p className="mb-1 text-bold company-badge">
                        {testimonial.acf.company}
                      </p>
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
                    <p className="font14">{testimonial.acf.description}</p>
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
        </>
      )}
    </section>
  );
};

export default Testimonial;
