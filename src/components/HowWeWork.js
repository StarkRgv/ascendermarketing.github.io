import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { API } from "../constants";
import { removeHtmlTags } from "../utils";

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
      <h2 className="text-bold">How we work</h2>

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
        {error && (
          <div className="text-center text-danger">Failed to load data.</div>
        )}
        {!loading && (
          <>
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
                  {work.title.rendered}
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
                    style={{ backgroundColor: "#19192d" }}
                    className="p-3 rounded-4 d-flex"
                  >
                    <img src={work.featured_image.url} />
                    <div className="text-white w-50 m-auto p-3">
                      <h5 className="text-left">{work.title.rendered}</h5>
                      <p>{removeHtmlTags(work.content.rendered)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HowWeWork;
