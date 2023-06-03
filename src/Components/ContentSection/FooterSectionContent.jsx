import React from "react";
import Button from "../Button/Button";

const FooterSectionContent = () => {
  return (
    <div className="mt-5 p-5 second-slide-main">
      <div className="row d-flex justify-content-evenly">
        <div className="col-lg-4 col-md-6">
          <div className="card card-body border-radius card-one text-white p-5 shadow">
            <h1>The bright side of kidcare</h1>
            <p className="h4">
              Get reliable on-demand childcare from vetted sitters in your
              community.
            </p>
            <div className="mt-4">
              <Button
                href={
                  "https://app.withotter.com/sign-up/welcome?device-id=dbxEPTgvK5uD8-EhnX_3jO"
                }
                buttonText={"Get Started"}
                className={"second-slide-main"}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-6 shadow border-radius">
          <div className="row">
            <div className="col-lg-8 col-md-9 py-5">
              <div className="footer-section-social d-flex justify-content-evenly">
                <div className="footer-section-links">
                  <a
                    href="https://withotter.com/parents"
                    className="text-decoration-none second-slide-main"
                  >
                    Parent
                  </a>
                  <a
                    href="https://withotter.com/sitters"
                    className="text-decoration-none second-slide-main"
                  >
                    Sitters
                  </a>
                  <a
                    href="https://withotter.com/trust-safety"
                    className="text-decoration-none second-slide-main"
                  >
                    Trust & Safety
                  </a>
                </div>
                <div className="footer-section-links">
                  <a
                    href="https://withotter.com/faq"
                    className="text-decoration-none second-slide-main"
                  >
                    FAQ
                  </a>
                  <a
                    href="https://withotter.com/careers"
                    className="text-decoration-none second-slide-main"
                  >
                    Careers
                  </a>
                  <a
                    href="https://withotter.com/blog"
                    className="text-decoration-none second-slide-main"
                  >
                    Blog
                  </a>
                  <a
                    href="https://withotter.com/contact"
                    className="text-decoration-none second-slide-main"
                  >
                    Contact
                  </a>
                </div>
                <div className="footer-section-links">
                  <a
                    href="https://www.instagram.com/otterchildcare/"
                    className="text-decoration-none second-slide-main"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/withotter/"
                    className="text-decoration-none second-slide-main"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.facebook.com/withotter/"
                    className="text-decoration-none second-slide-main"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.linkedin.com/company/withotter"
                    className="text-decoration-none second-slide-main"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="text-end">
                <div className="col-2 text-end my-5">
                  <a
                    href="https://withotter.com/"
                    className="logo text-decoration-none p-3"
                  >
                    otter
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="align-item-baseline">
            <div className="row footer-section mt-auto">
              <div className="col-12 footer-bottom-text d-flex justify-content-between align-baseline mt-5 pt-5">
                <div className="terms-privacy mx-4 fw-bold">
                  <a
                    href="https://withotter.com/terms-of-use"
                    className="text-decoration-none mx-2"
                    style={{
                      color: "var(--text-color)",
                      backgroundColor: "var(--background-color)",
                    }}
                  >
                    Terms and Conditions
                  </a>
                  <a
                    href="https://withotter.com/privacy-policy"
                    className="text-decoration-none mx-2"
                    style={{ color: "var(--text-color)" }}
                  >
                    Privacy Policy
                  </a>
                </div>
                <div className="col-lg-4 col-md-3">
                  <p>© 2023 With Otter Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSectionContent;
