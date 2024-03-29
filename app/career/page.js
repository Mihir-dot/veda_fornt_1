"use client";
import { API_ENDPOINTS, getAPIEndpoint } from "@/components/helper/apiPath";
import Layout from "@/components/layout/Layout";
import Footer1 from "@/components/layout/footer/Footer1";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });
  const [isFileInputVisible, setIsFileInputVisible] = useState(false);

  const handleApplyNowClick = () => {
    setIsFileInputVisible(true);
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
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Create a new FormData object
    const formData = new FormData();
    formData.append("name", event.target.name?.value);
    formData.append("email", event.target.email?.value);
    formData.append("phone", event.target.phone?.value);
    formData.append("subject", event.target.subject?.value);
    formData.append("message", event.target.message?.value);
    formData.append("file", event.target.file?.files[0]); // Append the selected file
    try {
      // Make a POST request to the API endpoint with form data
      const response = await axios.post(
        getAPIEndpoint(API_ENDPOINTS.ADD_CONTACT),
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Ensure proper header for file upload
          },
        }
      );
      toast.success("Application submitted! Reviewing your CV now. Expect to hear from us soon.");
      // Optionally, you can show a success message or redirect the user after successful submission
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error, show an error message to the user, etc.
    }
  };

  const applySubmit = async () => {
    // Create a new FormData object
    const formData = new FormData();

    // Find the file input by its name attribute
    const fileInput = document.querySelector('input[name="file"]');
    console.log("fileInput:", fileInput);

    // Check if a file is selected
    if (fileInput.files.length > 0) {
      // Append the selected file to the FormData object
      formData.append("file", fileInput.files[0]);

      try {
        // Make a POST request to the API endpoint with form data
        const response = await axios.post(
          getAPIEndpoint(API_ENDPOINTS.ADD_CONTACT),
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // Ensure proper header for file upload
            },
          }
        );
        if (response) {

          toast.success("Application submitted! Reviewing your CV now. Expect to hear from us soon.");
        }
        // Optionally, you can show a success message or redirect the user after successful submission
      } catch (error) {
        console.error("Error uploading file:", error);
        // Handle error, show an error message to the user, etc.
      }
    } else {
      console.log("No file selected.");
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
                            <div className="form-group">
                              <input
                                type="file"
                                name="file"
                                placeholder="Upload CV"
                                required
                                style={{
                                  border: "1px solid #6f42c1",
                                  borderRadius: '5px', // Adding border style
                                  padding: "1px", // Adding padding for better appearance
                                }}
                              />
                              <p style={{ color: "#6f42c1", fontSize: "12px" }}>
                                Please upload CV here & click on apply button
                              </p>
                            </div>
                            <div
                              className="btn-box theme-btn-one"
                              onClick={applySubmit}
                            >
                              Apply Now
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
                      <form
                        action="career.html"
                        method="post"
                        onSubmit={handleSubmit}
                      >
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
                            name="file"
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
