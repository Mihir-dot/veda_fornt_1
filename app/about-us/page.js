"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import TestimonialSlider0 from "@/components/slider/TestimonialSlider0";
import AwardSlider1 from "@/components/slider/AwardSlider1";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
import { API_ENDPOINTS, getAPIEndpoint } from "@/components/helper/apiPath";
import { fetchServiceName } from "@/components/helper/serviceNameCommonAPI";
import axios from "axios";
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });
  const [serviceDetails, setServiceDetails] = useState(null);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const serviceId = searchParams ? searchParams.get("id") : null;

  useEffect(() => {
  
    if (serviceId) {
      fetchServiceDetails();
    }
    const fetchDataFromAPI = async () => {
      try {
        const data = await fetchServiceName();
        console.log("data--------",data)
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  const fetchServiceDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${getAPIEndpoint(API_ENDPOINTS.GET_SERVICE_BY_ID)}/${serviceId}`);
      setServiceDetails(response.data);
    } catch (error) {
      console.error("Error fetching service details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleServiceClick = (serviceId) => {
      window.location.href = `/service-details?id=${serviceId}`;
  };

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
      <section className="page-title centred">
              <div
                className="bg-layer"
                style={{
                  backgroundImage:
                    "url(assets/images/background/page-title.jpg)",
                }}
              ></div>
              <div className="auto-container">
                <div className="content-box">
                  <h1>What we do</h1>
                  <ul className="bread-crumb clearfix">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>What we do</li>
                  </ul>
                </div>
              </div>
            </section>
        {/* service-style-two */}
        <section className="service-style-two p_relative bg-color-1">
          <div className="auto-container">
            <div className="sec-title centred mb_50">
              <span className="sub-title">What We Do</span>
              <h2>
                Provide the Best Consulting <br />
                in This Industry
              </h2>
              <p className="centred">We offer a huge range of services we like to call choices. Sodales posuere facilisi metus elementum ipsum egestas<br/> amet amet mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum. </p>
            </div>
           
            <div className="row clearfix">
            {
              services.map((service,index)=>(
                <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                <div
                  className="service-block-two wow fadeInUp animated"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="assets/images/service/service-1.jpg" alt="" />
                    </figure>
                    <div className="lower-content">
                      <div className="inner">
                        <div className="icon-box">
                          <i className="icon-7"></i>
                        </div>
                        <h3>
                          <Link href="/strategy-planning">
                            {service.sortName}
                          </Link>
                        </h3>
                        <p>
                         {service.name}
                        </p>
                        <div className="btn-box">
                        <li key={service._id} className="theme-btn-one">
                            <a onClick={() => handleServiceClick(service._id)}>
                            Read More
                            </a>
                        </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
              
            </div>
          </div>
        </section>
        {/* service-style-two end */}


        {/* chooseus-style-two */}
        <section className="chooseus-style-two sec-pad">
          <div
            className="bg-layer parallax-bg"
            data-parallax='{"y": 100}'
            style={{
              backgroundImage:
                "url(assets/images/background/about-chooseus.jpg)",
            }}
          ></div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-xl-6 col-lg-12 offset-xl-6 content-column">
                <div className="content_block_six">
                  <div className="content-box p_relative ml_30">
                    <div className="sec-title mb_50">
                      <span className="sub-title">Why Choose BizTech</span>
                      <h2>Reason For Choosing Our Consultancy</h2>
                    </div>
                    <ul className="accordion-box">
                      {/*Accordion Block*/}
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 1 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(1)}
                        >
                          <div className="icon-box"></div>
                          <h3>Quick Response</h3>
                        </div>
                        <div
                          className={
                            isActive.key == 1
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              Sodales posuere facilisi metus elementum ipsum
                              egestas amet amet mattis commodo Nunc tempor amet
                              massa diam mauris Risus sodales interdum.
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Accordion Block*/}
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 2 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(2)}
                        >
                          <div className="icon-box"></div>
                          <h3>Experience Consultant</h3>
                        </div>
                        <div
                          className={
                            isActive.key == 2
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              Sodales posuere facilisi metus elementum ipsum
                              egestas amet amet mattis commodo Nunc tempor amet
                              massa diam mauris Risus sodales interdum.
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Accordion Block*/}
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 3 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(3)}
                        >
                          <div className="icon-box"></div>
                          <h3>Flexible Payment</h3>
                        </div>
                        <div
                          className={
                            isActive.key == 3
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              Sodales posuere facilisi metus elementum ipsum
                              egestas amet amet mattis commodo Nunc tempor amet
                              massa diam mauris Risus sodales interdum.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                      <div
                        className={
                          isActive.key == 4 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(4)}
                      >
                        <div className="icon-box"></div>
                        <h3>Flexible Payment</h3>
                      </div>
                      <div
                        className={
                          isActive.key == 4
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            Sodales posuere facilisi metus elementum ipsum
                            egestas amet amet mattis commodo Nunc tempor amet
                            massa diam mauris Risus sodales interdum.
                            Sodales posuere facilisi metus elementum ipsum
                            egestas amet amet mattis commodo Nunc tempor amet
                            massa diam mauris Risus sodales interdum.
                          </div>
                        </div>
                      </div>
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* chooseus-style-two end */}

        {/* testimonial-style-two */}
        <section className="testimonial-style-two p_relative">
          <div className="auto-container">
            <div className="sec-title mb_50 centred">
              <span className="sub-title">Testimonials</span>
              <h2>
                What They’re Say <br />
                About Us?
              </h2>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                {/*Theme Carousel*/}
                <TestimonialSlider0 />
              </div>
            </div>
          </div>
        </section>
        {/* testimonial-style-two end */}

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}
