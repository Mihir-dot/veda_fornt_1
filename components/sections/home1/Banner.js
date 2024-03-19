"use client";
import { getImageSource } from "@/components/helper/apiPath";
import {
  fetchHomeData,
  fetchServiceName,
} from "@/components/helper/serviceNameCommonAPI";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  const [home, setHome] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const data = await fetchHomeData();
        setHome(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

  return (
    <>
      <section className="banner-section style-one p_relative">
        <Swiper {...swiperOptions} className="banner-carousel">
          {home.map((home, index) => (
            <>
              <SwiperSlide className="slide-item p_relative">
                <div
                  className="image-layer p_absolute"
                  style={{
                    backgroundImage: `url(${getImageSource(
                      home.banner1Location
                    )})`,
                  }}
                ></div>
                <div className="starshine">
                  <div className="shine shine-1"></div>
                  <div className="shine shine-2"></div>
                </div>
                <div className="auto-container">
                  <div className="content-box">
                    <div className="content-inner">
                      <span>{home.card_title}</span>
                      <h2>{home.card_main_title}</h2>
                      <p>{home.card_content}</p>
                      <Link href={home.Link} className="theme-btn-one">
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="slide-item p_relative">
                <div
                  className="image-layer p_absolute"
                  style={{
                    backgroundImage: `url(${getImageSource(
                      home.banner2Location
                    )})`,
                  }}
                ></div>
                <div className="starshine">
                  <div className="shine shine-1"></div>
                  <div className="shine shine-2"></div>
                </div>
                <div className="auto-container">
                  <div className="content-box">
                    <div className="content-inner">
                      <span>{home.card_title}</span>
                      <h2>{home.card_main_title}</h2>
                      <p>{home.card_content}</p>
                      <Link href={home.Link} className="theme-btn-one">
                        Discover More
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="owl-nav">
                <button type="button" className="owl-prev h1p">
                  <span>‹</span>
                </button>
                <button type="button" className="owl-next h1n">
                  <span>›</span>
                </button>
              </div>
            </>
          ))}
        </Swiper>
      </section>
      {/*
         <section className="banner-style-two p_relative centred">
                <Swiper {...swiperOptions} className="banner-carousel">
                    {home.map((home, index) => (
                        <>
                            <SwiperSlide className="slide-item p_relative">
                                <div className="image-layer p_absolute" style={{ backgroundImage: `url(${getImageSource(home.banner1Location)})` }}></div>
                                <div className="auto-container">
                                    <div className="content-box">
                                        <span>{home.card_title}</span>
                                        <h2>{home.card_main_title}</h2>
                                        <p>{home.card_content}</p>
                                        <div className="btn-box"> <Link href={home.Link} className="theme-btn-one">Discover More</Link></div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slide-item p_relative">
                                <div className="image-layer p_absolute" style={{ backgroundImage: `url(${getImageSource(home.banner2Location)})` }}></div>
                                <div className="auto-container">
                                    <div className="content-box">
                                        <span>{home.card_title}</span>
                                        <h2>{home.card_main_title}</h2>
                                        <p>{home.card_content}</p>
                                        <div className="btn-box"><Link href={home.Link} className="theme-btn-one">Discover More</Link></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <div className="owl-nav">
                                <button type="button" className="owl-prev h1p">
                                    <span className="icon-5"></span>
                                </button>
                                <button type="button" className="owl-next h1n">
                                    <span className="icon-6"></span>
                                </button>
                            </div>
                        </>
                    ))}

                </Swiper>

                    </section>*/}
    </>
  );
}
