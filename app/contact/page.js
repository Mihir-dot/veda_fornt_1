"use client";
import { API_ENDPOINTS, IMAGE_BASE_URL, getAPIEndpoint, getImageSource } from "@/components/helper/apiPath";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clear the timeout if the component unmounts before the asynchronous operation completes
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  useEffect(() => {
    const fetchAllContacts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          getAPIEndpoint(API_ENDPOINTS.GET_CONTACTS_DETAILS)
        );
        setContactData(response.data); // Update state with fetched contact data
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllContacts(); // Call the fetchAllContacts function
  }, []);
  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        {isLoading ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            {contactData.map((contact) => (
              
              <> 
                <section className="page-title centred">
                  <div
                    className="bg-layer"
                    style={{
                      backgroundImage: `url(${getImageSource(contact.path)})`,
                    }}
                  ></div> 
                  <div className="auto-container">
                    <div className="content-box">
                      <h1>Get in touch</h1>
                      <ul className="bread-crumb clearfix">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>Get in touch</li>
                      </ul>
                    </div>
                  </div>
                </section>
                <div>
                  {/* Feature Section */}
                  <section className="feature-style-three p_relative centred">
                    <div
                      className="pattern-layer"
                      style={{
                        backgroundImage:
                          "url(/assets/images/shape/shape-31.png)",
                      }}
                    ></div>
                    <div className="auto-container">
                      <div className="sec-title mb_100">
                        <span className="sub-title">Contact Info</span>
                        <h2>We’d Love To Help You</h2>
                      </div>

                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                          <div
                            className="feature-block-three wow fadeInUp animated"
                            data-wow-delay="00ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="inner-box">
                              <div
                                className="block-shape"
                                style={{
                                  backgroundImage:
                                    "url(assets/images/shape/shape-32.png)",
                                }}
                              ></div>
                              <div className="icon-box">
                                <i className="icon-48"></i>
                              </div>
                              <h3>Our Location</h3>
                              <p>
                               {contact.location}
                               
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                          <div
                            className="feature-block-three wow fadeInUp animated"
                            data-wow-delay="300ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="inner-box">
                              <div className="icon-box">
                                <i className="icon-49"></i>
                              </div>
                              <h3>Email Address</h3>
                              <p>
                                <Link href="mailto:contact@example.com">
                                 {contact.email}
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 feature-block">
                          <div
                            className="feature-block-three wow fadeInUp animated"
                            data-wow-delay="600ms"
                            data-wow-duration="1500ms"
                          >
                            <div className="inner-box">
                              <div
                                className="block-shape"
                                style={{
                                  backgroundImage:
                                    "url(assets/images/shape/shape-33.png)",
                                }}
                              ></div>
                              <div className="icon-box">
                                <i className="icon-50"></i>
                              </div>
                              <h3>Phone Number</h3>
                              <p>
                                Emergency Cases <br />
                                <Link href="tel:2085550112">
                                  {contact.phone}
                                </Link>{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Feature Section End */}

                  {/* Contact Form Section */}
                  <section className="contact-style-two sec-pad">
                    <div className="auto-container">
                      <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 content-column">
                          <div className="content-box mr_70">
                            <div className="sec-title mb_35">
                              <span className="sub-title">Message</span>
                              <h2>Feel Free to Contact with us</h2>
                              <p className="mt_20">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit et aenean orci egestas arcu
                                interdum nisl magna.
                              </p>
                            </div>
                            <ul className="social-links clearfix">
                              <li>
                                <Link href="/contact">
                                  <i className="fab fa-facebook-f"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/contact">
                                  <i className="fab fa-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/contact">
                                  <i className="fab fa-pinterest-p"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="/contact">
                                  <i className="fab fa-instagram"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                          <div className="form-inner">
                            <form
                              method="post"
                              action="sendemail.php"
                              id="contact-form"
                              className="default-form"
                            >
                              <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="Your Name"
                                    required
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    required
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="phone"
                                    required
                                    placeholder="Phone"
                                  />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Subject"
                                  />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <textarea
                                    name="message"
                                    placeholder="Type message"
                                  ></textarea>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                  <button
                                    className="theme-btn theme-btn-one"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    Send Message
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* Contact Form Section End */}
                </div>
              </>
            ))}
          </>
        )}
      </Layout>
    </>
  );
}
