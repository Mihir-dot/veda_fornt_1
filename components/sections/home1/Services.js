"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(1);

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
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
     { /*<section
        className="service-section p_relative centred bg-color-1 sec-pad"
        style={{ marginTop: "-5%" }}
      >
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}
        ></div>
        <div className="auto-container">
          <div className="sec-title mb_70" style={{ marginTop: "-5%" }}>
            <span className="sub-title">Our Services</span>
            <h2>
              Provide the Best Consulting <br />
              in This Industry
            </h2>
          </div>
          <div className="row clearfix">
            {services.slice(-3).map((service, index) => (
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
                      {index !== 1 && (
                        <div
                          className="shape"
                          style={{
                            backgroundImage:
                              "url(assets/images/shape/shape-4.png)",
                          }}
                        ></div>
                      )}
                      <div className="icon-box">
                        <i className="icon-7"></i>
                      </div>
                      <h3>
                        <a onClick={() => handleServiceClick(service._id)}>
                          {service.sortName}
                        </a>
                      </h3>
                      <p>
                        Amet minim mollit no duis sit enim aliqua dolor do amet
                        officia.
                      </p>
                    </div>
                    <div className="overlay-content">
                      {index !== 1 && (
                        <div
                          className="shape"
                          style={{
                            backgroundImage:
                              "url(assets/images/shape/shape-5.png)",
                          }}
                        ></div>
                      )}
                      <h3>
                        {" "}
                        <a onClick={() => handleServiceClick(service._id)}>
                          {service.sortName}
                        </a>
                      </h3>
                      <p>
                        Amet minim mollit no duis sit enim aliqua dolor do amet
                        officia.
                      </p>
                      <div className="btn-box">
                        <a
                          onClick={() => handleServiceClick(service._id)}
                          className="theme-btn-one"
                        >
                          Read More
                        </a>
                        <Link
                          href={`/service-details?id=${service._id}`}
                        ></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="more-btn mt_60">
            <Link href="/services2" className="theme-btn-one">
              More Services
            </Link>
          </div>
        </div>
                        </section>*/}
    </>
  );
}
