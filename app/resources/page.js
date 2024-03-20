"use client"
import { API_ENDPOINTS, getAPIEndpoint, getImageSource } from "@/components/helper/apiPath";
import Layout from "@/components/layout/Layout";
import Footer1 from "@/components/layout/footer/Footer1";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [resources, setResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);

  //   // Clear the timeout if the component unmounts before the asynchronous operation completes
  //   return () => clearTimeout(timeoutId);
  // }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

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

  return (
    <>
      <Layout headerStyle={2}>
        {resources.map((resources, index) => (
          <>
            <section className="page-title centred">
              <div
                className="bg-layer"
                style={{
                  backgroundImage: `url(${getImageSource(resources.pictureLocation)})`,
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
                            <p>
                              {resources.descriptionOne}
                            </p>
                            <h2>{resources.titleTwo}</h2>
                            <p>
                              {resources.descriptionTwo}
                            </p>
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
                                  >
                                    Post Comment
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
