import React, { useRef } from "react";
import { statsData } from "../predefinedData";
import useIsVisible from "../hooks/useIsVisible";
import StatsCounter from "./StatsCounter";

const OurStats = () => {
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);
  return (
    <section className="ascender-dark p-5">
      <h1 className="text-bold outlined">OUR STATS</h1>
      <div className="row" ref={elemRef}>
        {statsData.map((stat) => (
          <div className="col-3 d-flex flex-column" key={stat.description}>
            {isVisible && <StatsCounter count={stat.count} />}
            <h4 className="text-light">{stat.description}</h4>
          </div>
        ))}
      </div>

      <p className="text-light my-5">
        Delivering a wide range of events services focusing on the best in class
        in event industry by our team of experts and specialists.
      </p>
    </section>
  );
};

export default OurStats;
