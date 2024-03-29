"use client";
import Layout from "@/components/layout/Layout";
import Footer1 from "@/components/layout/footer/Footer1";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

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
      <Layout headerStyle={2} breadcrumbTitle="Career">
        <div>
          <section className="career-section p_relative">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="content-box mr_110">
                    <div className="sec-title mb_50">
                      <span className="sub-title">Get Opportunities</span>
                      <h2>
                        Build Your Career with <br />
                        BizTech
                      </h2>
                      <p className="mt_40">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Donec felis suscipit mi urna nulla at tincidunt feugiat
                        vulputate. Ante facilisis face pellentesque quis egestas
                        metus, mauris dictum sollicitudin hendrerit quis in
                        magna.
                      </p>
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
                          <h3>Marketing Executive</h3>
                        </div>
                        <div
                          className={
                            isActive.key == 1
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="inner-box">
                            <p>
                              Sodales posuere facilisi metus elementum ipsum
                              egestas amet amet mattis commodo Nunc tempor amet
                              massa.
                            </p>
                            <h4>Duties and Responsibilities:</h4>
                            <p>
                              Scelerisque porttitor faucibus faucibus at diam in
                              cursus dictum enim egestas eget id odio morbi
                              rhoncus pellentesque quis enim.
                            </p>
                            <ul className="list-style-one clearfix">
                              <li>Holiday Trash & Recycling</li>
                              <li>Things To Do In Govarnex</li>
                              <li>Rent a Picnic Shelter</li>
                            </ul>
                            <h4>Qualifications:</h4>
                            <p>
                              Scelerisque porttitor faucibus faucibus at diam in
                              cursus dictum enim egestas eget id odio morbi
                              rhoncus pellentesque quis enim.
                            </p>
                            <ul className="list-style-one clearfix">
                              <li>Holiday Trash & Recycling</li>
                              <li>Things To Do In Govarnex</li>
                            </ul>
                            <div className="btn-box">
                              <Link href="/career" className="theme-btn-one">
                                Apply Now
                              </Link>
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
                          <h3>HR Manager</h3>
                        </div>
                        <div
                          className={
                            isActive.key == 2
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="inner-box">
                            <p>
                              Sodales posuere facilisi metus elementum ipsum
                              egestas amet amet mattis commodo Nunc tempor amet
                              massa.
                            </p>
                            <h4>Duties and Responsibilities:</h4>
                            <p>
                              Scelerisque porttitor faucibus faucibus at diam in
                              cursus dictum enim egestas eget id odio morbi
                              rhoncus pellentesque quis enim.
                            </p>
                            <ul className="list-style-one clearfix">
                              <li>Holiday Trash & Recycling</li>
                              <li>Things To Do In Govarnex</li>
                              <li>Rent a Picnic Shelter</li>
                            </ul>
                            <h4>Qualifications:</h4>
                            <p>
                              Scelerisque porttitor faucibus faucibus at diam in
                              cursus dictum enim egestas eget id odio morbi
                              rhoncus pellentesque quis enim.
                            </p>
                            <ul className="list-style-one clearfix">
                              <li>Holiday Trash & Recycling</li>
                              <li>Things To Do In Govarnex</li>
                            </ul>
                            <div className="btn-box">
                              <Link href="/career" className="theme-btn-one">
                                Apply Now
                              </Link>
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
                          <h3>Account Manager</h3>
                        </div>
                        <div
                          className={
                            isActive.key == 3
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="inner-box">
                            <p>
                              Sodales posuere facilisi metus elementum ipsum
                              egestas amet amet mattis commodo Nunc tempor amet
                              massa.
                            </p>
                            <h4>Duties and Responsibilities:</h4>
                            <p>
                              Scelerisque porttitor faucibus faucibus at diam in
                              cursus dictum enim egestas eget id odio morbi
                              rhoncus pellentesque quis enim.
                            </p>
                            <ul className="list-style-one clearfix">
                              <li>Holiday Trash & Recycling</li>
                              <li>Things To Do In Govarnex</li>
                              <li>Rent a Picnic Shelter</li>
                            </ul>
                            <h4>Qualifications:</h4>
                            <p>
                              Scelerisque porttitor faucibus faucibus at diam in
                              cursus dictum enim egestas eget id odio morbi
                              rhoncus pellentesque quis enim.
                            </p>
                            <ul className="list-style-one clearfix">
                              <li>Holiday Trash & Recycling</li>
                              <li>Things To Do In Govarnex</li>
                            </ul>
                            <div className="btn-box">
                              <Link href="/career" className="theme-btn-one">
                                Apply Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/*Accordion Block*/}
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 4 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(4)}
                        >
                          <div className="icon-box"></div>
                          <h3>Financial Advisor</h3>
                        </div>
                        <div
                          className={
                            isActive.key == 4
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="inner-box">
                            <p>
                              Sodales posuere facilisi metus elementum ipsum
                              egestas amet amet mattis commodo Nunc tempor amet
                              massa.
                            </p>
                            <h4>Duties and Responsibilities:</h4>
                            <p>
                              Scelerisque porttitor faucibus faucibus at diam in
                              cursus dictum enim egestas eget id odio morbi
                              rhoncus pellentesque quis enim.
                            </p>
                            <ul className="list-style-one clearfix">
                              <li>Holiday Trash & Recycling</li>
                              <li>Things To Do In Govarnex</li>
                              <li>Rent a Picnic Shelter</li>
                            </ul>
                            <h4>Qualifications:</h4>
                            <p>
                              Scelerisque porttitor faucibus faucibus at diam in
                              cursus dictum enim egestas eget id odio morbi
                              rhoncus pellentesque quis enim.
                            </p>
                            <ul className="list-style-one clearfix">
                              <li>Holiday Trash & Recycling</li>
                              <li>Things To Do In Govarnex</li>
                            </ul>
                            <div className="btn-box">
                              <Link href="/career" className="theme-btn-one">
                                Apply Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="career-sidebar ml_40">
                    <h3>Quick Contact</h3>
                    <div className="form-inner">
                      <form action="career.html" method="post">
                        <div className="form-group">
                          <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input type="text" name="phone" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="file"
                            name="cv"
                            placeholder="Upload CV"
                            required
                          />
                          <p style={{ color: "#6f42c1", fontSize: "12px" }}>
                            Please upload CV here
                          </p>
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="form-group message-btn">
                          <button type="submit" className="theme-btn-one">
                            Submit Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer1 />
      </Layout>
    </>
  );
}
