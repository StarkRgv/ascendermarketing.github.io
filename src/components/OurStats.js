import React, { useRef } from "react";
import { statsData } from "../predefinedData";
import useIsVisible from "../hooks/useIsVisible";
import StatsCounter from "./StatsCounter";

const OurStats = () => {
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);
  return (
    <section className="ascender-dark p-5">
      <h1 className="text-bold outlined text-center mb-4">OUR STATS</h1>

      <div className="row" ref={elemRef}>
        {statsData.map((stat) => (
          <div
            className="col-12 col-md-6 col-lg-3 d-flex flex-column text-center mb-4"
            key={stat.description}
          >
            {isVisible && <StatsCounter count={stat.count} />}
            <h4 className="text-light mt-2">{stat.description}</h4>
          </div>
        ))}
      </div>

      <p className="text-light my-5 text-center">
        Delivering a wide range of event services focusing on the best in class
        in the event industry by our team of experts and specialists.
      </p>
    </section>
  );
};

export default OurStats;
