import React from "react";
// import { fetchData } from "../api/api";
// import { API } from "../constants";
// import ErrorMessage from "./ErrorMessage";

const OurBrand = () => {
  // const [clients, setClients] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getClientsData = async () => {
  //     try {
  //       const result = await fetchData(API.CLIENTS);
  //       setClients(result);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getClientsData();
  // }, []);

  const brands = [];
  for (let index = 1; index < 28; index++) {
    if (index < 10) {
      brands[index] = `./images/brands/Client Logo 0${index}.png`;
    } else {
      brands[index] = `./images/brands/Client Logo ${index}.png`;
    }
  }

  return (
    <section id="happy-clients" className="ascender-light p-5">
      <h1 className="text-bold text-center pb-5">Brands trusted on us</h1>
      <div className="container">
        <div className="slider-container">
          <div className="slider">
            <div className="logos">
              {/* {loading && (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                  </div>
                </div>
              )} */}
              {brands.map((brand, index) => (
                <img
                  className="me-4 mb-3 client-logo"
                  key={index}
                  src={brand || "/images/placeholder.jpg"}
                  alt="Image"
                />
              ))}
              {brands.map((brand, index) => (
                <img
                  className="me-4 mb-3 client-logo"
                  key={index}
                  src={brand || "/images/placeholder.jpg"}
                  alt="Image"
                />
              ))}
              {/* {error && <ErrorMessage message="Failed to fetch brand data" />} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBrand;
