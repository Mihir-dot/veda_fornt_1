'use client'
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [serviceDetails, setServiceDetails] = useState(null);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const serviceId = searchParams ? searchParams.get("id") : null;

  useEffect(() => {
  
    if (serviceId) {
      fetchServiceDetails();
    }

    fetchData();
  }, []);

  const fetchServiceDetails = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:5000/api/get/services/${serviceId}`);
      setServiceDetails(response.data);
    } catch (error) {
      console.error("Error fetching service details:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/get/allservicesname");
        console.log("response--",response)
        setServices(response.data);
    } catch (error) {
        console.error("Error fetching services:", error);
    }
};
  const handleServiceClick = (serviceId) => {
      window.location.href = `/service-details?id=${serviceId}`;
  };

  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
      {isLoading ? (
        <div className="loader-container">
        <div className="loader"></div>
      </div>
      
      ) : (
        <>
      <section className="page-title centred">
      <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}></div>
      <div className="auto-container">
          <div className="content-box">
              <h1>{serviceDetails ? serviceDetails.name : "Service Details"}</h1>
              <ul className="bread-crumb clearfix">
                  <li><Link href="/">Home</Link></li>
                  <li>{serviceDetails ? serviceDetails.name : "Service Details"}</li>
              </ul>
          </div>
      </div>
  </section>
    
      <div>
        <section className="service-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="service-sidebar mr_40">
                  <div className="sidebar-widget category-widget">
                    <h3 className="all-services">I am looking for</h3>
                    <ul className="category-list clearfix">
                    {services.map((service) => (
                        <li key={service._id}>
                            <a onClick={() => handleServiceClick(service._id)}>
                                {service.name}
                            </a>
                        </li>
                    ))}
                    </ul>
                  </div>
                
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="service-details-content">
                  <div className="content-one mb_90">
                  
                    <div className="text">
                      <h2>Tax Management</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
                        enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas.
                        Ut venenatis faucibus non sed faucibus mauris ultricies. Cras varius
                        proin amet vehicula magna. Ultricies gravida vel volutpat sed. Platea
                        sed fames at egestas amet feugiat laoreet sed potenti integer. Viverra
                        at maecenas convallis condimentum egestas nunc sagittis eu. Semper
                        faucibus facilisis vitae sollicitudin.
                      </p>
                      <p>
                        Fringilla mauris magna sit elementum elit. Facilisi lacus, pharetra
                        quam eu urna amet aenean. Nunc mattis vitae tellus bibendum a eu,
                        nunc. Consequat commodo ac cursus in donec orci tempus. Massa sed sit
                        faucibus neque habitant consequat.
                      </p>
                    </div>
                    <figure className="image-box">
                    <img src="assets/images/service/service-8.jpg" alt="" />
                  </figure>
                  </div>
                  <div className="content-two mb_90">
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12 text-column">
                        <div className="text-box">
                          <h3>Overview</h3>
                          <p>
                            Dolor felis sapien sit egestas venenatis faucibus non sed
                            faucibus mauris ultricies. Cras varius proin amet vehicula magna.
                            Ultricies gravida vel volutpat sed platea sed fames at egestas
                            amet feugiat laoreet sed potenti integer.
                          </p>
                          <ul className="list-style-one clearfix">
                            <li>Holiday Trash & Recycling</li>
                            <li>Things To Do In Govarnex</li>
                            <li>Rent a Picnic Shelter</li>
                          </ul>
                        </div>
                      </div>
                    
                    </div>
                  </div>
                  <div className="content-three mb_85">
                    <div className="text mb_100">
                      <h3>Our Solutions</h3>
                      <p>
                        Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                        venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                        amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                        at egestas amet feugiat laoreet sed potenti integer.
                      </p>
                    </div>
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-8"></i>
                          </div>
                          <h3>Tax Strategy</h3>
                          <p>Cras varius proin amet vehicula magna tricies gravida vel volutpat.</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="icon-13"></i>
                          </div>
                          <h3>Investment Policy</h3>
                          <p>Cras varius proin amet vehicula magna tricies gravida vel volutpat.</p>
                        </div>
                      </div>
                    </div>
                    <div className="text mt_50">
                      <p>
                        Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                        venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                        amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                        at egestas amet feugiat laoreet sed potenti integer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </>
      )}
  </Layout>
    </>
  );
}
