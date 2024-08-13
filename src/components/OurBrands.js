import React from "react";

const OurBrand = () => {
  const brands = [];
  for (let index = 1; index < 28; index++) {
    if (index < 10) {
      brands[index] = `/images/brands/Client Logo 0${index}.png`;
    } else {
      brands[index] = `/images/brands/Client Logo ${index}.png`;
    }
  }

  return (
    <section className="ascender-light p-5">
      <h2 className="text-bold text-center">Brands trusted on us</h2>

      <div className="slider-container">
        <div className="slider">
          <div className="logos">
            {brands.map((brand, index) => (
              <img className="me-5" key={index} src={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBrand;
