'use client';
import { useEffect, useState } from "react";
import { API_ENDPOINTS, getAPIEndpoint } from "@/components/helper/apiPath";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import Link from 'next/link';

export default function Home() {
  const [isActive, setIsActive] = useState(0); // Initialize with index 0
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await axios.get(
          getAPIEndpoint(API_ENDPOINTS.GET_FAQ_DATA)
        );
        const faqData = response.data;
        setFaq(faqData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  const handleToggle = (key) => {
    setIsActive(isActive === key ? null : key);
  };

  return (
    <Layout headerStyle={2} footerStyle={1}>
      <div>
      <section className="page-title centred">
      <div
          className="bg-layer"
          style={{
              backgroundImage: `url(assets/images/background/page-title.jpg)`,
          }}
      ></div>
      <div className="auto-container">
          <div className="content-box">
              <h1>FAQs</h1>
              <ul className="bread-crumb clearfix">
                  <li>
                      <Link href="/">Home</Link>
                  </li>
                  <li>FAQs</li>
              </ul>
          </div>
      </div>
  </section>
        <section className="faq-page-section p_relative sec-pad">
          <div className="auto-container">
            <div className="sec-title mb_50 centred">
              <span className="sub-title">Frequently Asked Questions</span>
              <h2>How Can We Help You?</h2>
            </div>
            <div className="row clearfix">
              {faq.map((faqItem, index) => (
                <div
                  className="col-lg-12 col-md-12 col-sm-12 content-column"
                  key={index}
                >
                  <ul className="accordion-box mt-3">
                    <li className="accordion block">
                      <div
                        className={
                          isActive === index ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(index)}
                      >
                        <div className="icon-box"></div>
                        <h3>{faqItem.question}</h3>
                      </div>
                      <div
                        className={
                          isActive === index
                            ? "acc-content current"
                            : "acc-content"
                        }
                      
                      >
                        <div className="content">
                          <div className="text">{faqItem.answer}</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="contact-section sec-pad p_relative centred bg-color-1">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-40.png)" }}
          ></div>
          <div className="auto-container">
            <div className="sec-title mb_50">
              <span className="sub-title">Contact</span>
              <h2>
                Do You Have Any <br />
                Questions?
              </h2>
            </div>
            <div className="form-inner">
              <form action="faq.html" method="post">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea name="message" placeholder="Message"></textarea>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <div className="message-btn">
                      <button type="submit" className="theme-btn-one">
                        Send Request
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
