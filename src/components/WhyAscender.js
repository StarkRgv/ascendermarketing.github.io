import React from "react";

const WhyAscender = () => {
  return (
    <>
      <section className="m-auto pt-5">
        <div className="position-relative w-50 m-auto why-ascender-responsive-height">
          <div
            className="d-none d-lg-block ascender-light position-absolute"
            style={{
              height: "auto",
              width: "150%",
              borderRadius: "50%",
              zIndex: "-1",
              top: "-100%",
              left: "-200px",
            }}
          ></div>

          <h1 className="mb-3 text-bold text-center">Why Ascender?</h1>

          <img
            className="d-none d-lg-block"
            style={{ position: "absolute", left: "-360px", maxWidth: "100%" }}
            src={"/images/whyAscender1.png"}
            alt="Ascender"
          />

          <img
            className="d-none d-lg-block"
            style={{
              position: "absolute",
              right: 0,
              bottom: "110px",
              maxWidth: "100%",
            }}
            src={"/images/blue.png"}
            alt="Blue"
          />
          <img
            className="d-none d-lg-block"
            style={{
              position: "absolute",
              right: "-70px",
              bottom: "280px",
              maxWidth: "100%",
            }}
            src={"/images/red.png"}
            alt="Red"
          />
          <img
            className="d-none d-lg-block"
            style={{
              position: "absolute",
              right: "-180px",
              bottom: "350px",
              maxWidth: "100%",
            }}
            src={"/images/maroon.png"}
            alt="Maroon"
          />

          <p className="text-left" style={{ textAlign: "justify" }}>
            Ascender Marketing is your prime destination to make your events
            successful! We provide seamless and creative event management
            services by providing experiences where passion meets quality by
            carefully meeting your needs. At Ascender, we understand the
            importance of long-lasting impressions through impactful
            experiences.
            <br />
            <br />
            Our team of seasoned professionals stays dedicated to transforming
            your vision into a reality by working relentlessly and carefully
            handling all details to ensure a perfect result. Our events are
            custom-designed from conceptualization to implementation, serving a
            commitment to excellence and creativity.
            <br />
            <br />
            We prioritize your success by combining innovation with expertise,
            leveraging advanced technologies, and providing a comprehensive
            suite of services including event planning, logistics management,
            and engagement strategies. Explore your unfetched avenues today by
            trusting Ascender Marketing to help elevate your brand, captivate
            your audience, and be remembered!
          </p>
        </div>
      </section>
    </>
  );
};

export default WhyAscender;
