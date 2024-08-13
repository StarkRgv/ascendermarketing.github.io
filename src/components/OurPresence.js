import React, { useState } from "react";
import { placeData } from "../predefinedData";

const OurPresence = () => {
  const [activePlace, setActivePlace] = useState("Gurugram");
  return (
    <section className="position-relative ascender-light px-3">
      <div className="row m-0">
        <div className="col-3">
          <h2 className="text-bold">Our Presence</h2>
          <div className="border bg-white">
            {placeData.map((place) => (
              <div className="place pointer p-3 my-3" key={place.name}>
                <div
                  onClick={() => {
                    if (!place.map) return;
                    setActivePlace(place.name);
                  }}
                  className="d-flex justify-content-between align-items-center"
                >
                  <h4
                    title={place.address.description}
                    style={{
                      color: place.name === activePlace ? "blue" : "black",
                    }}
                    className="font18"
                  >
                    {place.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-9">
          <iframe
            src={placeData.find((place) => place.name === activePlace).map}
            width="100%"
            height="600px"
          />
        </div>
      </div>
    </section>
  );
};

export default OurPresence;