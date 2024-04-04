"use client";
import {
  API_ENDPOINTS,
  getAPIEndpoint,
  getImageSource,
} from "@/components/helper/apiPath";
import Layout from "@/components/layout/Layout";
import Footer1 from "@/components/layout/footer/Footer1";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  FIRST_MESSAGE,
  SECOND_MESSAGE,
  Toastify,
} from "@/components/helper/toastMessage";
export default function Home() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          getAPIEndpoint(API_ENDPOINTS.GET_RESOURCES_DATA)
        );
        const resourcesData = response.data;
        setResources(resourcesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = {
      name: event.target.name?.value,
      email: event.target.email?.value,
      message: event.target.message?.value,
    };
    setLoading(true);
    try {
      // Make a POST request to the API endpoint with form data
      const response = await axios.post(
        getAPIEndpoint(API_ENDPOINTS.ADD_CONTACT),
        formData
      );
      if (response.data) {
        Toastify({
          message: {
            firstLine: FIRST_MESSAGE,
            secondLine: SECOND_MESSAGE,
          },
        });
        event.target.reset();
        // Swal.fire({
        //   icon: 'success',
        //   html: '<div style="text-align: center; font-family:Calibri; font-size: 20px"><strong>Thank you for reaching out to us!</strong><br/>We\'ll get back to you soon</div>',
        // });
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Layout headerStyle={2}>
        {resources.map((resources, index) => (
          <>
            <section className="page-title centred">
              <div
                className="bg-layer"
                style={{
                  backgroundImage: `url(${getImageSource(
                    resources.pictureLocation
                  )})`,
                }}
              ></div>
              <div className="auto-container">
                <div className="content-box">
                  <h1>Resources</h1>
                  <ul className="bread-crumb clearfix">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Resources</li>
                  </ul>
                </div>
              </div>
            </section>
            {/* sidebar-page-container */}

            <section className="sidebar-page-container pt_150 pb_150">
              <div className="auto-container">
                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12 col-sm-12 sidebar-side">
                    <div className="blog-details-content">
                      <div className="news-block-one">
                        <div className="inner-box">
                          <div
                            className="lower-content"
                            style={{ marginTop: "-10%" }}
                          >
                            <h2>{resources.titleOne}</h2>
                            <p>{resources.descriptionOne}</p>
                            <h2>{resources.titleTwo}</h2>
                            <p>{resources.descriptionTwo}</p>
                          </div>
                        </div>
                      </div>
                      <div className="comment-form-area">
                        <h3>Leave A Comments</h3>
                        <div className="form-inner">
                          <form
                            action="blog-detailsl"
                            method="post"
                            className="default-form"
                            onSubmit={handleSubmit}
                          >
                            <div className="row clearfix">
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Your Name"
                                />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="Your email"
                                />
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <textarea
                                  name="message"
                                  placeholder="Type message"
                                ></textarea>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <div className="message-btn">
                                  <button
                                    type="submit"
                                    className="theme-btn-one"
                                    disabled={loading} // Disable the button when loading is true
                                  >
                                    {loading ? (
                                      <>
                                        <div
                                          className="spinner-border spinner-border-sm  text-light"
                                          role="status"
                                        >
                                          <span className="visually-hidden">
                                            Loading...
                                          </span>
                                        </div>
                                        <span className="ms-2">Loading...</span>
                                      </>
                                    ) : (
                                      "Post Comment"
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* sidebar-page-container end */}
            <Footer1 />
          </>
        ))}
      </Layout>
    </>
  );
}
