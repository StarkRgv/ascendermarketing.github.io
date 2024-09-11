import React from "react";

const Footer = () => {
  return (
    <section className="ascender-dark py-5 px-3">
      <h1 className="text-bold outlined text-center">TOGETHER WE EXCEL</h1>
      <div className="d-flex justify-content-between align-items-center">
        <div className="col-4 text-center">
          <img src={"/images/Ascender Logo_Black-01 3.png"} />
        </div>
        <div className="text-white">
          <h2>
            <span className="text-bold">Want to collaborate?</span>
            <br />
            Have queries?
          </h2>

          <p>
            Write to us at{" "}
            <a href="mailto:info@ascendermarketing.com">
              info@ascendermarketing.com
            </a>
            <br />
            For HR related queries email us on{" "}
            <a href="mailto:swati@ascendermarketing.com">
              swati@ascendermarketing.com
            </a>
          </p>
          <div className="row">
            <p className="text-bold">Follow Us</p>
            <div className="d-flex">
              <a
                target="_blank"
                href="https://www.instagram.com/ascender_marketing_events?igsh=NHhsd2t6YWxjenV1&utm_source=qr"
                rel="noreferrer"
              >
                <img
                  style={{ height: 30 }}
                  className="me-2"
                  src={"/images/Insta.png"}
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/ascender-marketing-solutions/mycompany/?viewAsMember=true"
                rel="noreferrer"
              >
                <img
                  style={{ height: 30 }}
                  className="me-2"
                  src={"/images/twitter.png"}
                />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/ascendermarketing"
                rel="noreferrer"
              >
                <img
                  style={{ height: 30 }}
                  className="me-2"
                  src={"/images/facebook.png"}
                />
              </a>
              {/* <a
                target="_blank"
                href="https://www.facebook.com/ascendermarketing"
                rel="noreferrer"
              >
                <img
                  style={{ height: 30 }}
                  className="me-2"
                  src={"/images/youtube.png"}
                />
              </a> */}
            </div>
          </div>
        </div>
        <div className="text-white">
          <h6 className="text-bold">Contact Us</h6>
          <h2 style={{ textShadow: "1px 1px 2px #fff" }}>
            Ascender Marketing Solutions Private Limited
          </h2>
          <p>
            Tower A, Paras Twin Towers, Golf Course Road, Sector 54, Gurugram,
            Haryana, 122011
          </p>
          <div className="d-flex align-items-center">
            <img
              style={{ height: 20 }}
              className="me-1"
              src={"/images/Phone.png"}
            />
            <span className="mx-2">
              <a
                className="text-white text-decoration-none"
                href="tel:7722078396"
              >
                7722078396
              </a>
              <span> / </span>
              <a
                className="text-white text-decoration-none"
                href="tel:9579740519"
              >
                9579740519
              </a>
            </span>
          </div>
          <div className="d-flex align-items-center mt-2">
            <img
              style={{ height: 20 }}
              className="me-1"
              src={"/images/Email.png"}
            />
            <a
              className="text-white text-decoration-none"
              href="mailto:info@ascendermarketing.com"
            >
              info@ascendermarketing.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
