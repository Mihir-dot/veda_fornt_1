"use client";
import { getImageSource } from "@/components/helper/apiPath";
import { fetchServiceName } from "@/components/helper/serviceNameCommonAPI";
import Footer1 from "@/components/layout/footer/Footer1";
import { useEffect, useState } from "react";

export default function News() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const data = await fetchServiceName();
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  const handleServiceClick = (serviceId) => {
    window.location.href = `/service-details?id=${serviceId}`;
  };

  // Filter the last three services
  const lastThreeServices = services.slice(-3);

  return (
    <>
      <section className="news-section sec-pad" style={{ marginTop: "-9%" }}>
        <>
          <div className="auto-container">
            <div className="sec-title centred mb_50">
              <span className="sub-title">Our Services</span>
              <h2>
                Get More Update For <br />
                Services
              </h2>
            </div>
            <div className="row clearfix">
              {lastThreeServices.map((service) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 news-block"
                  key={service._id}
                >
                  <div
                    className="news-block-one wow fadeInUp animated"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box" style={{cursor:"pointer"}}>
                      <div className="image-box" >
                        <figure className="image">
                          <a onClick={() => handleServiceClick(service._id)}>
                            <img
                              src={getImageSource(service.imageLocation)}
                              alt="Article 1"
                            />{" "}
                          </a>
                        </figure>
                        {/* <h2>15<span>APRIL</span></h2> */}
                      </div>
                      <div className="lower-content">
                        <h3>
                          <a onClick={() => handleServiceClick(service._id)}>
                            {service.sortName}
                          </a>
                        </h3>
                        <p>{service.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </section>
      <Footer1/>
    </>
  );
}
