import React, { useEffect, useState, useMemo } from "react";
import { fetchData } from "../api/api";
import { API } from "../constants";
import { removeHtmlTags } from "../utils";
import ErrorMessage from "./ErrorMessage";

const OurServices = () => {
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serviceId, setServiceId] = useState("");
  const [error, setError] = useState(null);
  const [serviceImages, setServiceImages] = useState([]);
  const [imagesLoading, setImagesLoading] = useState(true);

  // Helper function to fetch event images
  const fetchEventImages = async (acfArr) => {
    try {
      const images = await Promise.all(
        acfArr.map(async (item) => {
          const result = await fetchData(`media/${item.service_image}`);
          return {
            alt_text: result.title.rendered,
            source_url: result.source_url,
          };
        })
      );
      return images;
    } catch (error) {
      console.error("Error fetching images:", error);
      throw new Error("Failed to load images");
    }
  };

  // Fetch services data on component mount
  useEffect(() => {
    const getServicesData = async () => {
      try {
        const result = await fetchData(API.SERVICES);
        setServiceData(result);
        if (result.length > 0) {
          setServiceId(result[0].id);
        }
      } catch (error) {
        setError("Failed to load services data.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getServicesData();
  }, []);

  // Fetch images for the selected service
  useEffect(() => {
    if (!serviceData || serviceData.length === 0) return;

    const getServiceImages = async () => {
      setImagesLoading(true);
      setError(null);

      try {
        const selectedService = serviceData.find(
          (service) => service.id === serviceId
        );
        const acfArr = selectedService?.acf.service_images || [];
        const images = await fetchEventImages(acfArr);

        setServiceImages(images);
      } catch (error) {
        setError(error.message || "Failed to load images.");
      } finally {
        setImagesLoading(false);
      }
    };

    getServiceImages();
  }, [serviceId, serviceData]);

  // Memoize service content to avoid unnecessary recalculations
  const serviceContent = useMemo(() => {
    const selectedService = serviceData.find(
      (service) => service.id === serviceId
    );
    return selectedService
      ? removeHtmlTags(selectedService.content.rendered)
      : "";
  }, [serviceId, serviceData]);

  return (
    <section id="serviceSection" className="py-5 my-5 ascender-light">
      <div className="container m-auto text-center">
        <h2 className="text-bold text-center">Our Services</h2>
        <p>
          We turn events into unforgettable experiences. Our comprehensive suite
          of services is designed to elevate your occasions, be it corporate
          events, promotions, audits, retail experiences, rural engagements, or
          trade fairs. At Ascender Marketing, we blend creativity with
          precision, offering strategic event planning, seamless execution, and
          meticulous evaluation.
        </p>
      </div>

      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}

      {error && <ErrorMessage message="Failed to fetch Services data" />}

      {!loading && !error && (
        <div
          id="carouselExampleIndicators0"
          className="carousel carousel-dark slide my-5"
        >
          {/* Responsive Heading Section */}
          <div className="row">
            <div className="col-12 d-flex flex-lg-row flex-column">
              {serviceData.map((service, index) => (
                <h3
                  key={index}
                  onClick={() => {
                    setServiceId(service.id);
                  }}
                  data-bs-target="#carouselExampleIndicators0"
                  data-bs-slide-to={index}
                  className={`text-center text-nowrap pointer service-heading ${
                    serviceId === service.id ? "active" : ""
                  } p-1`}
                  style={{
                    cursor: "pointer",
                    flex: "1", // Distribute items equally in the row on large screens
                  }}
                >
                  {service.title.rendered}
                </h3>
              ))}
            </div>
          </div>

          {/* Carousel Content */}
          <div className="carousel-inner row mt-3">
            {/* Static Line for large screens */}
            <div className="d-none d-lg-block col-3 position-relative">
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

            <div className="col-12 col-lg-9 pe-lg-3 carousel-item active">
              <div className="pe-lg-3">
                <p>{serviceContent}</p>
                <div
                  style={{ overflowX: "auto", paddingRight: "25%" }}
                  className="d-flex flex-wrap flex-lg-nowrap justify-content-center"
                >
                  {imagesLoading && (
                    <div className="d-flex justify-content-center w-100">
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}
                  {!imagesLoading &&
                    serviceImages.map((image, imageIndex) => (
                      <img
                        style={{
                          height: "auto",
                          width: "100%",
                          maxWidth: "269px",
                        }}
                        key={imageIndex}
                        className="mx-2 mb-2 rounded"
                        src={image.source_url}
                        alt={image.alt_text}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurServices;
