import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { API } from "../constants";
import { removeHtmlTags } from "../utils";
import ErrorMessage from "./ErrorMessage";

const HowWeWork = () => {
  const [workData, setWorkData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const getHowWeWorkData = async () => {
      try {
        const result = await fetchData(API.HOW_WE_WORK);
        setWorkData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getHowWeWorkData();
  }, []);

  return (
    <section className="p-5">
      <div className="container">
        <h1 className="text-bold text-center">How We Work</h1>
        <div
          id="carouselExampleIndicators1"
          className="carousel carousel-dark slide my-5"
        >
          {loading && (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden"></span>
              </div>
            </div>
          )}
          {error && <ErrorMessage message="Failed to fetch Work data" />}
          {!loading && (
            <>
              <div className="row">
                {workData.map((work, index) => (
                  <h3
                    key={index}
                    onClick={() => setActive(index)}
                    data-bs-target="#carouselExampleIndicators1"
                    data-bs-slide-to={index}
                    className={`col-6 col-md-4 col-lg-2 text-center text-nowrap pointer works-heading ${
                      active === index ? "active" : ""
                    }`}
                  >
                    {work.title.rendered}
                  </h3>
                ))}
              </div>
              <div className="carousel-inner row mt-3">
                {workData.map((work, index) => (
                  <div
                    key={index}
                    className={`${
                      index === 0 ? "active" : ""
                    } col-12 col-md-10 col-lg-9 carousel-item`}
                  >
                    <div
                      style={{ backgroundColor: "#19192d" }}
                      className="p-3 rounded-4 d-flex flex-column flex-md-row"
                    >
                      <img
                        src={work.featured_image.url}
                        className="img-fluid mb-3 mb-md-0"
                        alt={work.title.rendered}
                        style={{ maxHeight: "200px", objectFit: "cover" }} // Ensure image fits nicely
                      />
                      <div className="text-white w-100 m-auto p-3">
                        <h3 className="text-left">{work.title.rendered}</h3>
                        <p style={{ textAlign: "justify" }}>
                          {removeHtmlTags(work.content.rendered)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
