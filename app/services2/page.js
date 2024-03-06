"use client";
import Layout from "@/components/layout/Layout";
import TestimonialSlider5 from "@/components/slider/TestimonialSlider5";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [services, setServices] = useState([]);
  console.log("services---", services);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/get/allservicesname"
        );
        console.log("response--", response);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const handleServiceClick = (serviceId) => {
    window.location.href = `/service-details?id=${serviceId}`;
  };

  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our services">
        <div>
          {/* service-section */}
          <section className="service-section p_relative centred sec-pad">
            <div className="auto-container">
              <div className="sec-title mb_70">
                <span className="sub-title">What We Do</span>
                <h2>
                  Provide the Best Consulting <br />
                  in This Industry
                </h2>
              </div>
              <div className="row clearfix">
                {services.map((service, index) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 service-block"
                    key={index}
                  >
                    <div
                      className="service-block-one wow fadeInLeft animated"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="inner-box">

                        <div className="static-content">
                          {/* Update your content here using the 'service' data */}
                          
                          <div
                            className="shape"
                            style={{
                              backgroundImage:
                                "url(assets/images/shape/shape-4.png)",
                            }}
                          ></div>
                          <div className="icon-box">
                            <i className="icon-7"></i>
                          </div>
                          <h3>
                            <Link href={`/service-details?id=${service._id}`}>
                              {service.sortName}
                            </Link>
                          </h3>
                          <p>
                            Amet minim mollit no duis sit enim aliqua dolor do
                            amet officia.
                          </p>
                        </div>
                        <div className="overlay-content">
                          <div
                            className="shape"
                            style={{
                              backgroundImage:
                                "url(assets/images/shape/shape-5.png)",
                            }}
                          ></div>
                          <h3>
                            <Link href={`/service-details?id=${service._id}`}>
                              {service.sortName}
                            </Link>
                          </h3>
                          <p>
                            Amet minim mollit no duis sit enim aliqua dolor do
                            amet officia.
                          </p>
                          <div className="btn-box">
                            <Link
                              href={`/service-details?id=${service._id}`}
                              className="theme-btn-one"
                            >
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* service-section end */}

          {/* testimonial-section */}
          <section className="testimonial-section p_relative bg-color-1">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(assets/images/shape/shape-16.png)",
              }}
            ></div>
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 title-column">
                  <div className="sec-title">
                    <span className="sub-title">Testimonials</span>
                    <h2>What They’re Say About Us?</h2>
                    <p>
                      Amet dui scelerisque vel habitant eget tincidunt facilisis
                      pretium. Porttitor mi nisi, non vitae tempus.
                    </p>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                  <div className="content-box">
                    {/*Theme Carousel*/}
                    <TestimonialSlider1 />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* testimonial-section end */}

          {/* team-section */}
          <section className="team-section sec-pad">
            <div className="auto-container">
              <div className="sec-title mb_50 centred">
                <span className="sub-title">Exclusive Team</span>
                <h2>
                  We Have A Professional Team <br />
                  Member
                </h2>
              </div>
              <div className="row clearfix">
                <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                  <div
                    className="team-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img src="assets/images/team/team-1.jpg" alt="" />
                        </figure>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link href="/team-details">Wade Warren</Link>
                        </h3>
                        <span className="designation">Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                  <div
                    className="team-block-one wow fadeInUp animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img src="assets/images/team/team-2.jpg" alt="" />
                        </figure>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link href="/team-details">Guy Hawkins</Link>
                        </h3>
                        <span className="designation">Consultant</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                  <div
                    className="team-block-one wow fadeInUp animated"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img src="assets/images/team/team-3.jpg" alt="" />
                        </figure>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link href="/team-details">Bessie Cooper</Link>
                        </h3>
                        <span className="designation">Advisor</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                  <div
                    className="team-block-one wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <img src="assets/images/team/team-4.jpg" alt="" />
                        </figure>
                        <ul className="social-links clearfix">
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="/services2">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="lower-content">
                        <h3>
                          <Link href="/team-details">Devon Lane</Link>
                        </h3>
                        <span className="designation">Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* team-section end */}
        </div>
      </Layout>
    </>
  );
}
