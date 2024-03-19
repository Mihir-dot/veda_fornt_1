'use client'
import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import TestimonialSlider4 from "@/components/slider/TestimonialSlider4"
import Link from "next/link"
import { useState } from "react"
import 'swiper/css/thumbs'
import { Autoplay, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const swiperOptions1 = {
        modules: [Autoplay, Navigation, Thumbs],
        onSwiper: setThumbsSwiper,
        // freeMode: true,
        // preloadImages: false,
        loop: true,
        slidesPerView: 3,
        speed: 1400,
        spaceBetween: 0,
        direction: "vertical",
        breakpoints: {
            300: {
                slidesPerView: 3,
            },
        }
    }

    const swiperOptions2 = {
        loop: true,
        speed: 1400,
        spaceBetween: 0,
        effect: "fade",
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <div>
                    <section className="shop-details p_relative" style={{marginTop:"-5%"}}>
                        <div className="auto-container">
                        <div className="team-details-content mb_90" style={{marginTop:"-5%"}}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <figure className="image-box mr_30">
                                <img src="assets/images/team/team-9.jpg" alt="" />
                            </figure>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box ml_30">
                                <h2>Darlene Robertson</h2>
                                <span className="designation">C.E.O</span>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                                sagittis dolor aliquet quam feugiat nisi a ultrices feugiat.
                                Viverra facilisi turpis eget tempor. Mattis risus amet euismod
                                eleifend. Proin ut eget sagittis mi quis viverra.
                                </p>
                                <ul className="info-list clearfix">
                                <li>
                                    <span>Expertise: </span>Strategy, Leadership
                                </li>
                                <li>
                                    <span>Experience: </span>20 Years
                                </li>
                                <li>
                                    <span>Email: </span>
                                    <Link href="mailto:example@gmail.com">example@gmail.com</Link>
                                </li>
                                <li>
                                    <span>Phone: </span>
                                    <Link href="tel:913336660021">(+91) 333 666 0021</Link>
                                </li>
                                </ul>
                                <ul className="social-links clearfix">
                                <li>
                                    <Link href="/team-details">
                                    <i className="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team-details">
                                    <i className="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team-details">
                                    <i className="fab fa-instagram"></i>
                                    </Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}
