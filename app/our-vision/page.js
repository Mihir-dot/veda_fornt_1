'use client'
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {


  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
   
        <>
      <section className="page-title centred">
      <div className="bg-layer" style={{ backgroundImage: `url(assets/images/shape/shape-40.png)` }}></div>
      <div className="auto-container">
          <div className="content-box">
              <h1>Service Details</h1>
              <ul className="bread-crumb clearfix">
                  <li><Link href="/">Home</Link></li>
                  <li>Service Details</li>
              </ul>
          </div>
      </div>
  </section>
    
      <div>
        <section className="service-details p_relative">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="service-details-content">
                  <div className="content-one mb_90">
                    <div className="text">
                      <h2>main heading</h2>
                      <p>
                      Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                        venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                        amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                        at egestas amet feugiat laoreet sed potenti integer.Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                        venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                        amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                        at egestas amet feugiat laoreet sed potenti integer.Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                        venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                        amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                        at egestas amet feugiat laoreet sed potenti integer.Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                        venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                        amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                        at egestas amet feugiat laoreet sed potenti integer.
                      </p>
                    </div>
                    <figure className="image-box">
                    <img src="assets/images/service/service-1.jpg" alt="" />
                  </figure>
                  </div>
                  <div className="content-two mb_90">
                    <div className="row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12 text-column">
                        <div className="text-box">
                          <h3>Second Title</h3>
                          <p>
                          Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                        venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                        amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                        at egestas amet feugiat laoreet sed potenti integer.Enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut
                        venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin
                        amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames
                        at egestas amet feugiat laoreet sed potenti integer.
                          </p>
                         
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
  </Layout>
    </>
  );
}
