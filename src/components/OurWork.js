import React from "react";
import { workCategories } from "../predefinedData";

const OurWork = () => {
  return (
    <section className="ascender-dark m-auto py-5 text-white text-center">
      <h1 className="text-bold">Our Work</h1>
      <p>
        Join hands with Ascender Marketing to transform your ideas into
        extraordinary realities. Our work reflects commitment and passion
        towards each event and crafts unforgettable experiences for our clients
        and their audience.
        <br />
        <br />
        Live this excellence of seamless execution and unique solutions that
        have accumulated trust from countless clients. Help us help you make all
        your events shine from intimate gatherings to grand-scale celebrations,
        as we embark on a beautiful journey of chasing dreams!
      </p>

      <div className="d-flex align-items-center justify-content-center mt-5">
        {workCategories.map((section) => (
          <div
            key={section}
            className="work-section-button border rounded py-1 px-3 mx-2 pointer"
          >
            {section}
          </div>
        ))}
      </div>

      <div className="row my-5">
        <div className="col-4">
          <img
            className="w-100"
            height="300px"
            src={`/images/work/work13.png`}
          />
        </div>
        <div className="col-4">
          <img
            className="w-100"
            height="300px"
            src={`/images/work/work0.png`}
          />
        </div>
        <div className="col-4">
          <img
            className="w-100"
            height="300px"
            src={`/images/work/work1.jpg`}
          />
        </div>
        <div className="w-100"></div>
        <div className="col-4">
          <img
            className="w-100"
            height="300px"
            src={`/images/work/work2.jpg`}
          />
        </div>
        <div className="col-4">
          <img
            className="w-100"
            height="300px"
            src={`/images/work/work12.jpg`}
          />
        </div>
        <div className="col-4">
          <img
            className="w-100"
            height="300px"
            src={`/images/work/work4.jpg`}
          />
        </div>
        <div className="w-100"></div>
        <div className="col-4">
          <img
            className="w-100"
            height="300px"
            src={`/images/work/work5.jpg`}
          />
        </div>
        <div className="col-4">
          <img
            className="w-100"
            height="300px"
            src={`/images/work/work6.jpg`}
          />
        </div>
        <div className="col-4">
          <img
            className="w-100"
            height="300px"
            src={`/images/work/work7.jpg`}
          />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
