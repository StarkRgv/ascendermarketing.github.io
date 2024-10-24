import React from "react";

const Footer = () => {
  return (
    <section id="contact-us" className="ascender-dark py-5 px-3">
      <h1 className="text-bold outlined text-center">TOGETHER WE EXCEL</h1>
      <div className="container">
        <div className="row justify-content-center justify-content-md-between align-items-center">
          {/* Logo Section - Only visible on larger screens */}
          <div className="col-lg-3 d-none d-lg-block text-center m-3">
            <img
              className="img-fluid"
              src={"/images/Ascender Logo_Black-01 3.png"}
              alt="Ascender Logo"
            />
          </div>

          {/* Contact Info Section */}
          <div className="col-lg-5 col-md-6 col-12 text-white text-center m-3">
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
              For HR related queries, email us on{" "}
              <a href="mailto:swati@ascendermarketing.com">
                swati@ascendermarketing.com
              </a>
            </p>

            {/* Social Media Icons */}
            <div className="mt-3">
              <p className="text-bold">Follow Us</p>
              <div className="d-flex justify-content-center">
                <a
                  target="_blank"
                  href="https://www.instagram.com/ascender_marketing_events?igsh=NHhsd2t6YWxjenV1&utm_source=qr"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: 30 }}
                    className="me-2"
                    src={"/images/Insta.png"}
                    alt="Instagram"
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
                    alt="Twitter"
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
                    alt="Facebook"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://youtube.com/@ascendermarketingsolutions?si=1IH0WYHJxN4HAT1f"
                  rel="noreferrer"
                >
                  <img
                    style={{ height: 30 }}
                    className="me-2"
                    src={"/images/youtube.png"}
                    alt="YouTube"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="col-lg-3 col-md-6 col-12 text-white text-center m-3">
            <h2 className="text-bold" style={{ color: "#e56039" }}>
              Contact Us
            </h2>
            <h2 style={{ textShadow: "1px 1px 2px #fff" }}>
              Ascender Marketing Solutions Private Limited
            </h2>
            <p>
              Tower A, Paras Twin Towers, Golf Course Road, Sector 54, Gurugram,
              Haryana, 122011
            </p>
            <div className="d-flex align-items-center justify-content-center">
              <div>
                {/* Phone Numbers */}
                <div className="d-flex align-items-center mb-2">
                  <img
                    style={{ height: 20 }}
                    className="me-1"
                    src={"/images/Phone.png"}
                    alt="Phone"
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

                {/* Email */}
                <div className="d-flex align-items-center">
                  <img
                    style={{ height: 20 }}
                    className="me-1"
                    src={"/images/Email.png"}
                    alt="Email"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
